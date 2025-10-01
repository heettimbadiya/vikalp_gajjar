export interface FAQ {
  q: string;
  a: string;
}

export const faq: FAQ[] = [
  {
    q: "What makes the HSI rotor unique?",
    a: "The 4-bar, 600 mm deep rotor accepts 700 mm feed and auto-balances at 1 500 rpm for lower vibration."
  },
  {
    q: "Can I swap blow-bars in the field?",
    a: "Yes—one person, manual hoist; reversible bars mean double wear life."
  },
  {
    q: "How does the hydraulic curtain protect against tramp iron?",
    a: "Pressure spikes trigger a 40 ms relief that clears steel without stopping the drive."
  }
];