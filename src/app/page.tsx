import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DoctorCard } from "@/components/doctor-card";
import { ServiceCard } from "@/components/service-card";
import { Stethoscope, HeartPulse, Brain, Bone, Baby, FlaskConical, Users, MessageSquareHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredServices = [
  {
    name: "Cardiology",
    description: "Expert care for heart conditions.",
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
  },
  {
    name: "Neurology",
    description: "Specialized treatment for brain and nervous system disorders.",
    icon: <Brain className="w-8 h-8 text-primary" />,
  },
  {
    name: "Orthopedics",
    description: "Comprehensive care for bone and joint issues.",
    icon: <Bone className="w-8 h-8 text-primary" />,
  },
  {
    name: "Pediatrics",
    description: "Dedicated healthcare for children.",
    icon: <Baby className="w-8 h-8 text-primary" />,
  },
];

const featuredDoctors = [
    {
        name: "Dr. Evelyn Reed",
        photoUrl: "https://images.unsplash.com/photo-1674049406176-021807a2802e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkb2N0b3IlMjB3b21hbnxlbnwwfHx8fDE3NTUzNTUxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        specialties: ["Cardiology", "Internal Medicine"],
        bio: "Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a fellow of the American College of Cardiology.",
        aiHint: "doctor woman"
    },
    {
        name: "Dr. Marcus Chen",
        photoUrl: "https://images.unsplash.com/photo-1657551882668-53fdd523c9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBtYW58ZW58MHx8fHwxNzU1MzU1MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        specialties: ["Neurology"],
        bio: "Dr. Chen specializes in neurological disorders, with a focus on stroke and epilepsy. He is committed to providing compassionate and advanced care.",
        aiHint: "doctor man"
    }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGV4dGVyaW9yfGVufDB8fHx8MTc1NTM1NTI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hospital building"
          fill
          className="object-cover"
          data-ai-hint="hospital exterior"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="z-20 p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            Your Trusted Partner in Health
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Providing exceptional care with a compassionate touch.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/book-appointment">Book an Appointment</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Meet Our Doctors</h2>
          <div className="grid grid-cols-1 md:g_grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.name} {...doctor} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/doctors">View All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="resources" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Patient Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Resource Center</span>
                </CardTitle>
                <CardDescription>
                  Find helpful articles, forms, and information for your visit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Access our comprehensive library of health guides, patient forms, and hospital policies to prepare for your visit and manage your health effectively.</p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquareHeart className="w-6 h-6 text-primary" />
                  <span>Smart Resource Assistant</span>
                </CardTitle>
                <CardDescription>
                  Get personalized resource recommendations from our AI assistant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Describe your symptoms or health concerns, and our AI-powered tool will suggest relevant hospital services and patient resources tailored to your needs.</p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/resource-assistant">Try the Assistant</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">State-of-the-Art Facilities</h2>
              <p className="text-muted-foreground mb-6">
                Our hospital is equipped with the latest technology and designed to provide a comfortable and safe environment for our patients. We are committed to maintaining the highest standards of care and cleanliness.
              </p>
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/1600x900.png"
                alt="Modern hospital interior"
                fill
                className="object-cover"
                data-ai-hint="hospital interior"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
