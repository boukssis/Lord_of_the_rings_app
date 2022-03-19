import {Express} from 'express'
import {  getCharactersHandler } from './controllers/characters.controller'
import { authPage } from './middleware/role.middleware'
 
function routes(app:Express){
    
    app.get('/characters',authPage(["SA"]),getCharactersHandler)
 
}


export default routes