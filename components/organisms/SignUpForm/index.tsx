import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const onSubmit = () => {
    const useForm = {
      name,
      email,
      password,
    };
    localStorage.setItem("signup-form", JSON.stringify(useForm));
    router.push("/sign-up-photo");
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label
          htmlFor="name"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Full Name
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            aria-describedby="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div className="pt-30">
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
          onClick={onSubmit}
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
        >
          Continue
        </button>
        <Link href="/sign-in">
          <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill">
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
}
