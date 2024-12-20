import { AIGenerationDropdown } from "./ai-generation-dropdown";
import { BasicInfoSection } from "./sections/basic-info";
import { MultiplesSections } from "./sections/multiples";
import { Separator } from "@/components/ui/separator";
import { SummarySection } from "./sections/summary";
import Logo from "@/assets/logo.svg";
import Link from "next/link";

export function InfosSidebar() {
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <Link href="/dashboard/resumes">
                    <Logo className="w-full max-w-[80px]" />
                </Link>

                <AIGenerationDropdown />
            </div>

            <Separator className="my-5" />

            <BasicInfoSection />
            <Separator className="my-5" />

            <SummarySection />

            <MultiplesSections />
        </aside>
    );
}