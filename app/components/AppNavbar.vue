<script setup lang="ts">
const open = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Öffnungszeiten', to: '/oeffnungszeiten' },
  { label: 'Kontakt', to: '/kontakt' }
]

const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-moss-100 bg-sand-50/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
      <NuxtLink to="/" class="flex items-center gap-2 font-display text-xl font-semibold text-moss-900">
        <PawMark class="h-7 w-7 text-clay-600" />
        Pfotenstyle
        <span class="hidden text-sm font-normal text-ink-700 sm:inline">by Dani</span>
      </NuxtLink>

      <nav class="hidden items-center gap-7 md:flex">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
          class="font-body text-[0.95rem] text-ink-700 transition-colors hover:text-clay-600"
          active-class="text-clay-600 font-semibold">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <a href="tel:+4366499671788"
          class="rounded-full bg-moss-800 px-4 py-2 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5">
          Anrufen
        </a>
      </div>

      <button type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full border border-moss-100 text-moss-900 md:hidden"
        :aria-expanded="open" aria-controls="mobile-menu" aria-label="Menü öffnen" @click="open = !open">
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <nav v-if="open" id="mobile-menu"
        class="flex flex-col gap-1 border-t border-moss-100 bg-sand-50 px-5 pb-5 pt-3 md:hidden">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
          class="rounded-lg px-3 py-2.5 font-body text-base text-ink-700 hover:bg-moss-100"
          active-class="bg-moss-100 text-moss-900 font-semibold">
          {{ link.label }}
        </NuxtLink>
        <a href="tel:+4366499671788"
          class="mt-2 rounded-full bg-moss-800 px-4 py-2.5 text-center text-sm font-semibold text-sand-50">
          Jetzt anrufen
        </a>
      </nav>
    </Transition>
  </header>
</template>
