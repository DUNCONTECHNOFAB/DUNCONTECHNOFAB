import { MediaUpload } from "@/components/MediaUpload";
import { companyInfo, teamMembers } from "@/data/sampleData";
import {
  Award,
  FlaskConical,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every process, product, and procedure is designed with worker safety and environmental responsibility as top priorities.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
    desc: "Our in-house R&D team continuously innovates, ensuring our formulations stay ahead of industry demands.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    desc: "ISO 9001 certified processes and rigorous testing protocols guarantee consistent, reliable product quality.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    desc: "We go beyond transactions — building long-term partnerships with clients through technical support and responsive service.",
  },
  {
    icon: Target,
    title: "Precision Manufacturing",
    desc: "State-of-the-art plant facilities and automated dosing systems ensure batch-to-batch consistency at industrial scale.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Culture",
    desc: "We invest in people, technology, and ideas — fostering a culture where innovation drives growth.",
  },
];

export default function About() {
  return (
    <div data-ocid="about.page">
      {/* Page header */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)",
        }}
        data-ocid="about.hero"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Built on Trust, Driven by Science
            </h1>
            <p className="font-body text-white/80 text-lg max-w-2xl mx-auto">
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background" data-ocid="about.story">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Our Story
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-5">
                From Sonipat to the Nation
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Founded in {companyInfo.founded} in Sonipat, Haryana,
                DUNCANTECHNOFAB CAMICALS started with a single mission: to
                manufacture industrial chemicals that businesses across India
                could depend on. With a small but dedicated team, we began
                producing polymer resins and protective coatings for local
                manufacturers.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Over the years, our reputation for quality and reliability
                helped us grow from a regional supplier to a nationally
                recognised manufacturing company with distribution partners
                across 12+ states. Today, with {companyInfo.employees}{" "}
                professionals, we produce over 150 chemical products serving
                industries from construction and automotive to pharma and water
                treatment.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our dream: to make DUNCANTECHNOFAB CAMICALS a trusted, modern
                industrial brand across India — and beyond.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-elevated"
            >
              <img
                src="/assets/generated/hero-chemical-plant.dim_1200x600.jpg"
                alt="DUNCANTECHNOFAB CAMICALS manufacturing facility"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-12 bg-card border-y border-border"
        data-ocid="about.stats"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: companyInfo.founded, label: "Year Founded" },
              { value: "150+", label: "Products" },
              { value: companyInfo.employees, label: "Employees" },
              { value: "12+", label: "States Served" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-display text-4xl font-bold text-primary mb-1">
                  {s.value}
                </div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wide">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background" data-ocid="about.values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Our Values
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg border border-border p-6 shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      <section
        className="py-16 bg-muted/30 border-t border-border"
        data-ocid="about.team"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Our People
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="font-body text-muted-foreground mt-2 max-w-xl mx-auto">
              The dedicated professionals driving DUNCANTECHNOFAB CAMICALS
              forward.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg border border-border p-6 text-center shadow-subtle hover:shadow-elevated transition-smooth"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full border-2 border-primary/30 object-cover bg-muted"
                  />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-0.5">
                  {member.name}
                </h3>
                <p className="font-body text-xs text-accent font-semibold uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <MediaUpload
                  accept="image"
                  label="Update Photo"
                  currentSrc={member.photo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
