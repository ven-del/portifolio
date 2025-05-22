import type { ReactNode } from "react";
import { Tooltip } from "@heroui/tooltip";

interface TooltipProps {
    content: string;
    children: ReactNode;
}

const TooltipComponent = ({ content, children }: TooltipProps) => {
    return (
      <Tooltip
        content={content}
        className="bg-(--cosmic-dark)/80 text-white p-6 rounded shadow-lg"
      >
        {children}
      </Tooltip>
    );
}

export default TooltipComponent;