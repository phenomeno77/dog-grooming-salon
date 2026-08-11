<script setup lang="ts">
interface NewsItem {
  eyebrow: string
  title: string
  paragraphs: string[],
  href?: string,
  hrefLabel?: string
}

// Add new announcements here, newest first. Each one renders as its own
// card below — remove an entry (or empty the array) and it just disappears.
const news: NewsItem[] = [
  {
    eyebrow: 'News · seit 2024',
    title: 'Wir bieten für deinen Liebling folgende Anwendungen an',
    paragraphs: [
      'Lasertherapie, Tierenergetik und Naturheilkunde... diese Anwendungen dienen zur Aktivierung der Selbstheilungskräfte.'
    ],
    href: '/leistungen#tier-balance',
    hrefLabel: 'Preisliste ansehen'
  },
  {
    eyebrow: 'News · 2026',
    title: 'Unser Terminkalender ist voll!',
    paragraphs: [
      'Wir sind völlig aus dem Häuschen – so viel Flausch-Alarm in unserem Hundesalon, offenbar sprechen sich gute Haarschnitte herum! 🐕‍🦺 💇',
      'Aktuell sind unsere Terminkalender allerdings so rappelvoll, dass selbst wir kurz nach Luft schnappen müssen – neue Fellnasen müssen sich daher leider ein kleines bisschen in Geduld üben und auf den nächsten freien Platz im Styling-Paradies warten. 📅 🐾',
      'Danke für eure Geduld, euer Verständnis und euren unfassbar lieben Support – ihr seid einfach zum Knuddeln! ❤️ 🐾'
    ]
  },
]
</script>

<template>
  <section v-if="news.length" class="mx-auto max-w-4xl space-y-8 px-5 py-16 md:px-8">
    <div
      v-for="(item, i) in news"
      :key="i"
      class="tag-card p-8 pl-10 text-center sm:p-10 sm:pl-12"
    >
      <p class="eyebrow-tag text-clay-600">{{ item.eyebrow }}</p>
      <h2 class="mt-2 font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
        {{ item.title }}
      </h2>

      <div class="mx-auto mt-5 max-w-xl space-y-4 text-sm leading-relaxed text-ink-700 sm:text-base">
        <p v-for="(paragraph, j) in item.paragraphs" :key="j">{{ paragraph }}</p>
      </div>

    <NuxtLink
      v-if="item.href && item.hrefLabel"
      :to="item.href"
      class="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5"
    >
      {{ item.hrefLabel }}
    </NuxtLink>
    </div>
  </section>
</template>