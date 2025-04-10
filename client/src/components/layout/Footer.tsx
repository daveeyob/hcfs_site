import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/10 mt-auto">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Himbol Community Financial Services</h3>
            <p className="text-sm text-muted-foreground">
              Leading financial services provider in Eritrea, offering remittance,
              currency exchange, and mobile money solutions.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Remittance",
                "Currency Exchange",
                "Mobile Money",
                "Bank Services",
              ].map((service) => (
                <li
                  key={service}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+291 (1) 120788</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:himbolasmara@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <span>himbolasmara@gmail.com</span>
                    </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bahty Meskerem Sq. Asmara, Eritrea</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Himbol Community Financial Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
