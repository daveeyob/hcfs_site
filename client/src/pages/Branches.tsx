import AnimatedSection from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const branches = [
  {
    name: "Main Branch - Asmara",
    address: "Downtown Asmara, Harnet Avenue",
    phone: "+291 1234 5678",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
  },
  {
    name: "Massawa Branch",
    address: "Port Area, Massawa",
    phone: "+291 1234 5679",
    hours: "Mon-Fri: 8:00 AM - 4:00 PM",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
  },
  {
    name: "Keren Branch",
    address: "Central Keren",
    phone: "+291 1234 5680",
    hours: "Mon-Fri: 8:00 AM - 4:00 PM",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
  }
];

export default function Branches() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Branches</h1>
            <p className="text-muted-foreground">
              Find your nearest EriFinance branch across Eritrea
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{branch.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <span className="text-muted-foreground">
                        {branch.address}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <span className="text-muted-foreground">
                        {branch.phone}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <span className="text-muted-foreground">
                        {branch.hours}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="text-center">
            <p className="text-muted-foreground">
              More branches coming soon to serve you better across Eritrea
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
