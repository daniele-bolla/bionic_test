<template>
  <div class="chat">
    <div class="chat__body">
      <chat-block></chat-block>
    </div>
  </div>
</template>

<script>
import ChatBlock from "@/components/ChatBlock";

export default {
  components: {
    ChatBlock
  }
};
</script>

<style lang="scss">
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
