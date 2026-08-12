export interface OpeningDay {
  day: string;
  short: string;
  time: string | null;
  note?: string | null;
}

export interface Closure {
  /** ISO date, inclusive */
  from: string;
  /** ISO date, inclusive */
  to: string;
  reason: string;
}

/** Closure with the generated display label, e.g. "10. – 24. Februar" */
export interface FormattedClosure extends Closure {
  period: string;
}

// Single source of truth for opening hours across footer and page.
const oppeningHours: OpeningDay[] = [
  { day: "Montag", short: "Mo", time: null, note: "Ruhetag" },
  { day: "Dienstag", short: "Di", time: "08:00 – 16:00", note: null },
  {
    day: "Mittwoch",
    short: "Mi",
    time: "11:00 – 19:00",
    note: "später Abend für Berufstätige",
  },
  { day: "Donnerstag", short: "Do", time: "08:00 – 16:00", note: null },
  {
    day: "Freitag",
    short: "Fr",
    time: "08:00 – 16:00",
    note: "beide Groomer da",
  },
  {
    day: "Samstag",
    short: "Sa",
    time: "09:00 – 14:00",
    note: "beide Groomer da",
  },
  {
    day: "Sonntag",
    short: "So",
    time: null,
    note: "Sonntags wird geflochten",
  },
];

// Kurzfassung für den Footer – bei Änderungen oben mitpflegen.
const compactHours: { day: string; time: string | null }[] = [
  { day: "Dienstag", time: "08:00 – 16:00" },
  { day: "Mittwoch", time: "11:00 – 19:00" },
  { day: "Do – Fr", time: "08:00 – 16:00" },
  { day: "Samstag", time: "09:00 – 14:00" },
  { day: "So – Mo", time: null },
];

// Schließzeiten mit echten Daten – die Anzeige wird daraus generiert.
const closures: Closure[] = [
  { from: "2027-02-10", to: "2027-02-24", reason: "Winterpause" },
  { from: "2026-09-12", to: "2026-09-19", reason: "Fortbildung" },
  { from: "2026-12-23", to: "2026-12-27", reason: "Weihnachten" },
];

const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

function formatPeriod(from: Date, to: Date, currentYear: number): string {
  const sameMonth =
    from.getMonth() === to.getMonth() &&
    from.getFullYear() === to.getFullYear();

  // Jahr nur zeigen, wenn die Schließung nicht im laufenden Jahr endet.
  const year = to.getFullYear() !== currentYear ? ` ${to.getFullYear()}` : "";

  return sameMonth
    ? `${from.getDate()}. – ${to.getDate()}. ${MONTHS[to.getMonth()]}${year}`
    : `${from.getDate()}. ${MONTHS[from.getMonth()]} – ${to.getDate()}. ${MONTHS[to.getMonth()]}${year}`;
}

export function useOpeningHours() {
  // Index of today, Monday = 0
  const now = new Date();
  const weekday = now.getDay();
  const todayIndex = weekday === 0 ? 6 : weekday - 1;

  const currentYear = now.getFullYear();
  const today = new Date(currentYear, now.getMonth(), now.getDate());

  const allClosures: FormattedClosure[] = closures
    .map((c) => ({
      ...c,
      period: formatPeriod(new Date(c.from), new Date(c.to), currentYear),
    }))
    .sort((a, b) => a.from.localeCompare(b.from));

  // Noch nicht vorbei – laufende Schließungen bleiben sichtbar.
  const upcomingClosures = allClosures.filter((c) => new Date(c.to) >= today);

  return {
    oppeningHours,
    compactHours,
    closures: allClosures,
    upcomingClosures,
    todayIndex,
  };
}
