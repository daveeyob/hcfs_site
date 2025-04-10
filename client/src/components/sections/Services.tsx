import { motion } from "framer-motion";
import ServiceCard from "@/components/shared/ServiceCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Banknote, Repeat, Phone, Building, PiggyBank, Building2 } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "Name",
    description: '"HIMBOL" is the name of a region located at Sahel, Northern RedSea',
    image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8"
  },
  {
    icon: Repeat,
    title: "Begining..",
    description: "The company was established in 1994, as a currency exchange office.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
  },
  {
    icon: Building2,
    title: "Expansion",
    description: "Year after year the company expanded the number of services it provides.",
    image: "https://images.unsplash.com/photo-1444653389962-8149286c578a"
  },
  {
    icon: Phone,
    title: "Mobile Money",
    description: "The company pionered the Mobile Money payment system in the country.",
    image: "https://images.unsplash.com/photo-1533234944761-2f5337579079"
  },
];

export default function Services() {
  return (
    // <AnimatedSection  className="py-16 md:py-24">
    //   <div id="his" className="container">
    //     <div className="text-center max-w-2xl mx-auto mb-12">
    //       <h2 className="text-3xl font-bold mb-4">Background</h2>
    //       <p className="text-muted-foreground">
    //         Our story is rooted with the struggle and upbringing of our country.
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {services.map((service, index) => (
    //         <motion.div
    //           key={service.title}
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //         >
    //           <ServiceCard {...service} />
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </AnimatedSection>
    <div className="py-16 md:py-15">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Our Story</h2>
          <hr></hr>
          <p className="md:py-3">Himbol / ሂምቦል </p>
          <p>1. A hilly place in the Northern RedSea zone, a former financial hub for Eritrea's armed struggle.</p>
          <p>2. Meaning "" in Bidawyet.</p>
          <hr></hr>
              <div className="space-y-4 md:py-7 text-muted-foreground">
                <p>
                  Founded with a vision to transform financial services in Eritrea,
                  Himbol has grown to become the country's leading provider of
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
        </AnimatedSection>
      </div>
      </div>
  );
}