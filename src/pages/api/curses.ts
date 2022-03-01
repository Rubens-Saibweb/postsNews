import { NextApiRequest, NextApiResponse } from "next";

export  default (request : NextApiRequest , response : NextApiResponse) => {

const  courses = [
    
        {id: 1 , name : "teste"},
        {id: 1 , name : "teste1"},
        {id: 1 , name : "teste2"}
    
]

return response.json(courses)

}