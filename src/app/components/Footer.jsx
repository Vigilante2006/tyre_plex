import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="">
            <div className="flex justify-between bg-[#ffeaa9] text-black container mx-auto px-4 py-10">
                <div className="w-[80%]">
                    <h6 className="font-semibold">Have a question about Tyres?</h6>
                    <p className="text-gray-600 text-xs">Get an answer in 24 hours from our experts.</p>
                    <input className="mt-3 text-xs py-2 px-2 w-[35%] rounded-full border-gray-300" type="text" placeholder="Ask or search your question" />
                </div>
                <div className="w-[20%]">
                    <Image
                        src="/haveQuestion-bg.webp"
                        alt="Tyre Plex"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div>
                        <Image
                            src="/TP-logo.webp"
                            alt="Tyre Plex"
                            width={100}
                            height={24}
                        />
                        <ul className="inline-flex gap-2 mt-2">
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
                    <div>
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
                    <div>
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
                    <div>
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
                <hr className="mt-2" />
                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
