import express from 'express'
import routes from './routes'
import cors  from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

// create app
const app = express()

app.use(express.static('./dist/backend'))

// adding Helmet to enhance your API's security
app.use(helmet())

// enabling CORS for all requests
app.use(cors())

//Parse json body 
app.use(express.json())

routes(app)

app.listen(process.env.PORT,()=>{
    console.log(`Listening on PORT: ${process.env.PORT}`)
})