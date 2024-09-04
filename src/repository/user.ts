/* export a user repository */

import axios from "axios";
import qs from "qs";
import { injectable } from "tsyringe";
import { GroupNotFoundError } from "../errors";

@injectable()
export class UserRepository {
    constructor() { }

    public async getGroup(code: string): Promise<string> {
        // make a post request to get the token from keycloak
        const token = await this.getAdminToken();
        // make a get request to get the group
        const groupResponse = await axios.get(`${process.env.KEYCLOAK_ADMIN_URL as string}/groups?q=code:${code}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (groupResponse && groupResponse.data && groupResponse.data.length > 0) {
            return groupResponse.data[0].id;
        }
        else {
            throw new GroupNotFoundError();
        }

    }

    private async getAdminToken() {
        try {
            const tokenRequestData = {
                grant_type: 'password',
                client_id: process.env.KEYCLOAK_ADMIN_CLIENT_ID,
                username: process.env.KEYCLOAK_ADMIN_USERNAME,
                password: process.env.KEYCLOAK_ADMIN_PASSWORD
            };

            const tokenResponse = await axios.post(process.env.KEYCLOAK_ADMIN_TOKEN_URL as string, qs.stringify(tokenRequestData), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            const token = tokenResponse.data.access_token;
            return token;
        } catch (error) {
            throw error
        }

    }

    /* create a method to assign the given user to the given group */
    public async assignGroup(userId: string, groupId: string): Promise<void> {
        // get admin token
        const token = await this.getAdminToken();
        // assign the user to the group
        await axios.put(`${process.env.KEYCLOAK_ADMIN_URL as string}/users/${userId}/groups/${groupId}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}