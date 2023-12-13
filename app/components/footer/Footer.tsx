import Link from 'next/link';
import Container from '../Container';
import FooterList from './FooterList';

const Footer = () => {
    return (
        <footer className="mt-16 text-sm bg-slate-700 text-slate-200">
            <Container>
                <div className="flex flex-col justify-between pt-16 pb-8 md:flex-row">
                    <FooterList>
                        <h3>Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Labtops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">Tvs</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
