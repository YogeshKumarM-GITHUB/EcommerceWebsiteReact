import aboutus from '../assets/about-us.jpg';
import team01 from '../assets/team-01.jpg';

const AboutQuality = () => {
    return (
        <div className='mt-10'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-4 p-4'>
                <img src={aboutus} alt="aboutus" className='object-cover w-full md:w-[500px] rounded-lg' />
                <div className='w-auto md:w-[600px]  flex-1'>
                    <p className='text-[32px] font-bold leading-snug'>We strive to provide our customers with the highest quality</p>
                    <p className='mt-5 w-full text-[15px] text-gray-700 leading-relaxed'>Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts who recognized the positive impact that plants can have on our lives. Whether it’s purifying the air, reducing stress, or simply adding a touch of beauty to your environment, plants are more than just decoration—they’re a lifestyle.</p>
                    <hr className='mt-5' />
                    <p className='italic mt-5 text-gray-600'>“We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success.”
                    </p>
                    <div className="flex flex-row items-center gap-2">
                        <img src={team01} alt="team1" className="mt-4 h-15 w-15 rounded-full" />
                        <p className="text-[#454545] text-[15px]">YOGESH CEO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutQuality;