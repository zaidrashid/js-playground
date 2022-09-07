import ContextStrategy from "./ContextStrategy";
import TheGuardianStrategy from "./TheGuardianStrategy";
import TheVibesStrategy from "./TheVibesStrategy";

const context = new ContextStrategy(new TheVibesStrategy());
context.prepStrategy();
context.setStrategy(new TheGuardianStrategy());
context.prepStrategy();