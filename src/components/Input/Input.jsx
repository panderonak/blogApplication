import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="mb-3">
      {label && (
        <label
          className="inline-block mb-1 text-base font-light pl-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className={`px-5 py-3 rounded-xl bg-white text-black outline-none focus:bg-gray-50 focus:border-[black] duration-200 border border-[#CEDADA] w-full ${className}`}
        type={type}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
