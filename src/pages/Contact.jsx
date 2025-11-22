import ContactForm from "../components/ContactForm";
import ContactView from "../components/ContactView";
import FollowUs from "../components/FollowUs";
import FlashSale from "../components/FlashSale";

const Contact=()=>{
    return(
        <div>
            <ContactView />
            <ContactForm/>
            <FollowUs/>
            <FlashSale/>
        </div>
    )
}
export default Contact;