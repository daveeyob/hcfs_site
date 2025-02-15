import AnimatedSection from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Established as the first dedicated financial services company in Eritrea",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  },
  {
    year: "2013",
    title: "Remittance Services",
    description: "Launched international money transfer services",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
  },
  {
    year: "2015",
    title: "Digital Transformation",
    description: "Introduced mobile money platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
  },
  {
    year: "2018",
    title: "National Expansion",
    description: "Extended services to all major cities in Eritrea",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4"
  },
  {
    year: "2020",
    title: "Bank Partnerships",
    description: "Established partnerships with major banks for remote services",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
  }
];

export default function History() {
  useScrollToTop();

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#f00606] to-[#001fff]" />

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
                <div className="w-1/2 px-8">
                  <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                    <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#f00606] to-[#001fff] text-white mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-48 h-48 -mt-24">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-lg">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
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