// All visible text on the site, Danish. Edit words here, not in the components.

export const site = {
  name: "Café Lærke",
  bookHref: "mailto:hej@cafelaerke.dk?subject=Book%20bord",
};

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#besog", label: "Åbningstider" },
  { href: "#om", label: "Om os" },
];

export const hero = {
  eyebrow: "Bageri og café i Mejlgade",
  title: "Morgenbrød og kaffe siden 1998",
  lede: "Surdejsbrød, kanelsnegle og god kaffe. Bagt hver morgen i Mejlgade.",
  primary: "Se menuen",
  secondary: "Book bord",
  imageAlt: "Tre surdejsbrød på et linnedklæde",
};

export const visit = {
  hoursTitle: "Åbningstider",
  hours: [
    { days: "Mandag – torsdag", time: "7 – 17" },
    { days: "Fredag", time: "7 – 16" },
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
  imageAlt: "En kanelsnegl på en blåmalet tallerken og en kop sort kaffe",
  items: [
    { name: "Surdejsbrød", note: "Hvede og rug, langtidshævet", price: "45 kr." },
    { name: "Kanelsnegl", note: "Med smør og brun farin", price: "32 kr." },
    { name: "Tebirkes", note: "Med remonce og birkes", price: "18 kr." },
    { name: "Rugbrød", note: "Kerner og surdej", price: "40 kr." },
    { name: "Cappuccino", note: "Bønner fra Aarhus Kafferisteri", price: "42 kr." },
    { name: "Dagens frokost", note: "Skifter hver dag, kl. 11 – 14", price: "115 kr." },
  ],
};

export const about = {
  imageAlt: "Surdej i en hævekurv og mel på bordet",
  title: "Et familiebageri i Mejlgade",
  body: "Lærke og Jens åbnede bageriet i 1998 med én ovn og en drøm om ordentligt brød. I dag er vi otte, men vi bager stadig efter de samme opskrifter, og kaffen er stadig på kanden, når du kommer.",
};

export const reviews = {
  title: "Det siger vores gæster",
  items: [
    { quote: "Byens bedste brød. Vi kommer hver lørdag, og det er altid lunt, når vi går.", name: "Mette", from: "Trøjborg" },
    { quote: "Kanelsneglene er det bedste ved en morgen i Mejlgade.", name: "Anders", from: "Aarhus C" },
    { quote: "De kender min bestilling, før jeg når at sige den. Sådan skal et bageri være.", name: "Karen", from: "Mejlgade" },
    { quote: "Hyggeligt, venligt og kaffe, der faktisk smager af noget.", name: "Sofie", from: "Risskov" },
    { quote: "Vi bestiller altid vores fødselsdagsbrød her. Det har aldrig svigtet.", name: "Jonas", from: "Vesterbro" },
    { quote: "Tebirkes som hos min mormor. Stor ros herfra.", name: "Peter", from: "Skåde" },
  ],
};

export const footer = {
  line: "Café Lærke, Mejlgade 21, 8000 Aarhus C",
};
