<template>
  <div class="avatar centered-content">
    <span class="avatar__text">m</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.avatar {
  vertical-align: middle;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border-radius: 50%;
  background-color: $light-blue;
  margin-right: 1.125rem;
}

.avatar__text {
  font-weight: $bold;
  font-size: 1.75rem;
  line-height: 1.75rem;
  color: $dark-purple-blue;
  display: block;
}
</style>
