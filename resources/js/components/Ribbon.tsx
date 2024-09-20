import { cn } from "@/lib/utils";

export function Ribbon({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <div className={cn("relative w-fit", className)}>
            <div className="h-8 w-64 -skew-x-[30deg] rounded bg-[#de6b48]" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-50">
                {children}
            </span>
        </div>
    );
}
