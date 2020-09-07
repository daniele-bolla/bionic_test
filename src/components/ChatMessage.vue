<template>
  <div class="message" :class="`message--${userLocation}`">
    <div class="message__content" :class="`message__content--${userLocation}`">
      Hello! Please choose from one of the options below:
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userLocation: {
      type: String,
      default: "remote",
      validator: value => {
        return ["front", "remote"].includes(value);
      }
    },
    message: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  padding: 2rem 2rem 1.8rem;
}

.message--remote {
  background-color: $dark-grey;
  border-radius: 0 $radius $radius;
}
.message--front {
  border-radius: $radius 0 $radius $radius;
  background-color: $white;
}

.message__content {
  color: $text-blue;
}
</style>
