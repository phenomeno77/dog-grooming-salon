<script setup lang="ts">
useHead({
  title: "Impressum",
  meta: [
    {
      name: "description",
      content:
        "Impressum und Offenlegung gemäß § 5 ECG, § 63 GewO und § 25 MedienG des Hundesalons Bei Momo.",
    },
    { name: "robots", content: "noindex, follow" },
  ],
});

const details = [
  { label: "Name", value: "Max Muster" },
  {
    label: "Unternehmensgegenstand",
    value: "Hundesalon – Betreuung und Pflege von Tieren",
  },
  {
    label: "Standort der Gewerbeberechtigung",
    value: "Musterstraße 12, 6020 Musterstadt, Österreich",
  },
  { label: "Telefon", value: "+43 512 345678", href: "tel:+43512345678" },
  {
    label: "E-Mail",
    value: "hallo@Bei Momo.example",
    href: "mailto:hallo@Bei Momo.example",
  },
  { label: "UID-Nummer", value: "ATU12345678" },
  {
    label: "Mitgliedschaften",
    value:
      "Mitglied der WKÖ und der WK Tirol, Fachgruppe Persönliche Dienstleister",
  },
  { label: "Aufsichtsbehörde", value: "Bezirkshauptmannschaft Musterstadt" },
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
          Impressum
        </h1>
        <p class="mt-5 max-w-xl leading-relaxed text-moss-100/85">
          Informationen gemäß § 5 E-Commerce-Gesetz (ECG), § 63 Gewerbeordnung
          (GewO) und Offenlegung nach § 25 Mediengesetz.
        </p>
      </div>
    </section>

    <!-- Anbieter -->
    <section class="mx-auto max-w-3xl px-5 pt-16 md:px-8 md:pt-20">
      <div class="tag-card p-7 pl-9">
        <p class="eyebrow-tag text-clay-600">Medieninhaber und Betreiber</p>
        <p class="mt-3 font-display text-xl font-semibold text-moss-900">
          Bei Momo Hundesalon
        </p>

        <dl class="mt-6 divide-y divide-sand-200">
          <div
            v-for="item in details"
            :key="item.label"
            class="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6"
          >
            <dt class="text-sm text-ink-700/60 sm:w-52 sm:shrink-0">
              {{ item.label }}
            </dt>
            <dd class="text-sm text-ink-700">
              <a
                v-if="item.href"
                :href="item.href"
                class="text-clay-600 underline underline-offset-4"
              >
                {{ item.value }}
              </a>
              <span v-else>{{ item.value }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Rechtstexte -->
    <section class="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
      <div class="space-y-10">
        <div>
          <h2 class="font-display text-xl font-semibold text-moss-900">
            Anwendbare Rechtsvorschriften
          </h2>
          <div class="mt-3 space-y-3 leading-relaxed text-ink-700">
            <p>
              Gewerbeordnung 1994 (GewO), freies Gewerbe „Betreuung und Pflege
              von Tieren sowie Beratung hinsichtlich artgerechter Haltung und
              Ernährung, mit Ausnahme der den Tierärzten vorbehaltenen
              Tätigkeiten“.
            </p>
            <p>
              Der Gesetzestext ist im Rechtsinformationssystem des Bundes
              abrufbar:
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener"
                class="text-clay-600 underline underline-offset-4"
                >ris.bka.gv.at</a
              >
            </p>
          </div>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-moss-900">
            Verbraucherstreitbeilegung
          </h2>
          <p class="mt-3 leading-relaxed text-ink-700">
            Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-moss-900">
            Haftung für Inhalte
          </h2>
          <div class="mt-3 space-y-3 leading-relaxed text-ink-700">
            <p>
              Wir halten die Inhalte dieser Website aktuell und korrekt, können
              dafür aber keine Gewähr übernehmen. Für Schäden, die aus der
              Nutzung der bereitgestellten Informationen entstehen, haften wir
              nur bei Vorsatz oder grober Fahrlässigkeit.
            </p>
            <p>
              Sollte dir etwas auffallen, schreib uns kurz – wir kümmern uns
              umgehend darum.
            </p>
          </div>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-moss-900">
            Haftung für Links
          </h2>
          <p class="mt-3 leading-relaxed text-ink-700">
            Für Inhalte externer Seiten, auf die wir verlinken, ist
            ausschließlich deren Betreiber verantwortlich. Zum Zeitpunkt der
            Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Werden uns
            Rechtsverstöße bekannt, entfernen wir den Link.
          </p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-moss-900">
            Urheberrecht
          </h2>
          <p class="mt-3 leading-relaxed text-ink-700">
            Texte, Bilder und Grafiken auf dieser Website sind urheberrechtlich
            geschützt. Eine Verwendung außerhalb der gesetzlich erlaubten Fälle
            bedarf unserer vorherigen schriftlichen Zustimmung. Frag einfach
            nach – meistens finden wir eine Lösung.
          </p>
        </div>

        <div>
          <h2 class="font-display text-xl font-semibold text-moss-900">
            Bildnachweis
          </h2>
          <p class="mt-3 leading-relaxed text-ink-700">
            Alle Fotos: Bei Momo Hundesalon, sofern nicht anders angegeben.
          </p>
        </div>
      </div>

      <div class="tag-card mt-14 p-6 pl-8">
        <p class="eyebrow-tag text-clay-600">Datenschutz</p>
        <p class="mt-2 text-sm leading-relaxed text-ink-700">
          Informationen zur Verarbeitung personenbezogener Daten nach DSGVO und
          § 165 TKG findest du in unserer Datenschutzerklärung.
        </p>
        <NuxtLink
          to="/datenschutz"
          class="mt-4 inline-flex items-center gap-2 font-semibold text-clay-600 underline underline-offset-4"
        >
          Zur Datenschutzerklärung
          <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="text-xs" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
