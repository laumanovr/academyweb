<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :value="value"
      :name="name"
      :checked="checked"
      @change="onChange"
    />
    <template v-if="$scopedSlots.default">
      <span class="checkbox__text">
        <!-- @slot Текст для чекбокса-->
        <slot>{{ name }}</slot>
      </span>
    </template>
  </label>
</template>

<script>
export default {
  name: "VCheckbox",
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    /**
     * Атрибут name для чекбокса
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * Атрибут value для чекбокса
     */
    value: [String, Number],
    /**
     * v-model
     */
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", event.target.checked, this.value);
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  &__input {
    width: 21.5px;
    height: 21.5px;
    display: inline-block;
    border: 2px solid #e9ebec;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: top;
    outline: none;
    flex-shrink: 0;
    &:checked {
      background-image: url("~@/assets/img/icons/tick.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 11px;
    }
  }
  &__text {
    margin-left: 13.25px;
    display: inline-block;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #2a364d;
  }
}
</style>
