<template>
  <div>
    <LikeHeader>
        <h2>こんにちは</h2>
    </LikeHeader>
    <LikeNumber :total-number='number' @my-click='increment'></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';

export default {
  data() {
    return {
      number: 10,
      currentComponent: 'Home',
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
  },
  methods: {
    increment(value) {
      this.number = value;
    }
  }
};
</script>

<style>

</style>
