

export let AddToWishListApi = async (productId:string)=>{

    let response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist' , {
        method:'POST' , 
        headers:{
            token:localStorage.getItem('userToken')||''  , 
            'Content-Type':'application/json'
        } , 
        body:JSON.stringify({
            productId
        })

        
    })

    let data = await response.json()
    return data

}