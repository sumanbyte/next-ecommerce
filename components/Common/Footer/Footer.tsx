
import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";
import FooterNewsLetter from "./FooterNewsLetter";



export default function Footer() {

    return <div className="bg-gray-700">
        <FooterNewsLetter />
        <FooterMain />
        <FooterBottom />
    </div>

}