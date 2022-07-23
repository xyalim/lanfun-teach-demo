<template>
  <div class="red">
    <h1 class="text-26px">知识点：</h1>

    <ol class="text-20px">
      <li
        v-for="(knownItem, index) in knownList"
        :key="index"
        class="text-20px my-20px cursor-pointer"
        @click="knownItem?.onClickLink"
      >
        {{ knownItem.title }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const knownList = [
  {
    title: 'vue2 & vue3 语法差异',
    onClickLink: () => {
      router.push({
        path: '/vue-demo/vue2-diff-vue3',
      });
    },
  },
  {
    title: 'vue3 技巧',
    onClickLink: () => {
      router.push({
        // name: 'test',
        path: '/vue-demo/test',
      });
    },
  },
];
</script>

<style lang="less" scoped></style>
