import react from "react";
import MainCarousel from "../../components/HomeCarousel/maincarousel.jsx";
import { HomeCardCarousel } from "../../components/HomeSectionCardCarousel/homecardcarousel.jsx";
import { MensKurta } from "../../../Data/mens_kurta.js";

export function HomePage()
{
    return <div>
        <MainCarousel></MainCarousel>
        
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">

            <HomeCardCarousel data={MensKurta} SectionName={"Mens Kurta"}/>
            <HomeCardCarousel data={MensKurta} SectionName={"Mens Kurta"}/>
            <HomeCardCarousel data={MensKurta} SectionName={"Mens Kurta"}/>
            <HomeCardCarousel data={MensKurta} SectionName={"Mens Kurta"}/>
            <HomeCardCarousel data={MensKurta} SectionName={"Mens Kurta"}/>
            
        </div>

    </div>
}
