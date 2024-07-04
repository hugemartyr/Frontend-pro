
import useOrderItems from '../../../hooks/useOrderItems.zustand';
// import { addZero, totalDiscountedPrice, totalPriceWithDiscount, totalPriceWithoutDiscount } from '../../../utils/utils';
import './style.scss';

function OrderSummary() {
	const orderItems = useOrderItems(state => state.orderItems);
	// const actualPrice = totalPriceWithDiscount(orderItems);
	// const totalPrice = totalPriceWithoutDiscount(orderItems);
	// const totalDiscount = totalDiscountedPrice(orderItems);
	return (
		<article className="cart__summary">
			<h2>Order Summary</h2>
			<div>
				<p>Total Skins</p>
				{/* <p>{addZero(orderItems.length)}</p> */}
				<p></p>
			</div>
			<div>
				<p>Subtotal</p>
				{/* <p>${totalPrice}</p> */}
				<p>1000</p>
			</div>
			<div className='discount'>
				<p>Discount</p>
				{/* <p>${totalDiscount}</p> */}
				<p>1000</p>
				
			</div>
			<div className="totals">
				<h2>Total</h2>
				{/* <h2>${actualPrice}</h2> */}
				<p>1000</p>
			</div>
		</article>
	);
}
export default OrderSummary;
