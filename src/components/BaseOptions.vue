<template>
  <div class="list">
    <div class="list__item" v-for="option in options" :key="option.name">
      <div class="radio-input">
        <input
          class="radio_input__input"
          :name="option.name"
          :value="option.value"
          type="radio"
          :id="option.name"
          :checked="option.value == value"
          @input="handleChange"
        />
        <label class="radio_input__label" :for="option.name">{{
          option.label
        }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleChange(event) {
      const value = event.target.value;
      const selcetedOption = this.options.find(option => option.value == value);
      this.$emit("input", selcetedOption);
    }
  }
};
</script>

<style lang="scss" scoped>
.radio-input {
  position: relative;
  display: block;
}
.radio-input .radio_input__input {
  position: absolute;
  left: -9999px;
}
.radio-input .radio_input__input + .radio_input__label {
  transition: 0.2s ease-out;
}

.radio-input .radio_input__input + .radio_input__label {
  position: relative;
  padding-left: 2.6rem;
  cursor: pointer;
  display: inline-block;
  height: 1.625rem;
  line-height: 1.625rem;
  user-select: none;
}
.radio-input .radio_input__input + .radio_input__label::after,
.radio-input .radio_input__input + .radio_input__label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.625rem;
  height: 1.625rem;
  z-index: 0;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: $dark-grey;
  transition: 0.2s ease-out;
}
.radio-input .radio_input__input:checked + .radio_input__label::before {
  background-color: $dark-purple-blue;
  border-color: $dark-purple-blue;
}
.radio-input .radio_input__input:checked + .radio_input__label::after {
  border-color: $dark-purple-blue;
  background-color: $dark-purple-blue;
  z-index: 0;
  -webkit-transform: scale(0.64);
  transform: scale(0.64);
}
.radio_input__input {
  box-sizing: border-box;
  padding: 0;
}
.list {
  display: flex;
  flex-direction: column;
}
.list__item {
  position: relative;
  display: block;
  padding: 1.25rem 1.25rem 1.25rem 0;
  margin-bottom: -1px;
  border-bottom: 2px solid $dark-grey;
}
</style>
