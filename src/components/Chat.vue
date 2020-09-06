<template>
  <div class="chat">
    <div class="chat__body"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" >
.chat {
  background-color: $light-grey;
  border-radius: $radius $radius 0 0;
}

.chat__body {
  width: 80vw;
  max-width: 1200px;
  margin: 1em auto 2em;
  padding: 1rem;
}
</style>