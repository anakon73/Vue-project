<template>
  <Slide v-if="show">
    <a id="home" href="#">
      <span>Home</span>
    </a>
  </Slide>
</template>

<script>
import { Slide } from "vue3-burger-menu";
export default {
  components: { Slide },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
