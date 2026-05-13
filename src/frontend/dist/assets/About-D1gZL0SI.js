import { c as createLucideIcon, j as jsxRuntimeExports, a as companyInfo, F as FlaskConical, t as teamMembers } from "./index-CHNrevQs.js";
import { M as MediaUpload } from "./MediaUpload-DXyD0rPo.js";
import { m as motion } from "./proxy-c1Ld1YR5.js";
import { S as ShieldCheck, A as Award, U as Users } from "./users-ElhwHaA8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every process, product, and procedure is designed with worker safety and environmental responsibility as top priorities."
  },
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
    desc: "Our in-house R&D team continuously innovates, ensuring our formulations stay ahead of industry demands."
  },
  {
    icon: Award,
    title: "Quality Commitment",
    desc: "ISO 9001 certified processes and rigorous testing protocols guarantee consistent, reliable product quality."
  },
  {
    icon: Users,
    title: "Customer Partnership",
    desc: "We go beyond transactions — building long-term partnerships with clients through technical support and responsive service."
  },
  {
    icon: Target,
    title: "Precision Manufacturing",
    desc: "State-of-the-art plant facilities and automated dosing systems ensure batch-to-batch consistency at industrial scale."
  },
  {
    icon: Lightbulb,
    title: "Innovation Culture",
    desc: "We invest in people, technology, and ideas — fostering a culture where innovation drives growth."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16",
        style: {
          background: "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)"
        },
        "data-ocid": "about.hero",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "About Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-white mb-4", children: "Built on Trust, Driven by Science" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/80 text-lg max-w-2xl mx-auto", children: companyInfo.description })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "about.story", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-5", children: "From Sonipat to the Nation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground leading-relaxed mb-4", children: [
              "Founded in ",
              companyInfo.founded,
              " in Sonipat, Haryana, DUNCANTECHNOFAB CAMICALS started with a single mission: to manufacture industrial chemicals that businesses across India could depend on. With a small but dedicated team, we began producing polymer resins and protective coatings for local manufacturers."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground leading-relaxed mb-4", children: [
              "Over the years, our reputation for quality and reliability helped us grow from a regional supplier to a nationally recognised manufacturing company with distribution partners across 12+ states. Today, with ",
              companyInfo.employees,
              " ",
              "professionals, we produce over 150 chemical products serving industries from construction and automotive to pharma and water treatment."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed", children: "Our dream: to make DUNCANTECHNOFAB CAMICALS a trusted, modern industrial brand across India — and beyond." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "rounded-lg overflow-hidden shadow-elevated",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/hero-chemical-plant.dim_1200x600.jpg",
              alt: "DUNCANTECHNOFAB CAMICALS manufacturing facility",
              className: "w-full h-80 object-cover"
            }
          )
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 bg-card border-y border-border",
        "data-ocid": "about.stats",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [
          { value: companyInfo.founded, label: "Year Founded" },
          { value: "150+", label: "Products" },
          { value: companyInfo.employees, label: "Employees" },
          { value: "12+", label: "States Served" }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1, duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-bold text-primary mb-1", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-sm text-muted-foreground uppercase tracking-wide", children: s.label })
            ]
          },
          s.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "about.values", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Our Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "What Drives Us Every Day" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1, duration: 0.5 },
          className: "bg-card rounded-lg border border-border p-6 shadow-subtle hover:shadow-elevated transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-2", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: v.desc })
          ]
        },
        v.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/30 border-t border-border",
        "data-ocid": "about.team",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Our People" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "Meet Our Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 max-w-xl mx-auto", children: "The dedicated professionals driving DUNCANTECHNOFAB CAMICALS forward." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: teamMembers.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.5 },
              className: "bg-card rounded-lg border border-border p-6 text-center shadow-subtle hover:shadow-elevated transition-smooth",
              "data-ocid": `about.team.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: member.photo,
                    alt: member.name,
                    className: "w-20 h-20 rounded-full border-2 border-primary/30 object-cover bg-muted"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-0.5", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-accent font-semibold uppercase tracking-widest mb-4", children: member.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MediaUpload,
                  {
                    accept: "image",
                    label: "Update Photo",
                    currentSrc: member.photo
                  }
                )
              ]
            },
            member.id
          )) })
        ] })
      }
    )
  ] });
}
export {
  About as default
};
