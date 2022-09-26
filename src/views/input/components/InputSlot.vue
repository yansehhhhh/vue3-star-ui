<template>
  <div class="">
    <h1>插槽slot</h1>
    <h2>左右图标</h2>
    <star-input type="text" v-model="input1" clearable>
      <template #icon-right>
        <i class="star-icon-richeng"></i>
      </template>
    </star-input>
    <br />
    <star-input type="text" v-model="input2">
      <template #icon-left>
        <i class="star-icon-sousuo"></i> </template
    ></star-input>
  </div>
</template>
    <script setup name=''>
import StarInput from "@/components/input/star-input.vue";
import { ref } from "vue";
const input1 = ref("");
const input2 = ref("2");
</script>
    <style scoped lang='less'>
@deep: ~":deep()";
</style>