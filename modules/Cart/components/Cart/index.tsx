"use client"
import {useState} from "react";
import cardImg from "@/public/cart/shopping-cart-page-04-product-03.jpg"
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "@/store/store";
import {cartToggle} from "@/modules/Cart/redux/cartSlice";

const tempData = [
	{
		image: cardImg,
		name: 'Zip Tote Basket',
		quantity: 0,
		price: 0,
	},
	{
		image: cardImg,
		name: 'Zip Tote Basket',
		quantity: 0,
		price: 0,
	},
	{
		image: cardImg,
		name: 'Zip Tote Basket',
		quantity: 0,
		price: 0,
	},
]

export const Cart = () => {
	const cardDisplayFlag = useAppSelector(state => state.cart.displayCartFlag)

	const dispatch = useAppDispatch()
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed z-20 bg-[#02135266] left-0 top-0 w-full h-screen flex justify-end">
			<div className="p-6 bg-white max-w-[400px] h-screen">
				<div className=" mb-5 flex items-center justify-between">
					<h5>Shopping cart</h5>
					<button className="w-[20px] h-[20px] cursor-pointer" role="button"
					        onClick={() => dispatch(cartToggle(!cardDisplayFlag))}>
						<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd"
							      d="M6.11047 9.6734C6.16563 9.6181 6.23115 9.57424 6.30328 9.5443C6.37542 9.51437 6.45275 9.49896 6.53085 9.49896C6.60894 9.49896 6.68628 9.51437 6.75841 9.5443C6.83055 9.57424 6.89607 9.6181 6.95122 9.6734L8.3121 11.0355L9.67297 9.6734C9.78446 9.56191 9.93568 9.49927 10.0933 9.49927C10.251 9.49927 10.4022 9.56191 10.5137 9.6734C10.6252 9.78489 10.6878 9.9361 10.6878 10.0938C10.6878 10.2514 10.6252 10.4027 10.5137 10.5141L9.15166 11.875L10.5137 13.2359C10.6252 13.3474 10.6878 13.4986 10.6878 13.6563C10.6878 13.8139 10.6252 13.9652 10.5137 14.0766C10.4022 14.1881 10.251 14.2508 10.0933 14.2508C9.93568 14.2508 9.78446 14.1881 9.67297 14.0766L8.3121 12.7146L6.95122 14.0766C6.83973 14.1881 6.68852 14.2508 6.53085 14.2508C6.37318 14.2508 6.22196 14.1881 6.11047 14.0766C5.99898 13.9652 5.93635 13.8139 5.93635 13.6563C5.93635 13.4986 5.99898 13.3474 6.11047 13.2359L7.47253 11.875L6.11047 10.5141C6.05518 10.459 6.01131 10.3935 5.98137 10.3213C5.95144 10.2492 5.93604 10.1719 5.93604 10.0938C5.93604 10.0157 5.95144 9.93834 5.98137 9.86621C6.01131 9.79407 6.05518 9.72855 6.11047 9.6734Z"
							      fill="#9F9F9F"/>
							<path
								d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z"
								fill="#9F9F9F"/>
						</svg>
					</button>
				</div>
				<ul className="mb-[30px]">
					{
						tempData.map((item, index) => {
							return (
								<li key={index} className="flex justify-between">
									<Image src={item.image} alt={item.name}
									       className="w-[96px] h-[96px] object-contain rounded-md mr-4"/>
									<div className="mr-4">
										<h6>{item.name}</h6>
										<div className="flex">
											<p className="text-gray-light-2">Qty: <span>{item.quantity}</span></p>
											<button className="w-4 h-4">
												<PlusSVG/>
											</button>
											<button className="w-4 h-4">
												<MinusSVG/>
											</button>
										</div>
									</div>
									<div className="flex flex-col justify-between">
										<p className="">{item.price}$</p>
										<button className="cursor-pointer text-gold" type="button">Remove</button>
									</div>
								</li>
							)
						})
					}
				</ul>
				<div className="mb-4">
					<div className="w-full flex justify-between">
						<p>Subtotal</p>
						<p>$262.00</p>
					</div>
					<p className="text-gray-light text-sm">Shipping and taxes calculated at checkout.</p>
				</div>
				<button className="button" type="button">Checkout</button>
			</div>
		</div>
	)
}

const PlusSVG = () => {
	return (
		<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
		     width="800px" height="800px" viewBox="0 0 45.402 45.402" className="w-4 h-4"
		>
			<g>
				<path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
	c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
	c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
	c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
			</g>
		</svg>
	)
}

const MinusSVG = () => {
	return (
		<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
		     width="800px" height="800px" viewBox="0 0 45.402 45.402" className="w-4 h-4"
		>
			<g>
				<path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
	c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
	c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
	c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
			</g>
		</svg>
	)
}