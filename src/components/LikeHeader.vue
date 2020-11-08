<template>
  <div>
    <slot ></slot>
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