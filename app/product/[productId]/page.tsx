import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';
import { product } from '@/utils/product';
import ListRating from './ListRating';

interface Iparams {
    productId?: string;
}

const Product = ({ params }: { params: Iparams }) => {
    console.log('params', params);
    return (
        <div>
            <Container>
                <ProductDetails product={product} />
                <div className="flex flex-col gap-4 mt-20">
                    <div>Add Rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    );
};

export default Product;
