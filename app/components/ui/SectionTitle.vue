<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="">
    <p v-if="eyebrow" class="eyebrow-tag text-clay-600">
      <span class="h-px w-6 bg-accent/60" />
      {{ eyebrow }}
      <span class="h-px w-6 bg-accent/60" />
    </p>

    <h2
      class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
    >
      {{ title }}
    </h2>

    <p v-if="description" class="mt-4 max-w-xl leading-relaxed text-ink-700">
      {{ description }}
    </p>
  </div>
</template>
