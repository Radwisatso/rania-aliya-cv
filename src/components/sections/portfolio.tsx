import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projectsData } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Portfolio() {
    return (
        <section id="portfolio" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <SectionHeading title={projectsData.title} icon={projectsData.icon} />
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {projectsData.projects.map((project, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-full">
                                        <CardContent className="p-0">
                                            <Image
                                                src={project.image}
                                                width={600}
                                                height={400}
                                                alt={project.title}
                                                className="rounded-t-lg object-cover w-full aspect-[3/2]"
                                                data-ai-hint={project.hint}
                                            />
                                        </CardContent>
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                            <CardDescription>{project.category}</CardDescription>
                                            <p className="pt-2 text-sm text-muted-foreground">{project.description}</p>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}
