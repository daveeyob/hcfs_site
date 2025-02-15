import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  image
}: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Icon className="h-10 w-10 text-white" />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
