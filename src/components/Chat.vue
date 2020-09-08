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
  // data() {
  //   return {
  //     chatStack: state
  //   };
  // },
  computed: {
    chatStack() {
      return state.conversationStack;
    }
  },
  mounted() {
    this.runChat();
  },
  methods: {
    fakeCall(fakeMessage) {
      this.chatStack.push(fakeMessage);
      return new Promise(resolve => {
        setTimeout(() => {
          fakeMessage.isLoading = false;
          resolve(fakeMessage);
        }, 1000);
      });
    },
    changeUserChoice(index, newVal) {
      let fakeMessage = this.chatStack[index];
      fakeMessage.isLoading = true;
      fakeMessage.content.props.text = `${newVal}? Great choice!`;

      return new Promise(resolve => {
        setTimeout(() => {
          fakeMessage.isLoading = false;
          resolve(fakeMessage);
        }, 1000);
      });
    },
    createMessage(userType, content) {
      return {
        id: Date.now(),
        isLoading: true,
        userLocation: userType == "bot" ? "remote" : "front",
        content,
        name: userType == "bot" ? "m" : "Me"
      };
    },
    async runChat() {
      await mutations.addMessage("bot", {
        props: {
          text: "Hello! Please choose from one of the options below:"
        }
      });

      await mutations.addMessage("currentUser", {
        model: "",
        onSelect: async val => {
          const { length, [length - 1]: last } = this.chatStack;
          if (last.userLocation == "front") {
            // const lastBotMessage = this.createMessage("bot", {
            //   props: {
            //     text: `${val}? Great choice!`
            //   }
            // });
            // await this.fakeCall(lastBotMessage);
            await mutations.addMessage("bot", {
              props: {
                text: `<strong>${val}</strong>? Great choice!`
              }
            });
          } else {
            // this.changeUserChoice(length - 1, val);
            await mutations.changeUserChoice(
              last.id,
              `<strong>${val}</strong>? Great choice!`
            );
          }
        },
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
      /*
      const firstBotMessage = this.createMessage("bot", {
        props: {
          text: "Hello! Please choose from one of the options below:"
        }
      });
      await this.fakeCall(firstBotMessage);

      const firstUserMessage = this.createMessage("currentUser", {
        model: "",
        onSelect: async val => {
          const { length, [length - 1]: last } = this.chatStack;
          if (last.userLocation == "front") {
            const lastBotMessage = this.createMessage("bot", {
              props: {
                text: `${val}? Great choice!`
              }
            });
            await this.fakeCall(lastBotMessage);
          } else {
            this.changeUserChoice(length - 1, val);
          }
        },
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
      await this.fakeCall(firstUserMessage);*/
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
