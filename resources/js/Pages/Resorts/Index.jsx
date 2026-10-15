import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ resorts }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("Sigurado ka ba nga gusto nimo papason ni?")) {
            destroy(route("resorts.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout header="Manage Resorts">
            <Head title="Resorts" />
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800">
                        Resort List
                    </h3>
                    <Link
                        href={route("resorts.create")}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors"
                    >
                        + Add Resort
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4">Price/Night</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {resorts.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="text-center p-6 text-slate-500"
                                    >
                                        Wala pay resorts.
                                    </td>
                                </tr>
                            ) : (
                                resorts.map((resort) => (
                                    <tr
                                        key={resort.id}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium text-slate-800">
                                            {resort.name}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            {resort.location}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            ₱{resort.price_per_night}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <Link
                                                href={route(
                                                    "resorts.edit",
                                                    resort.id,
                                                )}
                                                className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(resort.id)
                                                }
                                                className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
