
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const project = projectsData.projects.find((p) => p.slug === slug);
  
  const [selectedImage, setSelectedImage] = useState(project?.image);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isPopupImageLoading, setIsPopupImageLoading] = useState(true);

  if (!project) {
    // A simple not found would be better here, but for now we'll just return null
    return null;
  }

  const allImages = [project.image, ...(project.gallery || [])];

  const handleImageSelect = (imgUrl: string) => {
    setIsImageLoading(true);
    setIsPopupImageLoading(true);
    setSelectedImage(imgUrl);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12">
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
                  <div className="relative w-full aspect-[3/2] cursor-pointer">
                    {isImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10 rounded-lg">
                          <Loader2 className="h-10 w-10 animate-spin text-primary" />
                        </div>
                    )}
                    <Image
                      src={selectedImage || project.image}
                      fill
                      alt={project.title}
                      className={cn(
                        "w-full rounded-lg object-cover shadow-lg transition-opacity duration-300",
                        isImageLoading ? "opacity-0" : "opacity-100"
                      )}
                      data-ai-hint={project.hint}
                      priority
                      onLoad={() => setIsImageLoading(false)}
                      onError={() => setIsImageLoading(false)}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                    <div className="relative">
                      {isPopupImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                          <Loader2 className="h-10 w-10 animate-spin text-primary" />
                        </div>
                      )}
                      <Image
                        src={selectedImage || project.image}
                        width={1200}
                        height={800}
                        alt={project.title}
                        className={cn(
                          "w-full h-auto rounded-lg object-contain transition-opacity duration-300",
                          isPopupImageLoading ? "opacity-0" : "opacity-100"
                        )}
                        onLoad={() => setIsPopupImageLoading(false)}
                        onError={() => setIsPopupImageLoading(false)}
                      />
                    </div>
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
                                    onClick={() => handleImageSelect(imgUrl)}
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
