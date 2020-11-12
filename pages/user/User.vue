<template>
  <div>
    <b-container>
      <h3 class="py-4">User {{$route.params.userId}}</h3>
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

export default {
  name: 'User',
  data() {
    return {
      currentPage: 1,
      perPage: 3
    }
  },
  components: {
    PostItem
  },

  computed: {
    ...mapState({
      UserPost: state => state.post.userPost
    }),
    rows() {
      return this.UserPost.length
    },
    itemsForList() {
      return this.UserPost.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage,
      );
    }
  },
  created () {
    this.$store.dispatch('fetchUserPost', {userId: this.$route.params.userId})
  }
}
</script>

<style scoped>

</style>
