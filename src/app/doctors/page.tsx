import { DoctorCard } from "@/components/doctor-card";

const doctors = [
    {
        name: "Dr. Evelyn Reed",
        photoUrl: "https://images.unsplash.com/photo-1674049406176-021807a2802e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkb2N0b3IlMjB3b21hbnxlbnwwfHx8fDE3NTUzNTUxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        specialties: ["Cardiology", "Internal Medicine"],
        bio: "Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a fellow of the American College of Cardiology and is passionate about preventative care.",
        aiHint: "doctor woman"
    },
    {
        name: "Dr. Marcus Chen",
        photoUrl: "https://images.unsplash.com/photo-1657551882668-53fdd523c9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBtYW58ZW58MHx8fHwxNzU1MzU1MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        specialties: ["Neurology"],
        bio: "Dr. Chen specializes in neurological disorders, with a focus on stroke and epilepsy. He is committed to providing compassionate, patient-centered care and is actively involved in clinical research.",
        aiHint: "doctor man"
    },
    {
        name: "Dr. Isabella Garcia",
        photoUrl: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjB3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzU1MzU1MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        specialties: ["Pediatrics"],
        bio: "Dr. Garcia has dedicated her career to the health and well-being of children. She provides comprehensive care from infancy through adolescence and is known for her warm and engaging approach.",
        aiHint: "doctor woman smiling"
    },
    {
        name: "Dr. Samuel Jones",
        photoUrl: "https://images.unsplash.com/photo-1659353889416-fab1265eaa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBtYW4lMjBzbWlsaW5nfGVufDB8fHx8MTc1NTM1NTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
        specialties: ["Orthopedics", "Sports Medicine"],
        bio: "Dr. Jones is a leading orthopedic surgeon specializing in sports-related injuries and joint replacement. He works with athletes of all levels to help them return to peak performance.",
        aiHint: "doctor man smiling"
    }
];


export default function DoctorsPage() {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Find a Doctor</h1>
                    <p className="text-lg text-muted-foreground">
                        Our team of highly qualified and compassionate doctors is here to provide you with the best possible care. Browse our directory to find the right specialist for your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {doctors.map((doctor) => (
                        <DoctorCard key={doctor.name} {...doctor} />
                    ))}
                </div>
            </div>
        </div>
    );
}
