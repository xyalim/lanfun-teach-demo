// 描述对象的类型

// interface：接口
interface InterfaceDescObj {
  [key: string]: any;
}

// 类型合并
interface InterfaceMerge {
  number: number;
}
interface InterfaceMerge {
  string: string;
}
interface InterfaceExtendsItem {
  func: () => unknown;
}
// 接口继承
interface InterfaceExtends extends InterfaceMerge, InterfaceExtendsItem {
  boolean: boolean;
}

// 我们也可以在属性里引用自己
interface Res {
  data: {
    [prop: string]: any;
    children?: Res['data'][number];
  }[];
}

type ObjectType = {
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
  ObjectStyleF: Res;
  InterfaceMergeTest: InterfaceExtends;
};

const anyTypeObj = {
  keyNumber: 1,
  KeyBoolean: true,
  keyString: '',
  keyNull: null,
};

// 对象定义
const ObjectStyle: ObjectType = {
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
  InterfaceMergeTest: {
    number: 1,
    string: '',
    boolean: true,
    func: () => ({}),
  },
  ObjectStyleF: {
    data: [
      {
        testProp: 'any',
        testProp2: 1,
        children: [
          {
            testProp: 'any',
            testProp2: 1,
            children: [
              {
                testProp: 'any',
                testProp2: 1,
                children: [
                  {
                    testProp: 'any',
                    testProp2: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export default ObjectStyle;
