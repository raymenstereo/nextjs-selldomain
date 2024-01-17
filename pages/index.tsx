import React, {useLayoutEffect, useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "react-bootstrap/Spinner";
import ContactForm from "@/app/components/ContactForm";
import useForm from "@/app/hooks/useForm";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [domain, setDomain] = useState<string | null>(null);
    const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string>('');
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const formMethods = useForm({ email: '', message: '' , firstname:'',lastname:''});

    useLayoutEffect(() => {
        fetch('/api/config')
            .then(response => response.json())
            .then(data => {
                setDomain(data.domain);
                setRecaptchaSiteKey(data.recaptchaSiteKey);
            });
    }, []);

    const handleSubmit = async (values: { email: string; message: string, firstname: string,lastname: string }) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...values, recaptchaValue }),
            });

            if (response.ok) {
                setRecaptchaValue(null)
            } else {
            }
        }catch (error){
        }finally {
            setIsLoading(false);
        }
    };

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    For {domain ?? ''}
                </p>
            </div>
            {recaptchaSiteKey && <ContactForm
                onSubmit={handleSubmit}
                recaptchaSiteKey={recaptchaSiteKey}
                isLoading={isLoading}
                recaptchaValue={recaptchaValue}
                handleRecaptchaChange={handleRecaptchaChange}
                formMethods={formMethods}
            />}
        </div>
    )
}