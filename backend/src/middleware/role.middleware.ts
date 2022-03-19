import { NextFunction, Request, Response } from "express"

export const authPage = (permissions:any)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
         const userRole =req.headers['role']
        if(permissions.includes(userRole)){
            next()
        }else{
            return res.status(401).send('Unauthorized')
        }
        
    }
}