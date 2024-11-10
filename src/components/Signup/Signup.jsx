import { useState } from "react";
import authService from "../../appwrite/auth-service";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/authSlice";
import { Button, Input, Logo } from "../../components/index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const [error, setError] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();
const { register, handleSubmit } = useForm();

function Signup() {
  const createAccount = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(login(currentUser));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(createAccount)}>
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your name"
              type="text"
              {...register("name", { required: true })}
            />
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              placeholder="Enter your Password"
              type="password"
              {...register("password", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                      value
                    ) ||
                    "Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character",
                },
              })}
            />
            <Button
              className="w-full"
              type=" submit"
              children="Create Account"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;