import { AuthStack } from "./AuthStack"
import { AppStack } from "./AppStack"
export const RootStack = {
    ...AuthStack , ...AppStack
}