import Link from 'next/link';
import Container from '../Container';
import FooterList from './FooterList';
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="mt-16 text-sm bg-slate-700 text-slate-200">
            <Container>
                <div className="flex justify-between pt-16 pb-8 md:flex-row">
                    <FooterList>
                        <h3 className="mb-2 text-base font-bold">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Labtops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">Tvs</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="mb-2 text-base font-bold">Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Returns & Exchanges</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <div>
                        <h3 className="mb-2 text-base font-bold">About Us</h3>
                        <p className="mb-2">
                            At our electronics store, we are dedicated to providing the latest and greatest devices and
                            accessories to our customers. With a wide selection of phones, TVs, laptops, watches, and
                            accessories.
                        </p>
                        <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-base font-bold">Follow Us</h3>
                        <div className="flex gap-2">
                            <Link href="#">
                                <MdFacebook size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillInstagram size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillYoutube size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
