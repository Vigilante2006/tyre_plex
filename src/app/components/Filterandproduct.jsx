"use client";

import { useState } from "react";
import { products } from "../data/products";
import { IndianRupeeIcon, ShieldCheckIcon } from "lucide-react";
import Image from "next/image";

const FilterAndProducts = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleFilterChange = (event) => {
        const value = event.target.value ? event.target.value.toLowerCase() : "";

        const filtered = products.filter(product => {
            const productCategory = product.category ? product.category.toLowerCase() : "";
            return productCategory.includes(value);
        });

        setFilteredProducts(filtered);
    };

    const handleSortChange = (event) => {
        const sortValue = event.target.value;

        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (sortValue === "htl") {
                return b.price - a.price;  // Sort by price High to Low
            } else if (sortValue === "lth") {
                return a.price - b.price;  // Sort by price Low to High
            } else if (sortValue === "popular") {
                return b.popularity - a.popularity; // Sort by popularity
            } else {
                return 0; // Default or no sorting applied
            }
        });

        setFilteredProducts(sortedProducts);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Filters */}
            <div className="flex flex-wrap justify-between gap-4 mb-4">
                <select className="border p-2 rounded w-full sm:w-auto" onChange={handleSortChange}>
                    <option value="">Sort By</option>
                    <option value="popular">Most Popular</option>
                    <option value="htl">Price High to Low</option>
                    <option value="lth">Price Low to High</option>
                </select>
                <select className="border p-2 rounded w-full sm:w-auto" onChange={handleFilterChange}>
                    <option value="">Filter By Category</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                    <option value="scooter">Scooter</option>
                </select>
                <select className="border p-2 rounded w-full sm:w-auto">
                    <option value="">Choose Brand</option>
                    {/* Add brand options */}
                </select>
                <select className="border p-2 rounded w-full sm:w-auto">
                    <option value="">Choose Model</option>
                    {/* Add model options */}
                </select>
                <select className="border p-2 rounded w-full sm:w-auto">
                    <option value="">Choose Variant</option>
                    {/* Add variant options */}
                </select>
                <button className="bg-red-500 text-white p-2 rounded w-full sm:w-auto">Search</button>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col border rounded-lg p-4 shadow-lg relative bg-white overflow-hidden">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mb-4">
                                <Image
                                    src={product.companyLogo}
                                    alt="Company Logo"
                                    width={50}
                                    height={27}
                                    priority
                                />
                                <p className="text-xs text-gray-500 font-semibold">{product.name}</p>
                                <p className="text-xs text-gray-600 mt-1">{product.size}</p>
                                <p className="text-gray-500 text-xs mt-1">{product.tubeType}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-green-500 font-bold text-[10px]">★{product.popularity}</span>
                                    <span className="text-gray-400 ml-2 text-xs">{`(${product.reviews} Reviews)`}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <IndianRupeeIcon className="w-[15px]" />
                                    <p className="text-black text-sm ml-1">{product.price}</p>
                                </div>
                                {product.offer ? (
                                    <p className="text-green-500 text-[10px]">Offer Available</p>
                                ) : (
                                    <p className="text-red-500 text-[10px]">No Offer Available</p>
                                )}
                            </div>
                            <div className="relative h-24 w-full flex justify-center">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 flex items-center bg-[#ee453f] text-white px-[3px] py-1 rounded-bl-md">
                            <ShieldCheckIcon className="w-[15px]" />
                            <span className="text-xs font-bold ml-1">{product.warranty}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterAndProducts;
