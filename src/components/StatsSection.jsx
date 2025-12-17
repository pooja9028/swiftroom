import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto bg-[#0b6b57] text-white rounded-xl py-12 px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {/* Stat 1 */}
          <div>
            <h2 className="text-5xl font-bold">
              <CountUp start={0} end={14} duration={3} />+
            </h2>
            <p className="text-lg mt-2 opacity-90">Years In Business</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="text-5xl font-bold">
              <CountUp start={0} end={3400} duration={3} separator="," />
            </h2>
            <p className="text-lg mt-2 opacity-90">Happy Customers</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h2 className="text-5xl font-bold">
              <CountUp start={0} end={3500} duration={3} suffix="+" />
            </h2>
            <p className="text-lg mt-2 opacity-90">Projects Completed</p>
          </div>

          {/* Stat 4 */}
          <div>
            <h2 className="text-5xl font-bold">
              <CountUp start={0} end={70} duration={3} />+
            </h2>
            <p className="text-lg mt-2 opacity-90">Trained Professionals</p>
          </div>

        </div>

      </div>
    </section>
  );
}
