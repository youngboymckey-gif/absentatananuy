import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex">
            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
                <div className="h-20 flex items-center px-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            T
                        </div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-widest">
                            Tara!
                        </h1>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Main Menu
                    </p>
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-orange-50 text-slate-600 hover:text-orange-600"
                    >
                        <span>📊</span> Dashboard
                    </NavLink>
                    <NavLink
                        href={route("resorts.index")}
                        active={route().current("resorts.*")}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-orange-50 text-slate-600 hover:text-orange-600"
                    >
                        <span>🏝️</span> Manage Resorts
                    </NavLink>
                    <NavLink
                        href={route("profile.edit")}
                        active={route().current("profile.*")}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-orange-50 text-slate-600 hover:text-orange-600"
                    >
                        <span>👤</span> Profile
                    </NavLink>
                </nav>
                <div className="p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-slate-800 truncate">
                                {user.name}
                            </p>
                            <p className="text-xs text-slate-400 truncate">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    !showingNavigationDropdown,
                                )
                            }
                            className="text-slate-500 hover:text-slate-800"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        {header && (
                            <div className="text-xl font-bold text-slate-800">
                                {header}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500 hidden sm:block">
                            Welcome,{" "}
                            <span className="text-slate-800 font-semibold">
                                {user.name}
                            </span>
                            !
                        </span>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 focus:outline-none">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <svg
                                        className="ms-2 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " md:hidden bg-white border-b border-slate-200"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                            className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-orange-50"
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("resorts.index")}
                            active={route().current("resorts.*")}
                            className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-orange-50"
                        >
                            Manage Resorts
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("profile.edit")}
                            active={route().current("profile.*")}
                            className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-orange-50"
                        >
                            Profile
                        </ResponsiveNavLink>
                    </div>
                </div>

                <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
                    {children}
                </main>
            </div>
        </div>
    );
}
