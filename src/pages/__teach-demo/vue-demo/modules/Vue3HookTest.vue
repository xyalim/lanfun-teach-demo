<template>
  <div class="border-black border-1px">
    <div>Vue3Component</div>
    <div>
      title: <span class="content">{{ title }}</span>
    </div>
    <div>
      text: <span class="content">{{ text }}</span>
    </div>
    <div>
      props.title: <span class="content">{{ props.title }}</span>
    </div>
    <div>
      props.text: <span class="content">{{ props.text }}</span>
    </div>

    <input v-model="InputValModel" />

    <t-button @click="$emit('emit-event', 'emit-event params')">emit-event</t-button>
    <t-button @click="onClickEmitEvent">emit-event2</t-button>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineExpose } from 'vue';
import useHookTest from './useHookTest';
// 写法一
// const props = defineProps({
//   title: {
//     type: String as PropType<string>,
//     default: 'default title',
//   },
//   text: {
//     type: String as PropType<string>,
//     default: 'default text',
//   },
// });

// 写法二
const props = withDefaults(
  defineProps<{
    title: string;
    text: string;
    inputVal: string;
  }>(),
  {
    title: 'withDefaults title',
    text: 'withDefaults text',
    inputVal: 'withDefaults inputVal',
  },
);

// 写法一 常规写法
// const emit = defineEmits(['emit-event', 'emit-event2']);
// 写法二 ts写法
const emit = defineEmits<{
  (e: 'emit-event', params: string): void;
  (e: 'emit-event2', params: string): void;
  (e: 'update:inputVal', params: string): void;
}>();
const { InputValModel, onClickEmitEvent } = useHookTest({ emit });

// 使用 setup 默认不暴露任何东西给实例对象
// 所以需要使用 defineExpose 定义需要暴露给外界的属性
defineExpose({
  InputValModel,
});
</script>
