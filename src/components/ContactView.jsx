import Contact from '../assets/Contact.jpg';
const ContactView=()=>{
    return(
       <div className='backdrop-blur-md' style={{
               backgroundImage: `url(${Contact})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               minHeight: "100 vh",
               transition: "background 0.4s ease-in-out"
           }}>
               <div className='mx-auto w-auto md:w-[700px] flex flex-col justify-center items-center min-h-screen'>
                   
               </div>
           </div>
    )
}
export default ContactView;