<script setup lang="ts">
useHead({
  title: "Kontakt – Pfotenstyle by Dani",
  meta: [
    {
      name: "description",
      content:
        "Kontaktiere Pfotenstyle by Dani in Wattens: anrufen, SMS, WhatsApp oder einfach vorbeikommen.",
    },
  ],
});

const form = reactive({ name: "", message: "" });
const submitting = ref(false);

function submitForm() {
  submitting.value = true;
  setTimeout(() => {
    submitting.value = false;
    form.name = "";
    form.message = "";
  }, 500);
}

const ways = [
  { icon: "pi pi-home", label: "einfach vorbeikommen ;)" },
  { icon: "pi pi-phone", label: "anrufen" },
  { icon: "pi pi-comment", label: "SMS schicken" },
  { icon: "pi pi-whatsapp", label: "Whats app..." },
];
</script>

<template>
  <div>
    <section class="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p class="eyebrow-tag text-clay-600">Contact</p>
      <h1
        class="mt-2 font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
      >
        Du möchtest wissen, wie und wo du uns findest oder uns eine Nachricht
        hinterlassen?
      </h1>

      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div
          v-for="way in ways"
          :key="way.label"
          class="tag-card flex flex-col items-center gap-2 p-5 text-center"
        >
          <i :class="way.icon" class="text-xl text-clay-600" />
          <span class="text-sm text-ink-700">{{ way.label }}</span>
        </div>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        <div class="tag-card p-6 pl-8">
          <p class="font-semibold text-moss-900">Telefon Dani</p>
          <p class="mt-1 text-sm text-ink-700">
            für telef. Terminvereinbarung bitte hier klicken
          </p>
          <a
            href="tel:+4366499671788"
            class="mt-3 inline-flex items-center gap-2 font-tag text-clay-600 underline underline-offset-4"
          >
            <i class="pi pi-phone" /> +43 664 99671788
          </a>
        </div>
        <div class="tag-card p-6 pl-8">
          <p class="font-semibold text-moss-900">Telefon Petra</p>
          <p class="mt-1 text-sm text-ink-700">
            für telef. Terminvereinbarung bitte hier klicken
          </p>
          <a
            href="tel:+4368120589626"
            class="mt-3 inline-flex items-center gap-2 font-tag text-clay-600 underline underline-offset-4"
          >
            <i class="pi pi-phone" /> 0681-20589626
          </a>
        </div>
      </div>

      <div class="mt-10 tag-card p-6 pl-8">
        <p class="font-semibold text-moss-900">PFOTENSTYLE - by Dani</p>
        <p class="mt-1 text-sm leading-relaxed text-ink-700">
          Weisstraße 9/W_28, Werkstätte Wattens<br />
          6112 Wattens
        </p>
        <a
          href="tel:+4366499671788"
          class="mt-3 inline-flex items-center gap-2 font-tag text-clay-600 underline underline-offset-4"
        >
          <i class="pi pi-phone" /> +43 664 99671788
        </a>
      </div>
    </section>

    <hr class="stitch-divider mx-auto max-w-6xl" />

    <section class="mx-auto max-w-xl px-5 py-16 md:px-8">
      <h2 class="font-display text-2xl font-semibold text-moss-900">
        Kurznachricht senden
      </h2>
      <p class="mt-2 text-sm text-ink-700">
        Lieber schreiben als anrufen? Kein Problem – kurze Nachricht da lassen,
        wir melden uns.
      </p>

      <form class="mt-6 space-y-4" @submit.prevent="submitForm">
        <div>
          <label
            for="name"
            class="mb-1.5 block text-sm font-semibold text-moss-900"
            >Name</label
          >
          <InputText
            id="name"
            v-model="form.name"
            class="tag-input"
            placeholder="Dein Name"
            required
          />
        </div>
        <div>
          <label
            for="message"
            class="mb-1.5 block text-sm font-semibold text-moss-900"
            >Nachricht</label
          >
          <Textarea
            id="message"
            v-model="form.message"
            class="tag-input"
            rows="4"
            placeholder="Worum geht's?"
            required
          />
        </div>
        <Button
          type="submit"
          label="Nachricht senden"
          :loading="submitting"
          class="w-full rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-sand-50 shadow-tag transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        />
      </form>
    </section>

    <Toast position="bottom-center" />
  </div>
</template>

<style scoped>
.tag-input {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid var(--color-sand-200);
  background: var(--color-sand-50);
  padding: 0.65rem 0.9rem;
  font-family: var(--font-body);
  color: var(--color-ink-900);
}
.tag-input:focus {
  outline: 3px solid var(--color-clay-500);
  outline-offset: 2px;
}
</style>
