'use client';

import { useState } from 'react';
import Heading from '../components/products/Heading';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../components/inputs/Input';
import Button from '../components/Button';
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' } });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);
    };

    return (
        <>
            <Heading title="Sign up for E-Shop" />
            <Button outline label="Sign up with Google" icon={AiOutlineGoogle} onClick={() => {}} />
            <hr className="w-full h-px bg-slate-300" />
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <Button label={isLoading ? 'Loading' : 'Sign Up'} onClick={handleSubmit(onSubmit)} />
            <p>
                Already have an account?
                <Link className="underline" href="/login">
                    Log in
                </Link>
            </p>
        </>
    );
};

export default RegisterForm;
