
"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Download, Menu, Mountain, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { projectsData } from '@/lib/data';

const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Portfolio', href: '/#portfolio', isDropdown: true },
    { name: 'Skills', href: '/#skills' },
    { name: 'Education', href: '/#education' },
    { name: 'AI Tool', href: '/#ai-tool' },
];

export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <Mountain className="h-6 w-6" />
                    <span className="text-lg">Rania A. Santoso</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        link.isDropdown ? (
                            <DropdownMenu key={link.name}>
                                <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60 focus:outline-none">
                                    {link.name}
                                    <ChevronDown className="h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {projectsData.projects.map((project) => (
                                        <DropdownMenuItem key={project.slug} asChild>
                                            <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>

                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link key={link.name} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
                                {link.name}
                            </Link>
                        )
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
                                    {navLinks.map((link) => {
                                        if (link.isDropdown) {
                                            return (
                                                <div key={link.name}>
                                                    <Link href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setMobileMenuOpen(false)}>
                                                        {link.name}
                                                    </Link>
                                                    <div className="pl-4 mt-2 grid gap-2">
                                                        {projectsData.projects.map((project) => (
                                                            <Link key={project.slug} href={`/portfolio/${project.slug}`} className="text-sm transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setMobileMenuOpen(false)}>
                                                                {project.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return (
                                            <Link key={link.name} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setMobileMenuOpen(false)}>
                                                {link.name}
                                            </Link>
                                        )
                                    })}
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
