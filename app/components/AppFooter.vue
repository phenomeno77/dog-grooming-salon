<script setup lang="ts">
import SocialMedia from "./SocialMedia.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-moss-900 text-sand-100">
    <div
      class="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8"
    >
      <div>
        <div
          class="flex items-center gap-2 font-display text-xl font-semibold text-sand-50"
        >
          <PawMark class="h-6 w-6 text-gold-400" />
          Pfotenstyle by Dani
        </div>
        <p class="mt-3 max-w-xs text-sm leading-relaxed text-moss-100/80">
          Dani und Petra kümmern sich um deinen Liebling — Pfotenstyle meets
          Fellness in Wattens, Tirol.
        </p>
        <div class="mt-5 flex items-center gap-3">
          <SocialMedia />
        </div>
      </div>

      <div>
        <p class="eyebrow-tag text-gold-400">Kontakt</p>
        <ul class="mt-3 space-y-2 text-sm text-moss-100/85">
          <li>Weisstr. 9, W_28</li>
          <li>Unternehmer- und Kreativzentrum Werkstätte Wattens</li>
          <li>6112 Wattens</li>
          <li>
            <a
              href="tel:+4366499671788"
              class="underline decoration-gold-400/50 underline-offset-4 hover:text-sand-50"
            >
              +43 664 99671788
            </a>
          </li>
          <li class="pt-1 text-moss-100/70">Terminvereinbarung notwendig!</li>
        </ul>
      </div>

      <div>
        <p class="eyebrow-tag text-gold-400">Kontakt</p>
        <ul class="mt-3 space-y-2 text-sm text-moss-100/85">
          <li>Weisstr. 9, W_28</li>
          <li>Unternehmer- und Kreativzentrum Werkstätte Wattens</li>
          <li>6112 Wattens</li>
          <li>
            <a
              href="tel:+4366499671788"
              class="underline decoration-gold-400/50 underline-offset-4 hover:text-sand-50"
            >
              +43 664 99671788
            </a>
          </li>
          <li class="pt-1 text-moss-100/70">Terminvereinbarung notwendig!</li>
        </ul>
      </div>

      <div>
        <p class="eyebrow-tag text-gold-400">Rechtliches</p>
        <ul class="mt-3 space-y-2 text-sm text-moss-100/85">
          <li>
            <NuxtLink to="/impressum" class="hover:text-sand-50"
              >Impressum</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/agb" class="hover:text-sand-50">AGB's</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/datenschutz" class="hover:text-sand-50"
              >Datenschutz</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="border-t border-sand-100/10 px-5 py-5 text-center font-tag text-[0.7rem] uppercase tracking-wider text-moss-100/50 md:px-8"
    >
      © {{ year }} Pfotenstyle by Dani · Wattens, Tirol
    </div>
  </footer>
</template>
