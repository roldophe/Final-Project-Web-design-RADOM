import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Typography } from "@material-tailwind/react";
import { Base_Url } from '../utilities/API/BaseURl';
import { api_key } from '../utilities/API/Key';
import { BaseUrl_Img } from '../utilities/API/BaseImage';
const DetailPeople = () => {
    let { id } = useParams(null);
    const [person, setperson] = useState(null);
    useEffect(() => {
        // Fetch the movie data
        const fetchperson = async (id) => {
            try {
                const response = await fetch(`${Base_Url}/person/${id}?api_key=${api_key}&language=en- US`);
                const data = await response.json();
                setperson(data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };
        fetchperson(id);
    }, []);

    return (
        <main className='container mx-auto'>
            <div class="min-h-full mt-10 grid place-items-center"
            /* style={{
                background: "linear-gradient(#2b4a62, #0d1423)"
            }} */
            >

                <div class=" rounded-md shadow-lg">
                    <div class="md:flex md:px-0 px-4 leading-none max-w-full">
                        <div class="md:flex-none flex justify-center">
                            <img
                                src={`${BaseUrl_Img}${person && person.profile_path}`}
                                alt="pic"
                                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 "
                            />
                        </div>

                        <div class="flex-col text-gray-300 text-center">

                            <p class="pt-4 text-2xl font-bold">{`${person && person.name}`}</p>
                            <hr class="hr-text" data-content="" />
                            <div class="text-md flex justify-between px-4 my-2">
                                <span class="font-bold">Biography</span>
                                <span class="font-bold"></span>
                            </div>
                            <p class="md:block px-4 my-4 text-sm text-left">
                                {`${person && person.biography}`}
                            </p>

                            <p class="flex text-md px-4 my-2">
                                {`${person && person.known_for_department}`}
                                <span class="font-bold px-2">|</span>
                                {`${person && person.birthday}`} ({`${person && person.place_of_birth}`})
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center px-4 mb-4 w-full">
                        <div className="flex gap-4 text-gray-300 sm:justify-center sm:pl-0 pl-3">
                            <Typography as="a" href="#"
                                className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg
                                    className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg
                                    className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            {/*  <section className='bg-no-repeat bg-[center_top_10rem] bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)]'>
                
                <div className="flex items-center text-white justify-between px-5 py-3 mt-5 rounded-none">
                    <h2 className="text-2xl font-bold">
                        Movie Suggestion
                    </h2>
                </div>
            </section> */}
        </main>
    );
}
export default DetailPeople;