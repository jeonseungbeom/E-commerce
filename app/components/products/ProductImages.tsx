'use client';

import { SelectedImgType, CartProductType } from '@/app/product/[productId]/ProductDetails';
import Image from 'next/image';

interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ cartProduct, product, handleColorSelect }) => {
    return (
        <div className="grid h-full grid-cols-6 gap-2 max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center h-full gap-4 border cursor-pointer max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {product.images.map((image: SelectedImgType) => {
                    return (
                        <div
                            key={crypto.randomUUID()}
                            onClick={() => {
                                handleColorSelect(image);
                            }}
                            className={`relative w-[80%] aspect-square rounded border-teal-300 ${
                                cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'
                            }`}
                        >
                            <Image src={image.image} alt={image.color} fill className="object-contain" />
                        </div>
                    );
                })}
            </div>
            <div className="relative col-span-5 aspect-square">
                <Image
                    fill
                    src={cartProduct.selectedImg.image}
                    alt={cartProduct.name}
                    className="object-contain w-full h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]"
                />
            </div>
        </div>
    );
};

export default ProductImage;
