import Image from "next/image";
import Input from "../../components/atoms/Input";
import Sidebar from "../../components/organisms/Sidebar";

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar active="Settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <div className="avatar img-fluid">
                    <Image
                      src="/img/avatar-1.png"
                      width="90"
                      height="90"
                      alt=""
                    />
                  </div>
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <Image
                      src="/icon/delete.svg"
                      width={24}
                      height={24}
                      alt="delete icon"
                    />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image
                      src="/icon/upload.svg"
                      width={90}
                      height={90}
                      alt="upload icon"
                    />
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
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
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                  id="email"
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  id="phone"
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
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
