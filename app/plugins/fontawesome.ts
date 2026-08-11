import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faHouse,
  faCommentDots,
  faCircleInfo,
  faCompass,
  faStar,
  faCheck,
  faArrowRight,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Nuxt handles CSS itself — stop FA injecting its own <style> tag
config.autoAddCss = false;

library.add(
  faPhone,
  faHouse,
  faCommentDots,
  faCircleInfo,
  faCompass,
  faStar,
  faCheck,
  faArrowRight,
  faClock,
  faEnvelope,
  faFacebookF,
  faInstagram,
  faWhatsapp,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
