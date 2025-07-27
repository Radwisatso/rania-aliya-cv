
"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

// This function is commented out because this is now a client component.
// We will rely on client-side rendering for project pages.
// export async function generateStaticParams() {
//   return projectsData.projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projectsData.projects.find((p) => p.slug === slug);
  
  const [selectedImage, setSelectedImage] = useState(project?.image);

  if (!project) {
    notFound();
  }

  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
                <Button asChild variant="ghost">
                    <Link href="/#portfolio">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>
                </Button>
            </div>
            <div className="grid gap-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  {project.title}
                </h1>
                <div className="mt-2 flex items-center gap-4">
                  <p className="text-lg text-muted-foreground">{project.category}</p>
                  {project.status && (
                    <Badge variant={project.status === "On Construction" ? "destructive" : "default"}>
                      {project.status}
                    </Badge>
                  )}
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={selectedImage || project.image}
                    width={1200}
                    height={800}
                    alt={project.title}
                    className="w-full rounded-lg object-cover shadow-lg cursor-pointer"
                    data-ai-hint={project.hint}
                  />
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                    <Image
                      src={selectedImage || project.image}
                      width={1200}
                      height={800}
                      alt={project.title}
                      className="w-full h-auto rounded-lg object-contain"
                    />
                </DialogContent>
              </Dialog>

              {project.gallery && project.gallery.length > 0 && (
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {allImages.map((imgUrl, index) => (
                            <CarouselItem key={index} className="basis-1/3 sm:basis-1/4 md:basis-1/5">
                                <div
                                    className="p-1 cursor-pointer"
                                    onClick={() => setSelectedImage(imgUrl)}
                                >
                                    <Image
                                        src={imgUrl}
                                        width={200}
                                        height={150}
                                        alt={`${project.title} - image ${index + 1}`}
                                        className={`w-full rounded-md object-cover aspect-[4/3] transition-all hover:opacity-100 ${selectedImage === imgUrl ? 'opacity-100 ring-2 ring-primary' : 'opacity-70'}`}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
              )}
              
              <div className="prose max-w-none text-muted-foreground md:text-lg">
                <p>{project.description}</p>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
