import { Head, Link, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({ email: "" });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
            <Head title="Forgot Password - Tara!" />
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
                        Reset your password
                    </p>
                </div>

                <div className="p-8 pt-0">
                    {status && (
                        <div className="mb-4 font-medium text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg text-center">
                            {status}
                        </div>
                    )}
                    <p className="text-sm text-slate-500 mb-6 text-center">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link.
                    </p>

                    <form onSubmit={submit} className="space-y-6">
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
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 mt-2"
                        >
                            {processing
                                ? "Sending..."
                                : "Email Password Reset Link"}
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-slate-500">
                        <Link
                            href={route("login")}
                            className="text-orange-500 hover:text-orange-600 font-bold"
                        >
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
