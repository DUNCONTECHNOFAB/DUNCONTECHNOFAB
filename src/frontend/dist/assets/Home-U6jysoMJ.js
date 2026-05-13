import { j as jsxRuntimeExports, L as Link, B as Button, F as FlaskConical, r as reactExports, p as products } from "./index-CHNrevQs.js";
import { M as MediaUpload } from "./MediaUpload-DXyD0rPo.js";
import { B as Badge } from "./badge-Qr1vR9vS.js";
import { m as motion } from "./proxy-c1Ld1YR5.js";
import { A as ArrowRight } from "./arrow-right-DSBO8Coj.js";
import { U as Users, S as ShieldCheck, A as Award } from "./users-ElhwHaA8.js";
const stats = [
  { icon: FlaskConical, value: "150+", label: "Chemical Products" },
  { icon: Users, value: "500+", label: "Active Clients" },
  { icon: ShieldCheck, value: "ISO 9001", label: "Certified Quality" },
  { icon: Award, value: "15+", label: "Years Experience" }
];
const featured = products.slice(0, 3);
function useGreeting() {
  return reactExports.useMemo(() => {
    const h = (/* @__PURE__ */ new Date()).getHours();
    if (h >= 5 && h < 12) return "Good Morning";
    if (h >= 12 && h < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);
}
function CompanyVideos() {
  const [videoUrls, setVideoUrls] = reactExports.useState([]);
  function handleVideoUploaded(url) {
    setVideoUrls((prev) => [...prev, url]);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      MediaUpload,
      {
        accept: "video",
        label: "Upload Company Video",
        onSuccess: handleVideoUploaded
      }
    ) }),
    videoUrls.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: videoUrls.map((url, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: i * 0.08, duration: 0.4 },
        className: "rounded-lg overflow-hidden border border-border bg-card shadow-subtle",
        "data-ocid": `home.videos.item.${i + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { controls: true, src: url, className: "w-full h-40 object-cover", children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" }) })
      },
      url
    )) }),
    videoUrls.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-sm font-body text-muted-foreground mt-4",
        "data-ocid": "home.videos.empty_state",
        children: "No videos uploaded yet. Select a video file above to get started."
      }
    )
  ] });
}
function Home() {
  const greeting = useGreeting();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden min-h-[580px] flex items-center",
        "data-ocid": "home.hero",
        style: {
          background: "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 60%, oklch(0.35 0.12 255) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-20",
              style: {
                backgroundImage: "url('/assets/generated/hero-chemical-plant.dim_1200x600.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.10_255/0.95)] via-[oklch(0.22_0.10_255/0.80)] to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-accent text-base md:text-lg font-semibold tracking-wide mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1.5 h-1.5 rounded-full bg-accent" }),
                  greeting
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent/20 text-accent border-accent/30 font-body text-xs tracking-widest uppercase", children: "Sonipat, Haryana, India" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6", children: [
                  "Innovating Solutions for the",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "Chemical Industry" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg text-white/80 leading-relaxed mb-8 max-w-xl", children: "High-performance industrial chemicals, globally delivered. Reliability and expertise you can trust — backed by years of manufacturing excellence." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "home.hero.explore_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated w-full sm:w-auto",
                      children: [
                        "Explore Our Products",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "home.hero.about_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "border-white/40 text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto font-semibold",
                      children: "About Our Company"
                    }
                  ) })
                ] })
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border",
        "data-ocid": "home.stats",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1, duration: 0.5 },
            className: "flex flex-col items-center text-center gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "w-5 h-5 text-accent mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-foreground", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-muted-foreground uppercase tracking-wide", children: stat.label })
            ]
          },
          stat.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "home.featured_products",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-3", children: "Our Featured Chemical Products" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto", children: "Explore our core product lines, engineered for industrial performance and reliability." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: featured.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12, duration: 0.5 },
              className: "bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-smooth group",
              "data-ocid": `home.product_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: product.image,
                      alt: product.name,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    }
                  ),
                  product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 right-3 bg-accent text-accent-foreground text-xs", children: product.badge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body uppercase tracking-widest text-accent font-semibold mb-1", children: product.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: product.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground line-clamp-2 mb-4", children: product.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/products/$id",
                      params: { id: product.id },
                      "data-ocid": `home.product_card.link.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          className: "text-primary border-primary/30 hover:bg-primary/5 font-semibold",
                          children: [
                            "Learn More ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 w-3 h-3" })
                          ]
                        }
                      )
                    }
                  )
                ] })
              ]
            },
            product.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "home.view_all_products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "gradient-primary text-primary-foreground font-semibold shadow-elevated",
              children: [
                "View All Products ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
              ]
            }
          ) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", "data-ocid": "home.why_us", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-3", children: "Why Choose DUNCANTECHNOFAB CAMICALS?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto", children: "Our commitment to quality, safety, and customer excellence sets us apart." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        {
          icon: ShieldCheck,
          title: "ISO Certified Quality",
          desc: "Every batch produced under strict quality control protocols and international safety standards."
        },
        {
          icon: FlaskConical,
          title: "In-House R&D Lab",
          desc: "Continuous innovation through dedicated research and development for custom chemical formulations."
        },
        {
          icon: Award,
          title: "Pan-India Distribution",
          desc: "Authorised dealer network across 12+ states ensuring timely delivery and local support."
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.12, duration: 0.5 },
          className: "bg-card rounded-lg border border-border p-6 text-center shadow-subtle hover:shadow-elevated transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: item.desc })
          ]
        },
        item.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background border-t border-border",
        "data-ocid": "home.videos",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Media" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: "Our Company Videos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto", children: "Watch our manufacturing process, product showcases, and company highlights." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyVideos, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        "data-ocid": "home.cta_banner",
        style: {
          background: "linear-gradient(135deg, oklch(0.30 0.14 255), oklch(0.45 0.16 260))"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: "Ready to Partner With Us?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/80 mb-8 max-w-lg mx-auto", children: "Connect with our team to discuss your chemical requirements and explore dealer or distribution opportunities." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "home.cta.contact_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated w-full sm:w-auto",
                children: "Contact Us Today"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dealers", "data-ocid": "home.cta.dealer_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "border-white/40 text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto font-semibold",
                children: "Find a Dealer"
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
