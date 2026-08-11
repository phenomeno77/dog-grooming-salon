<script setup lang="ts">
useHead({
  title: 'Preisliste & Leistungen – Pfotenstyle by Dani',
  meta: [
    {
      name: 'description',
      content: 'Preisliste von Pfotenstyle by Dani in Wattens: Komplettservice nach Hundegröße, Zusatzleistungen, Lasertherapie und Tier-Balance-Anwendungen.'
    }
  ]
})

const basePrices = [
  { size: 'XS', price: '78,--' },
  { size: 'S', price: '86,--' },
  { size: 'M', price: '96,--' },
  { size: 'L', price: '108,--' },
  { size: 'XL', price: '132,--' },
  { size: 'XXL', price: '142,--' }
]

const extras = [
  { title: 'Verfilzung', desc: 'mehr Pflegeprodukte bei starker Verfilzung', price: 'Aufpreis € 35,--', label: 'Foto: Entfilzen' },
  { title: 'Trimmhunde', desc: null, price: 'Aufpreis € 40,--', label: 'Foto: Trimmen' },
  { title: 'Gesicht schneiden', desc: null, price: '€ 35,--', label: 'Foto: Gesichtsschnitt' },
  { title: 'Flohbefall', desc: null, price: 'Aufpreis € 40,--', label: 'Foto: Flohbehandlung' },
  { title: 'Pfotenpflege', desc: null, price: '€ 25,--', label: 'Foto: Pfotenpflege' }
]

const wellness = [
  { group: 'Lasertherapie', label: 'Foto: Lasertherapie', items: [
    { label: 'Vitalpunkte', price: '€ 15,-- / Einheit' },
    { label: 'Akupunkturtherapie mit Laser', price: '€ 25,-- / Einheit' }
  ] },
  { group: 'Tierbalance und Tierenergetik', label: 'Foto: Tierenergetik', items: [
    { label: 'Cranio Sacral Therapie', price: '€ 48,-- / Einheit' },
    { label: 'Heilströmen', price: '€ 48,-- / Einheit' },
    { label: 'Chakrenarbeit', price: '€ 38,-- / Einheit' }
  ] },
  { group: 'Naturheilkunde', label: 'Foto: Naturheilkunde', items: [
    { label: 'Beratung Aroma- und Kräuteröle', price: 'auf Anfrage' },
    { label: 'Vitalpilzberatung', price: 'auf Anfrage' },
    { label: 'Heilpendeln', price: 'auf Anfrage' }
  ] }
]
</script>

<template>
  <div>
    <section class="bg-moss-900">
      <div class="mx-auto max-w-4xl px-5 py-16 text-center md:px-8">
        <p class="eyebrow-tag text-gold-400">Services</p>
        <h1 class="mt-2 font-display text-3xl font-semibold text-sand-50 sm:text-4xl">
          Hier findest du einen kleinen Überblick über unsere aktuellen Preise
        </h1>
        <p class="mx-auto mt-4 max-w-xl text-sm text-moss-100/80">
          Diese Preise sind Richtwerte und können je nach Arbeits- und Pflegeaufwand abweichen.
          Entfilzungsaufwand und sonstige Behandlungen werden extra berechnet.
        </p>
        <p class="mx-auto mt-3 max-w-xl text-sm text-moss-100/80">
          Wenn Termine nicht rechtzeitig (spätestens 24 Stunden vorher) abgesagt werden, behalten wir uns vor, den
          Termin in Rechnung zu stellen. Es werden keine Hunde ohne Baden frisiert! Der Preis verringert sich
          dadurch nicht!
        </p>
      </div>
    </section>

    <!-- Komplettservice -->
    <section class="mx-auto max-w-5xl px-5 py-16 md:px-8">
      <h2 class="font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
        Komplettservice · Grundpreis
      </h2>
      <p class="mt-2 text-sm text-ink-700/80">
        *der Grundpreis bezieht sich auf eine durchschnittliche Behandlungsdauer von 1,5 Stunden ·
        jede weitere Minute € 1,--
      </p>

      <div class="mx-auto mt-6 max-w-sm">
        <ImgPlaceholder label="FOTO: Kompletter Service" ratio="aspect-[16/10]" tone="sand" />
      </div>

      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div v-for="p in basePrices" :key="p.size" class="tag-card p-5 text-center">
          <p class="font-tag text-xs uppercase tracking-wider text-moss-600">{{ p.size }}</p>
          <p class="mt-2 font-display text-xl font-semibold text-moss-900">€ {{ p.price }}</p>
        </div>
      </div>
      <p class="mt-4 font-tag text-xs uppercase tracking-wider text-clay-600">Preisliste gültig ab 1.8.25</p>
    </section>

    <hr class="stitch-divider mx-auto max-w-6xl">

    <!-- Extras -->
    <section class="mx-auto max-w-5xl px-5 py-16 md:px-8">
      <h2 class="font-display text-2xl font-semibold text-moss-900 sm:text-3xl">Zusatzleistungen</h2>
      <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="e in extras" :key="e.title" class="tag-card p-5 pl-7">
          <ImgPlaceholder :label="e.label" ratio="aspect-[16/10]" tone="sand" />
          <p class="mt-4 font-semibold text-moss-900">{{ e.title }}</p>
          <p v-if="e.desc" class="mt-1 text-sm text-ink-700">{{ e.desc }}</p>
          <p class="mt-2 font-tag text-sm text-clay-600">{{ e.price }}</p>
        </div>
      </div>
    </section>

    <!-- Tier-Balance -->
    <section class="bg-moss-100/60">
      <div class="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 class="font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
          Lasertherapie, Tierbalance &amp; Naturheilkunde
        </h2>
        <div class="mt-8 grid gap-8 md:grid-cols-3">
          <div v-for="group in wellness" :key="group.group">
            <ImgPlaceholder :label="group.label" ratio="aspect-[16/10]" tone="moss" />
            <p class="mt-4 eyebrow-tag text-clay-600">{{ group.group }}</p>
            <ul class="mt-3 space-y-3">
              <li v-for="item in group.items" :key="item.label" class="flex items-baseline justify-between gap-3 border-b border-moss-200 pb-2 text-sm">
                <span class="text-ink-700">{{ item.label }}</span>
                <span class="whitespace-nowrap font-tag text-clay-600">{{ item.price }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 tag-card max-w-2xl p-5 pl-8">
          <p class="text-sm leading-relaxed text-ink-700">
            <strong class="text-moss-900">Hinweis:</strong> Alle angebotenen Dienstleistungen dienen zur
            Aktivierung der Selbstheilungskräfte und ersetzen nicht die Diagnose und Behandlung durch einen
            Veterinärmediziner!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>