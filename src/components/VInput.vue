<template>
  <label
    :class="[
      'input',
      {
        input_error: error,
      },
    ]"
  >
    <input
      :type="inputType"
      class="input__block"
      ref="input"
      :value="isModelValueActive ? modelValue : val"
      :name="name"
      :readonly="readonly"
      required
      autocomplete="off"
      @input="onInput"
    />
    <label class="input__placeholder">{{ placeholder }}</label>
    <div
      v-if="type === 'password'"
      class="input__icon-password"
      :class="{ 'input__icon-password_slash': inputType === 'text' }"
      @click="toggleInputType"
    ></div>
  </label>
</template>

<script>
export default {
  name: "VInput",
  model: {
    prop: "modelValue",
    event: "input",
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    /**
     * Атрибут name для инпута
     */
    name: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * Значение поля ввода
     */
    value: {
      type: [String, Number],
      default: "",
    },
    /**
     * Placeholder для поля ввода
     */
    placeholder: {
      type: String,
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.isModelValueActive = this.modelValue !== undefined;
  },
  data() {
    return {
      val: this.value,
      inputType: this.type,
    };
  },
  methods: {
    onInput(e) {
      this.val = e.target.value;
      this.$emit("input", e.target.value);
    },
    toggleInputType() {
      this.inputType = this.inputType === "password" ? "text" : "password";
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss">
.input {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 22px;
  border: 1px solid transparent;
  background-color: #f8f8f9;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  cursor: text;
  &_error {
    border: 1px solid #f03d3d;
    .input__placeholder {
      color: #c69898;
    }
  }
  &__block {
    width: 100%;
    border: none;
    padding: 26px 0 12px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    min-height: 25px;
    color: #2a364d;
    background-color: transparent;
    outline: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px #f8f8f9 inset;
    }
    &:-webkit-autofill + .input__placeholder {
      top: 13px;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #2a364d;
    }
    &::-ms-reveal,
    &::-ms-clear {
      display: none;
    }

    &:focus ~ .input__placeholder,
    &:not(:focus):valid ~ .input__placeholder {
      top: 13px;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #2a364d;
    }
  }
  &__icon-password {
    position: relative;
    flex-shrink: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("~@/assets/img/icons/eye.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    margin: 0px -4px 0 5px;
    cursor: pointer;
    &_slash {
      background-image: url("~@/assets/img/icons/eye-slash.svg");
    }
  }

  &__placeholder {
    position: absolute;
    pointer-events: none;
    top: 23px;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #9da3af;
    transition: 0.3s;
  }

  @media #{$xs} {
    padding: 0 20px;
    &__placeholder {
      top: 18px;
    }
    &__block {
      padding: 21px 0 7px;
      &:-webkit-autofill + .input__placeholder {
        top: 8px;
      }
    }
    &__block:focus + .input__placeholder,
    &__block:valid + .input__placeholder {
      top: 8px;
    }
  }
}
</style>
