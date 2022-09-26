<template>
  <div class="input">
    <h2>input</h2>
    <input-type/>
    <input-size/>
    <input-clear/>
    <input-disabled/>
    <input-filter/>
    <input-limit/>
    <input-password/>
    <input-slot/>
    <input-textarea/>
  </div>
</template>
<script setup name='input'>

import InputType from './components/InputType.vue'
import InputSize from './components/InputSize.vue'
import InputClear from './components/InputClear.vue'
import InputDisabled from './components/InputDisabled.vue'
import InputFilter from './components/InputFilter.vue'
import InputLimit from './components/InputLimit.vue'
import InputPassword from './components/InputPassword.vue'
import InputSlot from './components/InputSlot.vue'
import InputTextarea from './components/InputTextarea.vue'
import { reactive, onMounted } from "vue";
const state = reactive({});
</script>
<style scoped lang='less'>
@deep: ~":deep()";
.input{
    padding:20px;
}
</style>