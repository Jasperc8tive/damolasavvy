/** Metrics — reconciled to the 6 real projects (no fabricated numbers). */
export const METRICS = [
  { value: 6, suffix: "+", label: "Brands Built" },
  { value: 7, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Custom Designed" },
  { value: 100, suffix: "%", label: "Responsive" },
] as const;

/** Chapter — the horizontal / columned process. */
export const PROCESS_STAGES = [
  { n: "01", title: "Discover", body: "Understand the business, its goals and its audience before a single pixel is drawn." },
  { n: "02", title: "Research", body: "Study the market, competitors and customer behaviour to find the angle that wins." },
  { n: "03", title: "Strategy", body: "Define the positioning, messaging and conversion logic the whole site will serve." },
  { n: "04", title: "Architecture", body: "Map information, user journeys and the path that guides visitors toward action." },
  { n: "05", title: "Design", body: "Craft a premium, on-brand experience with intent behind every interaction." },
  { n: "06", title: "Development", body: "Build fast, responsive, scalable websites using modern best practices." },
  { n: "07", title: "Optimization", body: "Tune speed, SEO and conversion so the site performs, not just exists." },
  { n: "08", title: "Growth", body: "Treat launch as the beginning — measure, iterate and compound results." },
] as const;

/** Area of expertise — service list (from profile specializations). */
export const EXPERTISE = [
  "Website Design & Development",
  "Digital Experience Design",
  "UX & UI Design",
  "Conversion Optimization",
  "WordPress & Elementor",
  "SEO & Performance",
  "Brand Storytelling",
  "Growth Strategy",
] as const;

/** Services / capabilities — numbered expanding accordion. */
export const SERVICE_CATEGORIES = [
  {
    n: "01",
    title: "Website Development",
    body: "Custom, conversion-focused builds engineered for speed, responsiveness and scale.",
    items: ["WordPress Development", "Elementor Pro", "Custom Builds", "Landing Pages", "E-Commerce"],
  },
  {
    n: "02",
    title: "User Experience",
    body: "Every interaction designed to guide visitors toward a single, intentional action.",
    items: ["Information Architecture", "User Journey Mapping", "Website Audits", "Redesign Strategy"],
  },
  {
    n: "03",
    title: "Digital Growth",
    body: "Websites designed to generate leads, sales and measurable business outcomes.",
    items: ["SEO Strategy", "Conversion Rate Optimization", "Lead Generation", "Analytics & GA4"],
  },
  {
    n: "04",
    title: "Brand & Strategy",
    body: "Positioning and storytelling that make a website feel like a business asset.",
    items: ["Brand Storytelling", "Positioning", "Visual Direction", "Content Strategy"],
  },
] as const;

/** Why clients work with Damola — horizontal trust scroller. */
export const WHY_CLIENTS = [
  { title: "Strategic Thinking", body: "Every website begins with business goals, not design trends." },
  { title: "Growth-Focused", body: "Built to generate leads, sales and measurable outcomes." },
  { title: "UX Excellence", body: "Every interaction is designed to guide visitors toward action." },
  { title: "Modern Technology", body: "Current best practices for speed, responsiveness and scale." },
  { title: "Long-Term Value", body: "Focused not just on launch, but on helping businesses grow." },
] as const;

/** Chapter — the future focus areas. */
export const FUTURE_AREAS = [
  "Digital Experiences",
  "SaaS Products",
  "Growth Systems",
  "Business Automation",
  "Trust Infrastructure",
  "Conversion Optimization",
] as const;

/**
 * FAQ — sensible editable defaults. These are reasonable, non-committal answers;
 * adjust pricing/terms to match Damola's actual policy before launch.
 */
export const FAQ = [
  {
    q: "What kind of projects do you take on?",
    a: "Website design and development, redesigns, WordPress builds, digital experience design, conversion optimization and growth strategy — for brands that treat their website as a business asset.",
  },
  {
    q: "How are projects priced and paid for?",
    a: "Pricing is scoped per project based on goals, complexity and timeline, typically split across milestones. Share your project and you'll get a clear, fixed proposal.",
  },
  {
    q: "How long does a typical website take?",
    a: "Most projects run a few weeks from discovery to launch, depending on scope and how quickly content and feedback come through.",
  },
  {
    q: "Do you work with brands outside Nigeria?",
    a: "Yes. Work spans multiple industries and the process runs fully remote, with clear communication across time zones.",
  },
  {
    q: "Are you currently taking on new work?",
    a: "Yes — currently open to a limited number of new projects. Start a conversation and we'll find the right fit.",
  },
] as const;
