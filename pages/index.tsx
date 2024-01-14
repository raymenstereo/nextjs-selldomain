import React, {useEffect, useLayoutEffect, useState} from 'react';
import ContactForm from "@/app/components/ContactForm";
import useForm from "@/app/hooks/useForm";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
    const [domain, setDomain] = useState<string | null>(null);
    const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string>('');
    const formMethods = useForm({ email: '', message: '' });

    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (values: { email: string; message: string }) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: values.email, message: values.message, recaptchaValue }),
            });

            if (response.ok) {
                setSuccessMessage('Successfully send')
                setRecaptchaValue(null)
                formMethods.reset()
            } else {
                setErrorMessage('Error');
            }
        }catch (error){
            setErrorMessage('Error');
        }finally {
            setIsLoading(false);
        }
    };

    useLayoutEffect(() => {
        fetch('/api/config')
            .then(response => response.json())
            .then(data => {
                setDomain(data.domain);
                setRecaptchaSiteKey(data.recaptchaSiteKey);
            });
    }, []);

    return (domain && recaptchaSiteKey ) && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div>
                <h1 className="text-center font-bold">{domain}</h1>
                <h4 className="text-center">Contact us</h4>
                <ContactForm
                    onSubmit={handleSubmit}
                    recaptchaSiteKey={recaptchaSiteKey}
                    isLoading={isLoading}
                    recaptchaValue={recaptchaValue}
                    handleRecaptchaChange={handleRecaptchaChange}
                    formMethods={formMethods}
                />
                <div className={'mt-3 text-center'}>
                    {successMessage && <p className="text-success">{successMessage}</p>}
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}
