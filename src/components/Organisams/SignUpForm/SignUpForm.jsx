import { FormProvider, useForm } from "react-hook-form";

import InputBoxV2 from "../../Molecules/InputBoxV2/InputBoxV2";
import {
  password_validation,
  phone_validation,
  repeat_pass_validation,
} from "../../../utils/validations/inputValidations";
import Button from "../../Atoms/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  hashPassword,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../../utils/_helpers";

const SignUpForm = () => {
  const methods = useForm();
  const navigate = useNavigate();

  /**
   * Handles the form submission for user sign up.
   *
   * @param {Object} formData - The form data object containing user input.
   * @param {string} formData.phonenumber - The user's phone number.
   * @param {string} formData.newpassword - The user's new password.
   * @returns {void}
   */
  const onSubmit = methods.handleSubmit((formData) => {
    // Retrieve existing user data from local storage
    let data = getFromLocalStorage("users");

    // Hash the new password
    const hashedPassword = hashPassword(formData.newpassword);

    // If user data exists, append new user data to it
    // Otherwise, create a new array with the new user data
    if (data) {
      data = [
        ...data,
        {
          phone: formData.phonenumber,
          password: hashedPassword,
        },
      ];
    } else {
      data = [
        {
          phone: formData.phonenumber,
          password: hashedPassword,
        },
      ];
    }

    // Save the updated user data to local storage
    saveToLocalStorage(data, "users");

    // Display success toast message
    toast.success("Account created successfully!");

    // Reset the form
    methods.reset();

    // Navigate to the login page
    navigate("/auth/login", { replace: true });
  });

  
  return (
    <FormProvider {...methods}>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen md:max-w-md lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create new account
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
                  onChange={(e) => {}}
                  validation={phone_validation.validation}
                />
                <InputBoxV2
                  label="New Password"
                  type="password"
                  validation={password_validation.validation}
                  onChange={(e) => {}}
                />
                <InputBoxV2
                  label="Repeat Password"
                  type="password"
                  validation={repeat_pass_validation.validation}
                  onChange={(e) => {}}
                  customValidate={(val, form) => {
                    const pass = methods.getValues("newpassword");

                    if (val !== pass) return "Passwords do not match";
                  }}
                />
                <Button
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={onSubmit}
                  title="Sign Up"
                />
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login
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

export default SignUpForm;
