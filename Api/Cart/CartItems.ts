
export let CartItem = async ()=>{

try {
    
    let reponse = await fetch(`https://ecommerce.routemisr.com/api/v1/cart` , {
        headers:{
            token:localStorage.getItem('userToken') || '' ,
            
        } 
    })

    let data = await reponse.json()
   
    // console.log(data);
    
    return data

} catch (error) {
    console.log(error);
    
    
}


}