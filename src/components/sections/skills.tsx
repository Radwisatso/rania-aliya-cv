import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
                <SectionHeading title={skillsData.title} icon={skillsData.icon} />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.categories.map((category, index) => (
                        <Card key={index}>
                            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                                <category.icon className="h-6 w-6 text-accent" />
                                <CardTitle>{category.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <Badge key={i} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
