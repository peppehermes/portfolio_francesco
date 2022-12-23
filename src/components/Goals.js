// src/components/Goals.js

import { BadgeCheckIcon, CheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Goals() {
    return (
        <section id="goals">
            <div className="container  px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <CheckIcon className="w-10 inline-block mb-4 text-gray-500" />
                    <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
                        Obiettivi
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed mx-auto xl:w-2/4 lg:w-3/4">
                        Il mio obiettivo è quello di aiutare i miei clienti nella gestione dei risparmi e degli investimenti,
                        supportandoli in tutte le fasi del processo di pianificazione economico-finanziaria.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w:4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-600 bg-opacity-40 rounded flex h-full items-center p-4">
                                <BadgeCheckIcon className="w-6 h-6 flex-shrink-0 mr-4 text-gray-600" />
                                <span className="title-font font-medium text-gray-800">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}