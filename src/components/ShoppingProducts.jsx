import product1 from '../assets/product-01.jpg'
import product2 from '../assets/product-02.jpg'
import product3 from '../assets/product-03.jpg'
import product4 from '../assets/product-04.jpg'
import product5 from '../assets/product-05.jpg'
import product6 from '../assets/product-06.jpg'
import Products from './Products'

const ShoppingProducts = () => {
    const popularProducts = [
        {
            image: product1,
            rating: 4,
            text: 'Desert Bloom',
            type: 'Indoor Plants',
            rate: 90
        },
        {
            image: product2,
            rating: 2,
            text: 'Golden Glow',
            type: 'Indoor Plants',
            rate: 95
        },
        {
            image: product3,
            rating: 3,
            text: 'Silver Mist',
            type: 'Indoor Plants',
            rate: 92
        },
        {
            image: product4,
            rating: 3,
            text: 'Silver Mist',
            type: 'Indoor Plants',
            rate: 92
        },
        {
            image: product5,
            rating: 3,
            text: 'Silver Mist',
            type: 'Indoor Plants',
            rate: 92
        },
        {
            image: product6,
            rating: 3,
            text: 'Silver Mist',
            type: 'Indoor Plants',
            rate: 92
        }
    ]

    const dropdownOptions = [
        {
            id: 1,
            value: 'Default Sorting',
            label: 'Default Sorting'
        },
        {
            id: 2,
            value: 'Sort by popularity',
            label: 'Sort by popularity'
        },
        {
            id: 3,
            value: 'Sort by average rating',
            label: 'Sort by average rating'
        },
        {
            id: 4,
            value: 'Sort by latest',
            label: 'Sort by latest'
        }, {
            id: 5,
            value: 'Sort by price: low to high',
            label: 'Sort by price: low to high'
        }, {
            id: 6,
            value: 'Sort by price: high to low',
            label: 'Sort by price: high to low'
        }
    ]

    return (
        <div className='mt-10 max-w-7xl mx-auto'>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 gap-y-4 w-full">
                <p className='text-gray-500'>Shopping all {popularProducts.length} results</p>
                <select className='w-full md:w-[250px] border border-dashed border-gray-300 p-2 rounded-md outline-none cursor-pointer text-gray-700'>
                    {
                        dropdownOptions.map((option) => (
                            <option className='text-gray-700' key={option.id} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
                {
                    <Products popularProducts={popularProducts} />
                }
            </div>
        </div>
    )
}
export default ShoppingProducts;