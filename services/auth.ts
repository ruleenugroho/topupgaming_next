import { SignInTypes } from "./data-types";
import callAPI from "./middleware";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({ url, method: "POST", data });
}

export async function setSignIn(data: SignInTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({ url, method: "POST", data });
}
