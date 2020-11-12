<template>
  <div>
    <label for="title">タイトル</label>
    <input id="title" type="text" v-model="eventData.title">
    <p>{{ eventData.title }}</p>
  </div>
</template>