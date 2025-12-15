import React from "react";

export default function ContactSection() {

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit();
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-[#e9faf5]"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#0b6b57] mb-4">
            Lorem Ipsum<br />Simply Dummy
          </h2>

          <p className="text-gray-700 mb-6">
            Lorem Ipsum Is Simply Dummy Printing And Typesetting.
          </p>

          <p className="text-gray-700 mb-6">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.
          </p>

          <div className="space-y-3 text-[#0b6b57]">
            <p>📧 info@loremipsum.com</p>
            <p>📞 +0 9876-54321</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          action="https://formsubmit.co/YOUR_EMAIL_HERE"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="New SwiftRooms Enquiry"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0b6b57]"
            />

            {/* Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Number*"
              required
              className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0b6b57]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="md:col-span-2 border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#0b6b57]"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="md:col-span-2 border rounded-md px-4 py-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#0b6b57]"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 mt-4 text-sm text-gray-600">
            <input type="checkbox" required className="mt-1" />
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-[#0b6b57] text-white py-3 rounded-lg hover:bg-[#094f41] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
