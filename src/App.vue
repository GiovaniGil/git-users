<template>
  <DefaultTemplate />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    DefaultTemplate: () =>
      import("@/app/components/templates/DefaultTemplate.vue"),
  },

  beforeDestroy() {
    this.clearUserState();
  },

  methods: {
    ...mapActions({
      clearUserState: "userStore/clearState",
    }),
  },
};
</script>

