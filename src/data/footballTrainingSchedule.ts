export interface FootballTrainingSlot {
  id: string;
  teamSlug: string;
  weekday: string;
  startTime: string;
  endTime: string;
  location: string;
  pitch?: string;
  season: "Sommer" | "Winter" | "Ganzjährig" | "Wird geprüft";
  verified: boolean;
  internalNote?: string;
}

export const footballTrainingSchedule: FootballTrainingSlot[] = [
  {
    id: "training-wird-geprueft",
    teamSlug: "allgemein",
    weekday: "Wird geprüft",
    startTime: "Wird geprüft",
    endTime: "Wird geprüft",
    location: "PSV Düsseldorf Sportanlage",
    season: "Wird geprüft",
    verified: false,
    internalNote: "Platzhalter bis zur finalen Freigabe echter Trainingszeiten."
  }
];
