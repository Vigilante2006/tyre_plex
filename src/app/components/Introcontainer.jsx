"use client";
import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import { googleFeedback } from "../data/feedbackdata";
import { CheckCircle, ChevronsLeft, ChevronsRight, Clock, MapPin, Verified } from 'lucide-react';
import { dealsIn } from '../data/deaslin';
import FilterAndProducts from './Filterandproduct';
import Footer from './Footer';

function Introcontainer() {
    // Google Reviews Carousel State
    const [currentIndexGoogle, setCurrentIndexGoogle] = useState(0);
    const googleCarouselRef = useRef(null);
    const totalGoogleSlides = googleFeedback.length;

    // Deals In Carousel State
    const [currentIndexDeals, setCurrentIndexDeals] = useState(0);
    const dealsCarouselRef = useRef(null);
    const totalDealsSlides = dealsIn.length;

    // Google Reviews Navigation
    const handleNextGoogle = () => {
        if (currentIndexGoogle < totalGoogleSlides - 3) { // Adjust condition to stop at the last set of 3 slides
            setCurrentIndexGoogle(currentIndexGoogle + 1);
        }
    };

    const handlePrevGoogle = () => {
        if (currentIndexGoogle > 0) {
            setCurrentIndexGoogle(currentIndexGoogle - 1);
        }
    };

    useEffect(() => {
        if (googleCarouselRef.current) {
            googleCarouselRef.current.style.transform = `translateX(-${currentIndexGoogle * (100 / 3)}%)`;
        }
    }, [currentIndexGoogle]);

    // Deals In Navigation
    const handleNextDeals = () => {
        if (currentIndexDeals < totalDealsSlides - 3) { // Adjust condition to stop at the last set of 3 slides
            setCurrentIndexDeals(currentIndexDeals + 1);
        }
    };

    const handlePrevDeals = () => {
        if (currentIndexDeals > 0) {
            setCurrentIndexDeals(currentIndexDeals - 1);
        }
    };

    useEffect(() => {
        if (dealsCarouselRef.current) {
            dealsCarouselRef.current.style.transform = `translateX(-${currentIndexDeals * (100 / 3)}%)`;
        }
    }, [currentIndexDeals]);

    return (
        <main className="space-y-8 justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <section className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-md rounded-md">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="space-y-2 w-full md:w-1/2 pr-0 md:pr-10">
                        <span className="text-green-500 flex items-center">
                            <Verified className='w-5 md:w-6' /> Verified
                        </span>
                        <h1 className="text-black text-xl md:text-2xl font-bold">SHREE HEMKUNT TYRES AND SERVICES</h1>
                        <div className="flex items-center space-x-2">
                            <span className="text-green-500 text-lg">4.9</span>
                            <span className="text-gray-500">(2278 Reviews)</span>
                        </div>
                        <div className='flex items-top'>
                            <MapPin className='w-8 md:w-10 mr-2 text-gray-600' />
                            <p className="text-gray-600 text-sm">
                                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <Clock className='w-5 md:w-6 mr-2 text-gray-600' />
                            <p className="text-gray-600 text-sm">Open - Monday to Sunday - 10:00AM to 8:00PM</p>
                        </div>
                        <button className="px-4 py-2 text-white bg-red-500 rounded-md mt-2 md:mt-4">Get Directions</button>
                    </div>
                    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 md:mt-0 w-full md:w-1/2">
                        <Image
                            src="/introIamges/2021-02-06.jpg"
                            alt="Shop Image"
                            width={289}
                            height={163}
                            className="w-full md:w-1/2 h-auto object-cover rounded-md"
                            priority
                        />
                        <Image
                            src="/introIamges/2021-02-06.jpg"
                            alt="Shop Image"
                            width={289}
                            height={163}
                            className="w-full md:w-1/2 h-auto object-cover rounded-md mt-4 sm:mt-0"
                            priority
                        />
                    </div>
                </div>

                {/* Google Reviews Carousel */}
                <div className="flex justify-between items-center mt-4 mb-4">
                    <h2 className="text-lg md:text-xl font-bold">Google Reviews</h2>
                    <span className="flex space-x-2">
                        <button
                            onClick={handlePrevGoogle}
                            className={`m-2 px-1 py-1 rounded-full bg-gray-800 text-white ${currentIndexGoogle === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentIndexGoogle === 0}
                        >
                            <ChevronsLeft />
                        </button>
                        <button
                            onClick={handleNextGoogle}
                            className={`m-2 px-1 py-1 rounded-full bg-gray-800 text-white ${currentIndexGoogle >= totalGoogleSlides - 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentIndexGoogle >= totalGoogleSlides - 3}
                        >
                            <ChevronsRight />
                        </button>
                    </span>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div
                        ref={googleCarouselRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ width: `${(totalGoogleSlides / 3) * 100}%` }}
                    >
                        {googleFeedback.map((item, index) => (
                            <div key={index} className="w-[calc(100%/3)] sm:w-[calc(100%/3)] md:w-[calc(100%/5.2)] m-2 p-4 bg-gray-100 rounded-md flex-shrink-0">
                                <div className="flex items-center space-x-2">
                                    <Avatar className="w-10 h-10 border-2 border-green-600">
                                        <AvatarImage src={item.userProfile} alt={item.userName} />
                                        <AvatarFallback>{item.userName.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <p className="font-bold">{item.userName}</p>
                                </div>
                                <p className="mt-2 text-gray-600">{item.feedbackMsg}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deals In Carousel */}
                <div className="flex justify-between items-center mt-4 mb-4">
                    <h2 className="text-lg md:text-xl font-bold">Deals In</h2>
                    <span className="flex space-x-2">
                        <button
                            onClick={handlePrevDeals}
                            className={`m-2 px-1 py-1 rounded-full bg-gray-800 text-white ${currentIndexDeals === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentIndexDeals === 0}
                        >
                            <ChevronsLeft />
                        </button>
                        <button
                            onClick={handleNextDeals}
                            className={`m-2 px-1 py-1 rounded-full bg-gray-800 text-white ${currentIndexDeals >= totalDealsSlides - 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentIndexDeals >= totalDealsSlides - 3}
                        >
                            <ChevronsRight />
                        </button>
                    </span>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div
                        ref={dealsCarouselRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ width: `${(totalDealsSlides / 3) * 100}%` }}
                    >
                        {dealsIn.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-between w-[calc(100%/4)] sm:w-[calc(100%/6)] md:w-[calc(100%/10)] m-2 p-4 bg-gray-100 rounded-md flex-shrink-0">
                                <Image
                                    src={item.companyLogo}
                                    alt={item.comapnyName}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                    priority
                                />
                                <h4 className="text-center text-sm">{item.comapnyName}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-md rounded-md">
                <h2 className="text-lg md:text-xl font-bold">Services offered by this dealer</h2>
                <div className="grid gap-4 mt-4 md:grid-cols-2">
                    <div className="flex flex-col justify-center items-center p-4 bg-gray-100 rounded-md">
                        <div className="flex flex-col items-center space-x-4">
                            <Image
                                src='/services/wheel-alignment-bal.webp'
                                alt=''
                                width={120}
                                height={120}
                                className="object-contain"
                                priority
                            />
                            <div className='flex flex-col items-center'>
                                <h3 className="text-lg font-bold">Wheel Balancing</h3>
                                <button className='mt-2 bg-red-600 text-white px-4 py-2 rounded-md'>Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4 bg-gray-100 rounded-md">
                        <div className="flex flex-col items-center space-x-4">
                            <Image
                                src='/services/wheel-alignment.webp'
                                alt=''
                                width={120}
                                height={120}
                                className="object-contain"
                                priority
                            />
                            <div className='flex flex-col items-center'>
                                <h3 className="text-lg font-bold">Wheel Alignment</h3>
                                <button className='mt-2 bg-red-600 text-white px-4 py-2 rounded-md'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tyres Sold by this Dealer */}
            <FilterAndProducts />

            {/* Payment Mode */}
            <section className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-md rounded-md">
                <h2 className="text-lg md:text-xl font-bold">Payment Mode</h2>
                <div className="grid gap-4 mt-4 md:grid-cols-2">
                    {[
                        "Deposit to Account",
                        "Credit Card/Debit Card",
                        "Net Banking",
                        "UPI",
                        "Wallets (PayTM/PhonePe/Amazon etc.)",
                    ].map((mode) => (
                        <div key={mode} className="flex items-center space-x-2">
                            <CheckCircle className='text-green-600 w-5 h-5 md:w-6 md:h-6' />
                            <p className="text-gray-600 text-sm md:text-base">{mode}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Introcontainer;
