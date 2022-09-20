<template>
  <div class="container">
    <section class="mt-5">
      <UserListComponent :userList="userList" :loading="loading" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { uiMixins, searchMixin } from "@/app/mixins";

export default {
  name: "UserListPage",

  mixins: [uiMixins, searchMixin],

  components: {
    UserListComponent: () =>
      import("@/app/components/organisms/UserListComponent.vue"),
  },

  data: () => ({
    search: "",
    per_page: 100,
  }),

  async created() {
    await this.handleDados({ per_page: this.per_page }).catch((erro) => {
      this.$toasted.error(`Erro: ${erro}`, {
        position: "top-center",
        duration: 2000,
      });
    });
  },

  computed: {
    ...mapState({
      loading: (state) => state.userStore.loading,
      pagination: (state) => state.userStore.pagination,
    }),
    ...mapGetters({
      userList: "userStore/getList",
    }),
  },
};

//TODO width
</script>

<style lang="sass">
section
  margin-bottom: 2em
</style>