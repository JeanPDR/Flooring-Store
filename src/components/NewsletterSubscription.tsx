"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../public/utils/send-email-news";

export type FormData = {
  zipCode: number;
  email: string;
  propertyType: string;
  privacyPolicy: boolean; // Novo campo para o checkbox
};

const NewsletterSubscription: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const privacyPolicyAccepted = watch("privacyPolicy");

  function onSubmit(data: FormData) {
    if (!privacyPolicyAccepted) {
      alert("You must accept the privacy policy");
      return;
    }
    sendEmail(data);
  }

  return (
    <div className="flex flex-col items-center justify-center p-28 bg-white md:flex-row">
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
          <div className="mb-4">
            <input
              type="checkbox"
              className="mr-2"
              {...register("privacyPolicy", { required: true })}
            />
            <label className="text-base font-medium text-gray-700">
              I agree to the{" "}
              <a href="/privacy-policy" className="text-blue-500 underline">
                Privacy Policy
              </a>
            </label>
            {errors.privacyPolicy && (
              <span className="text-red-500 block">
                You must accept the privacy policy
              </span>
            )}
          </div>
          <button
            className={`px-6 py-2 font-semibold text-white rounded-lg hover:bg-[#e77320e2] ${
              privacyPolicyAccepted
                ? "bg-[#E77420]"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!privacyPolicyAccepted}
          >
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
