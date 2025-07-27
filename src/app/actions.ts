"use server";

import { generateCoverLetter } from "@/ai/flows/generate-cover-letter";
import { z } from "zod";

const inputSchema = z.object({
  cv: z.string(),
  jobDescription: z.string(),
});

type ActionResponse<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: string;
};

export async function handleGenerateCoverLetter(
  cv: string,
  jobDescription: string
): Promise<ActionResponse<{ coverLetter: string }>> {
  try {
    const validatedInput = inputSchema.safeParse({ cv, jobDescription });
    if (!validatedInput.success) {
      throw new Error("Invalid input.");
    }

    const result = await generateCoverLetter(validatedInput.data);
    
    if (result && result.coverLetter) {
        return { success: true, data: { coverLetter: result.coverLetter } };
    } else {
        throw new Error("The generated output was empty.");
    }
  } catch (error) {
    console.error("Error generating cover letter:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return { success: false, error: errorMessage };
  }
}
