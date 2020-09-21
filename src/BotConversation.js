import Vue from "vue";

const fakeCall = (time, func, ...args) => {
  let timer;
  clearTimeout(timer);
  return new Promise(resolve => {
    timer = setTimeout(() => {
      resolve(func(...args));
    }, time);
  });
};

const createMessage = (userType, content) => {
  return {
    id: userType + Date.now(),
    isLoading: true,
    userLocation: userType == "bot" ? "remote" : "front",
    content,
    name: userType == "bot" ? "m" : "Me"
  };
};

const stopLoading = message => {
  message.isLoading = false;
  return message;
};

const fakePost = async (userType, content) => {
  const newMessage = createMessage(userType, content);
  state.conversationStack = [...state.conversationStack, newMessage];
  return await fakeCall(1000, stopLoading, newMessage);
};

const mutateTextMessage = (messageToUpdate, newTextValue) => {
  messageToUpdate.content.props.text = newTextValue;
  return messageToUpdate;
};

const fakePut = async (messageToUpdate, newTextValue) => {
  messageToUpdate.isLoading = true;
  const messageUpdated = mutateTextMessage(messageToUpdate, newTextValue);
  return await fakeCall(1000, stopLoading, messageUpdated);
};

export const state = Vue.observable({
  conversationStack: [],
  userChoice: ""
});

export const getters = {
  find: id => {
    return state.conversationStack.find(message => message.id === id);
  }
};

export const mutations = {
  async addMessage(userType, content) {
    return await fakePost(userType, content);
  },
  async changeUserChoice(id, newMessage) {
    const messageToUpdate = getters.find(id);
    await fakePut(messageToUpdate, newMessage);
  },
  async setUserChoice({ value, label }) {
    state.userChoice = value;
    const { length, [length - 1]: last } = state.conversationStack;
    if (last.userLocation == "front") {
      await mutations.addMessage("bot", {
        props: {
          text: `<strong>${label}</strong>? Great choice!`
        }
      });
    } else {
      await mutations.changeUserChoice(
        last.id,
        `<strong>${label}</strong>? Great choice!`
      );
    }
  }
};
