import { AuthStack } from "./AuthStack"
import { ManagerAppStack } from "./ManagerAppStack"
import { AdminAppStack } from "./AdminAppStack"
export const RootStack = {
    ...AuthStack , ...ManagerAppStack, ...AdminAppStack
}