import { Controller, useFormContext } from "react-hook-form";
import { ComponentProps } from "react";
import { Input } from ".";

type InputFieldProps = ComponentProps<typeof Input> & {
    label: string;
    name: string;
}

export function InputField({ label, name, required, ...props }: InputFieldProps) {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: required && "Campo obrigatório"
            }}
            render={({ field, fieldState }) => (
                <div>
                    <Input {...props} {...field} />
                    {fieldState.error && (
                        <p className="text-sm text-red-500">
                            {fieldState.error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
}