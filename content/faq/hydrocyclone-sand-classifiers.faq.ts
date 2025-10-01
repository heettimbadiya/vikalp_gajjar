export interface FAQ {
  q: string;
  a: string;
}

export const faq: FAQ[] = [
  {
    q: "How fine can the hydrocyclone classifier separate?",
    a: "Down to 75 µm at 2.6 SG using our 150 mm apex kit."
  },
  {
    q: "Are the liners replaceable?",
    a: "Snap-fit polyurethane liners change out in 10 minutes—no adhesive."
  },
  {
    q: "How do I control underflow density?",
    a: "Pneumatic pinch-valve with PID loop tied to a density meter."
  }
];