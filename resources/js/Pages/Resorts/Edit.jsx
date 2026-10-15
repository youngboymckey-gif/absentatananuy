import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ resort }) {
    const { data, setData, put, processing, errors } = useForm({
        name: resort.name,
        location: resort.location,
        description: resort.description || "",
        price_per_night: resort.price_per_night,
        image_url: resort.image_url || "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("resorts.update", resort.id));
    };

    return (
        <AuthenticatedLayout header="Edit Resort">
            <Head title="Edit Resort" />
            <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-2xl">
                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Resort Name:
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.name && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Location:
                        </label>
                        <input
                            type="text"
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.location && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.location}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Description:
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                            rows="3"
                        ></textarea>
                        {errors.description && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.description}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Price Per Night (₱):
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            value={data.price_per_night}
                            onChange={(e) =>
                                setData("price_per_night", e.target.value)
                            }
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.price_per_night && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.price_per_night}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Image URL (Optional):
                        </label>
                        <input
                            type="url"
                            value={data.image_url}
                            onChange={(e) =>
                                setData("image_url", e.target.value)
                            }
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.image_url && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.image_url}
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4 pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
                        >
                            {processing ? "Updating..." : "Update Resort"}
                        </button>
                        <Link
                            href={route("resorts.index")}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
