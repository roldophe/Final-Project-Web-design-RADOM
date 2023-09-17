import Lottie from 'lottie-react';
import React, { useRef, useState } from 'react';
import animationData from '../assets/Lotties/loginAnimation.json';
import { useNavigate } from 'react-router';
const SignIn = () => {
    const prodRef = useRef(null);
    const [reverseCount, setReverseCount] = useState(0);
    const maxReverseCount = 1; // Set the maximum number of reverse repetitions

    const handleAnimationComplete = () => {
        if (reverseCount < maxReverseCount) {
            prodRef.current?.setDirection(-1);
            prodRef.current?.play();
            setReverseCount(reverseCount + 1);
        } else {
            prodRef.current?.setDirection(1); // Set the direction to forward
            prodRef.current?.play();
            setReverseCount(0); // Reset the reverse count
        }
    };
    const navigate = useNavigate();
    return (
        <div class="container mx-auto px-5 sm:flex items-center max-w-screen-xl mt-5">
            <div class="sm:w-1/2 p-5">
                <Lottie
                    onComplete={handleAnimationComplete}
                    lottieRef={prodRef}
                    loop={false}
                    animationData={animationData}
                />
            </div>
            <div class="sm:w-1/2">
                {/* <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <FontAwesomeIcon icon={faSuperpowers} className='text-blue-500 flex items-center mx-auto h-10 w-auto' />
                        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit} className="w-25">
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={onInputChangeHanler}
                                        className="form-control"
                                        placeholder="name@example.com"
                                        class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                                </div>
                            </div>
                            <div class="mt-2">
                                <div>
                                    <div class="flex items-center justify-between">
                                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <div class="text-sm">
                                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"
                                    value={user.password}
                                    onChange={onInputChangeHanler}
                                    className="form-control"
                                    placeholder="Password"
                                    required class="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            <div class="mt-2">
                                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 mb-5 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>

                        <p class="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                        </p>
                    </div>
                </div> */}
                <div class="px-4 md:px-0">
                    <div class="md:mx-6 md:p-12">
                        {/* <!--Logo--> */}
                        <div class="text-center">
                            <img
                                class="mx-auto w-48"
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                alt="logo" />
                            <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-white">
                                We are The Lotus Team
                            </h4>
                        </div>
                        <form>
                            <p class="mb-4 text-gray-300">Please login to your account</p>
                            {/* <!--Username input--> */}
                            <div class="relative mb-4 text-gray-300" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                    placeholder="Username"
                                />
                                <label
                                    for="exampleFormControlInput1"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Username
                                </label>
                            </div>

                            {/* <!--Password input--> */}
                            <div class="relative mb-4" data-te-input-wrapper-init>
                                <input
                                    type="password"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput11"
                                    placeholder="Password" />
                                <label
                                    for="exampleFormControlInput11"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Password
                                </label>
                            </div>

                            {/* <!--Submit button--> */}
                            <div class="mb-12 pb-1 pt-1 text-center text-gray-300">
                                <button
                                    class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]
                                    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
                                    "
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                // style={{
                                //     background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593) "
                                // }}
                                >
                                    Log in
                                </button>

                                {/* <!--Forgot password link--> */}
                                <a href="#!">Forgot password?</a>
                            </div>

                            {/* <!--Register button--> */}
                            <div class="flex items-center justify-between pb-6 text-gray-300">
                                <p class="mb-0 mr-2">Don't have an account?</p>
                                <a href="/register"
                                    class="text-gray-300 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    Register
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignIn;
