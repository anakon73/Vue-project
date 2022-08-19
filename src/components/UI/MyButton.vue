<template>
  <button class="btn" style="margin-top: 0">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
.btn {
  background: none;
  padding: 10px 15px;
  border: 2px solid teal;
  color: teal;
  border-radius: 20px;
}
</style>
