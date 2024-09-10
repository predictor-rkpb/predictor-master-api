import { container } from "tsyringe"
import { UserRepository } from "./repository/user"
import { UserManagementController } from "./controller/user-mgmt"
import { TeamRepository } from "./repository/team"
import { TeamsController } from "./controller/teams"


container.register('UserRepository', { useClass: UserRepository })
container.register('UserManagementController', { useClass: UserManagementController })

container.register('TeamRepository', { useClass: TeamRepository })
container.register('TeamsController', { useClass: TeamsController })