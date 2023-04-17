<template>
  <button :class="[getClasses]" :disabled="disabled" @click="onButtonClick">
    <!-- @slot Текст для компонента кнопки без иконки -->
    <slot>Текст на кнопке</slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    theme: {
      default: "main",
      type: String,
      validator: function (value) {
        return (
          ["main", "secondary", "tertiary", "outline"].indexOf(value) !== -1
        );
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getClasses() {
      return [`button_${this.theme}`, "button"];
    },
  },
  methods: {
    onButtonClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: #ecf2ff;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  border-radius: 51px;
  background: $lime-green;
  &_main {
    padding: 20px 30px 19px;
    background: $lime-green;
    color: $dark-blue;
    &:hover {
      background: $dark-blue;
      color: $lime-green;
    }
  }
  &_secondary {
    padding: 15px 30px;
    background: $dark-blue;
    color: $white;
    &:hover {
      background: $lime-green;
      color: $dark-blue;
    }
  }
  &_tertiary {
    background: $dark-blue;
    color: $white;
    text-transform: none;
    &:hover {
      background: $lime-green;
      color: $dark-blue;
    }
  }
  &_outline {
    padding: 4px 30px;
    background: transparent;
    border-color: $dark-blue;
    color: $dark-blue;
    text-transform: none;
    &:hover {
      background: $lime-green;
      border-color: transparent;
      color: $dark-blue;
    }
  }
  @media #{$sm} {
    &_secondary {
      padding: 10px 20px;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
    }
    &_outline {
      padding: 4px 20px;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
    }
  }
}
</style>
