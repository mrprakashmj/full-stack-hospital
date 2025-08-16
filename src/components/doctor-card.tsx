import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface DoctorCardProps {
  name: string;
  photoUrl: string;
  specialties: string[];
  bio: string;
  aiHint?: string;
}

export function DoctorCard({ name, photoUrl, specialties, bio, aiHint }: DoctorCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="flex flex-col sm:flex-row items-start gap-4 p-4">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
          <Image
            src={photoUrl}
            alt={`Photo of ${name}`}
            fill
            className="rounded-full object-cover border-4 border-secondary"
            data-ai-hint={aiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="font-headline text-xl mb-1">{name}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary" className="bg-primary/20 text-primary-foreground">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-4 pt-0">
        <CardDescription className="flex-grow text-sm mb-4">{bio}</CardDescription>
        <Button asChild className="w-full mt-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/book-appointment">Book Appointment</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
