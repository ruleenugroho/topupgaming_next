import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "/icon/upload.svg",
    email: "",
    id: "",
    name: "",
    username: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userPayload: UserTypes = payload.player;
      const img = process.env.NEXT_PUBLIC_IMG_PROFILE;
      userPayload.avatar = `${img}/${userPayload.avatar}`;
      setUser(userPayload);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <div className="img-fluid mb-20">
        <Image
          src={user.avatar}
          className="rounded-circle"
          width="90"
          height="90"
          alt=""
        />
      </div>
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
