import React, {useEffect} from 'react';
import useForm from '../hooks/useForm';
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "react-bootstrap/Spinner";

interface FormComponentProps {
    onSubmit: (values: { email: string; message: string, firstname: string,lastname: string }) => void;
    recaptchaSiteKey: string;
    isLoading: boolean;
    recaptchaValue: string | null;
    handleRecaptchaChange: (value: string | null) => void;
    formMethods: ReturnType<typeof useForm>;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, recaptchaSiteKey, isLoading, recaptchaValue, handleRecaptchaChange, formMethods }) => {
    const { values, handleChange } = formMethods;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2.5">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="firstname"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2.5">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="lastname"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message
                    </label>
                    <div className="mt-2.5">
              <textarea
                  onChange={handleChange}
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={handleRecaptchaChange}/>
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isLoading || !recaptchaValue}
                >
                    {isLoading ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> : 'Send'}
                </button>
            </div>
        </form>
    );
};

export default FormComponent;
