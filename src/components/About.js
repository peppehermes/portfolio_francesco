// src/components/About.js

export default function About() {
    return (
        <section id="about" className="bg-gray-900 drop-shadow-lg">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="capitalize title-font text-2xl lg:text-3xl xl:text-5xl mb-4 font-bold text-white">
                        francesco magagna
                    </h1>
                    <p className="mb-4 capitalize leading-relaxed text-xl lg:text-2xl xl:text-2xl">
                        Consulente finanziario - Fineco
                    </p>
                    <p className="mb-8 italic leading-relaxed">
                        Iscritto all'albo OCF - Delibera n. 1829
                    </p>
                    <div className="flex justify-center">
                        <a href="https://wa.me/393465727999"
                            className="w-auto h-auto inline-flex"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img alt="Whatsapp" src="./img/whatsapp.svg" />
                        </a>
                        <a href="https://www.linkedin.com/in/francescomagagna"
                            className="ml-2 w-auto h-auto inline-flex"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img alt="Whatsapp" src="./img/linkedin-circled.svg" />
                        </a>
                        <a
                            href="#contact"
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-lg">
                            Contattami
                        </a>
                        <a
                            href="https://www.google.com/url?q=https%3A%2F%2Flinktr.ee%2Ffrancescomagagna&sa=D&sntz=1&usg=AOvVaw3JrDHZtChR8jWm7MbglB7D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Links
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./img/profile_photo.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}