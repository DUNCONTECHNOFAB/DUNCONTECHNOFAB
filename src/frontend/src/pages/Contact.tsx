import { companyInfo } from "@/data/sampleData";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div data-ocid="contact.page">
      {/* Header */}
      <section
        className="py-14"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="font-body text-white/80 max-w-xl mx-auto">
            Our team is ready to assist you with product enquiries, dealer
            applications, and technical support.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-background" data-ocid="contact.info">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                lines: [
                  companyInfo.address,
                  `${companyInfo.city}, ${companyInfo.state} ${companyInfo.pincode}`,
                  companyInfo.country,
                ],
              },
              {
                icon: Phone,
                title: "HR Consultants",
                lines: companyInfo.hrContacts.map((c) => `+91 ${c.phone}`),
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@duncantechnofab.in", "sales@duncantechnofab.in"],
              },
              {
                icon: Clock,
                title: "Business Hours",
                lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg border border-border p-6 shadow-subtle text-center"
                data-ocid={`contact.info_card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p
                    key={line}
                    className="font-body text-sm text-muted-foreground"
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card rounded-lg border border-border p-8 shadow-subtle"
            data-ocid="contact.panel"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Manufacturing Headquarters
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Visit or write to us at our manufacturing headquarters in
                  Sonipat, Haryana. Our team is available Monday through
                  Saturday for product enquiries, dealership applications, and
                  business discussions.
                </p>
                <address className="not-italic">
                  <p className="font-body font-semibold text-foreground">
                    {companyInfo.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {companyInfo.address}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {companyInfo.city}, {companyInfo.state}{" "}
                    {companyInfo.pincode}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {companyInfo.country}
                  </p>
                </address>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-foreground mb-4">
                  Direct Contact Numbers
                </h3>
                <div className="space-y-4">
                  {companyInfo.hrContacts.map((contact, i) => (
                    <div
                      key={contact.phone}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                          {contact.name} {i + 1}
                        </p>
                        <a
                          href={`tel:${contact.phone}`}
                          className="font-display font-bold text-lg text-foreground hover:text-primary transition-smooth"
                          data-ocid={`contact.phone.${i + 1}`}
                        >
                          +91 {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/40 rounded-md border border-border">
                  <p className="font-body text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      For dealer inquiries:
                    </span>{" "}
                    Call during business hours Mon–Sat, 9 AM – 6 PM IST. Our
                    team will respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
