import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";
import { ComponentProps, ReactNode } from "react";
import { Input } from ".";

type InputFieldProps = ComponentProps<typeof Input> & {
    label: string;
    name: string;
    containerClassName?: string;
    extraContent?: (value: string) => ReactNode;
}

export function InputField({ label, name, required, containerClassName, extraContent, ...props }: InputFieldProps) {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: required && "Campo obrigatório"
            }}
            render={({ field, fieldState }) => (
                <FieldWrapper label={label} className={containerClassName} error={fieldState?.error}>
                    <Input {...props} {...field} />
                    {extraContent && extraContent(field.value)}
                </FieldWrapper>
            )}
        />
    );
}