<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <router-link :to="{ name: 'home' }" class="bar__logo">
        <img :src="logo" alt="logo" />
        <span>Github Userboard</span>
      </router-link>
    </div>
    <div class="nav-bar__search" v-if="showSearchInput">
      <InputSearchComponent
        @search="searchUser"
        outlined
        append-icon="mdi-magnify"
        clearable
      />
    </div>
  </div>
</template>

<script>
import logo from "@/app/assets/github_logo.svg";
import { searchMixin } from "@/app/mixins";

export default {
  name: "NavBarComponent",

  mixins: [searchMixin],

  components: {
    InputSearchComponent: () =>
      import("@/app/components/atoms/InputSearchComponent.vue"),
  },

  data() {
    return {
      logo,
    };
  },

  computed: {
    showSearchInput() {
      return this.$route.name == "home";
    },
  },
};
</script>

<style lang="sass" scoped>
.nav-bar
  display: flex
  justify-content: space-between
  align-items: center
  box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25)
  background-color: #24292F
  position: fixed
  width: 100%
  height: 80px
  z-index: 1

  &__logo
    a
      display: inline-flex
      gap: 16px
      align-items: center
      text-decoration: none

      span
        font-style: normal
        font-weight: 700
        font-size: 20px
        line-height: 23px
        color: #FFFFFF

  &__search
    width: 250px
</style>