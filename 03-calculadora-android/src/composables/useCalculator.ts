import { reactive } from "vue";

export const useCalculator = () => {
  const data = reactive({
    result: "",
    operation: "0",
  });

  const handleAddValue = (value: number | string) => {
    data.operation += value;

    console.log(data.operation);
  };

  return { data, handleAddValue };
};
