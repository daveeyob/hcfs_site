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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About EriFinance</h1>
            <p className="text-muted-foreground">
              Leading the way in financial innovation and inclusion in Eritrea
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to transform financial services in Eritrea,
                  EriFinance has grown to become the country's leading provider of
                  remittance, currency exchange, and mobile money solutions.
                </p>
                <p>
                  We started our journey with a simple mission: to make financial
                  services accessible to all Eritreans. Today, we serve thousands
                  of customers through our network of branches and digital
                  platforms.
                </p>
                <p>
                  Our commitment to innovation and excellence has made us the
                  preferred choice for both individual and business customers.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="EriFinance Office"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </AnimatedSection>

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
