import { FieldError } from "react-hook-form";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";

type FieldWrapperProps = {
    label: string;
    children: ReactNode;
    className?: string;
    error?: FieldError;
}

export function FieldWrapper({ label, children, className, error }: FieldWrapperProps) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <Label>{label}</Label>
            {children}
            {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
    )
}