/**
 * Nuxt.js Configuration
 * @author Yuri A Taranov <me@flanker72.ru>
 */
export default {
   globalName: "vcShell",
   target: "static",
   ssr: false,

   build: {
      babel: {
         presets({ envName }) {
            return [
               [
                  // Force set core-js version to proper build
                  "@nuxt/babel-preset-app",
                  { corejs: { version: 3 } }
               ]
            ];
         }
      }
   },

   buildModules: [
      "@nuxtjs/composition-api/module",
      [
         "nuxt-i18n",
         {
            locales: [
               {
                  code: "en",
                  file: "en.json"
               },
               {
                  code: "ru",
                  file: "ru.json"
               }
            ],
            defaultLocale: "en",
            strategy: "no_prefix",
            langDir: "~/locales/"
         }
      ],
      [
         "@/modules/vcExtensions",
         {
            extensions: ["@/extensions/contacts/contacts.blade.vue"]
         }
      ]
   ],

   generate: {
      // choose to suit your project
      interval: 2000
   },

   // Load global styles
   css: ["~/assets/styles/global"]
};
