import express from 'express'
import cors from 'cors'
import GitHubCardController from './controllers/GitHubCardController'

const routes = express.Router()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const gitHubCardController = GitHubCardController()

const githubCardRoute = (csrfProtection: any) => routes.get('/', csrfProtection, cors(corsOptions), gitHubCardController.show)

export default githubCardRoute