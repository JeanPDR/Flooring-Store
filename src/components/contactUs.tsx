import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 ">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.7456977533525!2d-82.53246382454518!3d27.352417776387824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c33f887cef33e5%3A0x45f2f3ff368f82b1!2s1702%20N%20Washington%20Blvd%2C%20Sarasota%2C%20FL%2034234%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1721255761222!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2">Our address</h3>
                <p className="text-center">
                  1702 North Washington
                  <br />
                  Sarasota, FL 34243
                </p>
              </div>
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-around items-center mt-8">
                <div className="text-center flex flex-col items-center">
                  <EmailIcon />
                  <a
                    href="mailto:contact@pnvflooringstore.com"
                    className="mt-2"
                  >
                    contact@pnvflooringstore.com
                  </a>
                </div>
                <div className="text-center flex flex-col items-center">
                  <LocalPhoneIcon />
                  <a href="tel:+(635215885">863-521-5885</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
