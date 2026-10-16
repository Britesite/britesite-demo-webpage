// All homepage copy, Danish. Wording matches Britesite Homepage v12, except quality.items[].body, which now describes what each check's demo shows.

export const CONTACT_EMAIL = "info@britesite.dk";
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;
export const BOOK_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Jeg vil gerne booke et møde")}`;

export const nav = [
  { href: "#byg", label: "Byg" },
  { href: "#veje", label: "Ny eller flyttet" },
  { href: "#os", label: "Om os" },
];

export const hero = {
  titleLead: "Chat dig til en hjemmeside,",
  titleAccent: "du selv kan rette.",
  lede: "Fortæl Britesite med dine egne ord, hvad der skal ændres. Se ændringen med det samme, og tryk udgiv, når du er klar. Ingen kode, intet bureau, ingen ventetid.",
  cta: "Kom i gang",
  secondary: "Se hvordan det virker",
  videoPlaceholder: "Hero-video: skærmoptagelse af en rettelse",
};

export const asks = {
  label: "Det kan du bede om",
  /** Written the way an owner would type them, across different kinds of businesses. */
  items: [
    "Vi holder lukket mellem jul og nytår. Kan du skrive det på forsiden?",
    "Skift billedet øverst ud med et sommerbillede",
    "Klipning stiger til 450 kr. fra 1. marts",
    "Lav en side til vores julefrokost i december",
    "Tilføj en knap, så kunderne kan booke tid",
    "Gør teksten om os kortere og mere personlig",
    "Sofie er startet hos os. Tilføj hende under medarbejdere",
    "Flyt kontaktformularen højere op",
    "Vores telefonnummer er nu 86 12 34 56",
    "Oversæt forsiden til engelsk",
    "Læg den nye frokostmenu op",
    "Fjern tilbuddet fra sidste måned",
  ],
};

export const demo = {
  title: "Alt din hjemmeside har brug for. Ét sted.",
  lede: "Skriv, hvad der skal ændres, med dine egne ord. Du ser altid resultatet, før nogen andre gør.",
  siteName: "Café Lærke",
  publish: "Udgiv",
  preview: "Forhåndsvisning",
  placeholder: "Hvad vil du gerne have ændret?",
  status: {
    idle: "Live · intet venter",
    working: "Laver ændringen…",
    ready: "Ændringer klar til at se",
  },
  scenes: [
    {
      ask: "Vi holder åbent til 17 om fredagen nu",
      reply: "Færdig. Fredag står nu til 7–17. Intet går live, før du trykker Udgiv.",
    },
    {
      ask: "Tilføj en knap på forsiden, så folk kan bestille bord",
      reply: "Færdig. Knappen »Book bord« står nu ved siden af menuen.",
    },
    {
      ask: "Tilføj en side til vores julefrokost i december",
      reply: "Færdig. Siden »Jul« er klar og lagt i menuen. Tryk Udgiv, når du er klar.",
    },
  ],
};

export const quality = {
  title: "Kvaliteten forsvinder ikke, fordi du selv retter.",
  lede: "Systemet kender de principper, der gør en hjemmeside effektiv: hvordan tekst bliver læst, hvordan en side fører til en henvendelse, og hvad Google belønner. Og det holder din side inden for dem.",
  items: [
    { id: "responsive", title: "Responsiv", body: "Den samme side på computer, tablet og mobil. Menu og indhold stiller sig selv op efter skærmen." },
    { id: "seo", title: "SEO", body: "Hver side får en titel og en kort beskrivelse, så Google kan vise den sådan her, når nogen søger." },
    { id: "speed", title: "Hastighed", body: "Siderne er bygget på forhånd, og dem, man kan klikke videre til, hentes i baggrunden. Så åbner de næsten med det samme." },
    { id: "gdpr", title: "GDPR", body: "Besøgende bliver spurgt, før der bruges cookies til statistik eller reklame. Et nej er ét klik, ligesom et ja." },
    { id: "security", title: "Sikkerhed", body: "Hængelåsen betyder, at forbindelsen er krypteret. Certifikatet fornyes af sig selv, og siden overvåges for kendte sikkerhedshuller." },
    { id: "a11y", title: "Tilgængelig", body: "Tydelig kontrast, overskrifter som en skærmlæser kan finde, og alt kan bruges med tastaturet." },
  ],
} as const;

export const ownership = {
  eyebrow: "Ejet af dig",
  title: "Din side. Dit domæne. Dit indhold.",
  lede: "Sikkerhed, opdateringer og GDPR klarer vi. Alt det, du laver, er dit, og du kan tage det med dig.",
  items: [
    { title: "Tag din side med", body: "Vi flytter din nuværende side, præcis som den ser ud. Intet redesign, ingen nedetid." },
    { title: "Helt dit", body: "Tekster, billeder og domæne tilhører dig, også hvis du en dag stopper." },
    { title: "Fri til at gå", body: "Ingen lang binding. Du kan altid opsige dit abonnement." },
  ],
};

export const stats = {
  title: "Fra ønske til live på få minutter.",
  items: [
    { value: "0 kr", body: "pr. rettelse inden for dit månedlige forbrug. Ingen timeregning." },
    { value: "2 min", body: "fra du trykker Udgiv, til ændringen er live for dine besøgende." },
    { value: "Alle", body: "i teamet kan rette på siden." },
  ],
};

export const paths = {
  title: "To veje ind.",
  lede: "Behold den side, du har, eller få en ny. Du kan rette begge selv fra dag ét.",
  move: {
    eyebrow: "Flyt din side",
    title: "Behold den side, du har",
    cta: "Flyt min side",
    points: ["Vi flytter siden, som den er", "Dit domæne følger med", "Adgang til platformen samme dag"],
  },
  fresh: {
    eyebrow: "Ny side",
    badge: "Fra bunden",
    title: "Få en ny, bygget efter din virksomhed",
    cta: "Byg min nye side",
    points: [
      "Retning, design og tekster til din virksomhed",
      "Specialister i kommunikation, branding og IT",
      "Du godkender og overtager den",
    ],
  },
};

export const about = {
  eyebrow: "Om os",
  title: "En god hjemmeside burde ikke kræve et bureau.",
  lede: "Vi har bygget Britesite på mange års erfaring med brand, markedsføring og udvikling. Og har du brug for et menneske, står vi altid klar. Uden kø og uden chatbot.",
  cta: "Book et møde",
  people: [
    { name: "Marc", role: "Teknik og udvikling", placeholder: "Marc, portræt", photo: undefined as string | undefined },
    { name: "Amanda", role: "Brand og markedsføring", placeholder: "Amanda, portræt", photo: undefined as string | undefined },
  ],
};

export const closing = {
  title: "Din virksomhed. Din hjemmeside.",
  lede: "Rettet på få minutter.",
  cta: "Kom i gang",
};

export const footer = {
  tagline: "Spørg om alt. Ret det hele.",
  columns: [
    {
      heading: "Britesite",
      links: [
        { href: "#os", label: "Om os" },
        { href: "#veje", label: "Ny eller flyttet" },
        { href: CONTACT_HREF, label: "Kontakt" },
      ],
    },
    {
      heading: "Juridisk",
      links: [
        { href: "#", label: "Privatlivspolitik" },
        { href: "#", label: "Handelsbetingelser" },
        { href: "#", label: "Cookies" },
      ],
    },
  ],
  copyright: "© 2026 Britesite · Danmark",
};
