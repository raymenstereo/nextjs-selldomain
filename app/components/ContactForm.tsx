import React, {useEffect} from 'react';
import useForm from '../hooks/useForm';
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "react-bootstrap/Spinner";

interface FormComponentProps {
    onSubmit: (values: { email: string; message: string }) => void;
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
        <form onSubmit={handleSubmit} className="w-100 p-3">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-Mail Address</label>
                <input type="email" className="form-control" name="email" id="email" value={values.email} onChange={handleChange}
                       required/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" name="message" id="message" rows={3} value={values.message}
                          onChange={handleChange} required></textarea>
            </div>
            <div className="mb-3">
                <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={handleRecaptchaChange}/>
            </div>
            <button type="submit" disabled={isLoading || !recaptchaValue} className="btn btn-primary w-100">
                {isLoading ? <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> : 'Send'}
            </button>
        </form>
    );
};

export default FormComponent;
