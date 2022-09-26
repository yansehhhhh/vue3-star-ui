<template>
  <div class="">
    <h1>尺寸</h1>
    <h2>large</h2>
    <star-input size="large" v-model="input1" width="400px" />
    <h2>默认</h2>
    <star-input v-model="input2" width="100%" />
    <h2>small</h2>
    <star-input
      size="small"
      v-model="input3"
      style="width: 300px"
      @input="onInput"
      @change="onChange"
      @clear="onClear"
    />
  </div>
</template>
<script setup name=''>
import StarInput from "@/components/input/star-input.vue";
import { ref } from "vue";
const input1 = ref("");
const input2 = ref("");
const input3 = ref("");

//输入时
const onInput = () => {
  console.log(input3.value);
};

//回车或者失焦
const onChange = () => {
  console.log("onChange");
};

//点击清空内容
const onClear = () => {
  console.log("onClear");
};
</script>
<style scoped lang='less'>
@deep: ~":deep()";
</style>