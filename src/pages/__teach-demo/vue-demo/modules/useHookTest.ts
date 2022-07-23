import {
  ref,
  watchEffect,
  // PropType, watch
} from 'vue';

const useHookTest = ({ emit }) => {
  const InputValModel = ref('inputVal');

  // watch(
  //   InputValModel,
  //   (newVal) => {
  //     emit('update:inputVal', newVal);
  //   },
  //   { immediate: true },
  // );

  watchEffect(() => {
    emit('update:inputVal', InputValModel.value);
  });

  const onClickEmitEvent = () => {
    // emit('emit-event2', 2); // 报错 因为上面定义了params类型为string
    emit('emit-event2', 'emit-event2 params');
  };

  return { InputValModel, onClickEmitEvent };
};

export default useHookTest;
