import { useState } from 'react';

interface FormValues {
    email: string;
    message: string;
    firstname: string;
    lastname: string;
}

const useForm = (initialValues: FormValues) => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const reset = () => {
        setValues(initialValues);
    };


    return { values, handleChange, setValues, reset };
};

export default useForm;
