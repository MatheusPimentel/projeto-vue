<template>
  <b-form-input :type="type"
                :required="required"
                :placeholder="placeholder">
  </b-form-input>
</template>

<script>
export default {
  name: 'inputForm',
  props: {
    type: String,
    placeholder: String,
    required: Boolean
  }
}
</script>

<style scoped>
</style>
