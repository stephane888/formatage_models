<template>
  <fade-transition :duration="200" origin="center top" mode="out-in">
    <router-view></router-view>
  </fade-transition>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
export default {
  components: {
    FadeTransition,
  },
};
</script>
