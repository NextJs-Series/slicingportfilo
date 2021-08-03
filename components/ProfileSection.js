import SectionParagraph from "./SectionParagraph"
import SectionTitle from "./SectionTitle"

export default function Profile() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph>Thanks for visiting Me</SectionParagraph>

                <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                        <img src="/profile.png" className="w-full" />
                    </div>
                    <div className="md:w-7/12 w-full px-10">
                        <p className="text-lg leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita, delectus enim aliquam nihil asperiores ad officiis magni labore, beatae corporis obcaecati deserunt, cupiditate reiciendis odit? Cum quod quo aliquam?</p>
                        <p className="text-lg mt-6 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit sunt praesentium ut totam necessitatibus debitis enim, officia dicta iure expedita neque tenetur error eius fugit fuga soluta nulla voluptatibus.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
