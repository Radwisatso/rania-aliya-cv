import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
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

              <Image
                src={project.image}
                width={1200}
                height={800}
                alt={project.title}
                className="w-full rounded-lg object-cover shadow-lg"
                data-ai-hint={project.hint}
              />
              
              <div className="prose max-w-none text-muted-foreground md:text-lg">
                <p>{project.description}</p>
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">More Images</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((imgUrl, index) => (
                      <Image
                        key={index}
                        src={imgUrl}
                        width={600}
                        height={400}
                        alt={`${project.title} - image ${index + 1}`}
                        className="w-full rounded-lg object-cover shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
