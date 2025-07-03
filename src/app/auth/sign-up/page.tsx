"use client";

import { useState, FormEvent, useCallback } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import Link from "next/link";
import { TextField } from "@/app/components/TextField";
import { PasswordStrength } from "@/app/components/Password";
import clsx from "clsx";
import { Logo } from "@/app/components/Logo";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });

      if (error) setError(error.message);
      else alert("Check your email to confirm your account!");
      setLoading(false);
    },
    [email, password, fullName]
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-col items-center border-b">
          <Logo />
          <p className="mt-2 text-center text-sm text-gray-500">
            Ultimate solution for effective team collaboration
          </p>

          <h1 className="mt-4 text-center text-lg font-medium text-primary ">
            Create an account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <TextField
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div>
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <PasswordStrength value={password} />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={clsx(
              "mt-4 w-full rounded-md py-2 font-semibold text-white",
              "bg-primary hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            {loading ? "Signing up…" : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
