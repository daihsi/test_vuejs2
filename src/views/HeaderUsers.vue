<template>
    <nav>
    <h3>Users</h3>
      <router-link 
        to="/" 
        active-class="link--active"
        exact
        class="link"
        >Home</router-link>
      <router-link 
        :to="'/users/' + Number(id)"
        active-class="link--active"
        exact
        class="link"
        >Users</router-link>
    </nav>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style scoped>

  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 30px;
  }

</style>