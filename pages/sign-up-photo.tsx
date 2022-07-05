import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setSignUp } from "../services/auth";
import { CategoryTypes } from "../services/data-types";
import { getGameCategory } from "../services/player";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const getGameCategoryApi = useCallback(async () => {
    const data = await getGameCategory();

    setCategories(data.data);
    setFavorite(data.data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    let getLocalForm = localStorage.getItem("signup-form");
    if (getLocalForm === null) {
      router.push("/sign-up");
    } else {
      setLocalForm(JSON.parse(getLocalForm));
    }
    getGameCategoryApi();
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", image);
    data.append("email", localForm.email);
    data.append("name", localForm.name);
    data.append("password", localForm.password);
    data.append("username", localForm.name);
    data.append("phoneNumber", "08123456789");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);
    if (result.error) {
      const message = result.message.split("validation failed: ")[1].split(",");
      message.map((msg: string) => toast.error(msg));
      router.push("/sign-up");
    } else {
      toast.success("Register Berhasil");
      router.push("/sign-up-success");
      localStorage.removeItem("signup-form");
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image
                      src={imagePreview}
                      width={120}
                      height={120}
                      className="img-upload"
                      alt="upload"
                    />
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event: any) => {
                        const img = event.target.files[0];
                        setImagePreview(URL.createObjectURL(img));
                        return setImage(img);
                      }}
                    />
                  </label>
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorite}
                    onChange={(event) => setFavorite(event.target.value)}
                  >
                    {categories.map((category: CategoryTypes) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                type="button"
                onClick={onSubmit}
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
              >
                Create My Account
              </button>
              <Link href="/">
                <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15">
                  Terms & Conditions
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
