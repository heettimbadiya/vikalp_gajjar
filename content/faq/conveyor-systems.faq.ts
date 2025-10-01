export interface FAQ {
  q: string;
  a: string;
}

export const faq: FAQ[] = [
  {
    q: "What belt widths are supported?",
    a: "500 to 1 200 mm with modular truss spans up to 60 m."
  },
  {
    q: "How is belt tracking maintained?",
    a: "Auto-align trainers + LIDAR edge detection feeding the PLC."
  },
  {
    q: "Can I get stainless rollers for corrosive plants?",
    a: "304 SS or rubber-coated rollers are a factory option, lead-time 2 weeks."
  }
];