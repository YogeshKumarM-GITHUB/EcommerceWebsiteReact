import { FaQuoteLeft } from "react-icons/fa";
import teamone from '../assets/team-01.jpg'
import teamtwo from '../assets/team-02.jpg'
import teamthree from '../assets/team-03.jpg'

const CustomersSays = () => {
    const testimonals=[
        {
          pic:teamone,
          text:'I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.',
          client:'Yogesh'
        },
        {
          pic:teamtwo,
          text:'I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.',
          client:'GA'
        },
        {
          pic:teamthree,
          text:'I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.',
          client:'Kamal'
        }
    ]

 const TestimonalCard = ({pic,text,client}) => {
        return (
            <div className="bg-white mt-10 w-auto md:max-w-md p-8 rounded-md">
                <FaQuoteLeft size={20} className="text-green-600" />
                <p className="mt-5 text-[#454545] text-[16px] md:text-[20px] w-full">{text}</p>
                <div className="flex flex-row items-center gap-2">
                    <img src={pic} alt="team1" className="mt-4 h-15 w-15 rounded-full" />
                    <p className="text-[#454545] text-[15px]">{client}</p>
                </div>
            </div>
        )
    }


    return (
        <div className="bg-[#E9F1CB] mt-10">
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-x-15 p-4">
                <div className="flex flex-col">
                    <div className="mt-10">
                        <h1 className="text-black font-bold text-[32px]">What Our Customers Say</h1>
                        <p className="text-[#454545] text-[15px]">Discover the reasons why people loves us and become your go-to partner.</p>
                    </div>
                    <TestimonalCard {...testimonals[0]} />
                </div>
                <div>
                   <TestimonalCard {...testimonals[1]}/>
                   <TestimonalCard {...testimonals[2]}/>
                </div>
            </div>
        </div>
    )
}
export default CustomersSays;