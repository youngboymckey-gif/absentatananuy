import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, resorts }) {
    return (
        <>
            <Head title="Tara! - Find Resorts. Plan Events. Celebrate." />

            <div className="min-h-screen bg-slate-50 font-sans">
                {/* NAVBAR */}
                <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20 items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    T
                                </div>
                                <h1 className="text-2xl font-bold text-white tracking-widest">
                                    Tara!
                                </h1>
                            </div>
                            <div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
                                <Link
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Resorts
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Event Vendors
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Plan an Event
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Tara Academy
                                </Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-white hover:text-white/80 transition-colors hidden sm:block"
                                >
                                    Become a Tara Partner
                                </Link>
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("login")}
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm"
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                            alt="Tropical Resort"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
                                <span className="text-xs text-yellow-400">
                                    ⭐
                                </span>
                                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                                    The Philippines' #1 marketplace for resorts
                                    & events
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                                <span className="text-white block">
                                    Find Resorts.
                                </span>
                                <span className="text-yellow-400 block">
                                    Plan Events.
                                </span>
                                <span className="text-orange-500 block">
                                    Celebrate.
                                </span>
                            </h1>
                            <p className="text-lg text-white/80 mb-10 max-w-lg">
                                Book private resorts, microhotels, and
                                staycations—or build a complete event package
                                with trusted Filipino vendors.
                            </p>

                            <div className="bg-white rounded-xl shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2 max-w-3xl">
                                <div className="flex-1 w-full px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        Where
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Batangas, Boracay..."
                                        className="w-full text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="flex-1 w-full px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        When
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Add dates"
                                        className="w-full text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="flex-1 w-full px-4 py-3">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        Guests
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="2 guests"
                                        className="w-full text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                                    />
                                </div>
                                <Link
                                    href={route("resorts.index")}
                                    className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold p-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <span>🔍</span> Search
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED RESORTS SECTION */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">
                                    Featured Resorts
                                </h2>
                                <p className="text-slate-500 mt-2">
                                    Discover our top-rated stays and venues.
                                </p>
                            </div>
                            <Link
                                href={route("resorts.index")}
                                className="text-orange-500 font-semibold hover:text-orange-600 hidden sm:block"
                            >
                                View All Resorts &rarr;
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resorts && resorts.length > 0 ? (
                                resorts.map((resort) => (
                                    <div
                                        key={resort.id}
                                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                                    >
                                        <div className="h-48 bg-slate-200">
                                            <img
                                                src={
                                                    resort.image_url ||
                                                    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop"
                                                }
                                                alt={resort.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold text-slate-800">
                                                    {resort.name}
                                                </h3>
                                                <span className="text-sm font-bold text-orange-500">
                                                    ₱{resort.price_per_night}
                                                    /night
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-500 mb-4">
                                                📍 {resort.location}
                                            </p>
                                            <p className="text-sm text-slate-600 line-clamp-2">
                                                {resort.description ||
                                                    "A wonderful place to stay."}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 bg-slate-50 rounded-xl border border-slate-200">
                                    <p className="text-slate-500">
                                        Wala pay resorts nga na-add. Pag-add sa
                                        Dashboard.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <footer className="bg-slate-900 py-10 text-center text-slate-400 text-sm">
                    <p>© 2026 Tara! All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
