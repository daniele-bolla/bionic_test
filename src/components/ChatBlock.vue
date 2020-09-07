<template>
  <div class="chat-block">
    <avatar></avatar>
    <loading-message v-if="isLoading"></loading-message>
    <chat-message v-else></chat-message>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import ChatMessage from "@/components/ChatMessage.vue";
import LoadingMessage from "@/components/LoadingMessage.vue";
export default {
  components: {
    Avatar,
    ChatMessage,
    LoadingMessage
  },
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.chat-block {
  display: flex;
  width: 80%;
}
</style>
