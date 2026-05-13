import { MediaUpload } from "@/components/MediaUpload";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  FlaskConical,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

const stats = [
  { icon: FlaskConical, value: "150+", label: "Chemical Products" },
  { icon: Users, value: "500+", label: "Active Clients" },
  { icon: ShieldCheck, value: "ISO 9001", label: "Certified Quality" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

const featured = products.slice(0, 3);

function useGreeting() {
  return useMemo(() => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return "Good Morning";
    if (h >= 12 && h < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);
}

function CompanyVideos() {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);

  function handleVideoUploaded(url: string) {
    setVideoUrls((prev) => [...prev, url]);
  }

  return (
    <div>
      <div className="max-w-sm">
        <MediaUpload
          accept="video"
          label="Upload Company Video"
          onSuccess={handleVideoUploaded}
        />
      </div>
      {videoUrls.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoUrls.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-lg overflow-hidden border border-border bg-card shadow-subtle"
              data-ocid={`home.videos.item.${i + 1}`}
            >
              <video controls src={url} className="w-full h-40 object-cover">
                <track kind="captions" />
              </video>
            </motion.div>
          ))}
        </div>
      )}
      {videoUrls.length === 0 && (
        <p
          className="text-sm font-body text-muted-foreground mt-4"
          data-ocid="home.videos.empty_state"
        >
          No videos uploaded yet. Select a video file above to get started.
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const greeting = useGreeting();
  return (
    <div data-ocid="home.page">
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[580px] flex items-center"
        data-ocid="home.hero"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 60%, oklch(0.35 0.12 255) 100%)",
        }}
      >
        {/* Decorative overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-chemical-plant.dim_1200x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.10_255/0.95)] via-[oklch(0.22_0.10_255/0.80)] to-transparent" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-accent text-base md:text-lg font-semibold tracking-wide mb-2 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                {greeting}
              </p>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-body text-xs tracking-widest uppercase">
                Sonipat, Haryana, India
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Innovating Solutions for the{" "}
                <span className="text-gradient-accent">Chemical Industry</span>
              </h1>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                High-performance industrial chemicals, globally delivered.
                Reliability and expertise you can trust — backed by years of
                manufacturing excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/products" data-ocid="home.hero.explore_button">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated w-full sm:w-auto"
                  >
                    Explore Our Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/about" data-ocid="home.hero.about_button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto font-semibold"
                  >
                    About Our Company
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="bg-card border-b border-border"
        data-ocid="home.stats"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-1"
              >
                <stat.icon className="w-5 h-5 text-accent mb-1" />
                <span className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="py-16 bg-background"
        data-ocid="home.featured_products"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Featured Chemical Products
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Explore our core product lines, engineered for industrial
              performance and reliability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-smooth group"
                data-ocid={`home.product_card.${i + 1}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs font-body uppercase tracking-widest text-accent font-semibold mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products/$id"
                    params={{ id: product.id }}
                    data-ocid={`home.product_card.link.${i + 1}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-primary border-primary/30 hover:bg-primary/5 font-semibold"
                    >
                      Learn More <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" data-ocid="home.view_all_products">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold shadow-elevated"
              >
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30" data-ocid="home.why_us">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose DUNCANTECHNOFAB CAMICALS?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Our commitment to quality, safety, and customer excellence sets us
              apart.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "ISO Certified Quality",
                desc: "Every batch produced under strict quality control protocols and international safety standards.",
              },
              {
                icon: FlaskConical,
                title: "In-House R&D Lab",
                desc: "Continuous innovation through dedicated research and development for custom chemical formulations.",
              },
              {
                icon: Award,
                title: "Pan-India Distribution",
                desc: "Authorised dealer network across 12+ states ensuring timely delivery and local support.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-card rounded-lg border border-border p-6 text-center shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Videos */}
      <section
        className="py-16 bg-background border-t border-border"
        data-ocid="home.videos"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Media
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Our Company Videos
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Watch our manufacturing process, product showcases, and company
              highlights.
            </p>
          </motion.div>

          <CompanyVideos />
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-14"
        data-ocid="home.cta_banner"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.30 0.14 255), oklch(0.45 0.16 260))",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="font-body text-white/80 mb-8 max-w-lg mx-auto">
            Connect with our team to discuss your chemical requirements and
            explore dealer or distribution opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" data-ocid="home.cta.contact_button">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated w-full sm:w-auto"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link to="/dealers" data-ocid="home.cta.dealer_button">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto font-semibold"
              >
                Find a Dealer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
