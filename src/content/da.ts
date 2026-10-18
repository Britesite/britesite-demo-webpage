// All visible text on the site, Danish. Edit words here, not in the components.

export const site = {
  name: "Café Lærke",
  bookHref: "mailto:hej@cafelaerke.dk?subject=Book%20bord",
};

export const nav = [
  { href: "/#menu", label: "Menu" },
  { href: "/nyheder", label: "Nyheder" },
  { href: "/#besog", label: "Åbningstider" },
  { href: "/#om", label: "Om os" },
];

export const news = {
  title: "Nyheder",
  lede: "Det nyeste fra bageriet i Mejlgade.",
  items: [
    {
      title: "Vi holder lukket den 24. december",
      date: "18. oktober 2026",
      body: "Den 24. december holder bageriet lukket. Vi ønsker alle en rigtig glædelig jul og glæder os til at se jer igen bagefter.",
    },
    {
      title: "Surdejsbrød hver lørdag morgen",
      date: "18. oktober 2026",
      body: "Fra nu af bager vi friske surdejsbrød hver lørdag morgen. Kom forbi og tag et varmt brød med hjem.",
    },
  ],
};

export const hero = {
  eyebrow: "Bageri og café · Aarhus C",
  title: "Morgenbrød og kaffe siden 1998",
  lede: "Surdejsbrød, kanelsnegle og god kaffe. Bagt hver morgen i Mejlgade.",
  primary: "Se menuen",
  secondary: "Book bord",
};

export const visit = {
  hoursTitle: "Åbningstider",
  hours: [
    { days: "Mandag – torsdag", time: "7 – 17" },
    { days: "Fredag", time: "7 – 18" },
    { days: "Lørdag", time: "8 – 15" },
    { days: "Søndag", time: "8 – 15" },
  ],
  findTitle: "Find os",
  address: ["Mejlgade 21", "8000 Aarhus C"],
  phone: "86 12 34 56",
  email: "hej@cafelaerke.dk",
};

export const menu = {
  title: "Fra disken",
  lede: "Det hele bages her i huset, fra klokken fem om morgenen.",
  items: [
    { name: "Surdejsbrød", note: "Hvede og rug, langtidshævet", price: "45 kr." },
    { name: "Kanelsnegl", note: "Med smør og brun farin", price: "32 kr." },
    { name: "Tebirkes", note: "Med remonce og birkes", price: "18 kr." },
    { name: "Rugbrød", note: "Kerner og surdej", price: "42 kr." },
    { name: "Cappuccino", note: "Bønner fra Aarhus Kafferisteri", price: "42 kr." },
    { name: "Dagens frokost", note: "Skifter hver dag, kl. 11 – 14", price: "115 kr." },
  ],
};

export const about = {
  title: "Et familiebageri i Mejlgade",
  body: "Lærke og Jens åbnede bageriet i 1998 med én ovn og en drøm om ordentligt brød. I dag er vi otte, men vi bager stadig efter de samme opskrifter, og kaffen er stadig på kanden, når du kommer.",
};

export const footer = {
  line: "Café Lærke · Mejlgade 21 · 8000 Aarhus C",
};
