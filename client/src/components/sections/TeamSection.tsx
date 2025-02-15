import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/shared/AnimatedSection";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    name: "Emily Williams",
    role: "Financial Director",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
  }
];

export default function TeamSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground">
            Meet the experienced professionals leading our financial services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
