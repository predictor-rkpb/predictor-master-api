/* create a express router */
import express from 'express';
import { container } from 'tsyringe';
import { UserManagementController } from "../controller/user-mgmt";

const router = express.Router();

/* create a usermanagement controller */

const userManagementController = container.resolve('UserManagementController') as UserManagementController

/* add a post route to the router with request object of type RequestWithBody<GroupDto>*/
router.post('/assignGroup', async (req, res) => await userManagementController.assignGroup(req, res))

/* export the router */
export default router