<script setup lang="ts">
useHead({
  title: 'Über uns – Pfotenstyle by Dani',
  meta: [
    {
      name: 'description',
      content:
        'Lerne Dani, Petra und Anna kennen – das Team von Pfotenstyle by Dani in Wattens, das mit hochwertigen, naturnahen Produkten auf dein Tier eingeht.'
    }
  ]
})

const team = [
  {
    name: 'Dani',
    role: 'mit Leib und Seele Hundefriseurin...',
    note: null as string | null,
    label: 'Foto: Dani'
  },
  {
    name: 'Petra',
    role: 'vom Fellness-Studio, die am Montag und Freitag mit mir den Pfotensalon rockt...',
    note: 'für Terminvereinbarungen mit Petra bitte anrufen unter: 0681-20589626',
    phone: 'tel:+4368120589626',
    phoneLabel: '0681-20589626',
    label: 'Foto: Petra'
  },
  {
    name: 'Anna',
    role: 'vom Hundefriseur Salon by Anna Klotz',
    note: 'für Terminvereinbarungen mit Anna bitte anrufen unter: 0664-88974192',
    phone: 'tel:+4366488974192',
    phoneLabel: '0664-88974192',
    label: 'Foto: Anna Klotz'
  }
]

</script>

<template>
  <div>
    <!-- Intro -->
    <section class="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p class="eyebrow-tag text-clay-600">Übrigens...</p>

      <h1 class="mt-2 font-display text-3xl font-semibold text-moss-900 sm:text-4xl">
        Darauf legen wir großen Wert:
      </h1>

      <div class="mt-6 space-y-4 text-[1.03rem] leading-relaxed text-ink-700">
        <p>
          Unsere professionellen Pflegeprodukte wie etwa Shampoos, Sprays etc. sind genau auf das jeweilige Fell
          deines Hundes abgestimmt.
        </p>

        <p>Qualität und hochwertige, naturnahe Produkte sind bei uns selbstverständlich.</p>

        <p>Nicht nur wir Menschen achten bei unserer täglichen Pflege auf möglichst gesunde Produkte.</p>

        <p>
          Auch unsere Vierbeiner sollten vor schädlichen Zusatzstoffen wie Silikone, Parabene, Paraffine oder
          diverse PEG´s und dergleichen geschützt werden!
        </p>

        <p class="font-display text-xl font-semibold text-moss-900">
          Wir tun unser Bestes - dein Hund hat es verdient!
        </p>
      </div>
    </section>

    <hr class="stitch-divider mx-auto max-w-6xl">

    <!-- Team -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <p class="eyebrow-tag text-clay-600">Das Team</p>

      <h2 class="mt-2 max-w-2xl font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
        Menschen mit Herz für deinen Vierbeiner
      </h2>

      <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="member in team"
          :key="member.name"
          class="tag-card p-6 pl-8"
        >
          <ImgPlaceholder
            :label="member.label"
            ratio="aspect-square"
            tone="sand"
          />

          <h3 class="mt-5 font-display text-xl font-semibold text-moss-900">
            {{ member.name }}
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-ink-700">
            {{ member.role }}
          </p>

          <a
            v-if="member.phone"
            :href="member.phone"
            class="mt-3 inline-flex items-center gap-2 font-tag text-sm text-clay-600 underline underline-offset-4"
          >
            <i class="pi pi-phone"></i>
            {{ member.phoneLabel }}
          </a>

          <NuxtLink
            v-else
            to="/kontakt"
            class="mt-3 inline-flex items-center gap-2 font-tag text-sm text-clay-600 underline underline-offset-4"
          >
            Kontakt aufnehmen
            <i class="pi pi-arrow-right text-xs"></i>
          </NuxtLink>
        </article>
      </div>
    </section>

    <hr class="stitch-divider mx-auto max-w-6xl">

    <!-- Kunden -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div class="grid gap-10 md:grid-cols-2 md:items-center">
        <!-- Text -->
        <div>
          <p class="eyebrow-tag text-clay-600">Unsere Kunden</p>

          <h2 class="mt-2 font-display text-2xl font-semibold text-moss-900 sm:text-3xl">
            Einige unserer Kunden
          </h2>

          <p class="mt-5 max-w-xl leading-relaxed text-ink-700">
            Wir freuen uns auf jeden einzelnen Hund, egal ob ganz klein oder riesengroß.
            Bei uns ist jeder willkommen, der sein Herz am rechten Fleck hat.
          </p>
        </div>

        
        <ImgPlaceholder :label="'Galleria: Kundenhunde'" tone='sand'/>
    
      </div>
    </section>
  </div>
</template>