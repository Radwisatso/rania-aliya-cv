import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { educationData } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
    return (
        <section id="education" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <SectionHeading title={educationData.title} icon={educationData.icon} />
                <div className="grid gap-6 md:grid-cols-2">
                    {educationData.schools.map((school, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                    <CardTitle>{school.degree}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{school.year}</p>
                                </div>
                                <CardDescription>{school.university} | {school.location}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{school.details}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
