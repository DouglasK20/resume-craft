import { SwitchField } from "@/components/ui/switch/field";
import { InputField } from "@/components/ui/input/field";
import { SectionTitle } from "../section-title";
import { UserRound } from "lucide-react";

export function BasicInfoSection() {
    return (
        <div>
            <SectionTitle title="Informações Básicas" icon={UserRound} />

            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                <div className="col-span-full w-full flex gap-3 items-end">
                    <InputField
                        label="Foto"
                        placeholder="https://..."
                        name="content.image.url"
                        containerClassName="flex-1"
                    />
                    <SwitchField name="content.image.visible" className="mb-2" />
                </div>

                <InputField label="Nome Completo" name="content.infos.fullName" />
                <InputField label="Cabeçalho" name="content.infos.headLine" />
                <InputField label="E-mail" name="content.infos.email" />
                <InputField label="Site" name="content.infos.website" />
                <InputField label="Telefone" name="content.infos.phone" />
                <InputField label="Localização" name="content.infos.location" />
            </div>
        </div>
    );
}