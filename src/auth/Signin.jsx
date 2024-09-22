import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const { googleSignin, currentUser, loading } = useAuth();

  async function SigninWithGoogle() {
    await googleSignin();
  }

  console.log(currentUser, loading);
  // If user is already signed in, redirect to home
  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <div className="flex items-center bg-violet-100 justify-center h-dvh">
        <button
          onClick={SigninWithGoogle}
          className="inline-flex h-10 items-center justify-center gap-2 rounded border border-slate-300 bg-violet-100 shadow-md p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-[18px] w-[18px]"
          />
          Continue with Google
        </button>
      </div>
    </>
  );
}
