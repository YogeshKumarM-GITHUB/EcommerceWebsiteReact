import Home from '../assets/HomeBackgroundImage.jpg'
const HeroSection = () => {
    return (
        <div className='backdrop-blur-md' style={{
            backgroundImage: `url(${Home})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100 vh",
            transition: "background 0.4s ease-in-out"
        }}>
            
            <div className='mx-auto w-auto md:w-[700px] flex flex-col justify-center items-center min-h-screen'>
                <h1 className='uppercase text-[20px] md:text-[40px] text-white'>Welcome to urban jungle co.</h1>
                <p className='uppercase mt-2 text-[30px] md:text-[50px] text-white font-bold text-center'>Discover the beauty of nature at your fingertips</p>
                <button className='bg-[#88AD35] mt-2 text-white px-8 py-2 rounded-full cursor-pointer'>Shop Now</button>
            </div>

        </div>
    )
}
export default HeroSection;