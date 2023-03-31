import React from "react";
import Head from "../Components/Head";
import Layout from "../Layout/Layout";
// import CU from "../CU.jpg";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  const ContactData = [
    {
      id: 1,
      title: "Email Us",
      info: "We are here for helping you",
      icon: FiMail,
      contact: "info@black&yellow.com",
    },
    {
      id: 2,
      title: "Call Us",
      info: "We are here for helping you",
      icon: FiPhoneCall,
      contact: "+19999999",
    },
    {
      id: 3,
      title: "Location",
      info: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout>
      <div className="min-height-screen  mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
         {
ContactData.map((item)=>(
    <div key= {item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"  >
        <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl" >
<item.icon/>
        </span>
        <h5  className="text-xl fon-semibold mb-2" >{item.title}</h5>
        <p className="mb-0 text-sm text-text leading-7" >
            <a href={`mailto:${item.contact}`} className="text-blue-600" >{item.contact}</a>
            {' '}
            {item.info}
        </p>
    </div>
))
         }
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
