<template>
<div class="detail-container">
  <b-container>
    <b-card class="post-card mt-5">
      <b-link :to="{name:'user', params:{userId}}">
        <b-card-title class="text-left">User {{userId}}</b-card-title>
      </b-link>
      <h5 class="text-left">{{title}}</h5>
      <b-card-body>
        <b-card-text class="text-left">{{body}}</b-card-text>
      </b-card-body>
    </b-card>
  </b-container>
</div>
</template>

<script>

export default {
name: "PostDetail",
  data() {
  return {
    userId:this.$route.query.userId,
    title:this.$route.query.title,
    body:this.$route.query.body
  }
  }
}
</script>

<style scoped>

</style>
