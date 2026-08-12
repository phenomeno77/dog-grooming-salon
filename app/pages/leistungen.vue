<script setup lang="ts">
useHead({
  title: "Leistungen & Preise – Bei Momo Hundesalon Musterstadt",
  meta: [
    {
      name: "description",
      content:
        "Preise vom Hundesalon Bei Momo in Musterstadt: Komplettpflege nach Größe, Bad & Bürsten, Zusatzleistungen und Momo-Programm für ältere Hunde.",
    },
  ],
});

const included = [
  "Baden mit passendem Shampoo",
  "Föhnen und Bürsten",
  "Schnitt nach Absprache",
  "Krallen kürzen",
  "Ohren reinigen",
  "Pfotenballen pflegen",
];

const sizes = [
  {
    size: "XS",
    example: "Chihuahua, Zwergpinscher",
    weight: "bis 5 kg",
    price: "48",
    duration: "ca. 60 Min.",
  },
  {
    size: "S",
    example: "Dackel, Malteser",
    weight: "5 – 10 kg",
    price: "58",
    duration: "ca. 75 Min.",
  },
  {
    size: "M",
    example: "Cocker Spaniel, Pudel",
    weight: "10 – 20 kg",
    price: "68",
    duration: "ca. 90 Min.",
    popular: true,
  },
  {
    size: "L",
    example: "Australian Shepherd",
    weight: "20 – 30 kg",
    price: "82",
    duration: "ca. 2 Std.",
  },
  {
    size: "XL",
    example: "Golden Retriever",
    weight: "30 – 45 kg",
    price: "96",
    duration: "ca. 2,5 Std.",
  },
  {
    size: "XXL",
    example: "Bernhardiner, Neufundländer",
    weight: "ab 45 kg",
    price: "118",
    duration: "ca. 3 Std.",
  },
];

const extras = [
  {
    title: "Bad & Föhnen",
    desc: "Ohne Schnitt, für zwischendurch nach dem Waldspaziergang.",
    price: "ab € 32,–",
  },
  {
    title: "Entfilzen",
    desc: "Bei starker Verfilzung, je nach Aufwand. Wir sagen vorher, ob es sich lohnt.",
    price: "ab € 25,–",
  },
  {
    title: "Handstripping",
    desc: "Für rauhaarige Rassen, bei denen Scheren das Fell ruinieren würde.",
    price: "ab € 45,–",
  },
  {
    title: "Nur Krallen",
    desc: "Schnell zwischendurch, ohne Termin – einfach kurz anrufen.",
    price: "€ 12,–",
  },
  {
    title: "Gesicht & Pfoten",
    desc: "Nachschnitt zwischen zwei großen Terminen.",
    price: "€ 22,–",
  },
  {
    title: "Welpen-Kennenlernen",
    desc: "30 Minuten ohne Programm: Geräusche hören, Tisch kennenlernen, Leckerli holen.",
    price: "kostenlos",
  },
];

const momoProgram = [
  {
    title: "Massage",
    body: "Lockert verspannte Muskulatur nach Schonhaltung oder langen Pausen.",
    price: "€ 38,–",
    note: "30 Minuten",
    label: "Foto: Massage",
  },
  {
    title: "Wärmeanwendung",
    body: "Rotlicht und warme Auflagen für steife Gelenke, besonders im Winter.",
    price: "€ 30,–",
    note: "25 Minuten",
    label: "Foto: Wärmeanwendung",
  },
  {
    title: "Bewegungsübungen",
    body: "Sanftes Training auf Balancekissen, um Muskulatur wieder aufzubauen.",
    price: "€ 42,–",
    note: "40 Minuten",
    label: "Foto: Bewegungsübungen",
  },
];

