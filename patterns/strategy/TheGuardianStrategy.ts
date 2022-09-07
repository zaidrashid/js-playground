import { IStrategy } from "./IStrategy";

class TheGuardianStrategy implements IStrategy {
  prep = (): void => {
    console.log('executing TheGuardianStrategy');
    console.log('doing the popup find');
    console.log('clicking the button');
  }
}

export default TheGuardianStrategy;