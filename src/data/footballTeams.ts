export interface FootballTeam {
  slug: string;
  name: string;
  category: "Senioren" | "Jugend";
  ageGroup: string;
  league?: string;
  trainingDays: string[];
  coaches: string[];
  location: string;
  contactMail?: string;
  status: "active" | "planned" | "verify";
  priority: number;
  acceptsTrial: boolean;
  description: string;
}

export const footballTeams: FootballTeam[] = [
  {
    slug: "1-mannschaft",
    name: "1. Mannschaft",
    category: "Senioren",
    ageGroup: "Senioren",
    league: "Herren",
    trainingDays: ["Dienstag", "Donnerstag"],
    coaches: ["Trainerteam PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 10,
    acceptsTrial: true,
    description: "Die 1. Mannschaft repräsentiert den leistungsorientierten Seniorenbereich des PSV Düsseldorf."
  },
  {
    slug: "2-mannschaft",
    name: "2. Mannschaft",
    category: "Senioren",
    ageGroup: "Senioren",
    league: "Herren",
    trainingDays: ["Dienstag", "Donnerstag"],
    coaches: ["Trainerteam PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 20,
    acceptsTrial: true,
    description: "Die 2. Mannschaft verbindet ambitionierten Amateurfußball mit Vereinsentwicklung."
  },
  {
    slug: "alte-herren",
    name: "Alte Herren",
    category: "Senioren",
    ageGroup: "Ü32",
    trainingDays: ["Mittwoch"],
    coaches: ["Betreuerteam Alte Herren"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 30,
    acceptsTrial: true,
    description: "Freizeitorientierter Fußball mit Fokus auf Gemeinschaft und Vereinsleben."
  },
  {
    slug: "a-jugend",
    name: "A-Jugend",
    category: "Jugend",
    ageGroup: "U19",
    trainingDays: ["Montag", "Mittwoch"],
    coaches: ["Jugendtrainer PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 40,
    acceptsTrial: true,
    description: "Leistungsorientierter Jugendfußball im ältesten Nachwuchsbereich."
  },
  {
    slug: "b-jugend",
    name: "B-Jugend",
    category: "Jugend",
    ageGroup: "U17",
    trainingDays: ["Dienstag", "Donnerstag"],
    coaches: ["Jugendtrainer PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 50,
    acceptsTrial: true,
    description: "Nachwuchsfußball mit Fokus auf Entwicklung, Technik und Spielverständnis."
  },
  {
    slug: "c-jugend",
    name: "C-Jugend",
    category: "Jugend",
    ageGroup: "U15",
    trainingDays: ["Dienstag", "Donnerstag"],
    coaches: ["Jugendtrainer PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 60,
    acceptsTrial: true,
    description: "Förderung junger Spieler im leistungsorientierten Jugendbereich."
  },
  {
    slug: "d-jugend",
    name: "D-Jugend",
    category: "Jugend",
    ageGroup: "U13",
    trainingDays: ["Montag", "Mittwoch"],
    coaches: ["Jugendtrainer PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 70,
    acceptsTrial: true,
    description: "Spielerische und technische Ausbildung im Grundlagenbereich."
  },
  {
    slug: "e-jugend",
    name: "E-Jugend",
    category: "Jugend",
    ageGroup: "U11",
    trainingDays: ["Montag", "Mittwoch"],
    coaches: ["Jugendtrainer PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 80,
    acceptsTrial: true,
    description: "Kindgerechter Fußball mit Fokus auf Spaß, Bewegung und Teamgeist."
  },
  {
    slug: "f-jugend",
    name: "F-Jugend",
    category: "Jugend",
    ageGroup: "U9",
    trainingDays: ["Dienstag", "Donnerstag"],
    coaches: ["Jugendtrainer PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 90,
    acceptsTrial: true,
    description: "Frühe Fußballförderung mit koordinativen und spielerischen Inhalten."
  },
  {
    slug: "g-jugend",
    name: "G-Jugend",
    category: "Jugend",
    ageGroup: "U7",
    trainingDays: ["Samstag"],
    coaches: ["Kindertrainer PSV Düsseldorf"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 100,
    acceptsTrial: true,
    description: "Die ersten Schritte im Vereinsfußball für die jüngsten Spieler."
  }
];
