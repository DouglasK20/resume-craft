import { ReactNode } from "react";
import { Label } from "./label";

type FieldWrapperProps = {
    label: string;
    children: ReactNode;
}

export function FieldWrapper({ label, children }: FieldWrapperProps) {
    return (
        <div>
            <Label>{label}</Label>
            {children}
        </div>
    )
}