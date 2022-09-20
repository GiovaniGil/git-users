<template>
  <div class="user-list">
    <div class="user-list__title">
      <h1>Top Users</h1>
    </div>
    <div class="user-list__row">
      <div
        v-for="(user, index) in userList"
        :key="index"
        class="user-list__item"
      >
        <UserCardComponent
          :title="user.login"
          :image="user.avatar_url"
          class="user-details__info"
        >
          <template v-slot:userDetails>
            <img src="@/app/assets/link.svg" width="14.7px" alt="link" />
            <a :href="user.html_url" target="_blank" class="user-details--url"
              >github</a
            >
          </template>
        </UserCardComponent>
      </div>
    </div>
    <div class="notFound" v-if="userList.length <= 0">
      <p>Users not found</p>
    </div>
  </div>
</template>

<script>
import logo from "@/app/assets/defaul_duck.png";

export default {
  name: "UserListComponent",

  components: {
    UserCardComponent: () =>
      import("@/app/components/molecules/UserCardComponent.vue"),
  },

  data() {
    return { logo };
  },

  props: {
    userList: {
      type: Array,
      required: true,
    },
    loading: Boolean,
  },

  methods: {
    formattedNumber(data) {
      return Number(data.match(/\d+/g).join());
    },
  },

  computed: {
    showInlineItems() {
      return this.userList.length > 4;
    },
  },
};
</script>

<style lang="sass">
.user-list
  margin: 0 auto

  &__title
    margin: 57px 0px 65px

  h1
    text-align: center
    font-style: normal
    font-weight: 800
    font-size: 48px
    line-height: 56px

  &__row
    flex-flow: row wrap
    justify-content: center
    gap: 2em
    display: flex

  &__item
    flex-basis: 20%
    -ms-flex: auto
    position: relative
    box-sizing: border-box
    margin-bottom: 2em

.user-details__info
  display: inline-flex

  img
    height: 100% !important

.notFound
  font-style: normal
  font-weight: 700
  font-size: 20px
  line-height: 23px
  text-align: center
</style>