import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-black">
            {/* Question Section */}
            <div className="bg-[#ffeaa9] container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 py-6 lg:py-10">
                <div className="lg:w-[80%] w-full text-center lg:text-left">
                    <h6 className="font-semibold">Have a question about Tyres?</h6>
                    <p className="text-gray-600 text-xs">Get an answer in 24 hours from our experts.</p>
                    <input 
                        className="mt-3 text-xs py-2 px-2 w-full lg:w-[70%] xl:w-[50%] rounded-full border-gray-300" 
                        type="text" 
                        placeholder="Ask or search your question" 
                    />
                </div>
                <div className="lg:w-[20%] w-full mt-4 lg:mt-0 flex justify-center lg:justify-end">
                    <Image
                        src="/haveQuestion-bg.webp"
                        alt="Tyre Plex"
                        width={100}
                        height={100}
                        className="w-[80px] lg:w-[100px]" // Make the image responsive
                    />
                </div>
            </div>

            {/* Links Section */}
            <div className="container mx-auto px-4 py-6 lg:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div className="text-center lg:text-left">
                        <Image
                            src="/TP-logo.webp"
                            alt="Tyre Plex"
                            width={100}
                            height={24}
                        />
                        <ul className="inline-flex gap-2 mt-2 justify-center lg:justify-start">
                            <li>
                                <Link href="/" className="text-xs hover:underline">
                                    <Facebook />
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-xs hover:underline">
                                    <Instagram />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-center lg:text-left">
                        <ul>
                            <li>
                                <Link href="/about" className="text-xs hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/joinus" className="text-xs hover:underline">
                                    Are you a Tyre Dealer?
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center lg:text-left">
                        <ul>
                            <li>
                                <Link href="/privacy_policy" className="text-xs hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms_condition" className="text-xs hover:underline">
                                    Terms of use
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="text-center lg:text-left">
                        <ul>
                            <li>
                                <Link href="/contact_us" className="text-xs hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/career" className="text-xs hover:underline">
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping_return_policy" className="text-xs hover:underline">
                                    Shipping & Return Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mt-2" />

            {/* Footer Note */}
            <div className="container mx-auto px-4 py-4">
                <div className="text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
