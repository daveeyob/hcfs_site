import AnimatedSection from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "1994",
    title: "Foundation",
    description: "Established as the first dedicated financial services company in Asmara, Eritrea"
  },
  {
    year: "2005",
    title: "Remittance Services",
    description: "Launched international money transfer services"
  },
  {
    year: "2015",
    title: "National Expansion",
    description: "Extended services to all major cities in Eritrea"
  },
  {
    year: "2019",
    title: "Digital Transformation",
    description: "Introduced mobile money platform"
    
  },
  {
    year: "2020",
    title: "Bank Partnerships",
    description: "Established partnerships with major banks for remote services"
  }
];

export default function History() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Journey</h1>
            <p className="text-muted-foreground">
              From our humble beginnings to becoming Eritrea's leading financial services provider
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          {/* Timeline items */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-1/2 pr-8 pl-8">
                  <div className={`${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-3xl text-primary font-bold">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Looking to the Future</h2>
            <p className="text-muted-foreground">
              We continue to innovate and expand our services, bringing modern
              financial solutions to all Eritreans while maintaining our commitment
              to excellence and reliability.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
