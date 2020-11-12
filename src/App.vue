<template>
  <div>
    <LikeHeader >
        <h2>こんにちは</h2>
    </LikeHeader>
    <LikeNumber :total-number='number' @my-click='increment'></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <EventTitle></EventTitle>

      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <p>{{ eventData.host }}</p>

      <label for="datail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.datail"></textarea>
      <pre>{{ eventData.datail }}</pre>

      <input type="checkbox" id="isPrivete" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="payd" value="有料" v-model="eventData.price">
      <label for="payd">有料</label>
      {{ eventData.price }}

      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>

</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
import EventTitle from './components/EventTitle.vue';

export default {
  data() {
    return {
      number: 10,
      currentComponent: 'Home',
      locations: ['東京', '大阪', '京都', '奈良'],
      eventData: {
        title: "タイトル",
        maxNnmber: 0,
        host: "",
        datail: "",
        issPrivate: false,
        target: [],
        price: '無料',
        location: [],
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle,
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
