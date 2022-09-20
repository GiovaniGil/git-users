<template>
  <div class="custom-card" v-bind="$attrs">
    <img
      :src="image"
      :alt="title"
      @error="onImgError"
      :class="{ 'custom-card--bigger': bigger }"
    />
    <span class="custom-card__title" :class="classes">
      <router-link
        :to="{ name: 'userDetails', params: { username: title } }"
        v-if="titleAsLink"
      >
        {{ title }}
      </router-link>
      <div v-else>{{ title }}</div>
    </span>

    <div class="custom-card__details">
      <slot name="userDetails" />
    </div>
  </div>
</template>

<script>
import defaultImage from "@/app/assets/defaul_duck.png";

export default {
  name: "UserCardComponent",

  props: {
    title: String,

    image: {
      type: String,
      required: true,
    },

    classes: {
      type: [Array, Object],
      default: null,
    },

    bigger: Boolean,

    titleAsLink: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    onImgError(e) {
      e.target.src = defaultImage;
    },
  },
};
</script>

<style lang="sass">
.custom-card
  display: flex
  flex-direction: column
  align-items: center

  img
    max-width: 140px
    height: 140px
    border-radius: 50%

  &--bigger
    max-width: 300px !important
    height: 300px !important

  &__title
    font-weight: 700
    font-size: 1.125em
    margin: .5em 0

    &--details
      font-weight: 800
      font-size: 40px
      line-height: 47px
      margin: 34px 0

    a:link, a:visited, a:active
      color: black

  &__title,
  &__details
    padding: 0 .5em

  &__details
    a:link, a:visited
      color: #54A3FF
    img
      border-radius: 0
      margin-right: 4.67px
</style>