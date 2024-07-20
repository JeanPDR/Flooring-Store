"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../public/utils/send-email";

export type FormData = {
  zipCode: number;
  email: string;
  propertyType: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Property zip code"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#24A1AE] focus:shadow-md"
          {...register("zipCode", { required: true })}
        />
      </div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#24A1AE] focus:shadow-md"
          {...register("email", { required: true })}
        />
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
      </div>
      {/* <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div> */}
      <div>
        <button className="hover:shadow-form rounded-md bg-[#E77420] py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
