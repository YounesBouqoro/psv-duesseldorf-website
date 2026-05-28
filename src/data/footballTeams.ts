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

dataChecklist: {
  trainingszeitenGeprueft: boolean;
  trainerGeprueft: boolean;
  kontaktGeprueft: boolean;
  ligaGeprueft: boolean;
  bildmaterialVorhanden: boolean;
  letztePruefung?: string;
  interneNotiz?: string;
};
}

export const footballTeams: FootballTeam[] = [
  {
    slug: "1-mannschaft",
    name: "1. Mannschaft",
    category: "Senioren",
    ageGroup: "Senioren",
    league: "Herren",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 10,
    acceptsTrial: true,
    description: "Die 1. Mannschaft bildet den leistungsorientierten Seniorenbereich des PSV Düsseldorf.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "2-mannschaft",
    name: "2. Mannschaft",
    category: "Senioren",
    ageGroup: "Senioren",
    league: "Herren",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 20,
    acceptsTrial: true,
    description: "Die 2. Mannschaft ergänzt den Seniorenbereich und bietet Spielern eine weitere Perspektive im Herrenfußball.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "alte-herren",
    name: "Alte Herren",
    category: "Senioren",
    ageGroup: "Ü32",
    trainingDays: ["Wird geprüft"],
    coaches: ["Betreuerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 30,
    acceptsTrial: true,
    description: "Die Alten Herren stehen für Fußball, Gemeinschaft und Vereinsleben im Erwachsenenbereich.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },

  {
    slug: "a1",
    name: "A1",
    category: "Jugend",
    ageGroup: "U19",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 100,
    acceptsTrial: true,
    description: "Die A1 ist der älteste Jugendbereich und bereitet Spieler auf den Übergang in den Seniorenfußball vor.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },

  {
    slug: "b1",
    name: "B1",
    category: "Jugend",
    ageGroup: "U17",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 110,
    acceptsTrial: true,
    description: "Die B1 richtet sich an Spieler der U17 und verbindet Ausbildung, Wettkampf und persönliche Entwicklung.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "b2",
    name: "B2",
    category: "Jugend",
    ageGroup: "U17",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 120,
    acceptsTrial: true,
    description: "Die B2 erweitert das Angebot im U17-Bereich und schafft zusätzliche Entwicklungsmöglichkeiten.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },

  {
    slug: "c1",
    name: "C1",
    category: "Jugend",
    ageGroup: "U15",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 130,
    acceptsTrial: true,
    description: "Die C1 steht für leistungsorientierte Weiterentwicklung im U15-Bereich.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "c2",
    name: "C2",
    category: "Jugend",
    ageGroup: "U15",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 140,
    acceptsTrial: true,
    description: "Die C2 bietet Spielern im U15-Bereich eine strukturierte Mannschaftsumgebung.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "c3",
    name: "C3",
    category: "Jugend",
    ageGroup: "U15",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 150,
    acceptsTrial: true,
    description: "Die C3 ergänzt den C-Jugendbereich und schafft weitere Spiel- und Trainingsmöglichkeiten.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },

  {
    slug: "d1",
    name: "D1",
    category: "Jugend",
    ageGroup: "U13",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 160,
    acceptsTrial: true,
    description: "Die D1 begleitet Spieler im U13-Bereich in einer wichtigen Entwicklungsphase.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "d2",
    name: "D2",
    category: "Jugend",
    ageGroup: "U13",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 170,
    acceptsTrial: true,
    description: "Die D2 bietet zusätzliche Perspektiven und Spielpraxis im U13-Bereich.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "d3",
    name: "D3",
    category: "Jugend",
    ageGroup: "U13",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 180,
    acceptsTrial: true,
    description: "Die D3 ergänzt den D-Jugendbereich und ermöglicht mehr Kindern regelmäßigen Vereinsfußball.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },

  {
    slug: "e1",
    name: "E1",
    category: "Jugend",
    ageGroup: "U11",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 190,
    acceptsTrial: true,
    description: "Die E1 fördert junge Spieler im U11-Bereich mit Fokus auf Technik, Bewegung und Teamgeist.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "e2",
    name: "E2",
    category: "Jugend",
    ageGroup: "U11",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 200,
    acceptsTrial: true,
    description: "Die E2 schafft weitere Entwicklungs- und Spielmöglichkeiten im U11-Bereich.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "e3",
    name: "E3",
    category: "Jugend",
    ageGroup: "U11",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 210,
    acceptsTrial: true,
    description: "Die E3 ergänzt den E-Jugendbereich mit altersgerechtem Training und Spielpraxis.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "e4",
    name: "E4",
    category: "Jugend",
    ageGroup: "U11",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 220,
    acceptsTrial: true,
    description: "Die E4 erweitert das Angebot für junge Spieler im E-Jugendbereich.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },

  {
    slug: "f1",
    name: "F1",
    category: "Jugend",
    ageGroup: "U9",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 230,
    acceptsTrial: true,
    description: "Die F1 steht für kindgerechten Fußball im U9-Bereich mit vielen Ballkontakten.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "f2",
    name: "F2",
    category: "Jugend",
    ageGroup: "U9",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 240,
    acceptsTrial: true,
    description: "Die F2 bietet Kindern im U9-Bereich eine weitere Mannschaftsumgebung.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "f3",
    name: "F3",
    category: "Jugend",
    ageGroup: "U9",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 250,
    acceptsTrial: true,
    description: "Die F3 ergänzt die F-Jugend mit spielerischer Förderung und Teamgefühl.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "f4",
    name: "F4",
    category: "Jugend",
    ageGroup: "U9",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 260,
    acceptsTrial: true,
    description: "Die F4 schafft zusätzliche Kapazität für den Kinderfußball im U9-Bereich.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },

  {
    slug: "g1",
    name: "G1",
    category: "Jugend",
    ageGroup: "U7",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 270,
    acceptsTrial: true,
    description: "Die G1 begleitet Kinder bei den ersten Schritten im Vereinsfußball.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "g2",
    name: "G2",
    category: "Jugend",
    ageGroup: "U7",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 280,
    acceptsTrial: true,
    description: "Die G2 bietet weiteren Kindern im U7-Bereich einen Einstieg in den Fußball.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  },
  {
    slug: "g3",
    name: "G3",
    category: "Jugend",
    ageGroup: "U7",
    trainingDays: ["Wird geprüft"],
    coaches: ["Trainerteam wird geprüft"],
    location: "PSV Düsseldorf Sportanlage",
    contactMail: "anfrage@polizei-sv-duesseldorf.de",
    status: "verify",
    priority: 290,
    acceptsTrial: true,
    description: "Die G3 ergänzt den jüngsten Nachwuchsbereich des PSV Düsseldorf.",

    dataChecklist: {
      trainingszeitenGeprueft: false,
      trainerGeprueft: false,
      kontaktGeprueft: false,
      ligaGeprueft: false,
      bildmaterialVorhanden: false,
      letztePruefung: "Wird geprüft",
      interneNotiz: "Vereinsdaten müssen vor Livegang verifiziert werden."
    }
  }
];

