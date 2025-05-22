import type { ReactNode } from "react";
import { Tooltip } from "@heroui/tooltip";

interface TooltipProps {
    content: string;
    children: ReactNode;
}

const TooltipComponent = ({ content, children }: TooltipProps) => {
    return (
        <Tooltip content={content}>
            {children}
        </Tooltip>
    );
}

export default TooltipComponent;