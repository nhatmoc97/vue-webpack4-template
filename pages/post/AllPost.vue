<template>
  <div>
    <b-container class="py-4">
      <PostItem v-for="item in itemsForList" :key="item.id" :post="item" />
      <div class="py-2">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="itemList"
          align="center"
        ></b-pagination>
      </div>
    </b-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import PostItem from '../../src/components/card/PostItem'
import PostSidebar from '../../src/components/sidebar/PostSidebar'
export default {
  name: 'AllPost',
  components: {
    PostItem,
    PostSidebar
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3
    }
  },
  computed: {
    ...mapState({
      AllPosts: state => state.post.posts
    }),
    rows() {
      return this.AllPosts.length
    },
    itemsForList() {
      return this.AllPosts.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage,
      );
    }
  },
  created () {
    this.$store.dispatch('fetchAllPost')
  }
}
</script>

<style>
@import "PostStyle.css";
</style>
