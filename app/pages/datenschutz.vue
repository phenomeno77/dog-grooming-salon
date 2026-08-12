<script setup lang="ts">
useHead({
  title: "Datenschutz – Bei Momo Hundesalon Musterstadt",
  meta: [
    {
      name: "description",
      content:
        "Datenschutzerklärung des Hundesalons Bei Momo: welche Daten wir verarbeiten, wie lange und welche Rechte du hast.",
    },
    { name: "robots", content: "noindex, follow" },
  ],
});

const updated = "August 2026";

const processing = [
  {
    what: "Wenn du die Website aufrufst",
    data: "IP-Adresse, aufgerufene Seite, Zeitpunkt, Browser, Betriebssystem",
    why: "Damit die Seite ausgeliefert wird und wir Angriffe oder Störungen erkennen können.",
    legal: "Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO",
    keep: "7 Tage, dann automatisch gelöscht",
  },
  {
    what: "Wenn du das Formular ausfüllst",
    data: "Name, Telefon oder E-Mail, Angaben zu deinem Hund, deine Nachricht",
    why: "Um dir zu antworten und einen passenden Termin vorzuschlagen.",
    legal: "Vertragsanbahnung, Art. 6 Abs. 1 lit. b DSGVO",
    keep: "Bis die Anfrage erledigt ist – wird daraus ein Termin, siehe unten",
  },
  {
    what: "Wenn du Kundin oder Kunde wirst",
    data: "Kontaktdaten, Rasse, Fellbeschaffenheit, Verhaltensnotizen, Terminhistorie",
    why: "Damit wir beim nächsten Mal wissen, was gut funktioniert hat und was nicht.",
    legal: "Vertragserfüllung, Art. 6 Abs. 1 lit. b DSGVO",
    keep: "Solange die Kundenbeziehung besteht, Rechnungen 7 Jahre (§ 132 BAO)",
  },
  {
    what: "Wenn wir deinen Hund fotografieren",
    data: "Fotos, auf Wunsch der Rufname",
    why: "Für Website und Social Media – nur wenn du zustimmst.",
    legal: "Einwilligung, Art. 6 Abs. 1 lit. a DSGVO",
    keep: "Bis du widerrufst, ohne Frist und ohne Begründung",
  },
];

