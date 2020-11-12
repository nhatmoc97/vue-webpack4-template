<template>
  <b-card class="post-card mb-3">
    <b-link @click="viewUser(post.userId)">
      <b-card-title class="text-left">User {{ post.userId }}</b-card-title>
    </b-link>

    <h5 class="text-left">{{ post.title }}</h5>
    <b-card-body>
      <b-card-text class="text-left">{{ post.body.substr(0, 100) }}</b-card-text>
    </b-card-body>
    <b-link @click="viewDetail(post.id,post.userId,post.title,post.body)">Detail</b-link>
  </b-card>
</template>

<script>
import {PostModel} from '../../models/PostModel'

export default {
  name: 'PostItem',
  props: {
    post: PostModel
  },
  methods: {
    viewDetail (postId, userId, title, body) {
      this.$router.push({
        path: `/post/${postId}`,
        query: {userId, title, body}
      })
    },
    viewUser (userId) {
      this.$router.push({path: `/user/${userId}`})
    }
  }
}
</script>

<style>
.post-card {
  box-shadow: 1px 1px 15px 5px #08bb53;
}
</style>
