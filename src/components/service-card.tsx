import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export function ServiceCard({ icon, name, description }: ServiceCardProps) {
  return (
    <Card className="text-center hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="flex flex-col items-center">
        <div className="bg-secondary rounded-full p-4 mb-4">
          {icon}
        </div>
        <CardTitle className="font-headline text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
