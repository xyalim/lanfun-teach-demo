<template>
  <div class="red">
    <h1 class="text-26px">知识点：</h1>

    <ol class="text-20px">
      <li>ts基本语法</li>
    </ol>

    <div class="text-24px my-50px">
      <template v-for="(enumItem, key) in typeEnum" :key="key">
        <div class="my-16px">{{ key }}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
type Generics = number;
// interface：接口
interface InterfaceDescObj {
  [key: string]: any;
}

// 可索引的类型
interface TypeIndexTest {
  keyNumber: number;
  keyString: string;
  keyBoolean: boolean;
}

type TypeEnum = {
  number: number;
  string: string;
  boolean: boolean;
  ArrayStyleA: any[];
  ArrayStyleB: unknown[];
  // 数组<泛型>
  ArrayGenericsStyleA: Array<Generics>;
  ArrayGenericsStyleB: Generics[];
  ArrayGenericsStyleC: Array<string | number | boolean | null>;
  TupleStyleA: [number, string, boolean];
  TupleStyleB?: [number, string, boolean];
  TupleStyleC?: [boolean, string, number];
  // 对象任意键值类型表达
  ObjectStyleA: Record<string, any>;
  ObjectStyleB?: Record<string, number | boolean>;
  ObjectStyleC: {
    [prop: string]: any;
  };
  ObjectStyleD: {
    [key: string]: any;
  };
  ObjectStyleE: InterfaceDescObj;

  AsTest: any;

  FuncDeclear?: () => void;
  FuncDeclearNever?: () => never;

  TypeIndexTestNum: TypeIndexTest['keyNumber'];
  TypeIndexTestString?: TypeIndexTest['keyString'];
  TypeIndexTestBoolean: TypeIndexTest['keyBoolean'];
};

const anyTypeObj = {
  keyNumber: 1,
  KeyBoolean: true,
  keyString: '',
  keyNull: null,
};
// 基本数据类型
const baseDataType = {
  number: 1,
  string: '',
  boolean: true,
};

// 数组定义
const ArrayStyle = {
  ArrayStyleA: [1, 2, '', null],
  ArrayStyleB: [1, 2, '', null],
  ArrayGenericsStyleA: [12],
  ArrayGenericsStyleB: [12],
  ArrayGenericsStyleC: [12, '', null, true], // 报错
};
// 元组类型定义
const TupleStyle = {
  TupleStyleA: [1, '', true] as [number, string, boolean],
  // TupleStyleB: [1, '', true, 1, '', true], // 报错
  // TupleStyleC: [1, '', true], // 报错
};

// 对象定义
const ObjectStyle = {
  ObjectStyleA: {
    1: 121,
    Obj: {},
    [Symbol(123)]: 123,
    [Symbol(123)]: 123,
  },
  // ObjectStyleB 报错 因为类型中无 Record<string, number | boolean> 无 string
  // ObjectStyleB: anyTypeObj,
  ObjectStyleC: anyTypeObj,
  ObjectStyleD: anyTypeObj,
  ObjectStyleE: anyTypeObj,
};

const FuncDeclearStyle = {
  // 函数定义
  // FuncDeclear: () => {},
  // FuncDeclearNever: () => {
  //   return 1;
  // },
};

const typeEnum: TypeEnum = {
  // 基本数据类型
  ...baseDataType,
  // 数组定义
  ...ArrayStyle,
  // 元组类型
  ...TupleStyle,
  // 对象定义
  ...ObjectStyle,
  // 类型断言
  AsTest: 1 as number,

  ...FuncDeclearStyle,

  TypeIndexTestNum: 1,
  // TypeIndexTestString: 1, // 报错
  TypeIndexTestBoolean: true,
};

type GetValType = Partial<typeof typeEnum>;
const getValType: GetValType = {
  number: 1,
};

const getTypeEnum = () => typeEnum;
/**
 * 以下语句将会报错！
 * 因为 类型TypeEnum都是必选
 * 若需要部分的类型
 * 需要将属性设置为可选
 * 此时需配合 ts 工具类型 Partial使用
 * type GetFunReturnType = ReturnType<typeof getTypeEnum>;
 */
type GetFunReturnType = Partial<ReturnType<typeof getTypeEnum>>;
const getFunReturnTypeTest: GetFunReturnType = {
  number: 1,
};
console.log(typeEnum);
console.log(getValType);
console.log(getFunReturnTypeTest);
</script>

<style lang="less" scoped></style>
