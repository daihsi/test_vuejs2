<template>
    <nav>
    <h3>Home</h3>
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
        <button @click="increment(2)">+1</button>
        <button @click="decrement(2)">-1</button>
    </nav>
</template>

<script>
//import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  props: ['id'],
  methods: {
    ...mapActions('count', ['increment', 'decrement']),
    //...mapMutations(['increment', 'decrement'])
  }
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