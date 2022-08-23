<template>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{ 'current-page': page === pageNumber }"
      @click="$emit('changePages', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid teal;
  border-radius: 10px;
  margin: 0px 2px;
}
.current-page {
  border: 2px solid skyblue;
  margin: 0 15px;
  transform: scale3d(1.1, 1, 1.1);
  border-radius: 30%;
}
@media (max-width: 400px) {
  .page {
    padding: 3px;
  }
}
@media (min-width: 400px) {
  .page {
    padding: 6px;
  }
}
@media (min-width: 500px) {
  .page {
    padding: 10px 12px;
  }
}
</style>
