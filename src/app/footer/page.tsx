import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return <>
        <div>
            <hr className='my-3'></hr>
            <div className="container mx-auto px-4 my-8">
                <div className="grid gap-8 
                  grid-cols-1 
                  sm:grid-cols-2 
                  md:grid-cols-3 
                  lg:grid-cols-5">

                    <div>
                        <ul className="space-y-3">
                            <li className="text-xl sm:text-2xl font-bold">
                                <span className="bg-black px-3 py-1 rounded-xl text-white me-1">S</span>
                                ShopMart
                            </li>

                            <li className="text-sm text-gray-600 leading-relaxed">
                                Your one-stop destination for the latest technology, fashion,
                                and lifestyle products. Quality guaranteed with fast shipping
                                and excellent customer service.
                            </li>

                            <li className="flex items-start gap-2">
                                <i className="fa-solid fa-location-dot mt-1"></i>
                                <p className="text-gray-500 text-sm">
                                    123 Shop Street, October City, DC 12345
                                </p>
                            </li>

                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-phone"></i>
                                <p className="text-gray-500 text-sm">
                                    (+20) 01093333333
                                </p>
                            </li>

                            <li className="flex items-center gap-2 break-all">
                                <i className="fa-solid fa-envelope"></i>
                                <p className="text-gray-500 text-sm">
                                    support@shopmart.com
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li className="font-bold text-base mb-2">SHOP</li>
                            <li><Link href="">Electronics</Link></li>
                            <li><Link href="">Fashion</Link></li>
                            <li><Link href="">Home & Garden</Link></li>
                            <li><Link href="">Sports</Link></li>
                            <li><Link href="">Deals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li className="font-bold text-base mb-2">CUSTOMER SERVICE</li>
                            <li><Link href="">Contact Us</Link></li>
                            <li><Link href="">Help Center</Link></li>
                            <li><Link href="">Track Your Order</Link></li>
                            <li><Link href="">Returns & Exchanges</Link></li>
                            <li><Link href="">Size Guide</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li className="font-bold text-base mb-2">ABOUT</li>
                            <li><Link href="">About Shopmart</Link></li>
                            <li><Link href="">Careers</Link></li>
                            <li><Link href="">Press</Link></li>
                            <li><Link href="">Investor Relations</Link></li>
                            <li><Link href="">Sustainability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm">
                            <li className="font-bold text-base mb-2">POLICIES</li>
                            <li><Link href="">Privacy Policy</Link></li>
                            <li><Link href="">Terms of Service</Link></li>
                            <li><Link href="">Cookie Policy</Link></li>
                            <li><Link href="">Shipping Policy</Link></li>
                            <li><Link href="">Refund Policy</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>

    </>
}
