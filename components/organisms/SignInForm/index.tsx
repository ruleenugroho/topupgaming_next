import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { setSignIn } from "../../../services/auth";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      toast.error("Email dan Password wajib diisi !");
    } else {
      const result = await setSignIn(data);
      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success("Login Berhasil");
        const { token } = result.data;
        const tokenBase64 = btoa(token);
        Cookies.set("token", tokenBase64, { expires: 1 });

        router.push("/");
      }
    }
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
          <input
            type="email"
            className="form-control rounded-pill text-lg"
            aria-describedby="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
          <input
            type="password"
            className="form-control rounded-pill text-lg"
            aria-describedby="password"
            placeholder="Your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">
            Sign Up
          </a>
        </Link>
      </div>
    </>
  );
}
