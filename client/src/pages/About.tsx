import AnimatedSection from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Users, Shield, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To provide accessible and innovative financial services that empower Eritrean communities"
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships with our customers and communities across Eritrea"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Maintaining the highest standards of security and reliability in all our services"
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Continuously evolving our services to meet the changing needs of our customers"
  }
];

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
