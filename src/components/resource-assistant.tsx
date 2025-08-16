"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { getRecommendedResources } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

const initialState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Getting Recommendations..." : "Get Recommendations"}
    </Button>
  );
}

export function ResourceAssistant() {
  const [state, formAction] = useActionState(getRecommendedResources, initialState);

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Describe Your Concerns</CardTitle>
          <CardDescription>
            Please provide as much detail as possible for the best recommendations. This tool is for informational purposes and does not replace professional medical advice.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            name="symptoms"
            placeholder="e.g., 'I've had a persistent cough and shortness of breath for the past week...'"
            rows={5}
            required
            className="text-base"
          />
          {state?.error && (
            <p className="text-sm font-medium text-destructive mt-2">{state.error}</p>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>

      {state?.recommendations && (
        <div className="p-6 pt-0">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle className="font-headline">Personalized Recommendations</AlertTitle>
                <AlertDescription className="prose prose-sm dark:prose-invert">
                    <p>{state.recommendations}</p>
                </AlertDescription>
            </Alert>
        </div>
      )}
    </Card>
  );
}
