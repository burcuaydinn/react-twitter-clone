import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { AppleIcon, GoogleIcon, XIcon } from "../components/Icon";

const initialFormData = {
  email: "",
  password: "",
};

export const errorMessages = {
  email: "Lütfen geçerli bir e‑posta adresi girin.",
  password: "Parolanız 4 ila 10 karakter arası olmalıdır.",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const { email, password } = formData;
    if (validateEmail(email) && validatePassword(password)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;

    const URL = "https://reqres.in/api/users";
    axios
      .post(URL, formData)
      .then((response) => {
        // Başarılı girişten sonra işlemler
        setFormData(initialFormData); // Form verilerini temizle
        console.log(response.data);
        // Yönlendirme yap
        history.push("/home");
      })
      .catch((error) => {
        // Hata durumunda yapılacak işlemler
        console.error("Giriş sırasında hata:", error);
        
      });
  }

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function validatePassword(password) {
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{4,60}$/;
    return regex.test(password);
  }

  function handleChange(event) {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    //validasyonlara göre errors kontrolü
    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "password") {
      if (validatePassword(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  }

  return (
    <div className="min-h-screen w-ful flex items-center justify-center bg-custom-gray">
      <div className="bg-custom-dark text-white px-20 py-8 rounded-lg w-[600px] shadow-lg relative">
        <button className="absolute top-4 left-2 text-gray-400 text-2xl hover:rounded-full hover:bg-custom-gray  hover:text-gray-200 ">
          <IoCloseOutline />
        </button>
        <div className="flex justify-center mb-6">
          <XIcon />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">X'e giriş yap</h2>
        <div className="mb-4">
          <button className="px-4 py-2  space-x-2 w-[310px] ml-[70px] mb-2 bg-white text-black border border-gray-300 rounded-full hover:bg-gray-200 flex items-center justify-center">
            <GoogleIcon />
            <p className="">Google ile oturum açın </p>
          </button>
          <button className="px-4 mt-5  w-[310px] ml-[70px] bg-white text-black border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <AppleIcon />
            <span className="font-bold ">Apple ile giriş yap</span>
          </button>
        </div>

        <div className="flex items-center mb-4 w-[320px] ml-[60px] ">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-white-500">veya</span>
          <hr className="flex-grow border-gray-600 " />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block mb-2 ml-[70px] text-sm font-medium text-white-700">
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              data-cy="email-input"
              //onChange={(event) => setEmail(event.target.value)}
              className="px-4 py-2 text-black  w-[310px] ml-[70px] border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mb-2 ml-[70px] mt-4 text-slate-400">
                {" "}
                {errorMessages.email}
              </p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2 ml-[70px] text-sm font-medium text-white-700">
              Şifre
            </label>
            <input
              name="password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              data-cy="password-input"
              //onChange={(event) => setPassword(event.target.value)}
              className=" px-4 py-2 text-black  w-[310px] ml-[70px] border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="mb-2 ml-[70px] mt-4 text-slate-400">
                {errorMessages.password}
              </p>
            )}
          </div>
          <div className="mt-6">
            <button
              disabled={!isValid}
              //onClick={handleClick} // onClick olayını ekledik
              className="px-4 py-2 w-[310px] ml-[70px] bg-white text-black font-medium rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              data-cy="submit-button"
            >
              İleri
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-gray-400 hover:text-gray-200">
            Şifreni mi unuttun?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
