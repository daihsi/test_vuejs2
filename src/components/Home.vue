<template>
  <div>
    <p v-border:solid.round.shadow="{width: '10px', color: 'red'}">Home</p>
    <h2>{{ title | lowerCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from './components/CountNumber.vue';
import { tokyoNumber} from '@/tokyoNumber';

export default {
  data() {
    return {
      tmpData: 'hello',
      title: 'welco',
      subTitle: 'saiko'
    }
  },
  components: {
    CountNumber
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    border(el, binding) {
      //elはカスタムディレクティブが紐づく要素,DOMを直接操作するためのもの
      el.style.border = 'solid black 2px';

      //binding.～でデータを受け取ることができる
      //二つ以上はオブジェクトにする
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = '20px';
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = '0 2px 5px rgba(0 0 0 0.24)';
      }
    }
  }
}
</script>
