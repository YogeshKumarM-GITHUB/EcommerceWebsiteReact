import { useState } from "react";
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../features/user/userSlice";

const Login = () => {
    const [buttontext, setButtonText] = useState("Login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        Email: "",
        Password: "",
        ConfirmPassword: "",
        Role: ""
    });


    const SignUp = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_URBAN_JUNGLE_BASE_URL}api/Users/AddUser`, user);
            // debugger;
            console.log(response);
            const { isSuccess, message } = response.data;
            //console.log('response',response);
            if (isSuccess) {
                toast.success(message);
                navigate("/login");
                setButtonText("Login");
                //dispatch(setUserData(response.data.data));
                setUser({
                    Email: "",
                    Password: "",
                    ConfirmPassword: "",
                    Role: ""
                });
            } else {
                //console.log(response);
                toast.error(message || "Sign Up Failed");
            }
        } catch (error) {
            const errors = error.response?.data?.errors || error.response?.data?.message;
            //console.log(errors);
            //toast.info(errors[0] || "Something went wrong during Sign Up");
            if (errors && typeof errors === "object") {
                Object.values(errors)
                    .flat()
                    .forEach(msg => toast.info(msg));
            } else {
                toast.error(errors || "Something went wrong");
            }
        }
    }


    const Login = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_URBAN_JUNGLE_BASE_URL}api/Users/LoginUser`, user);
            // debugger;
            console.log('Login Response',response);
            const { isSuccess, message } = response.data;
            //console.log('response',response);
            if (isSuccess) {
                //debugger;
                toast.success(message);
                dispatch(setUserData(response.data?.data?.token));
                setUser({
                    Email: "",
                    Password: "",
                    ConfirmPassword: "",
                    Role: ""
                });
                navigate("/");
            } else {
                //console.log(response);
                toast.error(message || "Sign Up Failed");
            }
        } catch (error) {
            const errors = error.response?.data?.errors || error.response?.data?.message;
            if (errors && typeof errors === "object") {
                Object.values(errors)
                    .flat()
                    .forEach(msg => toast.info(msg));
            } else {
                toast.error(errors || "Something went wrong");
            }
        }
    }

    const LoginOrPassOrSignUp = async (e, buttontext) => {
        e.preventDefault();
        if (buttontext == "Sign Up") {
            await SignUp();
        } else if (buttontext == "Login") {
            await Login();
        }
    }

    return (
        <div className="bg-[#6867c0] p-10">
            <div className="flex items-center justify-center min-h-screen">
                <div className={`bg-[#f1f1f1] w-auto h-auto md:w-[400px] md:${buttontext == "Sign Up" ? 'h-[600px]' : 'h-[500px]'} rounded-md p-5`}>
                    <div className="flex flex-col mt-2">
                        <h1 className="text-center font-bold text-[40px]">{buttontext}</h1>
                        <form onSubmit={LoginOrPassOrSignUp} className="mt-10 p-4 w-full flex flex-col gap-y-10">
                            <input required type="email" name="Email" value={user.Email} placeholder="Email" onChange={(e) => setUser({ ...user, Email: e.target.value })} className="outline-none px-4 border-b-2 border-b-gray-400 w-full" />
                            {(buttontext == "Sign Up" || buttontext == "Login") && <input required type="password" name="Password" value={user.Password} placeholder="Password" onChange={(e) => setUser({ ...user, Password: e.target.value })} className="outline-none px-4 border-b-2 border-b-gray-400 w-full" />}
                            {(buttontext == "Sign Up") && <input required type="password" name="ConfirmPassword" value={user.ConfirmPassword} placeholder="Confirm Password" onChange={(e) => setUser({ ...user, ConfirmPassword: e.target.value })} className="outline-none px-4 border-b-2 border-b-gray-400 w-full" />}
                            {(buttontext == "Sign Up") &&
                                <select required name="Role" value={user.Role} onChange={(e) => setUser({ ...user, Role: e.target.value })} className="outline-none px-4 border-b-2 border-b-gray-400 w-full">
                                    <option className="outline-none px-4 border-b-2 border-b-gray-400 w-full text-gray-600" value="" disabled selected>Select Role</option>
                                    <option className="outline-none px-4 border-b-2 border-b-gray-400 w-full text-gray-600" value="User">User</option>
                                    <option className="outline-none px-4 border-b-2 border-b-gray-400 w-full text-gray-600" value="Admin">Admin</option>
                                </select>}
                            <button onClick={(e) => LoginOrPassOrSignUp(e, buttontext)} className="p-3 text-white bg-linear-to-r from-[#3f8dd5] to-[#864bb0] cursor-pointer">{buttontext}</button>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-gray-500 text-[15px]">Forgot <span onClick={() => { setButtonText("Reset Password") }} className="text-[#6867c0] cursor-pointer">Password?</span></p>
                            <p className="text-gray-500 mt-2">Don't have an account? <span onClick={() => { setButtonText("Sign Up") }} className="text-[#6867c0] cursor-pointer">Sign up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;