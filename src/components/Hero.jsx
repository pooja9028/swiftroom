import heroImage from "../assets/hero-img.jpg";

export default function Hero() {
  return (
    <section id="home"
      className="relative w-full h-[780px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* LEFT TEXT */}
      <div className="w-[55%] text-white pl-20">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Your Vision. <br />
          Our Systems. <br />
          One Exceptional Space.
        </h1>

        <p className="text-lg max-w-lg">
          Swift Rooms UAE’s premier provider of garden rooms, aluminium
          windows and doors.
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2">
        <div className="bg-white rounded-xl shadow-xl p-8 w-[380px]">

          <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

          <form className="space-y-4">

            <input className="w-full border p-3 rounded" placeholder="Name*" />

            <div className="grid grid-cols-2 gap-4">
              <input className="border p-3 rounded" placeholder="Number*" />
              <input className="border p-3 rounded" placeholder="Email*" />
            </div>

            <input className="w-full border p-3 rounded" placeholder="Industry*" />

            <textarea
              className="w-full h-24 border p-3 rounded"
              placeholder="Message..."
            />

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </label>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg">
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
