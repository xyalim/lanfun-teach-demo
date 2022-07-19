// 描述函数的类型

type FunctionType = {
  FuncParamsStyleA: (x: number, y: Record<string, number>) => number;
  FuncParamsStyleB: (x: number, y: { num: number }) => any;
  FuncParamsStyleC: (x: number, y: object) => number;
  FuncParamsStyleD: (x: number, y?: number) => any;
  FuncDeclare?: () => void;
  FuncDeclareNever?: () => never;
};

const FuncDeclareStyle: FunctionType = {
  // 函数定义
  FuncParamsStyleA: (x, y) => x + y.number,
  FuncParamsStyleB: (x, y) => x + y.num,
  FuncParamsStyleC: (x, { numberType }: { numberType: number; otherType: any }) => x + numberType,
  FuncParamsStyleD: (x) => x,
  FuncDeclare: () => {
    console.log('return void');
  },
  FuncDeclareNever: () => {
    // while (true) {
    //   console.log('死循环');
    // }
    throw new Error('抛出异常');

    // never类型是任何类型的子类型，也可以赋值给任何类型；
    // 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
    // 即使 any也不可以赋值给never。
    // return true;
  },
};

export default FuncDeclareStyle;
