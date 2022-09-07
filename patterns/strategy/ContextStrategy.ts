import { IStrategy } from "./IStrategy";

class ContextStrategy {
  strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  setStrategy = (strategy: IStrategy) => {
    this.strategy = strategy;
  }

  prepStrategy = (): void => {
    this.strategy.prep();
  }
}

export default ContextStrategy;
