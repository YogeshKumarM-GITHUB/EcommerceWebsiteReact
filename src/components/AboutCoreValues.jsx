import { BiPackage } from "react-icons/bi";

const AboutCoreValues = () => {

    const coreValues = [
        {
            id: 1,
            icon: <BiPackage className="text-white bg-black rounded-full p-4 w-12 h-12 flex items-center justify-center" />,
            text: 'Passionate About Work',
            para: "Passion for work is a enthusiasm and excitement for what you do."
        },
        {
            id: 2,
            icon: <BiPackage className="text-white bg-black rounded-full p-4 w-12 h-12 flex items-center justify-center" />,
            text: 'Creative team members',
            para: "A creative team is to design and execute campaigns & encourage"
        },
        {
            id: 3,
            icon: <BiPackage className="text-white bg-black rounded-full p-4 w-12 h-12 flex items-center justify-center" />,
            text: 'Innovation solutions',
            para: "Using either completely concepts finding new ways of using existing"
        },
        {
            id: 4,
            icon: <BiPackage className="text-white bg-black rounded-full p-4 w-12 h-12 flex items-center justify-center" />,
            text: 'Qualitiful products',
            para: "Product quality refers to how well a product satisfies our customer"
        },
        {
            id: 5,
            icon: <BiPackage className="text-white bg-black rounded-full p-4 w-12 h-12 flex items-center justify-center" />,
            text: 'Customer satisfaction',
            para: "Happy customers are delighted because of the customer service"
        },
        {
            id: 6,
            icon: <BiPackage className="text-white bg-black rounded-full p-4 w-12 h-12 flex items-center justify-center" />,
            text: 'Simplicity interface',
            para: "Simplicity is used loosely to refer to the need to minimize a process"
        }
    ]

    return (
        <div className="bg-[#E9F1CB] w-full p-4">
            <div className="mt-10 max-w-7xl mx-auto">
                <h1 className="text-center font-bold mt-4">Our Core Values that Drive Everything We Do</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                    {
                        coreValues.map(({ id, icon, text, para }) => (
                            <div key={id} className="flex flex-col md:flex-row items-center gap-x-2 gap-y-4">
                                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center">
                                    <BiPackage className="text-xl" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h1 className="font-bold text-xl">{text}</h1>
                                    <p className="mt-2 text-gray-700 leading-relaxed">{para}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
export default AboutCoreValues;