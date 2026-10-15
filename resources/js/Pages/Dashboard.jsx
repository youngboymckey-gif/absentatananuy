import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ resorts }) {
    return (
        <AuthenticatedLayout header="Dashboard Overview">
            <Head title="Dashboard" />

            <div className="mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 flex justify-between items-center text-white">
                <div>
                    <h1 className="text-2xl font-bold">Welcome back, Admin!</h1>
                    <p className="text-white/80 text-sm mt-1">
                        Manage your resorts and bookings here.
                    </p>
                </div>
                <Link
                    href={route("resorts.create")}
                    className="bg-white text-orange-600 font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
                >
                    + Add New Resort
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                        Total Resorts
                    </h3>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">
                        {resorts.length}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                        Total Bookings
                    </h3>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">
                        0
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                        Revenue
                    </h3>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">
                        ₱0
                    </p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
