"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Bot, Copy, Loader2, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/section-heading";
import { handleGenerateCoverLetter } from "@/app/actions";
import { personalInfo } from "@/lib/data";

const formSchema = z.object({
  cv: z.string().min(1, "CV is required."),
  jobDescription: z.string().min(50, "Job description must be at least 50 characters."),
});

export function CoverLetterGenerator() {
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cv: personalInfo.cv_text.trim(),
      jobDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedLetter("");
    try {
      const result = await handleGenerateCoverLetter(values.cv, values.jobDescription);
      if (result.success && result.data) {
        setGeneratedLetter(result.data.coverLetter);
        toast({
          title: "Success!",
          description: "Your personalized cover letter has been generated.",
        });
      } else {
        throw new Error(result.error || "An unknown error occurred.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to generate cover letter.";
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    toast({
      title: "Copied to clipboard!",
    });
  };

  return (
    <section id="ai-tool" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <SectionHeading title="AI Cover Letter Generator" icon={Bot} />
        <Card>
          <CardHeader>
            <CardTitle>Generate a Custom Cover Letter</CardTitle>
            <CardDescription>
              Paste a job description below, and our AI will craft a tailored cover letter based on Alexandre's CV.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your CV</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your CV content..."
                            className="h-64 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste the job description here..."
                            className="h-64 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Star className="mr-2 h-4 w-4" />
                      Generate Cover Letter
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {(isLoading || generatedLetter) && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Generated Cover Letter</h3>
                <Card className="min-h-[200px] bg-background">
                  <CardContent className="p-6 relative">
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-lg">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    )}
                    {generatedLetter && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={copyToClipboard}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="whitespace-pre-wrap font-body text-sm">
                          {generatedLetter}
                        </pre>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
