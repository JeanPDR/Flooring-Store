"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../public/utils/send-email-news";

export type FormData = {
  zipCode: number;
  email: string;
  propertyType: string;
};

const NewsletterSubscription: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <div className="flex flex-col items-center justify-center p-28 bg-white  md:flex-row">
      <div className="flex-1 mb-4 text-center md:mb-0 md:text-left">
        <p className="text-sm font-semibold text-blue-600">
          WANT TO LEARN MORE?
        </p>
        <h2 className="text-4xl font-bold">
          Subscribe to our{" "}
          <span className="text-4xl font-bold">Email Newsletter</span>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email*"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg md:mb-0 md:mr-4 md:w-80"
            {...register("email", { required: true })}
          />
          <button className="px-6 py-2 font-semibold text-white bg-[#E77420] rounded-lg hover:bg-[#e77320e2]">
            SUBSCRIBE →
          </button>
        </form>
        <div className="mt-4 md:mt-0 md:ml-4">
          <div
            className="g-recaptcha"
            data-sitekey="your-recaptcha-site-key"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
