import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/shared/AnimatedSection";

const team = [
  {
    name: "Bank of Eritrea",
    role: " ",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "HCBE",
    role: "Housing and Commerce Bank",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "CBE",
    role: "Commercial Bank of Eritrea",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {name: "Ria Money Transfer",
    role: " ",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
  },
  {
    name: "Dahabshill",
    role: " ",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
  },{
    name: "SwissRemit",
    role: " ",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "JubaExpress",
    role: " ",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "RedSea",
    role: " ",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "VTP",
    role: "",
    image : "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "6Dee Telecom Solutions",
    role: " ",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "Eritel",
    role: "Eritel Telecommunication Services",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
];

export default function TeamSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-muted/10">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Partners</h2>
          <p className="text-muted-foreground">
            Renowed foriegn and local Partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 ">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="aspect mb-4 overflow-hidden rounded-sm">
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
