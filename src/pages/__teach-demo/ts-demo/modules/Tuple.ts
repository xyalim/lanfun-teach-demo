// 元组类型
type TupleType = {
  TupleStyleA: [number, string, boolean];
  TupleStyleB?: [number, string, boolean];
  TupleStyleC?: [boolean, string, number];
};

// 元组类型定义
const TupleStyle: TupleType = {
  TupleStyleA: [1, '', true] as [number, string, boolean],
  // TupleStyleB: [1, '', true, 1, '', true], // 报错
  // TupleStyleC: [1, '', true], // 报错
};

export default TupleStyle;
