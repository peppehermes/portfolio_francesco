// src/components/Projects.js

import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import { linkedin } from "../data";

export default function LinkedIn() {
    return (
        <section id="projects" className="text-gray-500 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4 text-gray-500" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-600 mb-4">
                        LinkedIn
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Mi piace definirmi un "Long-term thinker, in a short-term world". <br />
                        Per i meno pratici con l'inglese, "Uno che pensa a lungo termine, in un mondo che pensa a breve".
                    </p>
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 mt-12">
                        Rimani aggiornato sugli ultimi contenuti pubblicati!
                    </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    {linkedin.map(
                        (post) => (
                            <iframe className="w-100 sm:w-1/2 p-4" src={post.src} title={post.id} width={post.width} height={post.height} />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}