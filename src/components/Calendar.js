// src/components/Goals.js

import { CalendarIcon } from "@heroicons/react/solid";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Calendar() {
    return (
        <section id="calendar">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <CalendarIcon className="w-10 inline-block mb-4 text-gray-500" />
                    <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
                        Prenota un appuntamento
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed mx-auto xl:w-2/4 lg:w-3/4">
                        Sarò più che lieto di aiutarti a costruire una strategia vincente, cucita su misura
                        intorno alle tue esigenze e ai tuoi obiettivi.
                    </p>
                </div>
                
                <InlineWidget className="overflow-hidden" url="https://calendly.com/mercuriogiuseppe/30min" />

            </div>
        </section>
    );
}