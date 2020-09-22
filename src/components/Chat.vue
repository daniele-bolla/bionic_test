<template>
  <div class="chat">
    <div class="chat__body">
      <chat-block
        v-for="(chatBlock, index) in chatStack"
        :key="index"
        :is-loading="chatBlock.isLoading"
        :name="chatBlock.name"
        :user-location="chatBlock.userLocation"
        :content="chatBlock.content"
      ></chat-block>
    </div>
  </div>
</template>

<script>
import ChatBlock from "@/components/ChatBlock";
import { state, mutations } from "@/BotConversation.js";

export default {
  components: {
    ChatBlock
  },
  computed: {
    chatStack() {
      return state.conversationStack;
    }
  },
  mounted() {
    this.runChat();
  },
  methods: {
    async runChat() {
      await mutations.addMessage("bot", {
        props: {
          text: "Hello! Please choose from one of the options below:"
        }
      });

      await mutations.addMessage("currentUser", {
        model: "",
        props: {
          options: [
            {
              value: "option-a",
              name: "option-a",
              label: "Option A"
            },
            {
              value: "option-b",
              name: "option-b",
              label: "Option B"
            },
            {
              value: "option-c",
              name: "option-c",
              label: "Option C"
            }
          ]
        }
      });
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

@media (max-width: 768px) {
  .chat__body {
    width: 100vw;
    max-width: 100%;
  }
}
</style>
