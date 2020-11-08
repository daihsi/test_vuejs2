<template>
  <div>
    <slot name='title' :user='user'></slot>
    <hr>
    <p>トータルのいいね数</p>
    <slot name='number'></slot>
  </div>
</template>

<script>
export default {
  props: ['headerText'],
  data() {
    return {
      user: {
        firsName: '太郎',
        lastName: '次郎',
      }
    };
  }
}
</script>