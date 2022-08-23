<template>
  <Slide v-if="show">
    <div class="slide__btns">
      <div class="slide__item slide__main" @click="$router.push('/')">
        Vue 3
      </div>
      <div class="slide__item" @click="$router.push('/posts')">Посты</div>
      <div class="slide__item" @click="$router.push('/about')">О сайте</div>
      <MyButton class="slide__item" @click="$router.push('/store')"
        >store</MyButton
      >
      <div class="slide__item" @click="$router.push('/composition')">
        composition
      </div>
    </div>
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

<style>
.slide__btns {
  display: flex;
  flex-direction: column;
}
.slide__item {
  padding: 10px;
}
.slide__item:hover {
  background-color: rgb(92, 91, 91);
  border-radius: 20px;
}
.slide__main {
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
