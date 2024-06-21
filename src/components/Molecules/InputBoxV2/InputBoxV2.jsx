import React from "react";
import { useFormContext } from "react-hook-form";
import {
  findInputError,
  isFormInvalid,
} from "../../../utils/validations/validationsMethods";
import { AnimatePresence } from "framer-motion";
import InputError from "../../Atoms/InputError/InputError";

const InputBoxV2 = ({
  label,
  type,
  placeholderValue,
  inputValue = null,
  onChangeHandler,
  inputKeyHandler,
  resize,
  validation,
  color,
  customValidate = () => {},
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldName = label.replace(" ", "").toLowerCase();

  const inputErrors = findInputError(errors, fieldName);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div
      message={inputErrors.error && inputErrors.error.message}
      className="relative"
    >
      <div className="label-wrapper">
        <label
          htmlFor={fieldName}
          className="label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>

      {type !== "textarea" && (
        <input
          className={`input-${type}-${fieldName} bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          type={type}
          name={fieldName}
          id={fieldName}
          placeholder={placeholderValue}
          onChange={onChangeHandler ?? (() => {})}
          onKeyUp={inputKeyHandler}
          {...props}
          color={color}
          value={inputValue}
          {...register(fieldName, {
            ...validation,
            validate: (val) => customValidate(val, fieldName),
          })}
        />
      )}
      {type === "textarea" && (
        <textarea
          className={`input-${type}-${fieldName}`}
          type={type}
          name={fieldName}
          id={fieldName}
          placeholder={placeholderValue}
          onChange={onChangeHandler ?? (() => {})}
          value={inputValue}
          onKeyUp={inputKeyHandler}
          resize={resize}
          {...props}
          {...register(fieldName, {
            ...validation,
            validate: (val) => customValidate(val, fieldName),
          })}
        />
      )}
    </div>
  );
};

export default InputBoxV2;
