<script setup lang="ts">
useHead({
  title: 'Öffnungszeiten – Pfotenstyle by Dani',
  meta: [
    { name: 'description', content: 'Öffnungszeiten von Pfotenstyle by Dani in Wattens. Terminvereinbarung notwendig unter 0664/9967 1788.' }
  ]
})

const hours = [
  { day: 'Montag', time: '9:00 - 13:00 und 14:00 - 17:00', boost: true },
  { day: 'Dienstag', time: '8:00 - 13:00 und 14:30 - 18:00', boost: false },
  { day: 'Mittwoch', time: '8:00 - 13:00', boost: false },
  { day: 'Donnerstag', time: 'geschlossen', boost: false },
  { day: 'Freitag', time: '9:00 - 13:00 und 14:00 - 17:00', boost: true },
  { day: 'Samstag', time: 'nur nach Termin', boost: false },
  { day: 'Sonn- und Feiertage', time: 'geschlossen', boost: false }
]
</script>

<template>
  <section class="mx-auto max-w-3xl px-5 py-16 md:px-8">
    <p class="eyebrow-tag text-clay-600">Öffnungszeiten</p>
    <h1 class="mt-2 font-display text-3xl font-semibold text-moss-900 sm:text-4xl">
      Wir ersuchen um Terminvereinbarung
    </h1>
    <a href="tel:+436649671788" class="mt-2 inline-block font-tag text-clay-600 underline underline-offset-4">
      unter 0664/9967 1788
    </a>

    <div class="mt-8 tag-card divide-y divide-sand-200 p-2">
      <div
        v-for="h in hours"
        :key="h.day"
        class="flex items-center justify-between gap-4 px-5 py-3.5"
      >
        <span class="font-semibold text-moss-900">{{ h.day }}</span>
        <span class="flex items-center gap-2 text-right text-sm" :class="h.time === 'geschlossen' ? 'text-ink-700/50' : 'text-ink-700'">
          {{ h.time }}
          <i v-if="h.boost" class="pi pi-star-fill text-xs text-gold-500" title="Verstärkung durch Petra" />
        </span>
      </div>
    </div>

    <p class="mt-6 text-sm leading-relaxed text-ink-700">
      Montag und Freitag haben wir Verstärkung!
    </p>

    <NuxtLink
      to="/kontakt"
      class="mt-8 inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5"
    >
      Kontaktiere uns
    </NuxtLink>
  </section>
</template>
