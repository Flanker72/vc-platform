<template>
  <vc-blade
    icon="address-card"
    title="Contacts"
    subtitle="Manage contacts"
    width="400"
    :closable="false"
    :toolbarItems="toolbarItems"
  ></vc-blade>
</template>

<script>
  export default {
    data() {
      return {
        toolbarItems: [
          { id: 1, icon: "sync-alt", title: "Refresh" },
          { id: 2, icon: "plus", title: "Add" },
          { id: 3, icon: "trash", title: "Delete", disabled: true },
          { id: 4, icon: "download", title: "Import" },
          { id: 5, icon: "upload", title: "Export" },
        ],
      };
    },
  };
</script>
