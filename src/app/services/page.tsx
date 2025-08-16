import { ServiceCard } from "@/components/service-card";
import { HeartPulse, Brain, Bone, Baby, FlaskConical, Stethoscope, Microscope, ShieldCheck } from "lucide-react";

const allServices = [
  {
    name: "Cardiology",
    description: "Expert care for heart conditions, including diagnostics, treatment, and prevention.",
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
  },
  {
    name: "Neurology",
    description: "Specialized treatment for disorders of the brain, spinal cord, and nervous system.",
    icon: <Brain className="w-10 h-10 text-primary" />,
  },
  {
    name: "Orthopedics",
    description: "Comprehensive care for bone, joint, ligament, tendon, and muscle issues.",
    icon: <Bone className="w-10 h-10 text-primary" />,
  },
  {
    name: "Pediatrics",
    description: "Dedicated and compassionate healthcare services for infants, children, and adolescents.",
    icon: <Baby className="w-10 h-10 text-primary" />,
  },
  {
    name: "Emergency Care",
    description: "24/7 immediate medical attention for urgent and life-threatening conditions.",
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
  },
  {
    name: "Laboratory Services",
    description: "Accurate and timely diagnostic testing to assist in patient care.",
    icon: <FlaskConical className="w-10 h-10 text-primary" />,
  },
  {
    name: "Radiology",
    description: "Advanced imaging services including X-ray, CT scans, and MRI for accurate diagnosis.",
    icon: <Microscope className="w-10 h-10 text-primary" />,
  },
  {
    name: "Oncology",
    description: "Comprehensive cancer care, from diagnosis and treatment to support services.",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          We offer a wide range of specialized medical services to meet the health needs of our community. Our expert teams are equipped with advanced technology to provide the highest quality of care.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {allServices.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
