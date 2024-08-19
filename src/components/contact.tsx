"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../public/utils/send-email";

export type FormData = {
  zipCode: number;
  email: string;
  propertyType: string;
  privacyPolicy: boolean; // Novo campo para o checkbox
  phone: number;
  name: string;
};

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const privacyPolicyAccepted = watch("privacyPolicy");

  function onSubmit(data: FormData) {
    if (!privacyPolicyAccepted) {
      alert("You must agree to the privacy policy.");
      return;
    }
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#24A1AE] focus:shadow-md"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500">Enter your Name please</span>
        )}
      </div>
      <div className="mb-5">
        <input
          type="number"
          placeholder="Phone number"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#24A1AE] focus:shadow-md"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="text-red-500">Enter your number phone please</span>
        )}
      </div>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Property zip code"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#24A1AE] focus:shadow-md"
          {...register("zipCode", { required: true })}
        />
        {errors.zipCode && (
          <span className="text-red-500">Enter your Zip Code please</span>
        )}
      </div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#24A1AE] focus:shadow-md"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Enter your email please</span>
        )}
      </div>
      <div className="mb-5">
        <select
          className="w-full p-2 border border-gray-300 rounded"
          {...register("propertyType", { required: true })}
        >
          <option value="">Property type (i)</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        {errors.propertyType && (
          <span className="text-red-500">Property type is mandatory</span>
        )}
      </div>
      <div className="mb-5 flex items-center">
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
      </div>
      {errors.privacyPolicy && (
        <span className="text-red-500">You must accept the privacy policy</span>
      )}
      <div>
        <button
          className={`hover:shadow-form rounded-md py-3 px-8 text-base font-semibold text-white outline-none ${
            privacyPolicyAccepted
              ? "bg-[#E77420]"
              : "bg-gray-500 cursor-not-allowed"
          }`}
          disabled={!privacyPolicyAccepted}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
