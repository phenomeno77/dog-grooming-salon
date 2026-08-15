<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    src?: string;
    alt?: string;
    ratio?: string;
    tone?: "moss" | "sand" | "clay";
  }>(),
  {
    ratio: "aspect-[4/3]",
    tone: "moss",
  },
);

const toneClasses: Record<string, string> = {
  moss: "bg-moss-700 text-sand-100",
  sand: "bg-sand-200 text-moss-800",
  clay: "bg-clay-500 text-sand-50",
};
</script>

<template>
  <div
    :class="[ratio, toneClasses[tone]]"
    class="relative flex w-full items-center justify-center overflow-hidden rounded-2xl"
  >
    <NuxtImg
      v-if="src"
      :src="src"
      :alt="alt ?? label"
      format="webp"
      sizes="100vw sm:50vw lg:33vw"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover"
    />
    <div
      v-else
      class="flex flex-col items-center gap-2 px-4 text-center opacity-80"
      role="img"
      :aria-label="label"
    >
      <PawMark class="h-8 w-8" />
      <span class="font-tag text-[0.68rem] uppercase tracking-wider">{{
        label
      }}</span>
    </div>
  </div>
</template>
