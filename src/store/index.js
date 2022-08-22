import { createStore } from "vuex";
import { postModele } from "./postModule";

export default createStore({
  modules: {
    post: postModele,
  },
});
