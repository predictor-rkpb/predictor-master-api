import { container } from "tsyringe"
import { UserRepository } from "./repository/user"
import { UserManagementController } from "./controller/user-mgmt"


container.register('UserRepository', { useClass: UserRepository })
container.register('UserManagementController', { useClass: UserManagementController })