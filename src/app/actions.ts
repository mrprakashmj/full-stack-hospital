"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const resourceInputSchema = z.object({
  symptoms: z.string().min(10, "Please describe your symptoms in at least 10 characters."),
});

interface ResourceFormState {
  recommendations?: string;
  error?: string;
}

export async function getRecommendedResources(
  prevState: ResourceFormState,
  formData: FormData
): Promise<ResourceFormState> {
  const rawInput = {
    symptoms: formData.get("symptoms"),
  };

  const validationResult = resourceInputSchema.safeParse(rawInput);

  if (!validationResult.success) {
    return { error: validationResult.error.errors[0].message };
  }
  
  try {
    const { resourceRecommendation } = await import("@/ai/flows/resource-recommendation");
    const result = await resourceRecommendation(validationResult.data);
    return { recommendations: result.recommendations };
  } catch (e) {
    console.error(e);
    return { error: "Our AI assistant is currently unavailable. Please try again later." };
  }
}

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  doctor: z.string({ required_error: "Please select a doctor." }).min(1, "Please select a doctor."),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time." }),
});

interface BookingFormState {
  success: boolean;
  error?: string;
}

export async function bookAppointment(
  data: z.infer<typeof bookingFormSchema>
): Promise<BookingFormState> {
  try {
    await addDoc(collection(db, "appointments"), {
      ...data,
      date: data.date.toISOString().split('T')[0], // Store date as YYYY-MM-DD
    });
    return { success: true };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: "There was an error booking your appointment. Please try again." };
  }
}
