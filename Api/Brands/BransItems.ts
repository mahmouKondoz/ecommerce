


export let BrandItem = async (brandId:string)=>{

    let response = fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
    let data = (await response).json()
    return data

}