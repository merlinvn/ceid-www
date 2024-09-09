// components/Research.tsx
import { RefObject } from "react";

interface ResearchProps {
  researchRef: RefObject<HTMLDivElement>;
}

export default function Research({ researchRef }: ResearchProps) {
  return (
    <section
      id="research"
      ref={researchRef}
      className="bg-[#f0f5f7] text-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-teal-500 text-xl mb-2">WHAT WE OFFER</h2>
        <h3 className="text-4xl font-bold mb-12 text-slate-800">
          Advanced research capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              alt="Computational Modeling"
              className="w-full h-48 object-cover"
              src="/images/computational_modelling.jpg"
              width="300"
              height="200"
              style={{ objectFit: "cover" }}
            />
            {/* <Image */}
            {/*   alt="Computational Modeling" */}
            {/*   className="w-full h-48 object-cover" */}
            {/*   src="/images/computational_modelling.jpg" */}
            {/*   width={300} */}
            {/*   height={200} */}
            {/*   style={{ objectFit: "cover" }} */}
            {/* /> */}
            <div className="p-6">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className=" h-6 w-6 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Computational Modeling
              </h4>
              <p className="text-slate-600">
                Advanced simulations for predicting disease spread and
                evaluating intervention strategies.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              alt="Data Analytics"
              className="w-full h-48 object-cover"
              src="/images/data_analytics.jpg"
              width="300"
              height="200"
              style={{ objectFit: "cover" }}
            />
            <div className="p-6">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className=" h-6 w-6 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Data Analytics</h4>
              <p className="text-slate-600">
                Cutting-edge analysis of large-scale epidemiological datasets to
                uncover patterns and trends.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              alt="Machine Learning"
              className="w-full h-48 object-cover"
              src="/images/machine_learning.jpg"
              width="300"
              height="200"
              style={{ objectFit: "cover" }}
            />

            {/* <Image */}
            {/*   alt="Machine Learning" */}
            {/*   className="w-full h-48 object-cover" */}
            {/*   src="/images/machine_learning.jpg" */}
            {/*   width={300} */}
            {/*   height={200} */}
            {/*   style={{ objectFit: "cover" }} */}
            {/* /> */}
            <div className="p-6">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className=" h-6 w-6 text-white"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
                  <path d="M8 10a5 5 0 1 0 8.9 2.02" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Machine Learning</h4>
              <p className="text-slate-600">
                Applying AI and machine learning algorithms to improve disease
                detection and prediction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
