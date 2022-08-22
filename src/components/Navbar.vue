<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Посты</MyButton>
      <MyButton @click="$router.push('/about')" style="margin-left: 20px"
        >О сайте</MyButton
      >
      <MyButton @click="$router.push('/store')" style="margin-left: 20px"
        >store</MyButton
      >
      <MyButton @click="$router.push('/composition')" style="margin-left: 20px"
        >composition</MyButton
      >
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default { components: { MyButton } };
</script>

<style>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
