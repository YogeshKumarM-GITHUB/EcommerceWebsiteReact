import { IoCall, IoLocate, IoMail } from "react-icons/io5";

const ContactForm = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center w-full mt-10">Send Us Message</h1>

            <div className="max-w-4xl mx-auto mt-10 flex flex-col md:flex-row  px-4">

                {/* Left Contact Info */}
                <div className="flex flex-col items-start flex-1">

                    <div className="flex items-center gap-3 mt-5">
                        <div className="bg-[#E9F1CB] rounded-full w-14 h-14 flex items-center justify-center">
                            <IoCall className="text-2xl" />
                        </div>
                        <div>
                            <p className="font-bold text-xl">Phone</p>
                            <p className="text-gray-600 text-[16px]">+153 258990</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-10">
                        <div className="bg-[#E9F1CB] rounded-full w-14 h-14 flex items-center justify-center">
                            <IoMail className="text-2xl" />
                        </div>
                        <div>
                            <p className="font-bold text-xl">Email</p>
                            <p className="text-gray-600 text-[16px]">abc123@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-10">
                        <div className="bg-[#E9F1CB] rounded-full w-14 h-14 flex items-center justify-center">
                            <IoLocate className="text-2xl" />
                        </div>
                        <div>
                            <p className="font-bold text-xl">Address</p>
                            <p className="text-gray-600 text-[16px]">Bengaluru</p>
                        </div>
                    </div>

                </div>

                {/* Right Form */}
                <div className="flex-1">
                    <form>

                        <label className="block mt-5 font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 mt-2"
                            placeholder="Your Name"
                        />

                        <label className="block mt-5 font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-2 mt-2"
                            placeholder="Your Email"
                        />

                        <label className="block mt-5 font-medium">Phone</label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-md p-2 mt-2"
                            placeholder="Your Phone Number"
                        />

                        <label className="block mt-5 font-medium">Message</label>
                        <textarea
                            rows="4"
                            className="w-full border border-gray-300 rounded-md p-2 mt-2"
                            placeholder="Your Message"
                        />

                        <button className="bg-[#88Ad35] text-white mt-6 px-8 py-2 rounded-md hover:bg-[#75982c]">
                            Submit
                        </button>

                    </form>
                </div>

            </div>
        </div>

    )
}
export default ContactForm;