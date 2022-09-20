<template>
  <div class="user-details">
    <div class="user-details__back">
      <router-link :to="{ name: 'home' }">
        <img src="@/app/assets/back.png" alt="back" />
      </router-link>
    </div>

    <UserCardComponent
      :title="user.login"
      :image="user.avatar_url"
      :classes="['custom-card__title--details']"
      :titleAsLink="false"
      bigger
      v-if="user.login"
    />

    <div
      v-for="(repo, index) in user.repos"
      :key="index"
      class="container user-details__repos"
    >
      <div class="user-details__repos__link">
        <a :href="repo.html_url" target="_blak"> {{ repo.full_name }}</a>
      </div>
      <div class="user-details__repos__stats">
        <img src="@/app/assets/glass.svg" alt="watchers" />
        {{ repo.watchers_count }}
      </div>
      <div class="user-details__repos__stats">
        <img src="@/app/assets/star.svg" alt="stars" />
        {{ repo.stargazers_count }}
      </div>
    </div>

    <div class="user-details__disclaimer" v-if="!user.login && !loading">
      <p>User not found</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import uiMixins from "@/app/mixins/uiMixins";

export default {
  name: "UserDetailsPage",

  mixins: [uiMixins],

  components: {
    UserCardComponent: () =>
      import("@/app/components/molecules/UserCardComponent.vue"),
  },

  data: () => ({
    filmes: [],
    loadingTemp: false,
  }),

  async created() {
    if (this.$route.params.username) {
      await this.setDataByUser(this.$route.params.username)
        .then(async () => {
          console.log(this.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.$router.push("/");
    }
  },

  methods: {
    ...mapActions({
      setUserData: "userStore/setData",
      setDataByUser: "userStore/setDataByUser",
    }),
  },

  computed: {
    ...mapState({
      loadingPersonagem: (state) => state.userStore.loading,
      user: (state) => state.userStore.data,
    }),

    loading() {
      return this.loadingPersonagem || this.loadingFilmes || this.loadingTemp;
    },
  },
};
</script>

<style lang="sass">
.user-details
  display: flex
  align-items: center
  flex-direction: column
  margin-bottom: 80px

  &__back
    margin-top: 70px
    width: 100%
    display: flex

  &__repos
    display: flex
    width: 100%
    margin: auto
    align-items: center
    justify-content: space-between
    margin-bottom: 8px

    &__link
      flex-grow: 1

    &__stats
      width: 18%
      display: flex
      gap: 10px
      align-items: center

  &__info
    margin: .5em 0

  &__disclaimer
    font-size: 2em
    margin: 1em 0

  &__link
    font-size: 1.2em
    margin: 1em 0
    a
      text-decoration: none
      color: white
</style>