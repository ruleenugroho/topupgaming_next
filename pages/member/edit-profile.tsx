import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/atoms/Input";
import Sidebar from "../../components/organisms/Sidebar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import { updateProfile } from "../../services/member";

export default function EditProfile() {
  const [user, setUser] = useState({
    avatar: "/icon/upload.svg",
    email: "",
    id: "",
    name: "",
    username: "",
    phoneNumber: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userPayload: UserTypes = payload.player;
      const img = process.env.NEXT_PUBLIC_IMG;
      userPayload.avatar = `${img}/${userPayload.avatar}`;
      setUser(userPayload);
    }
  }, []);

  const onSubmit = async () => {
    console.log(user);

    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.username);
    data.append("phoneNumber", user.phoneNumber);
    const result = await updateProfile(data);
    if (result.error) {
      const message = result.message.split("validation failed: ")[1].split(",");
      message.map((msg: string) => toast.error(msg));
    } else {
      toast.success("Edit Profile Berhasil");
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar active="Settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload position-relative me-20">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        width={90}
                        height={90}
                        className="rounded-circle"
                        alt="upload icon"
                      />
                    ) : (
                      <Image
                        src={user.avatar}
                        width={90}
                        height={90}
                        className="rounded-circle"
                        alt="upload icon"
                      />
                    )}
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image
                        src="/icon/delete.svg"
                        width={24}
                        height={24}
                        alt="delete icon"
                      />
                    </div>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event: any) => {
                        const img = event.target.files[0];
                        setImagePreview(URL.createObjectURL(img));
                        return setUser({
                          ...user,
                          avatar: img,
                        });
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                  value={user.username}
                  onChange={(event: any) =>
                    setUser({
                      ...user,
                      username: event.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                  id="email"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  id="phone"
                  value={user.phoneNumber}
                  onChange={(event: any) =>
                    setUser({
                      ...user,
                      phoneNumber: event.target.value,
                    })
                  }
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  onClick={onSubmit}
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
