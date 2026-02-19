



export let RemoveItem = async(itemId:string)=>{
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${itemId}` , {
        method:'DELETE' , 
        headers:{
            token:localStorage.getItem('userToken')||''
        }
    })

    let data = await response.json()
    return data
}