/* export a user repository */

import { injectable } from "tsyringe";

@injectable()
export class UserRepository {
    constructor() { }

    public getGroup(code: string): string {
        /* get all the groups from keycloak */

        return 'group1'
    }

    /* create a method to assign the given user to the given group */
    public assignGroup(user: string, group: string): void {
        console.log(`user ${user} is assigned to group ${group}`)
    }
}