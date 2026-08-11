<script setup lang="ts">
useHead({
  title: "Fellwerk – Hundesalon in Musterstadt",
  meta: [
    {
      name: "description",
      content:
        "Hundesalon Fellwerk in Musterstadt: Fellpflege ohne Zeitdruck, Handarbeit für Halsbänder und Leinen sowie Wellness-Anwendungen für deinen Vierbeiner.",
    },
  ],
});

const highlights = [
  {
    icon: "clock",
    title: "Zeit statt Taktung",
    body: "Ein Hund pro Termin. Kein Wartekäfig, keine Hektik – wir arbeiten im Tempo deines Vierbeiners.",
  },
  {
    icon: "check",
    title: "Ehrliche Preise",
    body: "Abgerechnet wird nach Aufwand, nicht nach Rasse. Was es kostet, sagen wir vorher – nicht danach.",
  },
  {
    icon: "star",
    title: "Sanfte Produkte",
    body: "Shampoos und Pflegemittel ohne Silikone und Parabene, abgestimmt auf Fell und Haut.",
  },
];

const services = [
  {
    title: "Komplettpflege",
    body: "Der große Termin: dein Hund kommt struppig rein und geht als bessere Version seiner selbst wieder raus. Wir nehmen uns zwei Stunden dafür.",
    price: "ab € 65,–",
    priceNote: "je nach Größe & Fell",
    label: "Foto: Hund beim Fellschnitt",
  },
  {
    title: "Wäsche & Bürsten",
    body: "Für alle, die es nach dem Waldspaziergang eilig haben. Nach 45 Minuten riecht dein Sofa wieder wie ein Sofa.",
    price: "ab € 35,–",
    priceNote: "ca. 45 Minuten",
    label: "Foto: Hund in der Badewanne",
  },
  {
    title: "Handarbeit & Zubehör",
    body: "Halsbänder und Leinen, die wir nebenan selbst flechten. Farbe aussuchen, Maß nehmen, in einer Woche ist es fertig.",
    price: "ab € 24,–",
    priceNote: "Einzelstücke",
    label: "Foto: Halsbänder aus Paracord",
  },
  {
    title: "Wellness & Balance",
    body: "Für ältere Hunde, steife Gelenke und alle, denen der Winter in den Knochen sitzt. Ruhig, warm, ohne Leistungsdruck.",
    price: "ab € 45,–",
    priceNote: "pro Einheit",
    label: "Foto: Hund bei Wellness-Anwendung",
  },
];

