



export let PayVisa = async (cartId:string ,shippingAddress:object )=>{
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000` , {
        method:'POST' , 
        headers:{
            token:localStorage.getItem('userToken')||'' ,
            'Content-Type': 'application/json'
        } ,
        body:JSON.stringify({shippingAddress})
    })
    let data = await response.json()
    return data
}