const rules = [
  {
    icon: "clock",
    title: "Absagen einen Tag vorher",
    body: "Dann können wir den Platz noch an jemanden von der Warteliste geben. Bei kurzfristigeren Absagen berechnen wir die Hälfte.",
  },
  {
    icon: "circle-info",
    title: "Preise sind Richtwerte",
    body: "Was dein Hund wirklich braucht, sehen wir erst am Fell. Abweichungen besprechen wir vorher, nie danach.",
  },
  {
    icon: "check",
    title: "Kein Schnitt ohne Bad",
    body: "Schmutz macht die Schere stumpf und den Schnitt ungleichmäßig. Deshalb gehört Baden immer dazu.",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div class="max-w-2xl">
          <p class="eyebrow-tag text-gold-400">Leistungen &amp; Preise</p>
          <h1
            class="mt-4 font-display text-4xl font-semibold leading-[1.05] text-sand-50 sm:text-5xl"
          >
            Was es kostet,<br class="hidden sm:block" />
            erfährst du vorher.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-moss-100/85">
            Wir rechnen nach Größe und Aufwand ab, nicht nach Rasse. Beim ersten
            Blick aufs Fell sagen wir dir, wo dein Hund landet – und dabei
            bleibt es dann auch.
          </p>
        </div>
      </div>
    </section>

    <!-- Komplettpflege -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div class="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p class="eyebrow-tag text-clay-600">Komplettpflege</p>
          <h2
            class="mt-3 font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
          >
            Der große Termin.
          </h2>
          <p class="mt-4 leading-relaxed text-ink-700">
            Alles, was dazugehört, in einem Durchgang. Die Zeitangaben sind grob
            – wenn dein Hund eine Pause braucht, nimmt er sie.
          </p>

          <ul class="mt-6 space-y-2.5">
            <li
              v-for="item in included"
              :key="item"
              class="flex items-start gap-3 text-sm text-ink-700"
            >
              <FontAwesomeIcon
                :icon="['fas', 'check']"
                class="mt-1 text-clay-600"
              />
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="s in sizes"
            :key="s.size"
            class="tag-card relative flex items-center justify-between gap-4 p-5 pl-7"
          >
            <div class="min-w-0">
              <p class="font-display text-lg font-semibold text-moss-900">
                {{ s.size }}
                <span class="ml-1 text-sm font-normal text-ink-700/60">
                  {{ s.weight }}
                </span>
              </p>
              <p class="mt-0.5 truncate text-xs text-ink-700/70">
                {{ s.example }}
              </p>
              <p class="mt-1 font-tag text-xs text-ink-700/50">
                {{ s.duration }}
              </p>
            </div>

            <p
              class="shrink-0 font-display text-2xl font-semibold text-clay-600"
            >
              €&thinsp;{{ s.price }}
            </p>

            <span
              v-if="s.popular"
              class="eyebrow-tag absolute -top-2.5 right-4 rounded-full bg-moss-800 px-2.5 py-1 text-[0.6rem] text-sand-50"
            >
              häufigste Größe
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Zusatzleistungen -->
    <section class="bg-sand-100">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-clay-600">Einzelleistungen</p>
        <h2
          class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
        >
          Muss nicht immer das ganze Programm sein.
        </h2>

        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="e in extras"
            :key="e.title"
            class="tag-card flex flex-col p-6 pl-8"
          >
            <h3 class="font-display text-lg font-semibold text-moss-900">
              {{ e.title }}
            </h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
              {{ e.desc }}
            </p>
            <p
              class="mt-4 border-t border-sand-200 pt-4 font-tag text-sm font-semibold text-clay-600"
            >
              {{ e.price }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Momo-Programm -->
    <section id="Momo-Programm" class="scroll-mt-24">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-clay-600">Momo-Programm</p>
        <h2
          class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
        >
          Für Hunde, denen das Aufstehen schwerer fällt.
        </h2>
        <p class="mt-4 max-w-xl leading-relaxed text-ink-700">
          Gedacht als Ergänzung für ältere oder steife Hunde – meist im
          Anschluss an einen Pflegetermin, wenn das Fell ohnehin schon warm ist.
        </p>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="w in momoProgram"
            :key="w.title"
            class="tag-card flex flex-col p-6 pl-8"
          >
            <ImgPlaceholder
              :label="w.label"
              ratio="aspect-[16/10]"
              tone="moss"
            />
            <h3 class="mt-5 font-display text-xl font-semibold text-moss-900">
              {{ w.title }}
            </h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
              {{ w.body }}
            </p>
            <p
              class="mt-4 flex items-baseline justify-between border-t border-sand-200 pt-4 font-tag text-sm"
            >
              <span class="font-semibold text-clay-600">{{ w.price }}</span>
              <span class="text-ink-700/60">{{ w.note }}</span>
            </p>
          </article>
        </div>

        <div class="tag-card mt-10 max-w-2xl p-6 pl-8">
          <p class="text-sm leading-relaxed text-ink-700">
            <strong class="text-moss-900">Wichtig:</strong> Diese Anwendungen
            sind Wohlfühlprogramm, keine Heilbehandlung. Sie ersetzen weder
            Diagnose noch Therapie durch eine Tierärztin oder einen Tierarzt.
            Bei akuten Beschwerden bitte zuerst dorthin.
          </p>
        </div>
      </div>
    </section>

    <!-- Gut zu wissen -->
    <section class="bg-sand-100">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-clay-600">Gut zu wissen</p>
        <h2
          class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
        >
          Drei Dinge vorab.
        </h2>

        <div class="mt-12 grid gap-6 sm:grid-cols-3">
          <div
            v-for="rule in rules"
            :key="rule.title"
            class="tag-card p-6 pl-8"
          >
            <FontAwesomeIcon
              :icon="['fas', rule.icon]"
              class="text-2xl text-clay-600"
            />
            <h3 class="mt-4 font-display text-lg font-semibold text-moss-900">
              {{ rule.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-700">
              {{ rule.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
        <h2
          class="font-display text-3xl font-semibold text-sand-50 sm:text-4xl"
        >
          Unsicher, was dein Hund braucht?
        </h2>
        <p class="mx-auto mt-4 max-w-md leading-relaxed text-moss-100/85">
          Schreib uns kurz die Rasse und wann er zuletzt beim Groomer war – dann
          sagen wir dir, was sinnvoll ist und was es kostet.
        </p>
        <NuxtLink
          to="/kontakt"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-colors duration-200 hover:bg-clay-600"
        >
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
          Kurz nachfragen
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
