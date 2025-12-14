import { useState } from "react";

const Login = () => {

    const [isForgotPassword, setForgotPassword] = useState(false);
    const [isSignupForm, setSignupForm] = useState(false);
    const [buttontext, setButtonText] = useState("Login");

    return (
        <div className="bg-[#6867c0] p-10">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-[#f1f1f1] w-auto h-auto md:w-[400px] md:h-[500px] rounded-md p-5">
                    <div className="flex flex-col mt-2">
                        <h1 className="text-center font-bold text-[40px]">{buttontext}</h1>
                        <form className="mt-10 p-4 w-full flex flex-col gap-y-10">
                            <input type="email" name="email" placeholder="Email" className="outline-none px-4 border-b-2 border-b-gray-400 w-full" />
                            {(buttontext == "Sign Up" || buttontext == "Login") && <input type="password" name="password" placeholder="Password" className="outline-none px-4 border-b-2 border-b-gray-400 w-full" />}
                            {(buttontext == "Sign Up") && <input type="password" name="confirmpassword" placeholder="Confirm Password" className="outline-none px-4 border-b-2 border-b-gray-400 w-full" />}
                            <button className="p-3 text-white bg-linear-to-r from-[#3f8dd5] to-[#864bb0] cursor-pointer">{buttontext}</button>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-gray-500 text-[15px]">Forgot <span onClick={() => { setForgotPassword(true), setButtonText("Reset Password") }} className="text-[#6867c0] cursor-pointer">Password?</span></p>
                            <p className="text-gray-500 mt-2">Don't have an account? <span onClick={() => { setSignupForm(true), setButtonText("Sign Up") }} className="text-[#6867c0] cursor-pointer">Sign up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;