const rights = [
  "Auskunft, welche Daten wir über dich gespeichert haben",
  "Berichtigung, wenn etwas falsch ist",
  "Löschung, soweit keine Aufbewahrungspflicht dagegensteht",
  "Einschränkung der Verarbeitung",
  "Herausgabe deiner Daten in einem gängigen Format",
  "Widerspruch gegen Verarbeitungen, die auf berechtigtem Interesse beruhen",
  "Widerruf erteilter Einwilligungen, jederzeit und formlos",
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-moss-900">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p class="eyebrow-tag text-gold-400">Rechtliches</p>
        <h1
          class="mt-4 font-display text-4xl font-semibold text-sand-50 sm:text-5xl"
        >
          Datenschutz
        </h1>
        <p class="mt-5 max-w-xl leading-relaxed text-moss-100/85">
          Welche Daten bei uns anfallen, wofür wir sie brauchen und wann sie
          wieder weg sind.
        </p>
        <p
          class="mt-6 font-tag text-xs uppercase tracking-wider text-moss-100/50"
        >
          Stand: {{ updated }}
        </p>
      </div>
    </section>

    <!-- Kurzfassung -->
    <section class="mx-auto max-w-3xl px-5 pt-16 md:px-8 md:pt-20">
      <div class="tag-card p-7 pl-9">
        <p class="eyebrow-tag text-clay-600">Die kurze Version</p>
        <p class="mt-3 leading-relaxed text-ink-700">
          Diese Seite misst nicht, wer du bist, wo du herkommst oder wie lange
          du bleibst. Kein Analytics, keine Cookies, keine Schriften von fremden
          Servern. Gespeichert wird nur, was du uns selbst schickst – und das
          brauchen wir, um dir zu antworten und den Termin deines Hundes zu
          planen.
        </p>
      </div>
    </section>

    <!-- Verantwortlich -->
    <section class="mx-auto max-w-3xl px-5 pt-12 md:px-8">
      <h2 class="font-display text-2xl font-semibold text-moss-900">
        Wer dahinter steht
      </h2>
      <div class="mt-4 space-y-3 leading-relaxed text-ink-700">
        <p>
          Verantwortlich im Sinne der DSGVO ist Max Muster, Bei Momo Hundesalon,
          Musterstraße 12, 6020 Musterstadt.
        </p>
        <p>
          Erreichbar unter
          <a
            href="mailto:hallo@Bei Momo.example"
            class="text-clay-600 underline underline-offset-4"
            >hallo@Bei Momo.example</a
          >
          oder
          <a
            href="tel:+43512345678"
            class="text-clay-600 underline underline-offset-4"
            >+43 512 345678</a
          >. Für einen eigenen Datenschutzbeauftragten sind wir zu klein –
          zuständig sind also wir selbst.
        </p>
      </div>
    </section>

    <!-- Was wir verarbeiten -->
    <section class="mx-auto max-w-3xl px-5 pt-12 md:px-8">
      <h2 class="font-display text-2xl font-semibold text-moss-900">
        Was wann anfällt
      </h2>

      <div class="mt-8 space-y-6">
        <div
          v-for="item in processing"
          :key="item.what"
          class="tag-card p-6 pl-8"
        >
          <h3 class="font-display text-lg font-semibold text-moss-900">
            {{ item.what }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-700">
            {{ item.why }}
          </p>

          <dl class="mt-4 space-y-2 border-t border-sand-200 pt-4 text-sm">
            <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt class="text-ink-700/60 sm:w-32 sm:shrink-0">Daten</dt>
              <dd class="text-ink-700">{{ item.data }}</dd>
            </div>
            <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt class="text-ink-700/60 sm:w-32 sm:shrink-0">Grundlage</dt>
              <dd class="text-ink-700">{{ item.legal }}</dd>
            </div>
            <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt class="text-ink-700/60 sm:w-32 sm:shrink-0">Speicherdauer</dt>
              <dd class="text-ink-700">{{ item.keep }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Weitergabe -->
    <section class="mx-auto max-w-3xl px-5 pt-12 md:px-8">
      <h2 class="font-display text-2xl font-semibold text-moss-900">
        Wer sonst noch etwas sieht
      </h2>
      <div class="mt-4 space-y-3 leading-relaxed text-ink-700">
        <p>
          Unser Webhoster betreibt die Server, auf denen diese Seite liegt. Er
          sitzt in der EU und ist vertraglich als Auftragsverarbeiter nach Art.
          28 DSGVO gebunden.
        </p>
        <p>
          Unsere Steuerberatung bekommt Rechnungsdaten, weil sie muss. Sonst
          niemand: Wir verkaufen keine Daten, betreiben kein Newsletter-Tool und
          geben nichts an Werbenetzwerke weiter.
        </p>
        <p>
          Schreibst du uns über WhatsApp, laufen diese Nachrichten über WhatsApp
          Ireland Ltd. Darauf haben wir keinen Einfluss, es gilt zusätzlich
          deren Datenschutzerklärung. Wenn dir das nicht recht ist: Telefon und
          Formular tun es auch.
        </p>
      </div>
    </section>

    <!-- Rechte -->
    <section class="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
      <h2 class="font-display text-2xl font-semibold text-moss-900">
        Was du verlangen kannst
      </h2>
      <p class="mt-4 leading-relaxed text-ink-700">
        Du musst dafür kein Formular ausfüllen und keine Frist einhalten. Ein
        Anruf oder eine Mail genügt, und wir kümmern uns innerhalb eines Monats
        darum.
      </p>

      <ul class="mt-6 space-y-2.5">
        <li
          v-for="right in rights"
          :key="right"
          class="flex items-start gap-3 text-ink-700"
        >
          <FontAwesomeIcon
            :icon="['fas', 'check']"
            class="mt-1 shrink-0 text-clay-600"
          />
          {{ right }}
        </li>
      </ul>

      <div class="tag-card mt-10 p-6 pl-8">
        <p class="eyebrow-tag text-clay-600">Wenn wir uns nicht einig werden</p>
        <p class="mt-2 text-sm leading-relaxed text-ink-700">
          Dann kannst du dich bei der österreichischen Datenschutzbehörde
          beschweren: Barichgasse 40–42, 1030 Wien,
          <a
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noopener"
            class="text-clay-600 underline underline-offset-4"
            >dsb.gv.at</a
          >. Lieber wäre uns, du sprichst vorher einmal mit uns.
        </p>
      </div>

      <p class="mt-10 text-sm leading-relaxed text-ink-700/70">
        Ändert sich etwas an der Website oder an unseren Abläufen, passen wir
        diese Erklärung an. Es gilt jeweils die hier veröffentlichte Fassung.
      </p>
    </section>
  </div>
</template>
