import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    FilmIcon,
    TvIcon,
    UsersIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { FaAngleDoubleDown, FaRegAddressCard } from "react-icons/fa";

const navMovieMenuItems = [
    {
        title: "Popular",
    },
    {
        title: "Now Playing"
    },
    {
        title: "Upcoming",
    },
    {
        title: "Top Rated",
    },
];
const navTvShowItems = [
    {
        title: "Popular",
    },
    {
        title: "Airing Today",
    },
    {
        title: "On TV",
    },
    {
        title: "Top Rated",
    },
];
const navPeopleItems = [
    {
        title: "Popular People",
    },
];
function NavMoviesMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleItemClick = (route) => {
        navigate(route);
        setIsMenuOpen(false); // Close the menu after navigation
    };

    const renderItems = navMovieMenuItems.map(({ title }) => (
        <Typography key={title} onClick={() => handleItemClick(`/${title.toLowerCase()}`)}>
            <MenuItem>
                <Typography variant="small" color="gray" className="font-normal">
                    {title}
                </Typography>
            </MenuItem>
        </Typography>
    ));
    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 text-gray-100 lg:flex lg:rounded-full">
                            <FilmIcon className="h-[18px] w-[18px]" />
                            <Typography variant="h6" color="white" className="mb-1">
                                Movies
                            </Typography>
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden overflow-visible lg:grid ">
                    <ul>
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <MenuItem className="flex items-center gap-2 text-gray-100 lg:hidden">

                        <FilmIcon className="h-[18px] w-[18px]" />
                        <Typography variant="h6" color="white" className="mb-1">
                            Movies
                        </Typography>
                        <ChevronDownIcon
                            strokeWidth={2}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </MenuItem>
                </MenuHandler>
                <MenuList className="overflow-visible lg:hidden sm:-ml-32 md:-ml-36">
                    <ul className="flex w-full flex-col lg:hidden">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
        </React.Fragment>
    );
}
function NavTvShowMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleItemClick = (route) => {
        navigate(route);
        setIsMenuOpen(false); // Close the menu after navigation
    };
    const renderItems = navTvShowItems.map(({ title }) => (
        <Typography key={title} onClick={() => handleItemClick(`/${title.toLowerCase()}`)}>
            <MenuItem>
                <Typography variant="small" color="gray" className="font-normal">
                    {title}
                </Typography>
            </MenuItem>
        </Typography>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 text-gray-100 lg:flex lg:rounded-full">
                            <TvIcon className="h-[18px] w-[18px]" />
                            <Typography variant="h6" color="white" className="mb-1">
                                Tv Shows
                            </Typography>
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden overflow-visible lg:grid ">
                    <ul>
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <MenuItem className="flex items-center gap-2 text-gray-100 lg:hidden">

                        <TvIcon className="h-[18px] w-[18px]" />
                        <Typography variant="h6" color="white" className="mb-1">
                            TV Shows
                        </Typography>
                        <ChevronDownIcon
                            strokeWidth={2}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </MenuItem>
                </MenuHandler>
                <MenuList className="overflow-visible lg:hidden sm:-ml-32 md:-ml-36">
                    <ul className="flex w-full flex-col lg:hidden">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
        </React.Fragment>
    );
}

function NavPeopleMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleItemClick = (route) => {
        navigate(route);
        setIsMenuOpen(false); // Close the menu after navigation
    };
    const renderItems = navPeopleItems.map(({ title }) => (
        <Typography key={title} onClick={() => handleItemClick(`/${title.toLowerCase()}`)}>
            <MenuItem>
                <Typography variant="small" color="gray" className="font-normal">
                    {title}
                </Typography>
            </MenuItem>
        </Typography>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 text-gray-100 lg:flex lg:rounded-full">
                            <UsersIcon className="h-[18px] w-[18px]" />
                            <Typography variant="h6" color="white" className="mb-1">
                                People
                            </Typography>
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden overflow-visible lg:grid ">
                    <ul>
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <MenuItem className="flex items-center gap-2 text-gray-100 lg:hidden">

                        <UsersIcon className="h-[18px] w-[18px]" />
                        <Typography variant="h6" color="white" className="mb-1">
                            People
                        </Typography>
                        <ChevronDownIcon
                            strokeWidth={2}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </MenuItem>
                </MenuHandler>
                <MenuList className="overflow-visible lg:hidden sm:-ml-32 md:-ml-36">
                    <ul className="flex w-full flex-col lg:hidden">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
        </React.Fragment>
    );
}


function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavMoviesMenu />
            <NavTvShowMenu />
            <NavPeopleMenu />
            <div className="flex pl-3 md:p-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 mr-2 mt-1" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <Typography
                    as="a"
                    href="/about"
                    variant="h6" color="white"
                // className="mb-"
                >
                    About
                </Typography>
            </div>
        </ul>
    );
}

export function StickyNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <header>
            <Navbar className="p-3 lg:pl-6 rounded-none border-none"
                style={{
                    /* backgroundColor: "#0d1423", */
                    background: "linear-gradient(#2b4a62, #0d1423)",
                }}
            >
                <div className="mx-auto flex items-center text-gray-100 container">

                    <div className="mx-auto flex items-center justify-start ml-0">
                        <IconButton
                            size="sm"
                            color="white"
                            variant="text"
                            onClick={toggleIsNavOpen}
                            className=" sm:-ml-2 lg:hidden"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </IconButton>
                        <Typography
                            as="a"
                            href="/"
                            className="cursor-pointer py-1.5 ml-0 lg:-ml-1 font-medium"
                        >
                            ISTAD MOVIE
                        </Typography>
                        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                            <NavList />
                        </div>

                    </div>
                    <Typography
                        as="a"
                        href="/signin"
                        className="cursor-pointer py-1.5 mr-3 lg:mr-1 font-medium"
                    >
                        Login
                    </Typography>
                </div>
                <MobileNav open={isNavOpen} className="overflow-scroll">
                    <NavList />
                </MobileNav>

            </Navbar>
        </header>
    );
}