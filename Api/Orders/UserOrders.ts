

export let UserOrders = async (ownerId:string)=>{
    let reposnse = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${ownerId}` , {
        method:'GET' 
        
    }) 
    let data = await reposnse.json() 
    return data
}