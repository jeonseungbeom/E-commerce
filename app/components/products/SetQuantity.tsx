'use client';

import { CartProductType } from '@/app/product/[productId]/ProductDetails';

interface SetQtyProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handlQtyIncrease: () => void;
    handlQtyDecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded';

const SetQuantity: React.FC<SetQtyProps> = ({ cartCounter, cartProduct, handlQtyIncrease, handlQtyDecrease }) => {
    return (
        <div className="flex items-center gap-8">
            {cartCounter ? null : <div className="font-semibold">QUATITY:</div>}
            <div className="flex items-center gap-4 text-base">
                <button onClick={handlQtyDecrease} className={btnStyles}>
                    -
                </button>
                <div>{cartProduct.quantity}</div>
                <button onClick={handlQtyIncrease} className={btnStyles}>
                    +
                </button>
            </div>
        </div>
    );
};

export default SetQuantity;
