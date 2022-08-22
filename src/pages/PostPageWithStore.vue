<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск...."
      v-focus
    />
    <div class="app__btns">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
      <MyDialog v-model:show="dialogVisible"
        ><PostForm @create="createPost"
      /></MyDialog>
    </div>
    <PostList
      :posts="sortedAndSearch"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет Загрузка</div>
    <PostPages
      @changePages="ChangePage"
      :page="page"
      :totalPages="totalPages"
    />
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import axios from "axios";
import MyButton from "../components/UI/MyButton.vue";
import MyDialog from "../components/UI/MyDialog.vue";
import MyInput from "../components/UI/MyInput.vue";
import MySelect from "../components/UI/MySelect.vue";
import PostPages from "../components/PostPages.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
    MyDialog,
    MyInput,
    MySelect,
    PostPages,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      fetchPost: "post/fetchPost",
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    ChangePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPost();
    },
  },
  mounted() {
    this.fetchPost();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      limit: (state) => state.post.limit,
      page: (state) => state.post.page,
      totalPages: (state) => state.post.totalPages,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearch: "post/sortedAndSearch",
    }),
  },
};
</script>

<style>
.app__btns {
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
}
</style>
