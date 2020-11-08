<template>
  <div>
    <LikeHeader>
      <template v-slot:title='slotProps'>
        <h2>こんにちは</h2>
        <p>{{ slotProps.user.firsName }}</p>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber :total-number='number' @my-click='increment'></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    LikeHeader
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
