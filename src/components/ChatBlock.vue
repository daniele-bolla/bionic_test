<template>
  <div class="chat-block" :class="`chat-block--${userLocation}`">
    <chat-block-avatar
      :user-location="userLocation"
      :name="name"
    ></chat-block-avatar>
    <chat-block-content-loader v-if="isLoading"></chat-block-content-loader>
    <chat-block-content
      v-else
      :content="content"
      :user-location="userLocation"
    ></chat-block-content>
  </div>
</template>

<script>
import ChatBlockAvatar from "@/components/ChatBlockAvatar.vue";
import ChatBlockContent from "@/components/ChatBlockContent.vue";
import ChatBlockContentLoader from "@/components/ChatBlockContentLoader.vue";

export default {
  components: {
    ChatBlockAvatar,
    ChatBlockContent,
    ChatBlockContentLoader
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
      type: Object
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
