// src/components/Contact.js

import React from "react";

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex md:flex-nowrap flex-wrap">
                <div className="bg-slate-100 rounded-lg lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.85)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=Consulente+Finanziario+Torino+-+Francesco+Magagna,+Corso+Francia,+Turin,+Metropolitan+City+of+Turin,+Italy&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="2xl:w-2/3 w-full container bg-gray-900 bg-opacity-90 relative flex flex-wrap py-6 rounded shadow-xl invisible md:visible">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                INDIRIZZO
                            </h2>
                            <p className="mt-1">
                                Corso Francia, 280 <br />
                                Torino, TO 10146
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 pr-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="mailto:francesco.magagna@pfafineco.it?subject=Consulenza" className="text-indigo-400 leading-relaxed">
                                francesco.magagna@pfafineco.it
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                TEL.
                            </h2>
                            <p className="leading-relaxed">346 5727999</p>
                        </div>
                    </div>
                </div>

                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="text-gray-500 lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-600 sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contattami
                    </h2>
                    <p className="leading-relaxed mb-5">
                        
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-500">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-600 bg-opacity-40 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-500">
                            Cognome
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-600 bg-opacity-40 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-500">
                            Telefono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-600 bg-opacity-40 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-500">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-600 bg-opacity-40 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-500">
                            Messaggio
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-gray-600 bg-opacity-40 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Invia!
                    </button>
                </form>
            </div>
        </section>
    );
}