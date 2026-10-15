import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
            <Head title="Register - Tara!" />
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                {/* Header sa Card */}
                <div className="px-8 py-8 text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        T
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-widest">
                        Tara!
                    </h1>
                    <p className="text-slate-500 mt-2 text-sm">
                        Create your new account
                    </p>
                </div>

                <div className="p-8 pt-0">
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-800"
                                placeholder="Juan Dela Cruz"
                            />
                            {errors.name && (
                                <p className="text-rose-500 text-xs mt-1 font-medium">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-800"
                                placeholder="admin@tara.ph"
                            />
                            {errors.email && (
                                <p className="text-rose-500 text-xs mt-1 font-medium">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-800"
                                placeholder="••••••••"
                            />
                            {errors.password && (
                                <p className="text-rose-500 text-xs mt-1 font-medium">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-800"
                                placeholder="••••••••"
                            />
                            {errors.password_confirmation && (
                                <p className="text-rose-500 text-xs mt-1 font-medium">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 mt-2"
                        >
                            {processing ? "Registering..." : "Register"}
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link
                            href={route("login")}
                            className="text-orange-500 hover:text-orange-600 font-bold"
                        >
                            Log in here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
