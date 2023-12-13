import Link from 'next/link';
import Container from '../Container';
import { Redressed } from 'next/font/google';

const redressed = Redressed({ subsets: ['latin'], weight: ['400'] });

const NavBar = () => {
    return (
        <div className="sticky top-0 z-30 w-full shadow-sm bg-stone-200">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/" className={`${redressed.className} font-bold text-2xl`}>
                            E-Shop
                        </Link>
                        {/* TODO hidden? */}
                        <div className="hidden md:block">search</div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <div>CartCount</div>
                            <div>UserMenu</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;
