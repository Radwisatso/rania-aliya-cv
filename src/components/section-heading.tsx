import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
    title: string;
    icon: LucideIcon;
    className?: string;
};

export function SectionHeading({ title, icon: Icon, className }: SectionHeadingProps) {
    return (
        <div className={cn("flex items-center gap-3 mb-8", className)}>
            <Icon className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
        </div>
    );
}
