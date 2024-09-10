// create a team repository
import { Team } from "shared-lib"
import { injectable } from "tsyringe";

/* create a repository class TeamRepository */
@injectable()
export class TeamRepository {
    // create a method to add a new team
    public async createTeam(team: Team): Promise<Team> {
        return team
    }
}