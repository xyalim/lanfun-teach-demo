// 描述数组的类型

type Generics = number;

export type ArrayType = {
  ArrayStyleA: any[];
  ArrayStyleB: unknown[];
  // 数组<泛型>
  ArrayGenericsStyleA: Array<Generics>;
  ArrayGenericsStyleB: Generics[];
  ArrayGenericsStyleC: Array<string | number | boolean | null>;
};

const ArrayStyle: ArrayType = {
  ArrayStyleA: [1, 2, '', null],
  ArrayStyleB: [1, 2, '', null],
  ArrayGenericsStyleA: [12],
  ArrayGenericsStyleB: [12],
  ArrayGenericsStyleC: [12, '', null, true], // 报错
};

export default ArrayStyle;
