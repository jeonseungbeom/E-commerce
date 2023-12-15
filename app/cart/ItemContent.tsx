'use client';

import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { formatPrice } from '@/utils/formatPrice';
import { truncateText } from '@/utils/truncateText';
import Image from 'next/image';
import Link from 'next/link';
import SetQuantity from '../components/products/SetQuantity';
import { useCart } from '@/hooks/useCart';

interface ItemContentProps {
    item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease } = useCart();
    return (
        <div className="grid grid-cols-5 gap-4 text-xs border-t md:text-sm-[1.5px] border-slate-200 py-4 items-center">
            <div className="flex col-span-2 gap-2 justify-self-start md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[70px] aspect-square">
                        <Image src={item.selectedImg.image} alt={item.name} fill className="object-contain" />
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button
                            className="underline text-slate-500"
                            onClick={() => {
                                handleRemoveProductFromCart(item);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">{formatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handlQtyIncrease={() => {
                        handleCartQtyIncrease(item);
                    }}
                    handlQtyDecrease={() => {
                        handleCartQtyDecrease(item);
                    }}
                />
            </div>
            <div className="font-semibold justify-self-end">{formatPrice(item.price * item.quantity)}</div>
        </div>
    );
};

export default ItemContent;
