


export let SignUpApi = async(userData:object)=>{

let reposnse  = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup' , {
    method:'POST' ,
    body:JSON.stringify({userData})
 })

 let data = await reposnse.json()
 return data

}