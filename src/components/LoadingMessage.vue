<template>
  <div class="dots flex">
    <div class="dots__dot dots__dot--1"></div>
    <div class="dots__dot dots__dot--2"></div>
    <div class="dots__dot dots__dot--3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dots {
  display: flex;
  align-self: center;
}

.dots__dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin-right: 0.4rem;
}

.dots__dot--1 {
  background-color: $dark-blue;
  animation: pulse1 2.5s ease infinite;
}

.dots__dot--2 {
  background-color: #dee3e6;
  animation: pulse2 2.5s ease infinite;
}

.dots__dot--3 {
  background-color: $dark-grey;
  animation: pulse3 2.5s ease infinite;
}

@keyframes pulse1 {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes pulse2 {
  0% {
    opacity: 0;
  }
  21% {
    opacity: 0;
  }
  22% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes pulse3 {
  0% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  44% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
