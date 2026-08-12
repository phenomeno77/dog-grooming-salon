<script setup lang="ts">
import SocialMedia from "./SocialMedia.vue";
import { navLinks } from "./utils/navLinks.ts";

const year = new Date().getFullYear();

const explore = navLinks;

const legal = [
  { label: "Impressum", to: "/impressum" },
  { label: "AGB", to: "/agb" },
  { label: "Datenschutz", to: "/datenschutz" },
];

const { compactHours } = useOpeningHours();
</script>

<template>
  <footer class="bg-moss-900 text-sand-100">
    <div
      class="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]"
    >
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2.5 text-sand-50">
          <PawMark class="h-7 w-7 shrink-0 text-gold-400" />
          <span class="flex flex-col leading-none">
            <span class="font-display text-xl font-semibold tracking-tight"
              >Bei Momo</span
            >
            <span class="eyebrow-tag mt-0.5 text-moss-100/50">Hundesalon</span>
          </span>
        </div>

        <p class="mt-4 max-w-xs text-sm leading-relaxed text-moss-100/75">
          Fellpflege ohne Zeitdruck – ein kleiner Salon mitten in Musterstadt,
          in dem sich jeder Hund Zeit nehmen darf.
        </p>

        <div class="mt-6 flex items-center gap-3">
          <SocialMedia />
        </div>
      </div>

      <!-- Explore -->
      <nav aria-labelledby="footer-explore">
        <p id="footer-explore" class="eyebrow-tag text-gold-400">Entdecken</p>
        <ul class="mt-4 space-y-2.5 text-sm text-moss-100/85">
          <li v-for="item in explore" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="inline-flex items-center gap-2 transition-colors hover:text-sand-50"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Legal -->
      <nav aria-labelledby="footer-legal">
        <p id="footer-legal" class="eyebrow-tag text-gold-400">Rechtliches</p>
        <ul class="mt-4 space-y-2.5 text-sm text-moss-100/85">
          <li v-for="item in legal" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="transition-colors hover:text-sand-50"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Kontakt -->
      <div>
        <p class="eyebrow-tag text-gold-400">Kontakt</p>

        <address class="mt-4 space-y-1 text-sm not-italic text-moss-100/85">
          <p>Musterstraße 12</p>
          <p>12345 Musterstadt</p>
        </address>

        <a
          href="tel:+49123456789"
          class="mt-4 inline-flex items-center gap-2.5 text-sm font-semibold text-sand-50 transition-colors hover:text-gold-400"
        >
          <FontAwesomeIcon :icon="['fas', 'phone']" class="text-gold-400" />
          01234 / 56 78 90
        </a>

        <ul class="mt-6 space-y-1.5 border-t border-sand-100/10 pt-5 text-sm">
          <li
            v-for="item in compactHours"
            :key="item.day"
            class="flex justify-between gap-4"
          >
            <span class="text-moss-100/60">{{ item.day }}</span>
            <span :class="item.time ? 'text-moss-100/85' : 'text-moss-100/40'">
              {{ item.time ?? "geschlossen" }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-sand-100/10">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-6 text-center font-tag text-[0.7rem] uppercase tracking-wider text-moss-100/45 sm:flex-row sm:justify-between sm:text-left md:px-8"
      >
        <p>© {{ year }} Bei Momo · Musterstadt</p>
        <p>Alle Preise inkl. MwSt.</p>
      </div>
    </div>
  </footer>
</template>
