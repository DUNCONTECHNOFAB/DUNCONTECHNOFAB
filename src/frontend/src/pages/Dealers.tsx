import { MediaUpload } from "@/components/MediaUpload";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dealers } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Dealers() {
  return (
    <div data-ocid="dealers.page">
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
            Dealer Network
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Authorised Dealers & Distributors
          </h1>
          <p className="font-body text-white/80 max-w-xl mx-auto">
            Find an authorised DUNCANTECHNOFAB CAMICALS dealer near you for
            genuine products and professional support.
          </p>
        </div>
      </section>

      {/* Dealers Grid */}
      <section className="py-12 bg-background" data-ocid="dealers.list">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealers.map((dealer, i) => (
              <motion.div
                key={dealer.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg border border-border p-6 shadow-subtle hover:shadow-elevated transition-smooth"
                data-ocid={`dealers.item.${i + 1}`}
              >
                {/* Profile photo */}
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={
                      dealer.photo ??
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${dealer.id}`
                    }
                    alt={dealer.name}
                    className="w-16 h-16 rounded-full border-2 border-primary/20 object-cover bg-muted mb-2"
                  />
                  <MediaUpload
                    accept="image"
                    label="Update Photo"
                    currentSrc={dealer.photo}
                    className="w-full"
                  />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-base text-foreground">
                    {dealer.name}
                  </h3>
                  <BadgeCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                </div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 font-body text-xs">
                  {dealer.type}
                </Badge>
                <div className="space-y-2 mt-2">
                  <div className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="leading-snug">{dealer.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                    <a
                      href={`tel:${dealer.phone}`}
                      className="hover:text-foreground transition-smooth"
                    >
                      {dealer.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                    <a
                      href={`mailto:${dealer.email}`}
                      className="hover:text-foreground transition-smooth truncate"
                    >
                      {dealer.email}
                    </a>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-body font-semibold uppercase tracking-widest text-accent">
                    {dealer.region}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section
        className="py-14 bg-muted/30 border-t border-border"
        data-ocid="dealers.cta"
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Become an Authorised Dealer
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Expand your business with DUNCANTECHNOFAB CAMICALS. We offer
            competitive margins, marketing support, and technical training to
            our authorised dealer partners across India.
          </p>
          <Link to="/contact" data-ocid="dealers.cta.apply_button">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated"
            >
              Apply for Dealership
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
