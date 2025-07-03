"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';


const Introduction = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center p-5">
            {/* Image container - simplified layout */}
            <div className="col-span-12 lg:col-span-4 order-1">
                <div className="relative w-[200px] h-[300px] lg:w-[250px] lg:h-[350px] mx-auto 
                              rounded-[100px] overflow-hidden border-4 border-white shadow-lg">
                    <img
                        src="/images/profile.jpg"
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            
            <div className="col-span-12 lg:col-span-7 order-2 text-center sm:text-left">
                <h1 className="text-black mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold whitespace-nowrap">
                    <span>Hello, I'm {" "}</span>
                    <TypeAnimation
                        sequence={[
                            'Howard',
                            1000,
                            'Astronomer',
                            1000,
                            'Programmer',
                            1000,
                            'Musician',
                            1000,
                            'Hockey Player',
                            1000,
                            'Explorer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="inline-block align-baseline pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                </h1>
                <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
                    Using software to solve hard problems. 
                </p>
                <div className="flex flex-wrap mt-3"> {/* Removed gap-3 */}
                    {/* Email Button */}
                    <Link
                        href="mailto:howard.qian08@gmail.com"
                        className="font-bold px-6 py-3 w-full sm:w-fit rounded-full 
                                bg-gradient-to-br from-blue-100 via-blue-200 to-green-300 
                                border border-slate-200 
                                transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/40
                                hover:-translate-y-0.5 cursor-pointer text-center
                                mr-3 mb-3"> {/* Added margin-right and margin-bottom */}
                        Email Me
                    </Link>

                    {/* Portfolio Button */}
                    <Link 
                        href="https://www.eliteprospects.com/player/888354/howard-qian"
                        className="px-6 py-3 w-full sm:w-fit rounded-full 
                                bg-gradient-to-br from-purple-100 via-purple-200 to-pink-300 
                                font-bold border border-slate-200 
                                transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/40 
                                hover:-translate-y-0.5 cursor-pointer text-center
                                mr-3 mb-3"> {/* Consistent margin */}
                        Elite Prospects
                    </Link>

                    {/* Contact Button */}
                    <Link href="tel:+4082560880"
                        className="px-6 py-3 w-full sm:w-fit rounded-full 
                                bg-gradient-to-br from-amber-100 via-amber-200 to-orange-300 
                                font-bold border border-slate-200 
                                transition-all duration-300 hover:shadow-lg hover:shadow-amber-300/40 
                                hover:-translate-y-0.5 cursor-pointer text-center
                                mb-3"> {/* Only bottom margin for last item */}
                        Schedule Call
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Introduction;