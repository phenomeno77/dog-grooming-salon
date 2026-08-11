<script setup lang="ts">
interface NewsItem {
  date: string;
  title: string;
  paragraphs: string[];
  href?: string;
  hrefLabel?: string;
}

// Add new announcements here, newest first. Each one renders as its own
// card below — remove an entry (or empty the array) and it just disappears.
const news: NewsItem[] = [
  {
    date: "Juli 2026",
    title: "Terminkalender bis September ausgebucht",
    paragraphs: [
      "Wir freuen uns riesig über den Zuspruch – gleichzeitig heißt das gerade: neue Anfragen finden frühestens im September einen Platz.",
      "Für kurzfristige Absagen führen wir eine Warteliste. Schreib uns einfach, dann melden wir uns, sobald etwas frei wird.",
    ],
    href: "/kontakt",
    hrefLabel: "Auf die Warteliste",
  },
  {
    date: "Mai 2026",
    title: "Neu im Salon: Wellness für ältere Hunde",
    paragraphs: [
      "Massage, Wärmeanwendungen und sanfte Bewegungsübungen – gedacht für Hunde, denen das Aufstehen schwerer fällt als früher.",
      "Die Anwendungen ersetzen keinen Tierarztbesuch, sondern ergänzen ihn.",
    ],
    href: "/leistungen#wellness",
    hrefLabel: "Mehr erfahren",
  },
  {
    date: "März 2026",
    title: "Betriebsurlaub im August",
    paragraphs: [
      "Vom 3. bis 17. August bleibt der Salon geschlossen. Termine davor und danach vergeben wir ab sofort.",
    ],
  },
];
</script>

<template>
  <div v-if="news.length" class="mt-12 grid gap-6 md:grid-cols-2">
    <article
      v-for="(item, i) in news"
      :key="i"
      class="tag-card flex flex-col p-7 pl-9"
      :class="i === 0 ? 'md:col-span-2' : ''"
    >
      <p class="eyebrow-tag text-clay-600">{{ item.date }}</p>

      <h3
        class="mt-2 font-display font-semibold text-moss-900"
        :class="i === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'"
      >
        {{ item.title }}
      </h3>

      <div class="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-ink-700">
        <p v-for="(paragraph, j) in item.paragraphs" :key="j">
          {{ paragraph }}
        </p>
      </div>

      <NuxtLink
        v-if="item.href && item.hrefLabel"
        :to="item.href"
        class="mt-6 inline-flex items-center gap-2 self-start font-semibold text-clay-600 underline underline-offset-4"
      >
        {{ item.hrefLabel }}
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="text-xs" />
      </NuxtLink>
    </article>
  </div>
</template>
