<template>
  <div class="flex-bw">
    <!-- warning! vue2的根节点只允许单节点 -->
    <!-- vue3的根节点允许多节点 -->
    <!-- vue2 -->
    <div ref="optionsRef" class="syntax-block">
      <t-divider>vue2 options api ↓</t-divider>
      <button class="btn-style" @click="onClickVue2">onClickVue2</button>
      <div>numOptions: {{ numOptions }}</div>

      <!-- vue2 computed -->
      <t-divider>computed：</t-divider>
      <div>numOptionsComputed: {{ numOptionsComputed }}</div>

      <!-- vue2 watch -->
      <t-divider>watch：</t-divider>
      <div>numOptionsWatchNewVal: {{ numOptionsWatchNewVal }}</div>
      <div>numOptionsWatchOldVal: {{ numOptionsWatchOldVal }}</div>
    </div>

    <!-- vue3 -->
    <div ref="setupRef" class="syntax-block">
      <t-divider>vue3 composition api ↓</t-divider>
      <button class="btn-style" @click="onClickVue3">onClickVue3</button>
      <div>普通的变量 num: {{ num }}</div>
      <t-divider></t-divider>
      <div>numRef: {{ numRef }}</div>
      <div>num2Ref: {{ num2Ref }}</div>
      <div>num3Ref: {{ num3Ref }}</div>
      <div>objReactive: {{ objReactive }}</div>

      <!-- vue3 computed -->
      <t-divider>computed：</t-divider>
      <div>numRefComputed: {{ numRefComputed }}</div>

      <!-- vue3 watch -->
      <t-divider>watch：</t-divider>
      <div>numCompositionWatchNewVal: {{ numCompositionWatchNewVal }}</div>
      <div>numCompositionWatchOldVal: {{ numCompositionWatchOldVal }}</div>
      <t-divider></t-divider>
      <div>num2CompositionWatchNewVal: {{ num2CompositionWatchNewVal }}</div>
      <div>num3CompositionWatchNewVal: {{ num3CompositionWatchNewVal }}</div>

      <Vue3Component
        ref="Vue3ComponentRef"
        v-model:inputVal="v3InputVal"
        @emit-event="onClickV3Component"
        @emit-event2="onClickV3Component"
      ></Vue3Component>
      <div>v3InputVal: {{ v3InputVal }}</div>
      <!-- 在 template 里会自动解ref的.value -->
      <div>Vue3ComponentRef.value.InputValModel.value: {{ Vue3ComponentRef?.InputValModel }}</div>

      <Vue3HookTest
        ref="Vue3HookTestRef"
        v-model:inputVal="Vue3HookTestInputVal"
        @emit-event="onClickV3Component"
        @emit-event2="onClickV3Component"
      ></Vue3HookTest>
      <div>Vue3HookTestInputVal: {{ Vue3HookTestInputVal }}</div>
    </div>
  </div>
</template>

<!-- options api 选项式api 语法 -->
<script lang="ts">
export default {
  data() {
    return {
      numOptions: 1,
      numOptionsWatchNewVal: 0,
      numOptionsWatchOldVal: 0,
    };
  },
  computed: {
    numOptionsComputed() {
      return this.numOptions;
    },
  },
  watch: {
    numOptions(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.numOptionsWatchNewVal = newVal;
      this.numOptionsWatchOldVal = oldVal;
    },
  },
  async created() {
    console.log('vue2 created');
    await this.$nextTick();
    console.log('vue2 created $nextTick', this.$refs.optionsRef);
  },

  beforeCreate() {
    console.log('vue2 beforeCreate');
  },
  beforeUpdate() {
    console.log('vue2 beforeUpdate');
  },
  updated() {
    console.log('vue2 updated');
  },
  beforeMount() {
    console.log('vue2 beforeMount');
  },
  mounted() {
    // 获取组件/元素实例
    console.log(this.$refs.optionsRef);
  },

  methods: {
    onClickVue2() {
      this.numOptions++;
    },
  },
};
</script>

<!-- composition api 组合式api 语法 -->
<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  onBeforeUpdate,
  onUpdated,
  onBeforeMount,
  onMounted,
  watch,
  watchEffect,
  nextTick,
} from 'vue';

// 只要引用即可使用 无需注册
import Vue3Component from './Vue3Component.vue';
import Vue3HookTest from './Vue3HookTest.vue';

// data
const num = 1;
const numRef = ref(num);
const num2Ref = ref(2);
const num3Ref = ref(3);

const objReactive = reactive({
  a: 1,
  b: 2,
  c: 3,
});
const numRefComputed = computed(() => numRef.value);
const onClickVue3 = () => {
  numRef.value++;
  num2Ref.value++;
  num3Ref.value++;

  objReactive.a++;
  objReactive.b++;
  objReactive.c++;
};

const numCompositionWatchNewVal = ref(0);
const numCompositionWatchOldVal = ref(0);
const num2CompositionWatchNewVal = ref(0);
const num3CompositionWatchNewVal = ref(0);

watch(numRef, (newVal, oldVal) => {
  numCompositionWatchNewVal.value = newVal;
  numCompositionWatchOldVal.value = oldVal;
});

// 自动追踪监听依赖
watchEffect(() => {
  numCompositionWatchNewVal.value = numRef.value;
  num2CompositionWatchNewVal.value = num2Ref.value;
  num3CompositionWatchNewVal.value = num3Ref.value;
});

// 获取组件/元素实例
const setupRef = ref(null);
const Vue3ComponentRef = ref(null);
const Vue3HookTestRef = ref(null);
nextTick(() => {
  console.log('vue3 setup nextTick', setupRef.value);
  console.log('Vue3ComponentRef', Vue3ComponentRef.value);
  console.log('Vue3HookTestRef', Vue3HookTestRef.value);
});

// 在setup中 没有 onCreated onBeforeCreated！
console.log('vue3 setup');
onBeforeUpdate(() => {
  console.log('vue3 onBeforeUpdate');
});
onUpdated(() => {
  console.log('vue3 onUpdated');
});
onBeforeMount(() => {
  console.log('vue3 onBeforeMount');
});
onMounted(() => {
  console.log('vue3 onMounted');
  console.log(setupRef.value);
});

// 父子组件传值：子传父
const onClickV3Component = (emitParams) => {
  console.log('onClickV3Component emitParams:', emitParams);
};

const v3InputVal = ref('');
const Vue3HookTestInputVal = ref('');
</script>

<style lang="less" scoped>
.syntax-block {
  @apply text-center m-30px text-18px flex-1;
}

.btn-style {
  @apply text-24px;
}
</style>
