import { BookingForm } from "@/components/booking-form";

export default function BookAppointmentPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground">
            Schedule your visit with one of our specialists. Our streamlined process makes it easy to find a convenient time for your care.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
