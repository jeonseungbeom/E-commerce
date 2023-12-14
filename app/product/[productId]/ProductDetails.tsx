'use client';

import { Rating } from '@mui/material';
import { useState } from 'react';

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: String;
    name: string;
    description: string;
    category: String;
    brabd: string;
    selectedImg: SelectImgType;
    quantity: number;
    price: number;
};

export type SelectImgType = { color: String; colorCode: string; image: string };

const Horizontal = () => {
    return <hr className="w-[30% my-2]" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.namem,
        description: product.description,
        category: product.category,
        brabd: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    });
    const productRating =
        product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length;
    return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>Images</div>
            <div className="flex flex-col gap-1 text-sm text-slate-500">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal />
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div>
                    <span className="font-semibold">{product.category}</span>
                </div>
                <Horizontal />
                <div>color</div> <Horizontal />
                <div>quality</div> <Horizontal />
                <div>add to cart</div>
            </div>
        </div>
    );
};

export default ProductDetails;
