import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white shadow-md p-8 text-center border border-gray-300">
                <p className="font-bold text-[50px]">Oops!</p>
                <div>
                    <p className="text-gray-800 text-[20px] mt-3">404 Page Not Found</p>
                    <p className="text-gray-800 text-[20px] mt-3">The Page you are looking for might have been removed or not</p>
                    <p className="text-gray-800 text-[20px] mt-3">had its name changed or is temporarly removed</p>
                    <button className="mt-3 bg-blue-600 text-white p-4 rounded-md cursor-pointer hover:bg-blue-400" onClick={() => navigate('/')}>Go back to home page</button>
                </div>
            </div>
        </div>
    )
}
export default PageNotFound;