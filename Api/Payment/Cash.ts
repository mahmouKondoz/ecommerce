



export let PayCash = async (cartId:string , shippingAddress:object)=>{

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , {
        method:'POST' , 
        headers:{
            token:localStorage.getItem('userToken')||'' ,
            'Content-Type':'application/json'
        } ,
        body:JSON.stringify({shippingAddress})

    })
    let data = await response.json()
    return data

}