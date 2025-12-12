export default function WhyChooseUs() {
  const items = [
    {
      title: "Lorem is",
      desc: "On the other hand, we denounce with righteous end indignation and dislike men who are so beguiled and.",
      icon: "/src/assets/Icon.png", // update with your icon file
    },
    {
      title: "Lorem is",
      desc: "On the other hand, we denounce with righteous end indignation and dislike men who are so beguiled and.",
      icon: "/src/assets/Icon.png",
    },
    {
      title: "Lorem is",
      desc: "On the other hand, we denounce with righteous end indignation and dislike men who are so beguiled and.",
      icon: "/src/assets/Icon.png",
    },
    {
      title: "Lorem is",
      desc: "On the other hand, we denounce with righteous end indignation and dislike men who are so beguiled and.",
      icon: "/src/assets/Icon.png",
    },
  ];

  return (
    <section id="why-choose-us" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0b3d2e]">Why Choose Us</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#0b6b57] text-white p-8 shadow-lg hover:scale-105 transition-all"
            >
              <img src={item.icon} alt="icon" className="w-12 h-12 mb-4" />

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="px-10 py-3 rounded-full border border-[#0b6b57] text-[#0b6b57] hover:bg-[#0b6b57] hover:text-white transition">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
