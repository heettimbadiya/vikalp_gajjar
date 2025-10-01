export interface FAQ {
  q: string;
  a: string;
}

export const faq: FAQ[] = [
  {
    q: "What's unique about the CubiSand rotor?",
    a: "5-port enclosed rotor yields < 7 % minus-75 µm while improving cube shape index by 20 %."
  },
  {
    q: "Power draw on 60 Hz grid?",
    a: "250 kW @ 1 800 rpm, soft-starter ready."
  },
  {
    q: "Does it accept wet feed?",
    a: "Up to 12 % moisture; cascade ports prevent build-up."
  }
];