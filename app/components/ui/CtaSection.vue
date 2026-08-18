<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string;
    description?: string;
    buttonLabel?: string;
    buttonTo?: string;
    icon?: string[];
  }>(),
  {
    icon: () => ["fas", "envelope"],
  },
);
</script>

<template>
  <section class="bg-moss-900">
    <div class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
      <h2 class="font-display text-3xl font-semibold text-sand-50 sm:text-4xl">
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mx-auto mt-4 max-w-md leading-relaxed text-moss-100/85"
      >
        {{ description }}
      </p>

      <!-- Falls back to the standard button; override by passing slot content -->
      <slot>
        <NuxtLink
          v-if="buttonLabel && buttonTo"
          :to="buttonTo"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-colors duration-200 hover:bg-clay-600"
        >
          <FontAwesomeIcon v-if="icon" :icon="icon" />
          {{ buttonLabel }}
        </NuxtLink>
      </slot>
    </div>
  </section>
</template>
