import React from "react";
import InputBoxV2 from "../../Molecules/InputBoxV2/InputBoxV2";
import {
  password_validation,
  phone_validation,
} from "../../../utils/validations/inputValidations";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { comparePassword, getFromLocalStorage } from "../../../utils/_helpers";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../store/AuthSlice/AuthSlice";

const LoginForm = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Handles the form submission for login.
   * It retrieves user data from local storage, validates the form data, and dispatches the login action if valid.
   *
   * @param {Object} formData - The form data object containing phone number and password.
   * @param {number} formData.phonenumber - The phone number entered by the user.
   * @param {string} formData.password - The password entered by the user.
   *
   * @returns {void}
   */
  const onSubmit = methods.handleSubmit((formData) => {
    // Retrieve user data from local storage
    const data = getFromLocalStorage("users");

    // Check if user data exists
    if (data) {
      // Find the user with the entered phone number
      const user = data.find((user) => user.phone === formData.phonenumber);

      // Check if the user exists
      if (user) {
        // Validate the password
        const isValid = comparePassword(formData.password, user.password);

        // If password is valid, dispatch the login action and navigate to home page
        if (isValid) {
          dispatch(login());
          navigate("/home", { replace: true });
        } else {
          // If password is invalid, show an error toast
          toast.error("Invalid Credentials");
        }
      } else {
        // If user is not found, show an error toast
        toast.error("User is not present!");
      }
    } else {
      // If user data is not found, show an error toast
      toast.error("User is not present!");
    }
  });
  return (
    <FormProvider {...methods}>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen md:max-w-md lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => e.preventDefault()}
                noValidate
                autoComplete="off"
              >
                <InputBoxV2
                  label="Phone Number"
                  type="number"
                  onChange={() => {}}
                  validation={phone_validation.validation}
                />
                <InputBoxV2
                  label="Password"
                  type="password"
                  onChange={() => {}}
                  validation={password_validation.validation}
                />
                <div className="flex items-center justify-between">
                  <Link
                    to=""
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/auth/signup"
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FormProvider>
  );
};

export default LoginForm;
