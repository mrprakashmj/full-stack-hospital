import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const resources = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment online through our 'Book Appointment' page, or by calling our main reception at (123) 456-7890. For online booking, you'll be able to select your desired doctor, date, and time.",
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring a valid photo ID, your insurance card, a list of any current medications you are taking, and any relevant medical records or test results from other physicians.",
  },
  {
    question: "How can I access my medical records?",
    answer: "You can access your medical records securely through our online patient portal. If you don't have an account, please ask for an activation code at the front desk during your next visit.",
  },
  {
    question: "What are your billing and insurance policies?",
    answer: "We accept a wide range of insurance plans. Please visit our 'Billing & Insurance' section or contact our billing department to confirm if your plan is accepted. Co-pays are due at the time of service.",
  },
  {
    question: "How do I prepare for a surgical procedure?",
    answer: "Your surgeon's office will provide you with specific pre-operative instructions. General guidelines often include fasting for a certain period, arranging for transportation home, and stopping certain medications. Please follow your specific instructions carefully.",
  },
  {
    question: "What are the visiting hours?",
    answer: "General visiting hours are from 10:00 AM to 8:00 PM daily. However, hours may vary for specific units like the ICU or maternity ward. Please check with the specific unit for their policies.",
  }
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Patient Resources</h1>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about your visit, our services, and hospital policies. We're here to make your experience as smooth as possible.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="w-full">
          {resources.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
