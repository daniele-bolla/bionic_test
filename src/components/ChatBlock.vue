<template>
  <div class="chat-block" :class="`chat-block--${userLocation}`">
    <avatar :user-location="userLocation" :name="name"></avatar>
    <loading-message v-if="isLoading"></loading-message>
    <chat-message
      v-else
      :content="content"
      :user-location="userLocation"
    ></chat-message>
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
    },
    userLocation: {
      type: String,
      default: "remote",
      validator: value => {
        return ["front", "remote"].includes(value);
      }
    },
    content: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "A"
    }
  }
};
</script>

<style lang="scss">
.chat-block {
  display: flex;
  width: 80%;
  margin-bottom: 1.25rem;
}

.chat-block--front {
  flex-direction: row-reverse;
  align-self: flex-end;
}
</style>
