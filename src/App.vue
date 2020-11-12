<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さようなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
    <transition 
      enter-active-class="animate__animated animate__bounce" 
      leave-active-class="animate__animated animate__swing" 
      appear>
      <p v-if="show">hello!!</p>
    </transition>
    <transition name="slide" appear>
      <p v-show="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';

export default {
  data() {
    return {
      show: true,
      myComponent: 'ComponentA'
    };
  },
  components: {
    ComponentA,
    ComponentB
  }
}
</script>

<style scoped>

  /* 現れる時の最初の状態 */
  .fade-enter {
    opacity: 0;
  }

  /* 現れる時のトランジション状態 */
  .fade-enter-active {
    transition: opacity 0.5s;
  }

  /* 現れる時の最後の状態 */
  .fade-enter-to {
    opacity: 1;
  }

  /* 消える時の最初の状態 */
  .fade-leave {
    opacity: 1;
  }

  /* 消える時のトランジションの状態 */
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  /* 消える時の最後の状態 */
  .fade-leave-to {
    opacity: 0;
  }

  .slide-entrer,
  .slide-leave-to {
    opacity: 0;
  }

  .slide-entrer-active {
    animation: slide-in 0.5s;
    transition: opacity 0.5s;
  } 

  .slide-leave-active {
    animation: slide-in 0.5s reverse;
    transition: opacity 0.5s;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }

  .main {
    width: 70%;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
  }
</style>