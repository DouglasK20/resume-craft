import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card";


export function AddResumeButton() {
    return (
        <ResumeCardButton
            title="Criar Novo Currículo"
            description="Comece do Zero!"
            icon={<Plus size={50} />}

        />
    )
}