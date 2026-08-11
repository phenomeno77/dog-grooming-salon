<template>
  <article class="prose-legal mx-auto max-w-3xl px-5 py-16 md:px-8">
    <slot />
  </article>
</template>

<style scoped>
.prose-legal :deep(h1) {
  font-family: var(--font-display);
  font-size: 1.9rem;
  font-weight: 600;
  color: var(--color-moss-900);
}
.prose-legal :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-moss-900);
  margin-top: 2.25rem;
  margin-bottom: 0.5rem;
}
.prose-legal :deep(p) {
  color: var(--color-ink-700);
  line-height: 1.7;
  margin-top: 0.9rem;
}
.prose-legal :deep(strong) {
  color: var(--color-moss-900);
}
.prose-legal :deep(a) {
  color: var(--color-clay-600);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.prose-legal :deep(.eyebrow) {
  font-family: var(--font-tag);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--color-clay-600);
}
</style>
