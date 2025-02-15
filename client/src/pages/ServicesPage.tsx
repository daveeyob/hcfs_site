import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, Banknote, Repeat, Phone, Building } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Banknote,
    title: "International Remittance",
    description: "Send and receive money worldwide with competitive rates and fast processing times.",
    image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8"
  },
  {
    icon: Repeat,
    title: "Currency Exchange",
    description: "Exchange foreign currencies at market-leading rates with transparent pricing.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
  },
  {
    icon: Phone,
    title: "Mobile Money",
    description: "Digital wallet solution for easy payments, transfers, and financial management.",
    image: "https://images.unsplash.com/photo-1533234944761-2f5337579079",
    link: "/mobile-money"
  },
  {
    icon: Building,
    title: "Bank Services",
    description: "Remote deposits and withdrawals through our partner bank network.",
    image: "https://images.unsplash.com/photo-1444653389962-8149286c578a"
  }
];

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground">
              Comprehensive financial solutions tailored to meet the needs of
              individuals and businesses in Eritrea
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title}>
              <motion.div
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <service.icon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-muted-foreground text-lg">
                    {service.description}
                  </p>
                  {service.link && (
                    <Link href={service.link}>
                      <Button className="gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}