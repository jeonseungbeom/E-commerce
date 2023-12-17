'use client';

import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import Heading from '../components/products/Heading';
import Button from '../components/Button';
import ItemContent from './ItemContent';
import { formatPrice } from '@/utils/formatPrice';

const CartClient = () => {
    const { cartProducts, cartTotalAmount, handleClearCart } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">Your cart is empty</div>
                <div>
                    <Link href={'/'} className="flex items-center gap-1 mt-2 text-slate-500">
                        <MdArrowBack />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Heading title="Shopping Cart" center />
            <div className="grid items-center grid-cols-5 gap-4 pb-2 mt-8 text-xs">
                <div className="col-span-2 justify-self-start">PRODUCT</div>
                <div className="justify-self-center">PRICE</div>
                <div className="justify-self-center">QUANTITY</div>
                <div className="justify-self-end">TOTAL</div>
            </div>
            <div>
                {cartProducts &&
                    cartProducts.map((item) => {
                        return <ItemContent key={crypto.randomUUID()} item={item} />;
                    })}
            </div>
            <div className="border-t-[1.rpx] border-slate-200 py-4 flex justify-between gap-4">
                <div className="w-[90px]">
                    <Button
                        label="Clear Cart"
                        onClick={() => {
                            handleClearCart();
                        }}
                        small
                        outline
                    />
                </div>
                <div className="flex flex-col items-start gap-1 text-sm">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <p className="text-slate-500">Taxes and shipping calculate at checkout</p>
                    <Button label="checkout" onClick={() => {}} />
                    <Link href={'/'} className="flex items-center gap-1 mt-2 text-slate-500">
                        {' '}
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartClient;
