import { motion } from "framer-motion";
import { ArrowDown, ArrowDown01, ArrowDownCircle, ArrowDownFromLine, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Modern Financial Solutions.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Experience seamless remittance, currency exchange, and mobile money
            services with Eritrea's leading financial provider.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link href="#his">
              <Button size="lg" className="gap-2"
                   onClick={() => document.querySelector('#his')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get to know us better
                <ArrowDown className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              {/* <Button size="lg" variant="outline">
                Contact Us
              </Button> */}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
