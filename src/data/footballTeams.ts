export interface FootballTeam {
  slug: string;
  name: string;
  category: "Senioren" | "Jugend";
  ageGroup: string;
  birthYears?: string;
  location: string;
  contactMail: string;
  priority: number;
  description: string;
}

const location = "PSV-Sportanlage, Ernst-Poensgen-Allee 60, 40625 Düsseldorf";
const contactMail = "anfrage@polizei-sv-duesseldorf.de";

const seniorTeams: FootballTeam[] = [
  {
    slug: "1-mannschaft",
    name: "1. Mannschaft",
    category: "Senioren",
    ageGroup: "Senioren",
    location,
    contactMail,
    priority: 10,
    description: "Die 1. Mannschaft bildet gemeinsam mit der 2. Mannschaft den Seniorenbereich des PSV Düsseldorf."
  },
  {
    slug: "2-mannschaft",
    name: "2. Mannschaft",
    category: "Senioren",
    ageGroup: "Senioren",
    location,
    contactMail,
    priority: 20,
    description: "Die 2. Mannschaft ergänzt den Seniorenbereich des PSV Düsseldorf."
  },
  {
    slug: "alte-herren",
    name: "Alte Herren",
    category: "Senioren",
    ageGroup: "Ü32",
    location,
    contactMail,
    priority: 30,
    description: "Die Alten Herren verbinden Fußball, Bewegung und Gemeinschaft im Erwachsenenbereich."
  }
];

const youthSeeds = [
  ["a1", "A1", "U19", "2007–2008"],
  ["b1", "B1", "U17", "2009–2010"],
  ["b2", "B2", "U17", "2009–2010"],
  ["c1", "C1", "U15", "2011"],
  ["c2", "C2", "U15", "2012"],
  ["c3", "C3", "U15", "2012"],
  ["d1", "D1", "U13", "2013"],
  ["d2", "D2", "U13", "2014"],
  ["d3", "D3", "U13", "2014"],
  ["e1", "E1", "U11", "2015"],
  ["e2", "E2", "U11", "2015"],
  ["e3", "E3", "U11", "2016"],
  ["e4", "E4", "U11", "2016"],
  ["f1", "F1", "U9", "2017"],
  ["f2", "F2", "U9", "2017"],
  ["f3", "F3", "U9", "2018"],
  ["f4", "F4", "U9", "2018"],
  ["g1", "G1", "U7", "2019"],
  ["g2", "G2", "U7", "2020"],
  ["g3", "G3", "U7", "2020"]
] as const;

const youthTeams: FootballTeam[] = youthSeeds.map(([slug, name, ageGroup, birthYears], index) => ({
  slug,
  name,
  category: "Jugend",
  ageGroup,
  birthYears,
  location,
  contactMail,
  priority: 100 + index * 10,
  description: `${name} – Nachwuchsfußball beim PSV Düsseldorf für die Jahrgänge ${birthYears}.`
}));

export const footballTeams = [...seniorTeams, ...youthTeams];
