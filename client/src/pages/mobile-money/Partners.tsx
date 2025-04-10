import AnimatedSection from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bolt, Building, Building2, CheckCircle2, Satellite, SatelliteDish } from "lucide-react";

const partners = [
  {
    name: "Bank of Eritrea",
    type: "Central Bank",
    role: "Regulatory Partner",
    icon: Building2,
    benefits: [
      "Regulatory compliance",
      "Financial oversight",
      "Policy guidance"
    ],
    image: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319"
  },
  {
    name: "Local Banks",
    type: "Housing and Commerce Bank of Eritrea & Commercial Bank of Eritrea",
    role: "Banking Partner",
    icon: Building,
    benefits: [
      "Guardian of Fenced Account",
      "Bank transfers"
    ],
    image: "https://images.unsplash.com/photo-1586880244543-0528a802be97"
  },
  {
    name: "EriTel",
    type: "Telecommunications",
    role: "ISP/Networking Partner",
    icon: SatelliteDish,
    benefits: [
      "Mobile network coverage",
      "USSD services",
      "Technical infrastructure"
    ],
    image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8"
  },
  {
    name: "6Dee",
    type: "Platform Vendors",
    role: "Software Implementation and Licencing",
    icon: Bolt,
    benefits: [
      "Platform development and maintenance",
      "Technical Support and consultations",
    ],
    image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8"
  }
];

export default function Partners() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
            <p className="text-muted-foreground text-lg">
              Working together with leading institutions to provide reliable and
              secure mobile money services across Eritrea
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-12">
          {partners.map((partner, index) => (
            <AnimatedSection key={partner.name}>
              <motion.div
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <partner.icon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h2 className="text-2xl font-bold">{partner.name}</h2>
                      <div className="space-y-2">
                        <p className="text-primary font-medium">{partner.type}</p>
                        <p className="text-muted-foreground">
                          Role: {partner.role}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Key Benefits:</h3>
                        <ul className="space-y-2">
                          {partner.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              We continue to expand our partnership network to bring you the best
              mobile money experience in Eritrea
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
