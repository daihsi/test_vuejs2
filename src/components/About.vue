<template>
  <div>
    <p>About</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deacivated');
  }
}
</script>