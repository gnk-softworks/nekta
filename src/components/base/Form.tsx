'use client';

import React from "react";
import { useFormStatus, useFormState } from "react-dom"

interface FormProps {
    id?: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
    action: (previousState: any, formData: FormData) => Promise<any>;
    className?: string;
}

const initialState: any = {
    error: ""
}

export function Form(props: FormProps) {
    const [state, formAction] = useFormState(props.action, initialState);

    return (
        <section className="w-full" id={props.id}>
            <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto h-full">
                <div
                    className="w-full bg-base-100 rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 w-full space-y-4 md:space-y-6 sm:p-8">
                        <h2>
                            {props.title}
                        </h2>
                        {props.description && <p>{props.description}</p>}
                        <form className="space-y-4 md:space-y-6" action={formAction}>
                            { state.error && state.error !== '' && <div className="bg-error text-base-100 px-4 py-3 rounded relative"
                                                                        role="alert">
                                <strong className="font-bold">Ooops...</strong>
                                <span className="block sm:inline">{state.error}</span>
                            </div>
                            }

                            {props.children}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function UnstyledForm(props: FormProps) {

    const [state, formAction] = useFormState(props.action, initialState);

    return (
        <form action={formAction} id={props.id}>
            { state.error !== '' && <div className="bg-error text-base-100 px-4 py-3 rounded relative"
                                         role="alert">
                <span className="block sm:inline">{state.error}</span>
            </div>
            }
            {props.children}
        </form>
    )
}

interface FormFieldProps {
    id: string,
    type: string,
    label?: string,
    placeholder?: string,
    required?: boolean
    value?: string
    defaultValue?: string
}

export function FormField(props: FormFieldProps) {
    const { pending } = useFormStatus();
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} name={props.id} id={props.id} value={props.value} defaultValue={props.defaultValue}
                   className={`border ${ pending ? 'bg-disabled border-disabled' : 'bg-base-200 border-base-300'} text-baseContent sm:text-sm rounded-lg block w-full p-2.5`}
                   placeholder={props.placeholder} required={props.required} disabled={pending} />
        </div>
    )
}

interface FormTextAreaProps {
    id: string,
    label?: string,
    placeholder?: string,
    required?: boolean
    value?: string
    defaultValue?: string
}
export function FormTextArea(props: FormTextAreaProps) {
    const { pending } = useFormStatus();
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea name={props.id} id={props.id} value={props.value} defaultValue={props.defaultValue}
                      className={`border ${ pending ? 'bg-disabled border-disabled' : 'bg-base-200 border-base-300'} text-baseContent sm:text-sm rounded-lg block w-full p-2.5`}
                      placeholder={props.placeholder} required={props.required} disabled={pending}/>
        </div>
    )
}

export function InvisibleFormField(props: FormFieldProps) {
    return (
        <input type={props.type} name={props.id} id={props.id} value={props.value} defaultValue={props.defaultValue} readOnly={true} className="hidden"/>
    )
}

interface FormButtonProps {
    type: "submit" | "reset" | "button",
    text: string
}

export function FormButton(props: FormButtonProps){
    const { pending } = useFormStatus();
    return (
        <button type={props.type}
                className={`w-full block bg-primary text-primaryContent rounded-md text-center px-4 py-2 mt-5 hover:bg-primaryAlt ${pending ? 'bg-disabled hover:bg-disabled' : ''}`} disabled={pending}>
            { pending ? "Loading..." : props.text}
        </button>
    )
}