const team = [
  {
    name: "Muster Max",
    role: "Inhaber & Groomer",
    body: "Gelernter Hundefriseur, seit zwölf Jahren im Beruf. Spezialist für Handstripping und schwierige Kandidaten.",
    label: "Foto: Muster Max",
  },
  {
    name: "Beispiel Anna",
    role: "Groomerin & Wellness",
    body: "Kümmert sich um Pflege und Wellness-Anwendungen. Hat für jeden nervösen Hund einen langen Atem.",
    label: "Foto: Beispiel Anna",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-moss-900">
      <div
        class="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:px-8 md:py-28"
      >
        <div>
          <p class="eyebrow-tag text-gold-400">Hundesalon · Musterstadt</p>
          <h1
            class="mt-4 font-display text-4xl font-semibold leading-[1.05] text-sand-50 sm:text-5xl lg:text-6xl"
          >
            Dein Hund geht hier<br class="hidden sm:block" />
            als er selbst raus.
          </h1>
          <p class="mt-6 max-w-md text-lg leading-relaxed text-moss-100/85">
            Fellpflege ohne Zeitdruck, in einem ruhigen Salon mitten in
            Musterstadt. Ein Hund pro Termin – und so viel Zeit, wie er braucht.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <NuxtLink
              to="/kontakt"
              class="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5"
            >
              Termin anfragen
              <FontAwesomeIcon :icon="['fas', 'envelope']" />
            </NuxtLink>
            <NuxtLink
              to="/leistungen"
              class="rounded-full border border-sand-100/30 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-sand-100/10"
            >
              Preise ansehen
            </NuxtLink>
          </div>

          <p class="mt-8 flex items-center gap-2 text-sm text-moss-100/70">
            <FontAwesomeIcon :icon="['fas', 'phone']" class="text-gold-400" />
            Lieber kurz anrufen? 01234 / 56 78 90
          </p>
        </div>

        <ImgPlaceholder
          label="Foto: Hund im Fellwerk Salon"
          ratio="aspect-[4/5]"
          tone="clay"
        />
      </div>
    </section>

    <!-- Highlights -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div class="grid gap-6 sm:grid-cols-3">
        <div
          v-for="item in highlights"
          :key="item.title"
          class="tag-card p-6 pl-8"
        >
          <FontAwesomeIcon
            :icon="['fas', item.icon]"
            class="text-2xl text-clay-600"
          />
          <h2 class="mt-4 font-display text-lg font-semibold text-moss-900">
            {{ item.title }}
          </h2>
          <p class="mt-2 text-sm leading-relaxed text-ink-700">
            {{ item.body }}
          </p>
        </div>
      </div>
    </section>

    <hr class="stitch-divider mx-auto max-w-6xl" />

    <!-- Leistungen -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <p class="eyebrow-tag text-clay-600">Leistungen</p>
      <h2
        class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
      >
        Vom kurzen Bad bis zur kompletten Verwandlung.
      </h2>
      <p class="mt-4 max-w-xl leading-relaxed text-ink-700">
        Alle Preise sind Richtwerte – was dein Hund wirklich braucht, besprechen
        wir vorher in Ruhe.
      </p>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="service in services"
          :key="service.title"
          class="tag-card flex flex-col p-6 pl-8"
        >
          <ImgPlaceholder
            :label="service.label"
            ratio="aspect-[4/3]"
            tone="sand"
          />
          <h3 class="mt-5 font-display text-xl font-semibold text-moss-900">
            {{ service.title }}
          </h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
            {{ service.body }}
          </p>
          <p class="mt-4 border-t border-sand-200 pt-4 font-tag text-sm">
            <span class="font-semibold text-clay-600">{{ service.price }}</span>
            <span class="ml-2 text-ink-700/60">{{ service.priceNote }}</span>
          </p>
        </article>
      </div>

      <NuxtLink
        to="/leistungen"
        class="mt-10 inline-flex items-center gap-2 font-semibold text-clay-600 underline underline-offset-4"
      >
        Komplette Preisliste ansehen
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="text-xs" />
      </NuxtLink>
    </section>

    <!-- Aktuelles -->
    <section class="bg-moss-100/60">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-clay-600">Aktuelles</p>
        <h2
          class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
        >
          Was es bei uns gerade Neues gibt.
        </h2>
        <p class="mt-4 max-w-xl leading-relaxed text-ink-700">
          Terminlage, Urlaubszeiten und alles, was du vor deinem Besuch wissen
          solltest.
        </p>

        <NewsCard />
      </div>
    </section>

    <!-- Team -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div class="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p class="eyebrow-tag text-clay-600">Das Team</p>
          <h2
            class="mt-3 font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
          >
            Zwei Paar Hände, die wissen, was sie tun.
          </h2>
          <p class="mt-4 leading-relaxed text-ink-700">
            Wir sind ein kleiner Salon und wollen das auch bleiben. So kennen
            wir jeden Hund beim Namen – und merken uns, wer die Föhnstufe lieber
            leise mag.
          </p>

          <NuxtLink
            to="/ueber-uns"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-moss-800 px-6 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5"
          >
            Mehr über uns
            <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
          </NuxtLink>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="member in team"
            :key="member.name"
            class="tag-card p-6 pl-8"
          >
            <ImgPlaceholder
              :label="member.label"
              ratio="aspect-square"
              tone="moss"
            />
            <h3 class="mt-5 font-display text-lg font-semibold text-moss-900">
              {{ member.name }}
            </h3>
            <p class="eyebrow-tag mt-1 text-clay-600">{{ member.role }}</p>
            <p class="mt-3 text-sm leading-relaxed text-ink-700">
              {{ member.body }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
        <h2
          class="font-display text-3xl font-semibold text-sand-50 sm:text-4xl"
        >
          Noch keinen Termin?
        </h2>
        <p class="mx-auto mt-4 max-w-md leading-relaxed text-moss-100/85">
          Schreib uns kurz, worum es geht – wir melden uns meist noch am selben
          Tag zurück.
        </p>
        <NuxtLink
          to="/kontakt"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5"
        >
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
          Jetzt anfragen
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
