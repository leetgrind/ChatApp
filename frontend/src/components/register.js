import React from "react"

export default function Register() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
                        Register your account
                    </h2>
                </div>
            </div>
            <form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <input
                            className="appearance-none rounded-none relative"
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Email address"
                        ></input>
                    </div>
                </div>
            </form>
        </div>
    )
}