import { c as createLucideIcon, j as jsxRuntimeExports, a as companyInfo, M as MapPin, P as Phone } from "./index-CHNrevQs.js";
import { M as Mail } from "./mail-DnGCItuW.js";
import { m as motion } from "./proxy-c1Ld1YR5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: {
          background: "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Get in Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-white mb-3", children: "Contact Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/80 max-w-xl mx-auto", children: "Our team is ready to assist you with product enquiries, dealer applications, and technical support." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background", "data-ocid": "contact.info", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: [
        {
          icon: MapPin,
          title: "Our Location",
          lines: [
            companyInfo.address,
            `${companyInfo.city}, ${companyInfo.state} ${companyInfo.pincode}`,
            companyInfo.country
          ]
        },
        {
          icon: Phone,
          title: "HR Consultants",
          lines: companyInfo.hrContacts.map((c) => `+91 ${c.phone}`)
        },
        {
          icon: Mail,
          title: "Email",
          lines: ["info@duncantechnofab.in", "sales@duncantechnofab.in"]
        },
        {
          icon: Clock,
          title: "Business Hours",
          lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"]
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1, duration: 0.5 },
          className: "bg-card rounded-lg border border-border p-6 shadow-subtle text-center",
          "data-ocid": `contact.info_card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3", children: item.title }),
            item.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm text-muted-foreground",
                children: line
              },
              line
            ))
          ]
        },
        item.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-3xl mx-auto bg-card rounded-lg border border-border p-8 shadow-subtle",
          "data-ocid": "contact.panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Manufacturing Headquarters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed mb-4", children: "Visit or write to us at our manufacturing headquarters in Sonipat, Haryana. Our team is available Monday through Saturday for product enquiries, dealership applications, and business discussions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-foreground", children: companyInfo.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: companyInfo.address }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground", children: [
                  companyInfo.city,
                  ", ",
                  companyInfo.state,
                  " ",
                  companyInfo.pincode
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: companyInfo.country })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-4", children: "Direct Contact Numbers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: companyInfo.hrContacts.map((contact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-primary-foreground" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground uppercase tracking-wide", children: [
                        contact.name,
                        " ",
                        i + 1
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: `tel:${contact.phone}`,
                          className: "font-display font-bold text-lg text-foreground hover:text-primary transition-smooth",
                          "data-ocid": `contact.phone.${i + 1}`,
                          children: [
                            "+91 ",
                            contact.phone
                          ]
                        }
                      )
                    ] })
                  ]
                },
                contact.phone
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-muted/40 rounded-md border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "For dealer inquiries:" }),
                " ",
                "Call during business hours Mon–Sat, 9 AM – 6 PM IST. Our team will respond within 24 hours."
              ] }) })
            ] })
          ] })
        }
      )
    ] }) })
  ] });
}
export {
  Contact as default
};
