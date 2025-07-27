"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Download, Menu, Mountain } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'AI Tool', href: '/#ai-tool' },
];

export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <Mountain className="h-6 w-6" />
                    <span className="text-lg">Rania A. Santoso</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button asChild>
                        <a href="/rania-aliyaputri-santoso-cv.pdf" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </a>
                    </Button>
                </div>

                <div className="md:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 p-6">
                                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setMobileMenuOpen(false)}>
                                    <Mountain className="h-6 w-6" />
                                    <span className="text-lg">Rania A. Santoso</span>
                                </Link>
                                <nav className="grid gap-4 text-lg font-medium">
                                    {navLinks.map((link) => (
                                        <Link key={link.name} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setMobileMenuOpen(false)}>
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                                <Button asChild className="mt-4">
                                    <a href="/rania-aliyaputri-santoso-cv.pdf" download>
                                        <Download className="mr-2 h-4 w-4" />
                                        Download CV
                                    </a>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
