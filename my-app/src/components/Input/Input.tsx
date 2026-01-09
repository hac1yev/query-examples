import React, { forwardRef } from "react";
import './input.css';
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText: string;
  fullWidth: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {

    return (
      <div className={clsx("input-wrapper", fullWidth && "full-width")}>
        {label && (
          <label
            htmlFor={id}
            className={clsx("input-label", disabled && "disabled")}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          disabled={disabled}
          className={clsx(
            "input",
            error && "error",
            disabled && "disabled",
            className
          )}
          {...props}
        />

        {(error || helperText) && (
          <p className={clsx("input-message", error && "error")}>
            {error ?? helperText}
          </p>
        )}
      </div>
    );
  }
);

export default Input;