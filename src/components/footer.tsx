import Link from "next/link";
import { Button } from "@/components/ui/button";
import { footerData } from "@/lib/data";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
                <p className="text-sm text-muted-foreground">{footerData.copyright}</p>
                <div className="flex items-center gap-2">
                    {footerData.socials.map((social) => (
                        <Button key={social.name} variant="ghost" size="icon" asChild>
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                <social.icon className="h-5 w-5" />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    );
}
