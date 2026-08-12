<script setup lang="ts">
useHead({
  title: "Kontakt – Bei Momo Hundesalon Musterstadt",
  meta: [
    {
      name: "description",
      content:
        "So erreichst du den Hundesalon Bei Momo in Musterstadt: Telefon, WhatsApp, Kontaktformular und Anfahrt.",
    },
  ],
});

const form = reactive({
  name: "",
  contact: "",
  dog: "",
  message: "",
});

const submitting = ref(false);
const sent = ref(false);

function submitForm() {
  submitting.value = true;
  sent.value = false;
  // Demo – hier später den echten Versand anbinden.
  setTimeout(() => {
    submitting.value = false;
    sent.value = true;
    form.name = "";
    form.contact = "";
    form.dog = "";
    form.message = "";
  }, 600);
}

const channels = [
  {
    prefix: "fas",
    icon: "phone",
    title: "Anrufen",
    body: "Am schnellsten. Wenn niemand rangeht, stehen wir am Hund – sprich auf, wir rufen zurück.",
    action: "01234 / 56 78 90",
    href: "tel:+49123456789",
  },
  {
    prefix: "fab",
    icon: "whatsapp",
    title: "WhatsApp",
    body: "Praktisch für Fotos vom Fell. So sehen wir vorab, was auf uns zukommt.",
    action: "Nachricht schreiben",
    href: "https://wa.me/49123456789",
  },
  {
    prefix: "fas",
    icon: "envelope",
    title: "E-Mail",
    body: "Für alles, was keine Eile hat – Anfragen, Bestellungen, Gutscheine.",
    action: "hallo@Bei Momo.example",
    href: "mailto:hallo@Bei Momo.example",
  },
];

