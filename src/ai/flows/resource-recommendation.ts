// Resource Recommendation Flow
'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing resource recommendations based on user-provided symptoms or health concerns.
 *
 * - resourceRecommendation - A function that takes user input and returns a list of relevant resources and services.
 * - ResourceRecommendationInput - The input type for the resourceRecommendation function.
 * - ResourceRecommendationOutput - The return type for the resourceRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResourceRecommendationInputSchema = z.object({
  symptoms: z
    .string()
    .describe("The patient's symptoms or health concerns."),
});
export type ResourceRecommendationInput = z.infer<typeof ResourceRecommendationInputSchema>;

const ResourceRecommendationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of relevant resources and services tailored to the patient needs.'),
});
export type ResourceRecommendationOutput = z.infer<typeof ResourceRecommendationOutputSchema>;

export async function resourceRecommendation(input: ResourceRecommendationInput): Promise<ResourceRecommendationOutput> {
  return resourceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resourceRecommendationPrompt',
  input: {schema: ResourceRecommendationInputSchema},
  output: {schema: ResourceRecommendationOutputSchema},
  prompt: `You are a helpful AI assistant that recommends resources and services based on the patient's symptoms or health concerns.

  Patient Symptoms/Concerns: {{{symptoms}}}

  Based on the above symptoms/concerns, provide a list of relevant resources and services that the patient may find helpful.
  Please make sure the recommendations are tailored to the patient needs.
  The recommendations should be a string.
  `,
});

const resourceRecommendationFlow = ai.defineFlow(
  {
    name: 'resourceRecommendationFlow',
    inputSchema: ResourceRecommendationInputSchema,
    outputSchema: ResourceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
