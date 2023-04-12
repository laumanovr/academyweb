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
  background: #7fcc4e;
  &_main {
    padding: 20px 30px;
    background: #7fcc4e;
    color: #2a364d;
    &:hover {
      background: #2a364d;
      color: #7fcc4e;
    }
  }
  &_secondary {
    background: #2a364d;
    color: #ffffff;
    &:hover {
      background: #7fcc4e;
      color: #2a364d;
    }
  }
  &_tertiary {
    background: #2a364d;
    color: #ffffff;
    &:hover {
      background: #7fcc4e;
      color: #2a364d;
    }
  }
  &_outline {
    border-color: #2a364d;
    color: #2a364d;
    &:hover {
      background: #7fcc4e;
      border-color: transparent;
      color: #2a364d;
    }
  }
}
</style>
