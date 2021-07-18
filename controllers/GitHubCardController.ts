import { Request, Response } from 'express'
import fetch from 'node-fetch'
const dotenv = require('dotenv')

function GitHubCardController(){
    async function show(request: Request, response: Response){

        const { githubuser, repository } = request.query

        dotenv.config()

        try{
            const headers = {
                "Content-Type": "application/json",
                Authorization: "bearer " + process.env.GRAPHQL_TOKEN,
              }
            
              const url = "https://api.github.com/graphql";
            
              const body = {
                query: `
                query { 
                  repository(owner: "${githubuser}", name: "${repository}") {
                    openGraphImageUrl
                  }
                }
                `
              }
            
              const imageUrl = async()=> {
                const data =  await fetch(url, {
                  method: "POST",
                  headers: headers,
                  body: JSON.stringify(body),
                  })
                  .then((response) => response.text())
                  .then((string) => { 
                    const data = JSON.parse(string)
              
                    return data.data.repository.openGraphImageUrl
                  }).catch((error)=>console.log(error))
            
                  return data
              }
    
              const image = await imageUrl()
    
              return response.json({ imageUrl: image })

        }catch{
            return response.json({ message: 'User not found' })
        }
    }
    return {
        show
    }
}

export default GitHubCardController