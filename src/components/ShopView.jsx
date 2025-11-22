import shop from '../assets/shop.jpg';
const ShopView = () => {
    return (
        <div className='backdrop-blur-md' style={{
            backgroundImage: `url(${shop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100 vh",
            transition: "background 0.4s ease-in-out"
        }}>
            <div className='mx-auto w-auto md:w-[700px] flex flex-col justify-center items-center min-h-screen'>
                <h1 className='text-[20px] md:text-8xl text-white'>Shop</h1>
            </div>
        </div>
    )
}
export default ShopView;