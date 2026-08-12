<script setup lang="ts">
useHead({
  title: "Öffnungszeiten – Bei Momo Hundesalon Musterstadt",
  meta: [
    {
      name: "description",
      content:
        "Öffnungszeiten vom Hundesalon Bei Momo in Musterstadt. Termine nur nach Vereinbarung – telefonisch unter 01234 / 56 78 90.",
    },
  ],
});

const { oppeningHours, upcomingClosures, todayIndex } = useOpeningHours();

const notes = [
  {
    icon: "clock",
    title: "Nur nach Vereinbarung",
    body: "Wir arbeiten mit einem Hund gleichzeitig – ohne Termin steht die Tür deshalb meist zu. Ein Anruf vorab spart dir den Weg.",
  },
  {
    icon: "phone",
    title: "Am besten telefonisch",
    body: "Während wir am Hund stehen, geht das Telefon nicht immer mit. Sprich einfach auf – wir rufen am selben Tag zurück.",
  },
  {
    icon: "circle-info",
    title: "Am Sonntag entsteht das Zubehör",
    body: "Da flechten wir Halsbänder und Leinen. Der Salon bleibt zu, aber fertige Bestellungen kannst du nach Absprache abholen.",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div class="max-w-2xl">
          <p class="eyebrow-tag text-gold-400">Öffnungszeiten</p>
          <h1
            class="mt-4 font-display text-4xl font-semibold leading-[1.05] text-sand-50 sm:text-5xl"
          >
            Wann du uns<br class="hidden sm:block" />
            erreichst.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-moss-100/85">
            Termine vergeben wir ausschließlich nach Vereinbarung. Ruf uns an
            oder schreib kurz – wir finden einen Platz, auch wenn es gerade
            etwas dauert.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <a
              href="tel:+49123456789"
              class="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-colors duration-200 hover:bg-clay-600"
            >
              <FontAwesomeIcon :icon="['fas', 'phone']" />
              01234 / 56 78 90
            </a>
            <NuxtLink
              to="/kontakt"
              class="rounded-full border border-sand-100/30 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-colors duration-200 hover:bg-sand-100/10"
            >
              Nachricht schreiben
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Zeiten -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <p class="eyebrow-tag text-clay-600">Die Woche</p>
      <h2
        class="mt-3 font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
      >
        Wann wir da sind.
      </h2>

      <div class="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <div class="tag-card divide-y divide-sand-200 p-2">
            <div
              v-for="(h, i) in oppeningHours"
              :key="h.day"
              class="flex items-center justify-between gap-4 rounded-lg px-4 py-4 sm:px-5"
              :class="i === todayIndex ? 'bg-moss-100/60' : ''"
            >
              <div class="flex items-center gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-tag text-xs font-semibold"
                  :class="
                    h.time
                      ? 'bg-moss-800 text-sand-50'
                      : 'bg-sand-200 text-ink-700/50'
                  "
                >
                  {{ h.short }}
                </span>
                <div class="min-w-0">
                  <p class="font-semibold text-moss-900">{{ h.day }}</p>
                  <p v-if="h.note" class="mt-0.5 text-xs text-ink-700/60">
                    {{ h.note }}
                  </p>
                </div>
              </div>

              <span
                class="shrink-0 text-right font-tag text-sm"
                :class="h.time ? 'text-ink-700' : 'text-ink-700/40'"
              >
                {{ h.time ?? "geschlossen" }}
              </span>
            </div>
          </div>

          <p class="mt-4 text-xs text-ink-700/60">
            Der letzte Termin startet jeweils zwei Stunden vor Ladenschluss.
          </p>
        </div>

        <!-- Hinweise -->
        <div class="space-y-5">
          <div
            v-for="note in notes"
            :key="note.title"
            class="tag-card p-6 pl-8"
          >
            <FontAwesomeIcon
              :icon="['fas', note.icon]"
              class="text-xl text-clay-600"
            />
            <h3 class="mt-3 font-display text-lg font-semibold text-moss-900">
              {{ note.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-700">
              {{ note.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Schließzeiten -->
    <section class="bg-sand-100">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div class="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p class="eyebrow-tag text-clay-600">Schließzeiten</p>
            <h2
              class="mt-3 font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
            >
              Auch wir brauchen mal frei.
            </h2>
            <p class="mt-4 leading-relaxed text-ink-700">
              Urlaub, Fortbildungen, Feiertage – ein paar Mal im Jahr bleibt der
              Salon zu. Wir kündigen das rechtzeitig an, aber die Termine
              drumherum sind erfahrungsgemäß schnell weg. Wer einen festen
              Rhythmus hat, bucht am besten gleich den nächsten mit.
            </p>
          </div>

          <ul class="space-y-4">
            <li
              v-for="c in upcomingClosures"
              :key="c.period"
              class="tag-card flex items-center justify-between gap-4 p-5 pl-7"
            >
              <span class="font-semibold text-moss-900">{{ c.period }}</span>
              <span class="font-tag text-sm text-ink-700/60">
                {{ c.reason }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
        <h2
          class="font-display text-3xl font-semibold text-sand-50 sm:text-4xl"
        >
          Passt keine Zeit?
        </h2>
        <p class="mx-auto mt-4 max-w-md leading-relaxed text-moss-100/85">
          Sag uns, wann es bei dir geht – manchmal lässt sich etwas schieben,
          und für kurzfristige Absagen führen wir eine Warteliste.
        </p>
        <NuxtLink
          to="/kontakt"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-colors duration-200 hover:bg-clay-600"
        >
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
          Auf die Warteliste
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