const faqs = [
  {
    q: "Wie lange dauert es bis zum Termin?",
    a: "Aktuell zwischen vier und sechs Wochen. Für kurzfristige Absagen führen wir eine Warteliste – sag Bescheid, wenn du flexibel bist.",
  },
  {
    q: "Mein Hund war noch nie beim Groomer.",
    a: "Dann komm vorher einmal ohne Termin vorbei. Wir zeigen ihm den Raum, die Geräusche und den Tisch – das kostet nichts und macht den ersten echten Termin deutlich leichter.",
  },
  {
    q: "Kann ich dabeibleiben?",
    a: "Beim Kennenlernen gern. Beim Termin selbst arbeiten die meisten Hunde entspannter, wenn Herrchen oder Frauchen nicht im Raum ist – das klingt hart, ist aber so.",
  },
  {
    q: "Was, wenn mein Hund Angst hat?",
    a: "Sag es uns vorher. Wir planen dann mehr Zeit ein, arbeiten in Etappen und brechen ab, wenn es zu viel wird. Angerechnet wird nur, was wir geschafft haben.",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div class="max-w-2xl">
          <p class="eyebrow-tag text-gold-400">Kontakt</p>
          <h1
            class="mt-4 font-display text-4xl font-semibold leading-[1.05] text-sand-50 sm:text-5xl"
          >
            Melde dich –<br class="hidden sm:block" />
            wir beißen nicht.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-moss-100/85">
            Egal ob Termin, Frage zum Fell oder eine Sonderanfertigung: Ein
            kurzer Anruf oder ein paar Zeilen genügen. Wir antworten meist noch
            am selben Tag.
          </p>
        </div>
      </div>
    </section>

    <!-- Kanäle -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <p class="eyebrow-tag text-clay-600">Direkt erreichen</p>
      <h2
        class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
      >
        Such dir aus, was dir lieber ist.
      </h2>

      <div class="mt-12 grid gap-6 sm:grid-cols-3">
        <a
          v-for="c in channels"
          :key="c.title"
          :href="c.href"
          :target="c.href.startsWith('http') ? '_blank' : undefined"
          :rel="c.href.startsWith('http') ? 'noopener' : undefined"
          class="tag-card group flex flex-col p-6 pl-8 transition-colors duration-200 hover:bg-sand-100"
        >
          <FontAwesomeIcon
            :icon="[c.prefix, c.icon]"
            class="text-2xl text-clay-600"
          />

          <h3 class="mt-4 font-display text-xl font-semibold text-moss-900">
            {{ c.title }}
          </h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
            {{ c.body }}
          </p>
          <p
            class="mt-4 inline-flex items-center gap-2 border-t border-sand-200 pt-4 font-tag text-sm font-semibold text-clay-600"
          >
            {{ c.action }}
            <FontAwesomeIcon
              :icon="['fas', 'arrow-right']"
              class="text-xs transition-transform duration-200 group-hover:translate-x-1"
            />
          </p>
        </a>
      </div>
    </section>

    <!-- Formular + Adresse -->
    <section class="bg-sand-100">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div class="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <!-- Formular -->
          <div>
            <p class="eyebrow-tag text-clay-600">Anfrage</p>
            <h2
              class="mt-3 font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
            >
              Schreib uns kurz.
            </h2>
            <p class="mt-4 leading-relaxed text-ink-700">
              Je mehr wir vorher wissen, desto besser können wir den Termin
              planen. Rasse und letzter Groomer-Besuch helfen uns am meisten.
            </p>

            <form class="mt-8 space-y-5" @submit.prevent="submitForm">
              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="mb-1.5 block text-sm font-semibold text-moss-900"
                  >
                    Dein Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="tag-input"
                    placeholder="Muster Max"
                    required
                  />
                </div>

                <div>
                  <label
                    for="contact"
                    class="mb-1.5 block text-sm font-semibold text-moss-900"
                  >
                    Telefon oder E-Mail
                  </label>
                  <input
                    id="contact"
                    v-model="form.contact"
                    type="text"
                    class="tag-input"
                    placeholder="Wie erreichen wir dich?"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  for="dog"
                  class="mb-1.5 block text-sm font-semibold text-moss-900"
                >
                  Dein Hund
                </label>
                <input
                  id="dog"
                  v-model="form.dog"
                  type="text"
                  class="tag-input"
                  placeholder="Name, Rasse, Alter"
                />
              </div>

              <div>
                <label
                  for="message"
                  class="mb-1.5 block text-sm font-semibold text-moss-900"
                >
                  Worum geht's?
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="tag-input"
                  rows="5"
                  placeholder="Wunschtermin, Besonderheiten, Fragen …"
                  required
                />
              </div>

              <div class="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  :disabled="submitting"
                  class="inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-tag transition-colors duration-200 hover:bg-clay-600 disabled:opacity-60"
                >
                  <FontAwesomeIcon :icon="['fas', 'envelope']" />
                  {{ submitting ? "Wird gesendet …" : "Anfrage senden" }}
                </button>

                <p class="text-xs text-ink-700/60">
                  Wir melden uns meist am selben Tag.
                </p>
              </div>

              <p
                v-if="sent"
                class="flex items-start gap-3 rounded-xl bg-moss-100 px-5 py-4 text-sm text-moss-800"
                role="status"
              >
                <FontAwesomeIcon
                  :icon="['fas', 'check']"
                  class="mt-0.5 text-moss-600"
                />
                <span>
                  Danke! Deine Anfrage ist angekommen – wir melden uns zeitnah.
                  <span class="text-moss-800/60">(Demozweck)</span>
                </span>
              </p>
            </form>
          </div>

          <!-- Adresse -->
          <div class="space-y-6">
            <div class="tag-card p-6 pl-8">
              <p class="eyebrow-tag text-clay-600">Adresse</p>
              <address class="mt-3 space-y-0.5 not-italic text-ink-700">
                <p class="font-semibold text-moss-900">Bei Momo Hundesalon</p>
                <p>Musterstraße 12</p>
                <p>12345 Musterstadt</p>
              </address>

              <p class="mt-4 text-sm leading-relaxed text-ink-700">
                Im Hinterhof, zweite Tür links. Direkt vor der Tür sind zwei
                Parkplätze – wenn beide belegt sind, geht es an der Ecke weiter.
              </p>
            </div>

            <ImgPlaceholder
              label="Karte: Anfahrt zum Salon"
              ratio="aspect-[4/3]"
              tone="moss"
            />

            <div class="tag-card p-6 pl-8">
              <p class="eyebrow-tag text-clay-600">Erreichbar</p>
              <p class="mt-3 text-sm leading-relaxed text-ink-700">
                Dienstag bis Samstag während der Öffnungszeiten. Montag und
                Sonntag lesen wir Nachrichten, antworten aber erst am nächsten
                Werktag.
              </p>
              <NuxtLink
                to="/oeffnungszeiten"
                class="mt-4 inline-flex items-center gap-2 font-semibold text-clay-600 underline underline-offset-4"
              >
                Alle Öffnungszeiten
                <FontAwesomeIcon
                  :icon="['fas', 'arrow-right']"
                  class="text-xs"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <p class="eyebrow-tag text-clay-600">Häufige Fragen</p>
      <h2
        class="mt-3 max-w-2xl font-display text-3xl font-semibold text-moss-900 sm:text-4xl"
      >
        Das werden wir oft gefragt.
      </h2>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <div v-for="faq in faqs" :key="faq.q" class="tag-card p-6 pl-8">
          <h3 class="font-display text-lg font-semibold text-moss-900">
            {{ faq.q }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-700">
            {{ faq.a }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tag-input {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid var(--color-sand-200);
  background: var(--color-sand-50);
  padding: 0.7rem 0.95rem;
  font-family: var(--font-body);
  color: var(--color-ink-900);
}

.tag-input::placeholder {
  color: color-mix(in srgb, var(--color-ink-700) 45%, transparent);
}

.tag-input:focus {
  outline: 3px solid var(--color-clay-500);
  outline-offset: 2px;
}
</style>
