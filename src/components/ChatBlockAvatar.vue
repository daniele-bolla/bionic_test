<template>
  <div class="avatar centered-content" :class="`avatar--${userLocation}`">
    <span class="avatar__text" :class="`avatar__text--${userLocation}`">{{
      name
    }}</span>
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
    name: {
      type: String,
      default: "A"
    }
  }
};
</script>

<style lang="scss">
.avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  flex: none;
}

.avatar--remote {
  background-color: $light-blue;
  margin-right: 1.125rem;
}

.avatar--front {
  background-color: $dark-purple-blue;
  margin-left: 1.125rem;
}

.avatar__text {
  font-weight: $bold;
  font-size: 1.75rem;
  line-height: 1.75rem;
  display: block;
}

.avatar__text--remote {
  color: $dark-purple-blue;
}

.avatar__text--front {
  color: $white;
}
</style>
