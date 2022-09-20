<template>
  <footer class="footer">
    <a href="https://github.com">
      <img :src="logo" class="nav-bar__logo" alt="logo" />
    </a>
    <small>© All rights reserved, 2022</small>
  </footer>
</template>

<script>
import logo from "@/app/assets/github_logo.svg";

export default {
  name: "Footer",

  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="sass" scoped>
.footer
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center
  box-shadow: 0px -12px 36px rgba(0, 0, 0, 0.25)
  background-color: #24292F
  width: 100%
  height: 120px

  small
    font-style: normal
    font-weight: 400
    font-size: 10px
    line-height: 12px
    color: #FFFFFF
</style>