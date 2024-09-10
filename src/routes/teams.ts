// create a router
import express from 'express';
import { container } from 'tsyringe';
import { TeamsController } from "../controller/teams";
const router = express.Router();

// create a teammanagement controller
const teamManagementController = container.resolve('TeamsController') as TeamsController

// add a post route to the router with request object of type RequestWithBody<GroupDto>
router.post('/', async (req, res) => await teamManagementController.createTeam(req, res))

export default router