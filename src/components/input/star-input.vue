<template>
  <div class="__star-input" :class="inputClass" :style="inputStyle">
    <span class="__star-input-icon-left">
      <slot name="icon-left"></slot>
    </span>
    <textarea
      v-if="props.type === 'textarea'"
      ref="starTextarea"
      :value="props.modelValue"
      :style="textareaStyle"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    ></textarea>
    <input
      v-else
      ref="starInput"
      :type="type"
      :value="props.modelValue"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
    <i
      class="star-icon-guanbi"
      @click="clear"
      v-if="props.clearable && props.modelValue && !props.disabled"
    ></i>
    <i
      class="star-icon-yincang"
      v-if="props.password"
      v-show="showPass"
      @click="changeShowPass"
    ></i>
    <i
      class="star-icon-yulan"
      v-if="props.password"
      v-show="!showPass"
      @click="changeShowPass"
    ></i>
    <span class="__star-input-icon-right">
      <slot name="icon-right"></slot>
    </span>
  </div>
</template>
<script setup name='StarInput'>
import { ref, computed, onMounted, watch } from "vue";

const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
  //input类型，原生属性
  type: {
    type: String,
    default: "text",
  },
  //尺寸
  size: {
    type: String,
    default: "medium",
  },
  //宽度
  width: {
    type: String,
    default: "154px",
  },
  //一键清空
  clearable: {
    type: Boolean,
    default: false,
  },
  //禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  //placeholder
  placeholder: {
    type: String,
    default: "",
  },
  //过滤
  filter: {
    type: String,
    default: "",
  },
  //最值
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  //展示显示隐藏密码的icon
  password: {
    type: Boolean,
    default: false,
  },
  autoSize: {
    type: Object,
    default: {
      min: 2,
      max: 4,
    },
  },
});

const emit = defineEmits(["update:modelValue", "clear"]);

const isFocus = ref(false);
const starInput = ref();
const starTextarea = ref();
const showPass = ref(false);
const type = ref("text");
const sizeMap = {
  large: 24,
  medium: 20,
  small: 16,
};

const inputClass = computed(() => {
  return {
    "__star-input-focus": isFocus.value,
    "__star-input-medium": props.size === "medium",
    "__star-input-small": props.size === "small",
    "__star-input-large": props.size === "large",
    "__star-input-disabled": props.disabled == true,
  };
});

const textareaStyle = computed(() => {
  return {
    "min-height": `${props.autoSize.min * sizeMap[props.size]}px`,
    "max-height": `${props.autoSize.max * sizeMap[props.size]}px`,
  };
});

const inputStyle = computed(() => {
  return {
    width: props.width,
  };
});

const onInput = (e) => {
  console.log(e);
  if (props.filter) {
    e.target.value = filter(e.target.value);
  }
  if (props.type === "number") {
    e.target.value = extreme(e.target.value);
  }
  emit("update:modelValue", e.target.value);
};

const onFocus = () => {
  isFocus.value = true;
};

const onBlur = () => {
  isFocus.value = false;
};

//过滤
const filter = (val) => {
  if (props.filter == "int") {
    //正整数
    const pattern = new RegExp(/[^0-9]/g);
  } else if (props.filter == "symbol") {
    //特殊符号
    const pattern = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
    );
  }
  return val.replace(pattern, "");
};

//最值
const extreme = (val) => {
  if (val > props.max) {
    val = props.max;
  }
  if (val < props.min) {
    val = props.min;
  }
  return val;
};

//显示/隐藏密码
const changeShowPass = () => {
  showPass.value = !showPass.value;
  type.value = showPass.value ? "text" : "password";
};

//清空内容
const clear = () => {
  console.log("clear");
  emit("update:modelValue", "");
  emit("clear");
};

//textarea高度自适应
watch(
  () => props.modelValue,
  () => {
    if (props.type === "textarea") {
      //初始高度
      starTextarea.value.style.height = `${
        props.autoSize.min * sizeMap[props.size]
      }px`;
      //自适应高度
      starTextarea.value.style.height = starTextarea.value.scrollHeight - 4 + "px";
    }
  }
);

onMounted(() => {
  type.value = props.type;
});
</script>
<style lang='less'>
@deep: ~":deep()";
.__star-input {
  display: inline-block;
  border: 1px solid @color-border;
  border-radius: 5px;
  padding: 1px 7px;
  display: flex;
  align-items: center;
  input,
  textarea {
    border: none;
    width: 100%;
    color: @color-font-default-2;
    outline: none;
    resize: vertical;
    padding: 2px;
    padding-right: 0;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {  
      width:0 !important;   /* remove scrollbar space */
      background: transparent;  /* optional: just make scrollbar invisible */
    }
  }
  i {
    display: none;
    font-size: 16px;
    cursor: pointer;
    color: #ccc;
  }
  &:hover {
    i {
      display: block;
    }
  }
  &-focus {
    border: 1px solid @color-primary-border;
  }
  &-small {
    input {
      height: 20px;
      font-size: 12px;
    }
    textarea {
      font-size: 12px;
      line-height: 16px;
    }
  }
  &-medium {
    input {
      height: 28px;
      font-size: 16px;
    }
    textarea {
      font-size: 16px;
      line-height: 20px;
    }
  }
  &-large {
    input {
      height: 36px;
      font-size: 20px;
    }
    textarea {
      font-size: 20px;
      line-height: 24px;
    }
  }
  &-disabled {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: not-allowed;
    input {
      background-color: transparent;
      cursor: not-allowed;
    }
  }
  &-icon-right,
  &-icon-left {
    i {
      display: block;
    }
  }
}
</style>