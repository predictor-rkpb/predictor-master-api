import { Response } from "express"
import { RequestWithBody, getUserFromRequest } from "../../libs/express-shared-lib/index";
import { GroupCodeDTO } from "shared-lib";
import { UserRepository } from "../repository/user";
import { inject, injectable } from "tsyringe";
import { GroupNotFoundError } from "../errors";

/* create a controller class UserManagementController */
@injectable()
export class UserManagementController {
    /* constructor which takes user repository as an argument */
    constructor(@inject('UserRepository') private userRepository: UserRepository) {
    }

    /* create a method assignGroup */
    public async assignGroup(request: RequestWithBody<GroupCodeDTO>, response: Response): Promise<void> {
        const user = getUserFromRequest(request);
        // try and catch GroupNotFoundError
        try {
            // get the group from the user repository
            const group = await this.userRepository.getGroup(request.body.code)

            // assign the user to the group only if the group is not null
            if (group && user) {
                await this.userRepository.assignGroup(user.sub as string, group)
                response.status(200).send()
            }
            // else send invalid input response to the user
            else {
                response.sendStatus(400)
            }
        }
        catch (error) {
            if (error instanceof GroupNotFoundError) {
                response.sendStatus(400)
            }
            else {
                response.sendStatus(500)
            }
        }
    }
    // console.log(user)


}