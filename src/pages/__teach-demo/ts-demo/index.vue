<template>
  <div class="red">
    <h1 class="text-26px">知识点：</h1>

    <ol class="text-20px">
      <li>ts基本语法</li>
    </ol>

    <div class="text-24px my-50px">
      <!-- <template v-for="(enumItem, key) in typeEnum" :key="key">
        <div class="my-16px">{{ key }}</div>
      </template> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import type { EveryDayTypes } from './modules/EveryDayTypes';
import everyDayTypesData, { EveryDayTypes } from './modules/EveryDayTypes';

const typeList = {
  everyDayTypesData: everyDayTypesData as EveryDayTypes,
};

/**
 * 类型兼容性
 * 使用 unknown 比any好
 * 假如 unknown的数据(testUnknown) 的数据来源(booleanData) 类型已确定
 * unknown的数据再赋值给其他变量/常量时 假如类型不兼容将会报错 从而确定类型安全
 * 更详细的类型兼容比较可查看ts官网
 * https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
 */
const booleanData = true;
const testUnknown: unknown = booleanData;
// const testUnknown: any = booleanData;
const numData: number = testUnknown; // unknown 类型无法赋值给number类型

console.log(typeList);
console.log(testUnknown);
console.log(numData);
</script>

<style lang="less" scoped></style>
