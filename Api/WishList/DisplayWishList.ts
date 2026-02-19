
export let DisplayWishList = async ()=>{
    let response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist' , {

        headers:{
            token: localStorage.getItem('userToken')||''
    }})

    let data = await response.json()
    return data
}   