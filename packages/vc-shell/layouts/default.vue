<template>
  <vc-layout :toolbarItems="toolbarItems" :account="account">
    <template #banner>
      <div>{{ $t("Running community edition, click to request a commercial license.") }}</div>
      <vc-button variant="special" :title="$t('Purchase')"></vc-button>
    </template>

    <template #left>
      <vc-drawer :items="menuItems"></vc-drawer>
    </template>

    <nuxt />
  </vc-layout>
</template>

<script>
  import { VcLayout, VcButton, VcDrawer } from "@flanker72/vc-ui-kit";
  import { defineComponent } from "@nuxtjs/composition-api";

  export default {
    components: {
      VcLayout,
      VcButton,
      VcDrawer,
    },

    data() {
      return {
        menuItems: [
          {
            id: 1,
            title: "Catalog",
            icon: "folder",
            to: "/catalog",
          },
          {
            id: 2,
            title: "Contacts",
            icon: "address-card",
            to: "/contacts",
          },
          {
            id: 3,
            title: "Marketing",
            icon: "flag",
            to: "/marketing",
          },
          {
            id: 4,
            title: "Thumbnails",
            icon: "image",
            to: "/thumbnails",
          },
          {
            id: 5,
            title: "Stores",
            icon: "archive",
            to: "/stores",
          },
        ],

        toolbarItems: [
          {
            id: "settings",
            icon: "cog",
            title: "Settings",
          },
          {
            id: "help",
            icon: "life-ring",
            title: "Help",
          },
          {
            id: "bell",
            icon: "bell",
            accent: true,
            title: "Notifications",
          },
          {
            id: "locale",
            icon: () => (this.$i18n.locale === "en" ? "globe" : "language"),
            onClick: this.switchLocale,
            title: "Switch Locale",
          },
          {
            id: "theme",
            icon: () => (this.theme === "light" ? "sun" : "moon"),
            onClick: this.switchTheme,
            title: "Switch Dark/Light mode",
          },
        ],

        account: {
          avatar: "/images/avatar.jpg",
          name: "Iurii A Taranov",
          role: "Administrator",
        },

        theme: "light",
      };
    },

    head() {
      return {
        bodyAttrs: {
          class: `vc-theme_${this.theme}`,
        },
      };
    },

    methods: {
      switchTheme() {
        this.theme = this.theme === "light" ? "dark" : "light";
      },

      switchLocale() {
        this.$i18n.setLocale(this.$i18n.locale === "en" ? "ru" : "en");
      },
    },
  };
</script>
