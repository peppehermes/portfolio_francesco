// src/components/Testimonials.js

import { testimonials } from "../data";
import React from "react";
import { UsersIcon, CurrencyDollarIcon } from "@heroicons/react/solid"

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container text-center mx-auto px-5 py-10">
                <UsersIcon className="w-10 inline-block mb-4 text-gray-500" />
                <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-12">
                    Recensioni
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="bg-gray-600 bg-opacity-40 h-full p-8 rounded">
                                <CurrencyDollarIcon className="block w-8 text-gray-700 mb-4" />
                                <p className="leading-relaxed mb-6 text-gray-600">{testimonial.quote}</p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={testimonial.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="text-gray-700 title-font font-medium">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}