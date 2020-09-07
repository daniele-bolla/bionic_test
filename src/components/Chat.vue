<template>
  <div class="chat">
    <div class="chat__body">
      <chat-block
        v-for="chatBlock in chatBlocks"
        :key="chatBlock.time"
        :is-loading="chatBlock.isLoading"
        :name="chatBlock.name"
        :user-location="chatBlock.userLocation"
      ></chat-block>
    </div>
  </div>
</template>

<script>
import ChatBlock from "@/components/ChatBlock";
export default {
  components: {
    ChatBlock
  },
  data() {
    return {
      chatBlocks: [
        {
          time: Date.now(),
          isLoading: true,
          userLocation: "remote",
          content: "",
          name: "m"
        },
        {
          time: Date.now(),
          isLoading: false,
          userLocation: "front",
          contentType: "options",
          content: "asdasfaf ",
          name: "Me"
        },
        {
          time: Date.now(),
          isLoading: false,
          userLocation: "remote",
          content: "asdasfaf ",
          name: "m"
        }
      ]
    };
  },
  mounted() {
    this.runChat();
  },
  methods: {
    runChat() {
      const { [0]: firstChat } = this.chatBlocks;
      console.log(firstChat);
    }
  }
};
</script>

<style lang="scss">
.chat {
  background-color: $light-grey;
  border-radius: $radius $radius 0 0;
}

.chat__body {
  width: 60vw;
  max-width: 1200px;
  margin: 3.5rem auto 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
