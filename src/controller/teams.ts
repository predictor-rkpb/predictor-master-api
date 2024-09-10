// create a TeamsController
import { Response } from "express"
import { RequestWithBody, getUserFromRequest } from "../../libs/express-shared-lib/index";
import { NewTeamDTO, Team } from "shared-lib";
import { TeamRepository } from "../repository/team";
import { inject, injectable } from "tsyringe";

/* create a controller class TeamManagementController */
@injectable()
export class TeamsController {
    /* constructor which takes user repository as an argument */
    constructor(@inject('TeamRepository') private teamRepository: TeamRepository) {
    }

    /* create a method createTeam */
    public async createTeam(request: RequestWithBody<NewTeamDTO>, response: Response): Promise<void> {
        const team = await this.teamRepository.createTeam(request.body as Team)
        response.status(200).send(team)
    }
}