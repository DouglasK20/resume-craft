import { Tooltip as ToolTipRoot, TooltipContent, TooltipProvider, TooltipTrigger } from "./primitive";
import { ReactNode } from "react";

type TooltipProps = {
    children: ReactNode;
    content: string | number | ReactNode;
}

export function Tooltip({ children, content }: TooltipProps) {
    return (
        <TooltipProvider>
            <ToolTipRoot delayDuration={300}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </ToolTipRoot>
        </TooltipProvider>

    );
}