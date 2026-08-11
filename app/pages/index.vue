<script setup lang="ts">
useHead({
  title: 'Pfotenstyle by Dani – Hundesalon in Wattens, Tirol',
  meta: [
    {
      name: 'description',
      content: 'Hundesalon Pfotenstyle by Dani in Wattens, Tirol: liebevolle Fellpflege, Zubehör in Handarbeit und Tier-Balance-Anwendungen für deinen Vierbeiner.'
    }
  ]
})

const services = [
  {
    title: 'Nahrungsergänzung',
    body: [
      'z.B. verschiedene qualitativ hochwertige Öle mit lebenswichtigen Omega 3-6-9 Fettsäuren.',
      'Essentiell für einen gesunden, vitalen Hund.',
      'Gesundes, artgerechtes Hundefutter sowie Leckerlies inkl. Beratung.'
    ],
    label: 'Foto: Öle & Nahrungsergänzung'
  },
  {
    title: 'Pflege',
    body: [
      'Bürsten, scheren, baden, föhnen, trimmen, schneiden, kämmen, entfilzen... und Krallenpflege'
    ],
    price: 'Basispaket ab € 78,–',
    priceNote: '(je nach Aufwand)',
    label: 'Foto: Hund beim Fellschnitt'
  },
  {
    title: 'Zubehör',
    body: [
      'Zubehör wie Halsbänder, Leinen, Geschirre oder Bekleidung, Hundebetten und mehr...',
      'vieles in liebervoller Handarbeit hergestellt - so individuell wie dein Vierbeiner!'
    ],
    label: 'Foto: Halsbänder & Zubehör'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-moss-900">
      <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
        <div>
          <p class="eyebrow-tag text-gold-400">Hundesalon · Wattens, Tirol</p>
          <h1 class="mt-3 font-display text-4xl font-semibold leading-[1.08] text-sand-50 sm:text-5xl">
            Pfotenstyle &amp; Fellness
          </h1>
          <p class="mt-5 max-w-md text-base leading-relaxed text-moss-100/85">
            ihr findet uns seit 4.11.24 in der Werkstätte Wattens - Weisstr. 9 W_28
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/kontakt"
              class="rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5">
              Termin anfragen
            </NuxtLink>
            <NuxtLink to="/leistungen"
              class="rounded-full border border-sand-100/30 px-6 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-sand-100/10">
              Preisliste ansehen
            </NuxtLink>
          </div>
        </div>
        <ImgPlaceholder label="Foto: Hund im Pfotenstyle Salon" ratio="aspect-[4/3]" tone="clay" />
      </div>
    </section>

    <!-- Um was geht es hier -->
    <section class="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <h2 class="font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
        Um was geht es hier?
      </h2>
      <div class="mt-5 space-y-4 text-[1.03rem] leading-relaxed text-ink-700">
        <p>Zuallererst sei einmal gesagt, dass es hier in meinem Hundesalon in erster Linie um den Hund geht!</p>
        <p>Ja, richtig gehört, es geht um den HUND.</p>
        <p>
          Wir nehmen uns die <strong class="text-moss-900">nötige Zeit</strong>, auf die
          <strong class="text-moss-900">Bedürfnisse</strong>, <strong class="text-moss-900">Befindlichkeiten</strong>
          und auch <strong class="text-moss-900">Gebrechen</strong> deines 4-Beiners einzugehen.
        </p>
        <p>
          Das bedeutet, dass wir deine Wünsche und Vorstellungen bestmöglich umsetzen werden, solange es artgerecht
          ist und der gesundheitliche Zustand deiner Fellnase es zulassen.
        </p>
        <p>Wir haben keine Staffelpreise, sondern rechnen nach zeitlichem Aufwand ab.</p>
        <p>Bei den meisten unserer Kunden muss Frauchen oder Herrchen mit ca. 1,5 Stunden Arbeitszeit rechnen.</p>
        <p>Manchmal etwas mehr und nur selten etwas weniger...</p>
        <p>Verfilztes oder langes Haar beansprucht sowohl beim Waschen als auch Bürsten und dgl. mehr Zeit als Kurzhaar.
        </p>
        <p>Ein kleiner Kerl der nicht stillhält braucht manchmal sogar länger, als eine gechillte Dogge.</p>
        <p>
          die aktuelle Preisliste findest du
          <NuxtLink to="/leistungen" class="font-semibold text-clay-600 underline underline-offset-4">hier</NuxtLink>:
        </p>
      </div>

      <div class="mt-8 tag-card flex items-start gap-4 p-5">
        <i class="pi pi-info-circle mt-1 text-clay-600" />
        <div>
          <p class="font-semibold text-moss-900">Ausfallentschädigung</p>
          <p class="mt-1 text-sm leading-relaxed text-ink-700">
            für nicht fristgerecht abgesagte Termine wird eine Ausfallentschädigung in Höhe von 50,-- € fällig.
            <NuxtLink to="/agb" class="font-semibold text-clay-600 underline underline-offset-4">(siehe AGB's)
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <hr class="stitch-divider mx-auto max-w-6xl">

    <!-- Gifts & Services -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <p class="eyebrow-tag text-clay-600">Gifts &amp; Services</p>
      <h2 class="mt-2 max-w-2xl font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
        Bei uns findest du wunderschöne, teils handgefertigte Einzelstücke für deinen Liebling.
      </h2>
      <p class="mt-4 max-w-2xl leading-relaxed text-ink-700">
        Egal ob Halsbänder oder Leinen aus Paracord bzw. Leder - bei uns ist für jeden Geschmack etwas dabei.
        Kleine Geschenke für Hund und Mensch. Und das alles zu erschwinglichen Preisen.
      </p>
      <p class="mt-2 max-w-2xl font-semibold text-moss-900">
        Komm vorbei und überzeug dich selbst - wir freuen uns auf deinen Besuch!
      </p>

      <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="service in services" :key="service.title" class="tag-card p-6 pl-8">
          <ImgPlaceholder :label="service.label" ratio="aspect-[16/10]" tone="sand" />
          <h3 class="mt-5 font-display text-xl font-semibold text-moss-900">{{ service.title }}</h3>
          <p v-for="(line, i) in service.body" :key="i" class="mt-2 text-sm leading-relaxed text-ink-700">
            {{ line }}
          </p>
          <p v-if="service.price" class="mt-3 font-tag text-sm text-clay-600">
            {{ service.price }} <span class="text-ink-700/70">{{ service.priceNote }}</span>
          </p>
        </article>
      </div>
    </section>

    <!-- Tier-Balance -->
    <section class="bg-moss-100/60">
      <div class="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 class="font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
          Hier findest du viel Bla bla... oder News!?
        </h2>
        <p class="mt-4 font-semibold text-clay-600">neu seit 2024: Tier-Balance.</p>
        <p class="mt-3 leading-relaxed text-ink-700">Wir bieten für deinen Liebling folgende Anwendungen an:</p>
        <p class="mt-2 leading-relaxed text-ink-700">
          Lasertherapie, Tierenergetik und Naturheilkunde... diese Anwendungen dienen zur Aktivierung der
          Selbstheilungskräfte.
        </p>
        <p class="mt-4 text-sm italic text-ink-700/70">
          (sämtliche Anwendungen ersetzen nicht die Diagnose und Behandlung eines Veterinärmediziners)
        </p>
      </div>
    </section>

    <!-- Team + virtual tour -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div class="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p class="eyebrow-tag text-clay-600">Pfotenstyle meets Fellness</p>
          <h2 class="mt-2 font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
            Dani und Petra kümmern sich um deinen Liebling!
          </h2>
          <a href="https://my.matterport.com/show/?m=okWpnE36hhH&sm=2&sr=-.8%2C-.73%2C-.59&sp=-29.48%2C24%2C19.26"
            target="_blank" rel="noopener"
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-moss-800 px-6 py-3 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5">
            <i class="pi pi-compass" />
            Virtueller Rundgang
          </a>
        </div>
        <ImgPlaceholder label="Foto: Dani und Petra im Salon" ratio="aspect-[4/3]" tone="moss" />
      </div>
    </section>
  </div>
</template>
