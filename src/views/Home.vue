<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input 
      type="text"
      v-model="message" 
      >
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('count', ['doubleCount', 'tripleCount']),
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch('updateMessage', value);
      }
    }
  },
  props: ['id'],
  methods: {
    toUsers() {
      this.$router.push('users/' + Number(this.id));
    },
  }
}
</script>