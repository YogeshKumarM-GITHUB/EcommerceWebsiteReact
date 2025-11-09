import statscount from '../assets/stats-count.jpg'

const PremierCustomer = () => {
    return (
        <div className="bg-[#E9F1CB] mt-10">
            <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-2 md:gap-20 w-auto md:max-w-7xl md:mx-auto">
                {/* image */}
                <div>
                    <img  src={statscount} />
                </div>
                {/* content */}
                <div className='md:w-1/2'>
                    <div className='w-auto md:w-[380px]'>
                        <p className='md:text-[40px] font-semibold leading-tight'>Your Premier Destination for All Green.</p>
                    </div>
                    <div className='w-auto  md:w-[380px] mt-3'>
                        <p className='leading-tight text-gray-600'>At Urban Jungle Co., we believe in the transformative power of plants. Whether you’re a seasoned gardener or just starting your green journey, our curated selection of plants will inspire and enrich your living space.</p>
                    </div>
                    <hr className='mt-4 text-gray-400' />
                    <div className='flex  flex-col md:flex-row  items-start gap-10 mt-4'>
                        <div>
                            <p className='font-semibold text-[22px]'>98%</p>
                            <p className='text-[25px]'>Customer Satisfaction</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[22px]'>103K</p>
                            <p className='text-[25px]'>Plants Sold</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PremierCustomer;