import flashsale from '../assets/FlashSale.jpg'

const FlashSale = () => {
    return (
        <div className="bg-black/40 bg-cover bg-center bg-no-repeat md:h-[300px] transition-all duration-400 text-center mt-10 p-4"
            style={{ backgroundImage: `url(${flashsale})` }}>
            <div className='mx-auto w-auto md:w-[700px] flex flex-col justify-center items-center'>
                <h1 className='uppercase  text-[20px] md:text-[32px] text-white mt-2 md:mt-10 font-bold'>Flash Sale: Up to 50% Off On Select Items!</h1>
                <p className='uppercase mt-2 text-[14px] md:text-[14px] text-white font-bold text-center'>Don’t miss out on our flash sale event! For a limited time, enjoy up to 50% off on a selection of our best-selling products.</p>
                <button className='bg-[#88AD35] mt-2 text-white px-8 py-2 rounded-full cursor-pointer'>Shop Now</button>
            </div>
        </div>
    )
}
export default FlashSale;