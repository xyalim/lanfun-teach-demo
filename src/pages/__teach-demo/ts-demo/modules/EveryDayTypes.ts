// 常用的类型语法

// 枚举
enum EnumTest {
  Up = 1,
  Down,
  Left,
  Right,
}

export interface EveryDayTypes {
  number: number;
  string: string;
  boolean: boolean;
  array: Array<unknown>;
  object: object;

  // 联合类型
  unioTypes: EveryDayTypes['array'] | EveryDayTypes['object'];

  // 字面量类型
  LiteralTypes: '字面量类型 可指定特定内容为类型 内容不符则类型报错';

  // 默认情况下null和undefined是所有类型的子类型
  // 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
  null: null;
  nullTest: number;
  undefined: undefined;
  undefinedTest: number;

  EnumTestUp: EnumTest.Up;
  EnumTestDown: EnumTest.Down;

  // 类型断言
  TypeAssertionsTest: number;

  // 条件类型
  ConditionTypeTest: unknown[];
}
type ConditionType<T> = EveryDayTypes['array'] extends T ? Array<unknown> : number;

type TypeAliases = EveryDayTypes;
const testData = {
  number: 1,
  string: '',
  boolean: true,
  array: [1, '', true, undefined, null],
  object: {
    a: 1,
  },

  unioTypes: [] || {},
  // unioTypes: [],
  // unioTypes: {},

  LiteralTypes: '字面量类型 可指定特定内容为类型 内容不符则类型报错' as const,

  null: null,
  nullTest: null,
  undefined,
  undefinedTest: undefined,

  EnumTestUp: EnumTest.Up as EnumTest.Up,
  EnumTestDown: EnumTest.Down as EnumTest.Down,

  TypeAssertionsTest: 1 as 2,

  ConditionTypeTest: [1, '1213'] as ConditionType<Array<unknown>>,
};

const everyDayTypes: TypeAliases = testData;
export default everyDayTypes;
