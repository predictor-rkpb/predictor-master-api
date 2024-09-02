import { Response } from "express"
import { RequestWithBody } from "express-extensions";
import { GroupCodeDTO } from "shared-lib";
import { UserRepository } from "../repository/user";
import { inject, injectable } from "tsyringe";

/* create a controller class UserManagementController */
@injectable()
export class UserManagementController {
    /* constructor which takes user repository as an argument */
    constructor(@inject('UserRepository') private userRepository: UserRepository) {
    }

    /* create a method assignGroup */
    public assignGroup(request: RequestWithBody<GroupCodeDTO>, response: Response): void {

        // get the group from the user repository
        const group = this.userRepository.getGroup(request.body.code)

        // assign the user to the group only if the group is not null
        if (group) {
            this.userRepository.assignGroup(request.body.code, group)
            response.sendStatus(200)
        }
        // else send invalid input response to the user
        else {
            response.sendStatus(400)
        }
    }
}