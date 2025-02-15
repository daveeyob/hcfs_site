import { motion } from "framer-motion";
import ServiceCard from "@/components/shared/ServiceCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Banknote, Repeat, Phone, Building } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "Remittance",
    description: "Fast and secure money transfers across borders with competitive rates.",
    image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8"
  },
  {
    icon: Repeat,
    title: "Currency Exchange",
    description: "Exchange foreign currencies at the best market rates.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
  },
  {
    icon: Phone,
    title: "Mobile Money",
    description: "Digital wallet solutions for easy payments and transfers.",
    image: "https://images.unsplash.com/photo-1533234944761-2f5337579079"
  },
  {
    icon: Building,
    title: "Bank Services",
    description: "Remote deposits and withdrawals from partner banks.",
    image: "https://images.unsplash.com/photo-1444653389962-8149286c578a"
  }
];

export default function Services() {
  return (
    <AnimatedSection className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive financial solutions tailored to meet your needs in Eritrea
            and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}