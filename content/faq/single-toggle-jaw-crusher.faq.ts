export interface FAQ {
  q: string;
  a: string;
}

export const faq: FAQ[] = [
  {
    q: "What materials can the single-toggle jaw crusher handle?",
    a: "Up to 300 MPa rock—basalt, granite, even reinforced concrete—thanks to its deep-V chamber and 110 kW flywheel."
  },
  {
    q: "How quickly can jaw plates be changed?",
    a: "Two techs with an impact gun swap plates in under 45 minutes using the slide-out seat and captive wedges."
  },
  {
    q: "Is remote condition monitoring supported?",
    a: "Yes—an optional IoT node streams bearing temp, stroke counts and kWh/t via MQTT or OPC-UA."
  }
];