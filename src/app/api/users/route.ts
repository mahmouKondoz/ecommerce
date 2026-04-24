import { NextResponse } from "next/server"

let users = ['mahmnoud' , 'khadega' , 'alaa'] 

export function GET(){

    return NextResponse.json(users)


}

export async function POST(res:Request){

    let body  = await res.json()
    users.push(body.name)
    return NextResponse.json({
        status:'success' , 
        users
    })


}