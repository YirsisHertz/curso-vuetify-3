import { reactive } from "vue";

export const calculatorStore = reactive({
  result: "",
  operation: "0",
  handleAddValue: (value: number | string) => {
    if (calculatorStore.operation === "0" && value !== ".") {
      calculatorStore.operation = `${value}`;
      return;
    }

    calculatorStore.operation += value;
  },
  handleClear: () => {
    calculatorStore.result = "";
    calculatorStore.operation = "0";
  },
  handleRemove: () => {
    const newValue = calculatorStore.operation.slice(0, -1);

    if (!newValue.trim()) {
      calculatorStore.operation = "0";
      return;
    }

    calculatorStore.operation = newValue;
  },
  handleAddOperator: (operator: "/" | "*" | "+" | "-") => {
    if (
      calculatorStore.operation.endsWith(operator) ||
      calculatorStore.operation
        .charAt(calculatorStore.operation.length - 1)
        .includes(operator)
    ) {
      calculatorStore.handleRemove();
    }

    calculatorStore.operation += operator;
  },
  handlePercent: () => {
    if (calculatorStore.operation.includes("%")) {
      return;
    }

    calculatorStore.operation += "%";
  },
  handleResult: () => {
    calculatorStore.result = calculatorStore.operation;

    if (calculatorStore.operation.includes("%")) {
      const values = calculatorStore.operation.split("%");

      const firstValue = eval(values[0]);
      const secondValue = eval(values[1]);

      calculatorStore.operation = `${(
        firstValue *
        (secondValue / 100)
      ).toPrecision(3)}`;
    }

    calculatorStore.operation = `${eval(calculatorStore.operation)}`;
  },
});
