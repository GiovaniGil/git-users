<template>
  <div class="text-field">
    <button class="text-field__button" @click="$emit('search')">
      <i
        aria-hidden="true"
        class="text-field__button__icon mdi"
        :class="appendIcon"
      ></i>
    </button>
    <input
      v-bind="$attrs"
      @input="data = $event.target.value"
      @keyup="$emit('input', data)"
      @keyup.enter="$emit('search', data)"
      :value="data"
      class="text-field__input"
    />
    <button class="text-field__button" v-if="clearable && data" @click="clear">
      <i aria-hidden="true" class="text-field__button__icon mdi mdi-close"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "InputSearch",

  props: {
    clearable: Boolean,
    appendIcon: String,
  },

  data: () => ({
    data: null,
  }),

  methods: {
    clear() {
      this.data = "";
      this.$emit("input", this.data);
      this.$emit("search");
    },
  },
};
</script>

<style lang="sass" scoped>
.text-field
  display: flex
  padding: 0.5em
  font-size: 1em
  border-radius: 12px
  border: solid 1px rgba(0, 0, 0, 0.38)
  align-items: center
  background-color: #fff

  &:focus-within
    border: 0.0825em solid black

  &__input
    height: 100%
    width: 90%
    flex-grow: 1
    padding: 1px 2px
    border-style: none

    &:focus-visible
      outline: none !important

  &__button
    margin-right: .5em
    background: inherit
    border: none

    &__icon
      font-size: 1.5rem
      color: rgba(0, 0, 0, 0.50)
</style>