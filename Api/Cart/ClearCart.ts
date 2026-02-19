




export let ClearCart = async ()=>{

    let reponse = await fetch('https://ecommerce.routemisr.com/api/v1/cart' , {
        method:'DELETE' , 
        headers:{
            token:localStorage.getItem('userToken')||''
        }
    })

    let {data} = await reponse.json()
    return data

}