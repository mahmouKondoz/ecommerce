import z from "zod";




export let  loginShema = ()=> {
 let shcema = z.object({

    email: z.email('Enter a valid email'),
    password: z.string().regex(/^.{6,}$/),
     
})
 return shcema
}