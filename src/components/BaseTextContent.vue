<template>
  <div v-html="text"></div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
