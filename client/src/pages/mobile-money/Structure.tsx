import AnimatedSection from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Users,
  UserCircle,
  Building,
  Store,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const tiers = [
  {
    icon: Building,
    title: "Super Agent",
    description: "Financial institutions and major retailers that manage and support master agents",
    responsibilities: [
      "Manage large transaction volumes",
      "Provide liquidity support",
      "Monitor agent network",
      "Ensure compliance"
    ]
  },
  {
    icon: Store,
    title: "Master Agent",
    description: "Regional coordinators managing multiple agents in specific areas",
    responsibilities: [
      "Coordinate local agents",
      "Manage regional liquidity",
      "Provide agent support",
      "Monitor transactions"
    ]
  },
  {
    icon: UserCircle,
    title: "Agent",
    description: "Local businesses and shops providing direct services to customers",
    responsibilities: [
      "Cash in/cash out services",
      "Customer registration",
      "Basic support",
      "Transaction processing"
    ]
  },
  {
    icon: Users,
    title: "Customer",
    description: "End users of the mobile money platform",
    responsibilities: [
      "Send/receive money",
      "Make payments",
      "Manage digital wallet",
      "Access services"
    ]
  }
];

export default function Structure() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Platform Structure</h1>
            <p className="text-muted-foreground text-lg">
              Understanding the hierarchical organization of our mobile money
              ecosystem
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our mobile money platform operates through a structured network
                  of agents and partners, ensuring reliable service delivery
                  across Eritrea.
                </p>
                <p>
                  Each tier in the structure plays a crucial role in maintaining
                  the platform's efficiency and accessibility for all users.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502920514313-52581002a659"
                alt="Mobile Money Structure"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <tier.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-semibold">{tier.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {tier.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {tier.responsibilities.map((responsibility) => (
                          <li
                            key={responsibility}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Join Our Network
                </h3>
                <p className="text-muted-foreground mb-4">
                  Interested in becoming part of our mobile money network? We're
                  always looking for reliable partners at various tiers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Contact us to learn about agent opportunities
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Training and support provided
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Competitive commission structure
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
