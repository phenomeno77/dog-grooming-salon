<script setup lang="ts">
useHead({
  title: "Über uns",
  meta: [
    {
      name: "description",
      content:
        "Wie wir arbeiten und wer dahinter steckt: das Team vom Hundesalon Bei Momo in Musterstadt – ein Hund pro Termin, ehrliche Preise, sanfte Produkte.",
    },
  ],
});

const facts = [
  { value: "2021", label: "eröffnet" },
  { value: "1", label: "Hund pro Termin" },
  { value: "2", label: "Groomer im Team" },
  { value: "40 m²", label: "Salonfläche" },
];

const principles = [
  {
    icon: "clock",
    title: "Kein Fließband",
    body: "Wir buchen bewusst weniger Termine, als wir könnten. Dein Hund wartet nicht in einer Box, bis wir Zeit haben – er ist dran, wenn er da ist.",
  },
  {
    icon: "check",
    title: "Wir sagen auch mal nein",
    body: "Wenn ein Fell so verfilzt ist, dass Scheren Stress bedeuten würde, erklären wir das lieber, statt es durchzuziehen. Manchmal ist kürzer die freundlichere Lösung.",
  },
  {
    icon: "star",
    title: "Was drin ist, steht drauf",
    body: "Shampoos ohne Silikone, Parabene und Paraffine. Wir zeigen dir gern die Flasche, wenn du wissen willst, was auf deinem Hund landet.",
  },
  {
    icon: "circle-info",
    title: "Preise vor dem Termin",
    body: "Was es kostet, besprechen wir beim ersten Blick aufs Fell – nicht an der Kasse. Überraschungen gibt es bei uns nur in Form von Leckerlis.",
  },
];

const team = [
  {
    name: "Musterfrau",
    role: "Inhaberin & Groomer",
    body: "Hat 2021 den Salon aufgemacht, nachdem er vorher acht Jahre in fremden Salons gearbeitet hat. Sein Spezialgebiet ist Handstripping – und Hunde, die anderswo als „schwierig“ gelten.",
    detail: "Am liebsten: Terrier aller Art",
    label: "Foto: Musterfrau",
    imageSrc: "/images/ueber-uns/musterfrau.jpg",
  },
  {
    name: "Beispiel Anna",
    role: "Groomerin & Momo-Programm",
    body: "Kam 2023 dazu und hat das Momo-Programm aufgebaut. Nimmt sich der nervösen Kandidaten an und schafft es meist, dass sie beim zweiten Termin von allein reinlaufen.",
    detail: "Am liebsten: alte Herrschaften",
    label: "Foto: Beispiel Anna",
    imageSrc: "/images/ueber-uns/anna.jpg",
  },
  {
    name: "Momo",
    role: "Salonhund & Empfang",
    body: "Vier Jahre alt, offiziell nicht angestellt. Begrüßt jeden Gast, prüft mitgebrachte Taschen auf Essbares und schläft den Rest des Tages im Fenster.",
    detail: "Am liebsten: Käse",
    label: "Foto: Momo, der Salonhund",
    imageSrc: "/images/ueber-uns/momo.jpg",
  },
];

