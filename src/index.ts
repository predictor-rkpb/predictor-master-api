import 'reflect-metadata';
import './dependencyContainer'
import express, { Request, Response } from 'express';
import usermgmtRouter from './routes/user-mgmt'
import { AuthenticationMiddleware } from "../libs/express-shared-lib/index";

require('dotenv').config();

const app = express();

app.use(express.json());

const auth = new AuthenticationMiddleware();

app.get('/', auth.authenticate, (req: Request, res: Response) => {
    res.send('Hello World')
})

app.use('/user-mgmt', usermgmtRouter)

const port = 8002
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})