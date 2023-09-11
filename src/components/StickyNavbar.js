import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    FilmIcon,
    TvIcon,
    UsersIcon,
    EllipsisVerticalIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);
    const navigate = useNavigate();

    const handleItemClick = (route) => {
        navigate(route);
        setIsMenuOpen(false); // Close the menu after navigation
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">

            <MenuHandler>
                <Button
                    variant="text"
                    color="white"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-100 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>

            </MenuHandler>

            <MenuList className="p-1">

                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    const isFirstItem = key === 0;

                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}

                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                                key={label} onClick={() => handleItemClick(`/${label.toLowerCase()}`)}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}
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
const navMoreItems = [
    {
        title: "Discussions",
    },
    {
        title: "Leaderboard",
    },
    {
        title: "Support",
    },
    {
        title: "API",
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
function NavMoreMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleItemClick = (route) => {
        navigate(route);
        setIsMenuOpen(false); // Close the menu after navigation
    };
    const renderItems = navMoreItems.map(({ title }) => (
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
                            <EllipsisVerticalIcon className="h-[18px] w-[18px]" />
                            <Typography variant="h6" color="white" className="mb-1">
                                More
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

                        <EllipsisVerticalIcon className="h-[18px] w-[18px]" />
                        <Typography variant="h6" color="white" className="mb-1">
                            More
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
// nav list component
const navListItems = [
    {
        label: "TV Shows",
        icon: TvIcon,
    },
    {
        label: "People",
        icon: UsersIcon,
    },
    {
        label: "More",
        icon: EllipsisVerticalIcon,
    },

];

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavMoviesMenu />
            <NavTvShowMenu />
            <NavPeopleMenu />
            <NavMoreMenu />
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
                            className="mr-auto -ml-1 lg:hidden"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </IconButton>
                        <Typography
                            as="a"
                            href="/"
                            className="cursor-pointer py-1.5 ml-2 lg:-ml-1 font-medium"
                        >
                            ISTAD MOVIE
                        </Typography>
                        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                            <NavList />
                        </div>

                    </div>
                    {/* 
                    <div className="">
                        <IconButton
                            size="sm"
                            color="white"
                            variant="text"
                            className="ml-auto"
                        >
                            <PlusIcon className="h-5 w-5" />
                        </IconButton>
                        <Typography
                            as="a"
                            href="#"
                            className="cursor-pointer py-1.5 font-medium"
                        >
                            Login
                        </Typography>
                        <Typography
                            as="a"
                            href="#"
                            className="cursor-pointer py-1.5 font-medium"
                        >
                            Join TMDB
                        </Typography>
                        <IconButton
                            size="sm"
                            color="white"
                            variant="text"
                            className="ml-auto"
                        >
                            <MagnifyingGlassIcon className="h-5 w-5" />
                        </IconButton>
                    </div> */}
                    <ProfileMenu />
                </div>
                <MobileNav open={isNavOpen} className="overflow-scroll">
                    <NavList />
                </MobileNav>

            </Navbar>
        </header>
    );
}