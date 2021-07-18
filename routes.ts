import express from 'express'
import cors from 'cors'
import GitHubCardController from './controllers/GitHubCardController'

const routes = express.Router()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const gitHubCardController = GitHubCardController()

routes.get('/', cors(corsOptions), gitHubCardController.show)

export default routes