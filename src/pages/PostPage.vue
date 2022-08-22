<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput v-model="searchQuery" placeholder="Поиск...." />
    <div class="app__btns">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
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
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      limit: 10,
      page: 1,
      totalPages: 0,
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
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
    async fetchPost() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearch() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLocaleLowerCase())
      );
    },
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
