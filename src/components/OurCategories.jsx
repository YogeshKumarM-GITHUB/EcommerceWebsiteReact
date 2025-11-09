import houseplant from '../assets/house-plant.jpg'
import outdoorplant from '../assets/outdoor-plant.jpg'
import succlents from '../assets/succulents.jpg'
import dessertplant from '../assets/dessert-bloom.jpg'

const OurCategories = () => {
    const categories = [
        {
            image: houseplant,
            text: 'Houseplants'
        },
        {
            image: outdoorplant,
            text: 'Outdoor Plants'
        },
        {
            image: succlents,
            text: 'Succulents'
        },
        {
            image: dessertplant,
            text: 'Desert Bloom'
        }
    ]

    return (
        <div>
            <h1 className='text-center mt-10 font-bold text-[42px]'>Our Categories</h1>
            <div className='mt-10'>
                <div className='flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto'>
                    {
                        categories.map((cat, index) => {
                            return (
                                <div  key={index} className='flex flex-col items-center justify-center'>
                                    <img src={cat.image} />
                                    <p className='text-[20px] font-bold'>{cat.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default OurCategories;