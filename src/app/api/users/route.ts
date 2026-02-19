import { NextResponse } from "next/server"

let dataBase = ['mahmoud','khadega','alla']


 export async function GET() {
    
    return NextResponse.json(dataBase)
}



export let POST = async(req:Request)=>{

    let body = await req.json() 
    dataBase.push(body.name)
    return NextResponse.json({
       status:'success' , 
       users:dataBase 
        
    })

}