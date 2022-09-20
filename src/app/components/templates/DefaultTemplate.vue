<template>
  <div class="template">
    <NavBarComponent class="wrapper" />

    <div class="main wrapper">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <FooterComponent class="wrapper" />
  </div>
</template>

<script>
export default {
  name: "DefaultTemplate",

  components: {
    NavBarComponent: () =>
      import("@/app/components/molecules/NavBarComponent.vue"),
    FooterComponent: () =>
      import("@/app/components/molecules/FooterComponent.vue"),
  },
};
</script>

<style lang="sass">
.template
  display: flex
  flex-direction: column
  min-height: 100%
  align-items: center

.main
  padding-top: 80px
  flex: 1
  width: 100%

.fade-enter-active,
.fade-leave-active
  transition-duration: 0.2s
  transition-property: opacity
  transition-timing-function: ease

.fade-enter,
.fade-leave-active
  opacity: 0
</style>