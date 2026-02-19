import z from "zod";



export let registerValidation = ()=>{

    let schema = z.object({
    name: z.string().min(2, 'Name must be between 2 and 15 characters and contain only letters and spaces.').max(15, 'Name must be between 2 and 15 characters and contain only letters and spaces.'),
    email: z.email('Enter a valid email'),
    password: z.string().regex(/^.{6,}$/),
    rePassword: z.string(''),
    phone: z.string().regex(/^01[0-2,5]\d{8}$/, "Invalid Egyptian phone number")
  }).refine((obj) => {
    return obj.password === obj.rePassword
  }, {
    error: "“The passwords you entered don’t match. Try again.”",
    path: ['rePassword']
  })

  return schema

}