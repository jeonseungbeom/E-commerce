import Image from 'next/image';

const HomeBanner = () => {
    return (
        <div className="relative mb-8 bg-gradient-to-r from-sky-500 to-sky-700">
            <div className="flex flex-col items-center gap-2 px-8 py-12 mx-autofill: md:flex-row justify-evenly">
                <div className="mb-8 text-center md:mb-0">
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">Summer Sale</h1>
                    <p className="mb-2 text-lg text-white md:text-xl">Enjoy discounts on selected items</p>
                    <p className="text-2xl font-bold text-yellow-400 md:text-5xl">Get 50% OFF</p>
                </div>
                <div className="relative w-1/3 aspect-video">
                    <Image src="/banner-image.png" fill alt="Banner Image" className="object-contain" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