const steps = [
  {
    title: "Ankommen",
    body: "Erst mal schnuppern lassen. Wir schauen uns gemeinsam das Fell an und besprechen, was heute passieren soll.",
  },
  {
    title: "Baden & Trocknen",
    body: "Lauwarmes Wasser, passendes Shampoo, danach föhnen – bei ängstlichen Hunden auf niedrigster Stufe oder mit dem Handtuch.",
  },
  {
    title: "Schnitt & Pflege",
    body: "Schere, Maschine oder Trimmmesser, je nach Felltyp. Dazu Krallen, Ohren und Pfoten.",
  },
  {
    title: "Abholen",
    body: "Wir zeigen dir, was wir gemacht haben, und was du zu Hause weiter machen kannst. Dann geht's stolz nach Hause.",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div class="max-w-2xl">
          <p class="eyebrow-tag text-gold-400">Über uns</p>
          <h1
            class="mt-4 font-display text-4xl font-semibold leading-[1.05] text-sand-50 sm:text-5xl"
          >
            Ein Hund. Zwei Hände.<br class="hidden sm:block" />
            Volle Aufmerksamkeit.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-moss-100/85">
            Seit 2021 pflegen wir Hunde in Musterstadt – jeden einzelnen so, als
            wäre er der einzige an diesem Tag.
          </p>
        </div>

        <dl class="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div v-for="fact in facts" :key="fact.label">
            <dt class="eyebrow-tag text-moss-100/50">{{ fact.label }}</dt>
            <dd
              class="mt-1 font-display text-3xl font-semibold text-gold-400 sm:text-4xl"
            >
              {{ fact.value }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Story -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div class="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <ImgPlaceholder
          label="Foto: Der Salon von innen"
          ratio="aspect-[4/3]"
          tone="clay"
          src="/images/ueber-uns/hero.jpg"
        />

        <div>
          <p class="eyebrow-tag text-clay-600">Wie es dazu kam</p>
          <h2
            class="mt-3 font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
          >
            Angefangen hat alles mit einem miserablen Haarschnitt.
          </h2>
          <div class="mt-5 space-y-4 leading-relaxed text-ink-700">
            <p>
              Genauer gesagt mit dem eines Bearded Collie namens Sepp, der aus
              einem anderen Salon kam und drei Tage lang nicht aus seinem Korb
              wollte. Es war nicht der Schnitt selbst – es war die Hektik
              drumherum.
            </p>
            <p>
              Daraus wurde die Idee für einen Salon, in dem immer nur ein Hund
              gleichzeitig ist. Kein Bellen aus dem Nebenraum, keine Wartebox,
              keine Uhr, die drückt.
            </p>
            <p>
              Das macht uns langsamer und teurer als andere. Dafür kommen die
              meisten Hunde beim zweiten Mal freiwillig durch die Tür – und
              darauf sind wir ehrlich stolz.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prinzipien -->
    <section class="bg-sand-100">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-clay-600">Unsere Haltung</p>
        <h2
          class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
        >
          Vier Dinge, bei denen wir nicht flexibel sind.
        </h2>

        <div class="mt-12 grid gap-6 sm:grid-cols-2">
          <div
            v-for="item in principles"
            :key="item.title"
            class="tag-card p-7 pl-9"
          >
            <FontAwesomeIcon
              :icon="['fas', item.icon]"
              class="text-2xl text-clay-600"
            />
            <h3 class="mt-4 font-display text-xl font-semibold text-moss-900">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-700">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <p class="eyebrow-tag text-clay-600">Das Team</p>
      <h2
        class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
      >
        Zwei Menschen und ein Maltipoo.
      </h2>
      <p class="mt-4 max-w-xl leading-relaxed text-ink-700">
        Bei uns triffst du jedes Mal dieselben Gesichter. Das merkt man vor
        allem den Hunden an, die beim zweiten Termin schon deutlich entspannter
        sind.
      </p>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="member in team"
          :key="member.name"
          class="tag-card flex flex-col p-6 pl-8"
        >
          <ImgPlaceholder
            :label="member.label"
            ratio="aspect-[4/5]"
            tone="moss"
            :src="member.imageSrc"
          />
          <h3 class="mt-5 font-display text-xl font-semibold text-moss-900">
            {{ member.name }}
          </h3>
          <p class="eyebrow-tag mt-1 text-clay-600">{{ member.role }}</p>
          <p class="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
            {{ member.body }}
          </p>
          <p
            class="mt-4 border-t border-sand-200 pt-4 font-tag text-xs text-ink-700/60"
          >
            {{ member.detail }}
          </p>
        </article>
      </div>
    </section>

    <!-- Ablauf -->
    <section class="bg-sand-100">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-clay-600">Ablauf</p>
        <h2
          class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
        >
          Was beim ersten Termin passiert.
        </h2>
        <p class="mt-4 max-w-xl leading-relaxed text-ink-700">
          Plan etwa zwei Stunden ein. Wenn dein Hund unruhig wird, machen wir
          eine Pause – das gehört dazu und kostet nicht extra.
        </p>

        <ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="(step, i) in steps"
            :key="step.title"
            class="tag-card p-6 pl-8"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full bg-moss-800 font-display text-sm font-semibold text-sand-50"
            >
              {{ i + 1 }}
            </span>
            <h3 class="mt-4 font-display text-lg font-semibold text-moss-900">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-700">
              {{ step.body }}
            </p>
          </li>
        </ol>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
        <h2
          class="font-display text-3xl font-semibold text-sand-50 sm:text-4xl"
        >
          Klingt nach eurem Salon?
        </h2>
        <p class="mx-auto mt-4 max-w-md leading-relaxed text-moss-100/85">
          Dann komm vorbei – oder schreib uns vorher kurz, wenn dein Hund
          Besonderheiten mitbringt, auf die wir uns einstellen sollen.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/kontakt"
            class="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-colors duration-200 hover:bg-clay-600"
          >
            <FontAwesomeIcon :icon="['fas', 'envelope']" />
            Termin anfragen
          </NuxtLink>
          <NuxtLink
            to="/leistungen"
            class="rounded-full border border-sand-100/30 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-colors duration-200 hover:bg-sand-100/10"
          >
            Preise ansehen
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
