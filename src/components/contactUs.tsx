import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";

const ContactUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094147!2d144.9537353153188!3d-37.817209979751954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773e3e34e2c0e0!2sEnvato!5e0!3m2!1sen!2sau!4v1487728923210"
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
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                <p>
                  600 Edwards Rd. Suite B<br />
                  Fort Pierce, FL 34982
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Durato Philly</h3>
                <p>
                  9800 Bustleton Ave, North Entrance
                  <br />
                  Philadelphia, PA 19115
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Durato Houston</h3>
                <p>
                  8451 Market Street
                  <br />
                  Houston, TX 77029
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
                  <p className="mt-2">267-343-3480</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <FaxIcon />
                  <p className="mt-2">888-539-6620</p>
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
