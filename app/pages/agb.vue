<script setup lang="ts">
useHead({
  title: "AGB",
  meta: [
    {
      name: "description",
      content:
        "Allgemeine Geschäftsbedingungen des Hundesalons Bei Momo in Musterstadt.",
    },
    { name: "robots", content: "noindex, follow" },
  ],
});

const updated = "August 2026";

const groups = [
  {
    stage: "Bevor es losgeht",
    clauses: [
      {
        title: "Wofür diese Bedingungen gelten",
        paragraphs: [
          "Vertragspartner ist Max Muster, Bei Momo Hundesalon, Musterstraße 12, 6020 Musterstadt. Sobald wir einen Termin fixieren, gelten diese Bedingungen für die vereinbarte Leistung.",
        ],
      },
      {
        title: "Was du uns sagen solltest",
        paragraphs: [
          "Damit wir sicher arbeiten können, brauchen wir vorab ein ehrliches Bild: Vorerkrankungen, Operationen, Schmerzen beim Anfassen, Angst vor Geräuschen, Beißvorfälle. Nichts davon führt dazu, dass wir dich abweisen – es ändert nur, wie wir den Termin planen.",
          "Verschwiegene Auffälligkeiten sind der einzige Fall, in dem es für uns wirklich unangenehm wird. Entstehen dadurch Schäden, liegt das in deiner Verantwortung.",
          "Eine aufrechte Hundehaftpflichtversicherung setzen wir voraus.",
        ],
      },
      {
        title: "Gesundheit deines Hundes",
        paragraphs: [
          "Bring deinen Hund bitte nicht zu uns, wenn er hustet, Durchfall hat oder anderweitig ansteckend sein könnte. Wir verschieben in so einem Fall gerne kostenfrei.",
          "Entdecken wir während der Behandlung Flöhe oder Milben, hören wir auf und desinfizieren den Salon. Dafür verrechnen wir pauschal X € zusätzlich zur bis dahin geleisteten Arbeit.",
        ],
      },
    ],
  },
  {
    stage: "Am Termin",
    clauses: [
      {
        title: "Was wir zusagen",
        paragraphs: [
          "Wir arbeiten fachgerecht und im Rahmen des Tierschutzgesetzes. Zugesagt ist saubere handwerkliche Arbeit – nicht ein bestimmtes Aussehen, das ein Foto oder ein Rassestandard vorgibt.",
          "Was mit dem Fell deines Hundes machbar ist, entscheidet sich am Tisch. Weicht das von deiner Vorstellung ab, sagen wir es dir vorher und nicht hinterher.",
        ],
      },
      {
        title: "Verfilztes Fell",
        paragraphs: [
          "Dichte Verfilzungen lassen sich oft nicht auskämmen, ohne dem Hund weh zu tun. In solchen Fällen empfehlen wir, kurz zu scheren. Die Entscheidung triffst du – wir führen sie nur aus, wenn sie für das Tier vertretbar ist.",
          "Unter Verfilzungen liegen häufig wunde oder entzündete Hautstellen, die erst nach dem Scheren zum Vorschein kommen. Diese Schäden bestehen bereits vorher; verursacht haben wir sie nicht.",
        ],
      },
      {
        title: "Wenn wir abbrechen",
        paragraphs: [
          "Wird ein Hund massiv gestresst, panisch oder aggressiv, beenden wir den Termin. Bezahlt wird dann nur, was wir tatsächlich geschafft haben.",
          "Wir betrachten das nicht als gescheiterten Termin, sondern als Information für den nächsten. Oft klappt es beim zweiten Anlauf mit mehr Zeit deutlich besser.",
        ],
      },
    ],
  },
  {
    stage: "Rund um den Termin",
    clauses: [
      {
        title: "Absagen",
        paragraphs: [
          "Ein Anruf am Vortag genügt, dann geben wir den Platz an jemanden von der Warteliste weiter.",
          "Meldest du dich später oder gar nicht, verrechnen wir die Hälfte des vereinbarten Preises. Bei Krankheit oder anderen unvorhersehbaren Gründen verzichten wir darauf – sag uns einfach, was los war.",
        ],
      },
      {
        title: "Preise und Bezahlung",
        paragraphs: [
          "Maßgeblich ist die Preisliste, die am Tag der Behandlung gilt. Alle Beträge enthalten 20 % Umsatzsteuer.",
          "Wir rechnen nach Aufwand ab. Stellt sich während der Arbeit heraus, dass es deutlich länger dauert als besprochen, rufen wir dich an, bevor wir weitermachen. Ungefragte Nachforderungen gibt es bei uns nicht.",
          "Bezahlt wird nach der Behandlung im Salon, bar oder mit Karte.",
        ],
      },
      {
        title: "Abholung",
        paragraphs: [
          "Wir geben deinen Hund nur an dich oder eine Person heraus, die du uns vorher genannt hast.",
          "Bleibt ein Hund nach Ladenschluss unabgeholt und erreichen wir niemanden, bringen wir ihn in eine Tierpension in der Nähe. Die Kosten dafür tragen die Halter.",
        ],
      },
    ],
  },
  {
    stage: "Danach",
    clauses: [
      {
        title: "Wenn dir etwas nicht passt",
        paragraphs: [
          "Sprich uns am besten direkt bei der Abholung an. Was sich nachbessern lässt, bessern wir kostenlos nach – dafür gelten die gesetzlichen Gewährleistungsfristen.",
          "Fell wächst nicht auf Zuruf nach. Bei einem zu kurzen Schnitt können wir deshalb nur erklären, wie es dazu kam, und beim nächsten Mal anders vorgehen.",
        ],
      },
      {
        title: "Haftung",
        paragraphs: [
          "Für Personenschäden sowie für Vorsatz und grobe Fahrlässigkeit haften wir uneingeschränkt nach dem Gesetz.",
          "Gegenüber Unternehmern ist die Haftung für leichte Fahrlässigkeit ausgeschlossen. Gegenüber Verbrauchern bleibt sie im gesetzlich zulässigen Umfang bestehen.",
          "Braucht dein Hund während des Aufenthalts tierärztliche Hilfe, holen wir sie. Die Kosten trägst du, außer der Anlass geht auf unser Verschulden zurück.",
        ],
      },
      {
        title: "Fotos",
        paragraphs: [
          "Manchmal fotografieren wir Hunde nach der Pflege für unsere Website oder Social Media. Das passiert nur, wenn du einverstanden bist.",
          "Du kannst jederzeit widerrufen, auch Jahre später, ohne Begründung. Eine kurze Nachricht genügt und das Bild verschwindet.",
        ],
      },
    ],
  },
  {
    stage: "Rechtliches",
    clauses: [
      {
        title: "Streitigkeiten",
        paragraphs: [
          "An Verfahren vor einer Verbraucherschlichtungsstelle nehmen wir nicht teil – wir sind dazu weder verpflichtet noch bereit. Erfahrungsgemäß klärt ein Gespräch mehr als ein Formular.",
          "Es gilt österreichisches Recht, Vertragssprache ist Deutsch. Der gesetzliche Gerichtsstand für Verbraucher nach § 14 KSchG bleibt davon unberührt.",
        ],
      },
      {
        title: "Falls eine Klausel unwirksam ist",
        paragraphs: [
          "Dann gilt der Rest weiter. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.",
        ],
      },
    ],
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-gold-400">Rechtliches</p>
        <h1
          class="mt-4 font-display text-4xl font-semibold text-sand-50 sm:text-5xl"
        >
          Allgemeine Geschäftsbedingungen
        </h1>
        <p class="mt-5 max-w-xl leading-relaxed text-moss-100/85">
          Sortiert nach dem, was wann passiert – damit du nicht dreizehn
          Paragrafen lesen musst, um eine Frage beantwortet zu bekommen.
        </p>
        <p
          class="mt-6 font-tag text-xs uppercase tracking-wider text-moss-100/50"
        >
          Stand: {{ updated }}
        </p>
      </div>
    </section>

    <!-- Inhalt -->
    <section class="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
      <div class="space-y-16">
        <div v-for="group in groups" :key="group.stage">
          <p class="eyebrow-tag text-clay-600">{{ group.stage }}</p>

          <div class="mt-6 space-y-8">
            <div
              v-for="clause in group.clauses"
              :key="clause.title"
              class="tag-card p-6 pl-8"
            >
              <h2 class="font-display text-lg font-semibold text-moss-900">
                {{ clause.title }}
              </h2>
              <div class="mt-3 space-y-3 text-sm leading-relaxed text-ink-700">
                <p v-for="(paragraph, j) in clause.paragraphs" :key="j">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 border-t border-sand-200 pt-8">
        <p class="text-sm leading-relaxed text-ink-700">
          Etwas unklar? Frag lieber einmal zu viel als zu wenig – wir erklären
          das gern in normalen Worten.
        </p>
        <NuxtLink
          to="/kontakt"
          class="mt-4 inline-flex items-center gap-2 font-semibold text-clay-600 underline underline-offset-4"
        >
          Kontakt aufnehmen
          <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="text-xs" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
