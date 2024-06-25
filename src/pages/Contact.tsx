import { Helmet } from "react-helmet-async";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <BreadCrumb title="contact" />

            <div className="container pb-12">
                <div>
                    <iframe className="w-full min-h-[400px] mt-8 rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31356.32432205324!2d106.65601955678778!3d10.769849594387622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6c6e9b7e35%3A0xbe48f39ac0476895!2zUXXhuq1uIDQsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1716741069779!5m2!1svi!2s"></iframe>
                </div>
                <div className="shadow-shadow-1 rounded-md bg-white p-4 grid md:grid-cols-2  grid-cols-1 mt-8 gap-12">
                    <form>
                        <p className="font-medium text-title-2">Contact</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <input type="text" placeholder="Name" className="bg-color-04 rounded-md w-full px-4 py-2" />
                            <input type="text" placeholder="Email" className="bg-color-04 rounded-md w-full px-4 py-2" />
                            <input type="text" placeholder="Phone" className="bg-color-04 rounded-md w-full px-4 py-2" />
                            <textarea name="" id="" placeholder="comment" className="min-h-[100px] bg-color-04 rounded-md w-full px-4 py-2"></textarea>
                        </div>
                        <button className="px-6 py-2 text-white hover:text-color-01 bg-color-09 rounded-full mt-8">Send</button>
                    </form>
                    <div>
                        <p className="font-medium text-title-2">Get In Touch With US</p>
                        <div className="flex flex-col gap-4 opacity-opacity-1 mt-4">
                            <div>
                                <i className="mr-2 fa-solid fa-house"></i>
                                33 new Min St.Ste 50 Fanci, CA.US
                            </div>
                            <div>
                                <i className="mr-2 fa-solid fa-phone"></i>
                                042124234234
                            </div>
                            <div>
                                <i className="mr-2 fa-solid fa-envelope"></i>
                                deme.shiha@gmail.com
                            </div>
                            <div>
                                <i className="mr-2 fa-solid fa-location-pin"></i>
                                Monday - Friday 10AM - 10PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;