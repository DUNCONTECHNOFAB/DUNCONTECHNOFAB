import { MediaUpload } from "@/components/MediaUpload";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { promotions } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import { Calendar, Tag } from "lucide-react";
import { motion } from "motion/react";

export default function Promotions() {
  return (
    <div data-ocid="promotions.page">
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
            Current Offers
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Promotions & Special Offers
          </h1>
          <p className="font-body text-white/80 max-w-xl mx-auto">
            Exclusive deals and introductory offers for dealers, distributors,
            and industrial buyers across India.
          </p>
        </div>
      </section>

      {/* Promotions List */}
      <section className="py-12 bg-background" data-ocid="promotions.list">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, i) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-card rounded-lg border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth"
                data-ocid={`promotions.item.${i + 1}`}
              >
                {/* Banner image */}
                <div className="relative overflow-hidden">
                  <img
                    src={
                      promo.bannerImage ??
                      `https://picsum.photos/seed/${promo.id}/800/300`
                    }
                    alt={promo.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="px-7 pt-3 pb-2">
                  <MediaUpload
                    accept="image"
                    label="Update Banner"
                    currentSrc={promo.bannerImage}
                  />
                </div>
                <div className="h-1.5 bg-accent" />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <Badge className="bg-accent/10 text-accent border-accent/20 font-body text-xs">
                      {promo.badge}
                    </Badge>
                    {promo.discount && (
                      <span className="font-display text-3xl font-bold text-accent">
                        {promo.discount}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {promo.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-5">
                    {promo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>
                        Valid until:{" "}
                        <span className="font-semibold text-foreground">
                          {promo.validUntil}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                      <Tag className="w-3 h-3" />
                      <span>T&amp;C apply</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 bg-muted/30 border-t border-border"
        data-ocid="promotions.cta"
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Interested in These Offers?
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Contact our sales team to learn more about eligibility, terms, and
            how to place an order at promotional rates.
          </p>
          <Link to="/contact" data-ocid="promotions.cta.contact_button">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated"
            >
              Contact Sales Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
