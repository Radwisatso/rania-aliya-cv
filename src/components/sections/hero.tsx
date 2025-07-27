"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

export function Hero() {
    const [isPhoneVisible, setIsPhoneVisible] = useState(false);

    const togglePhoneVisibility = () => {
        setIsPhoneVisible(!isPhoneVisible);
    };

    return (
        <section id="home" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                                {personalInfo.name}
                            </h1>
                            <p className="text-2xl font-medium text-primary">
                                {personalInfo.title}
                            </p>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                {personalInfo.introduction}
                            </p>
                        </div>
                        <Card>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {personalInfo.contact.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5 text-accent" />
                                            {item.type === 'phone' ? (
                                                isPhoneVisible ? (
                                                    <Link href={item.href} className="text-sm hover:underline">
                                                        {item.text}
                                                    </Link>
                                                ) : (
                                                    <Button variant="link" className="p-0 h-auto text-sm" onClick={togglePhoneVisibility}>
                                                        Click to view
                                                    </Button>
                                                )
                                            ) : (
                                                <Link href={item.href} target={item.target} className="text-sm hover:underline" rel="noopener noreferrer">
                                                    {item.text}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src="https://res.cloudinary.com/dpkmslkmk/image/upload/v1753609639/1000692745_yy8ekp.jpg"
                            width={600}
                            height={600}
                            alt="Rania Aliyaputri Santoso"
                            className="h-auto w-full max-w-sm rounded-full object-cover aspect-square shadow-lg"
                            data-ai-hint="professional architect portrait"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
