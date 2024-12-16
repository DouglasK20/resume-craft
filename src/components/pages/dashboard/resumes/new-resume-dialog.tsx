"use client";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input/field";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";

type FormData = {
    title: string;
}

export function NewResumeDialog(props: BaseDialogProps) {

    const methods = useForm<FormData>();

    function onSubmit(data: FormData) {
        console.log(data);
    }

    return (
        <Dialog
            {...props}
            title="Criar novo currículo"
            description="Para começar, escolha um título para seu currículo"
            content={
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col">
                        <InputField label="Título" name="title" required />

                        <Button type="submit" className="w-max mt-6 ml-auto">
                            Criar
                        </Button>
                    </form>
                </FormProvider>
            }
        />
    );
}