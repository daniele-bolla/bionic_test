<template>
  <div class="message">
    <p class="message__content">
      Hello! Please choose from one of the options below:
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  border-radius: 0 $radius $radius;
  background-color: $dark-grey;
  padding: 2rem 2rem 1.8rem;
}

.message__content {
  color: $text-blue;
}
</style>
