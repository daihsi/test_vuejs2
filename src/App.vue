<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <br>
    
    <button @click="add">追加</button>
    <ul style="width: 200px; margin: auto;">
      <transition-group name="fade" tag="div">
      <li 
        style="cursor: pointer;"
        v-for="(number, index) in numbers"
        :key="number"
        @click="remove(index)"
      >{{ number }}</li>
      </transition-group>
    </ul>

    <br>

    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>

    <br><br>
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
      numbers: [0, 1, 2],
      nextNumber: 3,
      show: true,
      myComponent: 'ComponentA'
    };
  },
  components: {
    ComponentA,
    ComponentB
  },
  methods: {

      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length);
      },

      add() {
        this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      },

      remove(index) {
        this.numbers.splice(index, 1);
      },

      //el...DOM操作
      //done()...JavaScriptのアニメーションが終わったことをVue.jsに教える関数,非同期の時によく使う
      //cssを使わないときは、done()を必ず使う
      //
      //現れる前
      beforeEnter(el) {
        el.style.transform = 'scale(0)'
      },
    
      //現れる時
      enter(el, done) {
        let scale = 0;
        const interval = setInterval(() => {
          el.style.transform = `scale(${scale})`;
          scale += 0.1
          if (scale > 1) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },

      //消える時
      leave(el, done) {
        let scale = 1;
        const interval = setInterval(() => {
          el.style.transform = `scale(${scale})`;
          scale -= 0.1
          if (scale < 0) {
            clearInterval(interval);
            done();
          }
        }, 20);
      }
  }
}
</script>

<style scoped>

  .circle {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    background-color: pink;
  }

  /* transformは何かを動かすもの */
  .fade-move {
    transition: transform 1s;
  }


  /* 現れる時の最初の状態 */
  .fade-enter {
    opacity: 0;
  }

  /* 現れる時のトランジション状態 */
  .fade-enter-active {
    transition: opacity 1s;
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
    transition: opacity 1s;
    position: absolute;
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