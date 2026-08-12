<script setup lang="ts">
import type { FormattedClosure } from "~/composables/useOpeningHours";

const { upcomingClosures } = useOpeningHours();

interface NewsItem {
  date: string;
  title: string;
  paragraphs?: string[];
  upcomingClosures?: FormattedClosure[];
  href?: string;
  hrefLabel?: string;
}

const news: NewsItem[] = [
  {
    date: "Juli 2026",
    title: "Wartezeit aktuell vier bis sechs Wochen",
    paragraphs: [
      "Wir freuen uns riesig über den Zuspruch – gleichzeitig heißt das gerade: neue Anfragen brauchen etwas Geduld, bis ein Platz frei wird.",
      "Für kurzfristige Absagen führen wir eine Warteliste. Schreib uns einfach, dann melden wir uns, sobald etwas frei wird.",
    ],
    href: "/kontakt",
    hrefLabel: "Auf die Warteliste",
  },
  {
    date: "Mai 2026",
    title: "Neu im Salon: Momo-Programm für ältere Hunde",
    paragraphs: [
      "Massage, Wärmeanwendungen und sanfte Bewegungsübungen – gedacht für Hunde, denen das Aufstehen schwerer fällt als früher.",
      "Die Anwendungen ersetzen keinen Tierarztbesuch, sondern ergänzen ihn.",
    ],
    href: "/leistungen#Momo-Programm",
    hrefLabel: "Mehr erfahren",
  },
  {
    date: "Schließzeiten",
    title: "Wann der Salon dieses Jahr zu bleibt",
    paragraphs: [
      "Termine direkt davor und danach sind schnell weg – plan am besten etwas Vorlauf ein.",
    ],
    upcomingClosures,
    href: "/oeffnungszeiten",
    hrefLabel: "Alle Öffnungszeiten",
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

      <ul
        v-if="item.upcomingClosures?.length"
        class="mt-4 space-y-2 border-t border-sand-200 pt-4"
      >
        <li
          v-for="c in item.upcomingClosures"
          :key="c.period"
          class="flex items-baseline justify-between gap-4 text-sm"
        >
          <span class="font-semibold text-moss-900">{{ c.period }}</span>
          <span class="font-tag text-ink-700/60">{{ c.reason }}</span>
        </li>
      </ul>

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
