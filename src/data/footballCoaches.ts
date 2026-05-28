export interface FootballCoach {
  id: string;
  name: string;
  role: string;
  teams: string[];
  email?: string;
  phone?: string;
  license?: string;
  image?: string;
  verified: boolean;
  internalNote?: string;
}

export const footballCoaches: FootballCoach[] = [
  {
    id: "trainerteam-wird-geprueft",
    name: "Trainerteam wird geprüft",
    role: "Trainerteam",
    teams: [],
    verified: false,
    internalNote: "Platzhalter bis zur finalen Freigabe echter Trainerdaten."
  }
];
