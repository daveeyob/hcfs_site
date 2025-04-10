import AnimatedSection from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const team = [
  {
    name: "Samuel Mehari",
    role: "General Manager",
    bio: "Msc. Buissness Administration",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "Mulugeta Yohannes",
    role: "Head of Marketing",
    bio: "Msc.Buissness Administration ",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    name: "Eskindr Yohannes",
    role: "Head of Commerce and Customer Service.",
    bio: "Bsc. Management",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
  },
  {
    name: "Solomon Yohannes",
    role: "Head Of Accounts",
    bio: "Bsc. Accounting",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    name: "Dawit Eyob",
    role: "Head of Information and Technology",
    bio: "Bsc. Computer Science",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  }
];

export default function Team() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Leadership Team</h1>
            <p className="text-muted-foreground">
              Meet the experienced professionals driving innovation in HCFS.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-square mb-6 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our team combines local expertise with deep experiences to
              deliver the best financial services to our customers.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
