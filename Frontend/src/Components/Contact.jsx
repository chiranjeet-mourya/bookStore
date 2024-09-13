import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { FaMap, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.msg);
        }
      });
  };

  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4 mt-10">
        <div className="w-full md:flex block items-center justify-between ">
          <div className="w-full md:w-1/2">
            <p className="hidden" >GET IN TOUCH</p>
            <h1 className="text-2xl font-bold">Visit one of our agency locations <br /> or contact us today</h1>
            <h5 className="mt-4">Head office</h5>
            <div className="flex items-center mt-4">
              <span>
                <FaMap />
              </span>
              <p className="ml-2 text-1xl font-medium">
                56 Glassford street Glasgow G1 1UL New York
              </p>
            </div>
            <div className="flex items-center mt-4">
              <span>
                <MdEmail />
              </span>
              <p className="ml-2 text-1xl font-medium">
                chiranjeetsingh055@gmail.com
              </p>
            </div>
            <div className="flex items-center mt-4">
              <span>
                <FaPhoneAlt />
              </span>
              <p className="ml-2 text-1xl font-medium">91+ 901 2922 055</p>
            </div>
            <div className="flex items-center mt-4">
              <span>
                <FaRegClock />
              </span>
              <p className="ml-2 text-1xl font-medium">
                All time free services free course
              </p>
            </div>
          </div>

          <div className=" shadow-none flex h-screen items-center justify-center md:w-1/2 relative">
            <div className="w-full">
              <div className="modal-box">
                <form
                  method="dialog "
                  className="relative"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h3 className="font-bold text-lg">Contact Us</h3>
                  <div className="mt-0 space-y-2">
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border rounded-md outline-none relative"
                      {...register("fullname", { required: true })}
                    />
                    <br />
                    {errors.fullname && (
                      <span className="text-sm text-red-500 absolute left-3">
                        Name required
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mt-4 space-y-2 relative">
                    <br />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border rounded-md outline-none relative"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-sm text-red-500 absolute left-3">
                        Email is required
                      </span>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mt-3 space-y-2">
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your subject"
                      className="w-full px-3 py-2 border rounded-md outline-none relative"
                      {...register("password", { required: true })}
                    />
                    <br />
                    {errors.password && (
                      <span className="text-sm text-red-500 absolute left-3">
                        Subject is required
                      </span>
                    )}
                  </div>
                  <div className="mt-3 space-y-2">
                    <br />
                    <textarea
                    type="text"
                      className="w-full h-24 px-3 py-2 border rounded-md outline-none relative"
                      placeholder="message"
                    ></textarea>
                    <br />
                    {errors.password && (
                      <span className="text-sm text-red-500 absolute left-3">
                        Subject is required
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <div className="flex mt-10">
                    <button className="bg-pink-800 text-white rounded-md px-4 py-2 hover:bg-pink-600 duration-200 relative">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224163.74669614388!2d77.2308992!3d28.6130176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726150356270!5m2!1sen!2sin" className="w-[380px] h-[500px] md:w-[1180px] mb-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}

export default Contact;
