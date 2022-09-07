import { IStrategy } from "./IStrategy";

class TheVibesStrategy implements IStrategy {
  prep = (): void => {
    console.log('executing TheVibesStrategy');
  }
}

export default TheVibesStrategy;