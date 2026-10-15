import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { i } from "node_modules/vite/dist/node/chunks/moduleRunnerTransport";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
            <Head title="Log in - Tara!" />
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                {/* Header sa Card */}
                <div className="px-8 py-10 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                        T
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-widest">
                        Tara!
                    </h1>
                    <p className="text-slate-500 mt-2 text-sm">
                        Welcome back! Please login to your account.
                    </p>
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg text-center mx-8">
                        {status}
                    </div>
                )}

                <div className="p-8 pt-0">
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-800"
                                placeholder="admin@tara.ph"
                            />
                            {errors.email && (
                                <p className="text-rose-500 text-xs mt-2 font-medium">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-slate-800"
                                placeholder="••••••••"
                            />
                            {errors.password && (
                                <p className="text-rose-500 text-xs mt-2 font-medium">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    className="rounded border-slate-300 text-orange-500 focus:ring-orange-500 w-4 h-4"
                                />
                                <span className="ml-2 text-sm text-slate-600">
                                    Remember me
                                </span>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 mt-2"
                        >
                            {processing ? "Logging in..." : "Log In"}
                        </button>
                    </form>
                    <div className="mt-8 text-center text-sm text-slate-500">
                        Don't have an account?{" "}
                        <Link
                            href={route("register")}
                            className="text-orange-500 hover:text-orange-600 font-bold"
                        >
                            Register here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
