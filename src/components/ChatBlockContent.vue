<template>
  <div class="content" :class="`content--${userLocation}`">
    <div class="content__body" :class="`content__body--${userLocation}`">
      <div v-if="userLocation === 'remote'">
        <base-text-content v-bind="{ ...content.props }"></base-text-content>
      </div>
      <div v-else>
        <base-options
          v-bind="{ ...content.props }"
          v-model="userChoice"
        ></base-options>
      </div>
    </div>
  </div>
</template>

<script>
import BaseOptions from "@/components/BaseOptions.vue";
import BaseTextContent from "@/components/BaseTextContent.vue";

import { state, mutations } from "@/BotConversation.js";

export default {
  components: {
    BaseOptions,
    BaseTextContent
  },
  props: {
    userLocation: {
      type: String,
      default: "remote",
      validator: value => {
        return ["front", "remote"].includes(value);
      }
    },
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    userChoice: {
      get() {
        return state.userChoice;
      },
      async set(val) {
        await mutations.setUserChoice(val);
      }
    }
  }
};
</script>

<style lang="scss">
.content {
  width: 100%;
  padding: 2rem 2rem 1.8rem;
}

.content--remote {
  background-color: $dark-grey;
  border-radius: 0 $radius $radius;
}
.content--front {
  border-radius: $radius 0 $radius $radius;
  background-color: $white;
}

.content__body {
  color: $text-blue;
}
</style>
