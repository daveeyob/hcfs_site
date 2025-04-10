import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Wallet, Shield, Zap, Network, ChartNetwork, NetworkIcon, LucideNetwork } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Store, send, and receive money digitally with ease"
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Transfer money instantly to any MSISDN (Mobile Number) subscriber."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Make secure payments to merchants and businesses"
  },
  {
    icon: Network,
    title: "Vast Network",
    description: "Recharge or Discharge your mobile balance directlty with our wide distribution of Agents"
  }
];

export default function MobileMoneyHome() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-8xl font-bold mb4">MNakfa</h1>
            <h1 className="text-xl mb-4">Mobile Money Solutions</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Experience the future of digital payments in Eritrea with our
              comprehensive mobile money platform
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/mobile-money/structure">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
              <Link href="/mobile-money/partners">
                <Button size="lg" className="gap-2">
                  Our Partners <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533234944761-2f5337579079"
                alt="Mobile Money"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Transform Your Financial Experience
              </h2>
              <p className="text-muted-foreground">
                Our mobile money platform provides a secure and convenient way to
                manage your finances. Send money, pay bills, and make purchases
                all from your mobile phone.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  No bank account required
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Available nationwide through our agent network
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  24/7 access to your money
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="h-full">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
