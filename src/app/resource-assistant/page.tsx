import { ResourceAssistant } from "@/components/resource-assistant";
import { MessageSquareHeart } from "lucide-react";

export default function ResourceAssistantPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <MessageSquareHeart className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Smart Resource Assistant</h1>
        <p className="text-lg text-muted-foreground">
          Describe your symptoms or health concerns below, and our AI assistant will provide you with a tailored list of relevant hospital services and patient resources.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-12">
        <ResourceAssistant />
      </div>
    </div>
  );
}
