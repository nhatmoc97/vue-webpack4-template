<template>
  <div>
    <b-container>
      <h2 class="title-sidebar">Post by</h2>
      <ul>
        <li>User{{user}}</li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PostSidebar',
  props:['user']
}
</script>

<style scoped>
.title-sidebar {
  text-align: center;
  border-color: #23238a;
  border-width: 3px;
  border-radius: 10px;
}
</style>
