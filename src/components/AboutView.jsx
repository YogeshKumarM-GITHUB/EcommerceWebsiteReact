import About from '../assets/About.jpg';

const AboutView = () => {
    return (
        <div className='backdrop-blur-md' style={{
            backgroundImage: `url(${About})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100 vh",
            transition: "background 0.4s ease-in-out"
        }}>
            <div className='mx-auto w-auto md:w-[700px] flex flex-col justify-center items-center min-h-screen'>
                <h1 className='text-[20px] md:text-8xl text-white'>About</h1>
                <p className='uppercase mt-2 text-[30px] md:text-[50px] text-white font-bold text-center'>We are passionate About Our Work</p>
            </div>
        </div>
    )
}
export default AboutView;