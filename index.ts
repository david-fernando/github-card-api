import express from 'express'
import helmet from 'helmet'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import githubCardRoute from './routes'

const csrfProtection = csrf({ cookie: true })

const app = express()

app.use(helmet());

app.use(cookieParser())

app.use(express.json())

app.use(githubCardRoute(csrfProtection))

app.listen(process.env.PORT || 3333, ()=>{
  console.log('Servidor iniciado')
})