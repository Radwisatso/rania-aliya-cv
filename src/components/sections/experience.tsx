import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { experienceData } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Check } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="w-full py-12 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
                <SectionHeading title={experienceData.title} icon={experienceData.icon} />
                <div className="relative space-y-8">
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -ml-px"></div>
                    {experienceData.jobs.map((job, index) => (
                        <div key={index} className="pl-12">
                            <div className="absolute left-4 -ml-2.5 h-5 w-5 rounded-full bg-primary border-4 border-secondary"></div>
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                        <CardTitle>{job.role}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{job.dates}</p>
                                    </div>
                                    <CardDescription>{job.company} | {job.location}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-sm">{job.description}</p>
                                    <ul className="space-y-2">
                                        {job.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-4 w-4 mt-1 shrink-0 text-accent" />
                                                <span className="text-sm text-muted-foreground">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
