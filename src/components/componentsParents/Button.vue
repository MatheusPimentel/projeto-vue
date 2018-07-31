<template>
    <button :type="type" class="btn" @click="onClick" :disabled="disable"
            :class='[computedType, computedOutline, computedSize, computedActive, computeBlock]'>
        <slot>Button</slot>
    </button>
</template>

<script>
  export default {
    name:"btn-crud",
    props: {
      btnText: String,
      size: String,
      type: String,
      outline: String,
      active: String,
      block: String,
      onClick: {
        type: Function,
        required: true
      },
      disable: Boolean
    },
    computed: {
      computedType: function () {
        return "btn btn-" + this.type;
      },
      computedOutline: function () {
        return "btn btn-outline" + this.outline;
      },
      computedSize: function () {
        return "btn btn-" + this.size;
      },
      computedActive: function () {
        return this.active === "true" ? "active" : "";
      },
      computeBlock: function () {
        return this.block === "true" ? "btn-block" : "";
      }
    }
  }
</script>

<style scoped>
</style>
