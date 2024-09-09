// components/About.tsx
import { RefObject } from "react";

interface AboutProps {
  aboutRef: RefObject<HTMLDivElement>;
}

export default function About({ aboutRef }: AboutProps) {
  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-white text-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Our Center</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              alt="Scientist working in a lab"
              className="rounded-lg object-cover w-full h-auto"
              src="/images/about.jpg"
              width="600"
              height="400"
              style={{ objectFit: "cover" }}
            />
            {/* <Image */}
            {/*   alt="Scientist working in a lab" */}
            {/*   className="rounded-lg object-cover w-full h-auto" */}
            {/*   src="/images/about.jpg" */}
            {/*   width={600} */}
            {/*   height={400} */}
            {/*   style={{ objectFit: "cover" }} */}
            {/* /> */}
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-teal-600">
              Our Mission
            </h3>
            <p className="mb-4 text-slate-700">
              The Center for Computational Epidemiology and Infectious Diseases
              (CCEID) is dedicated to advancing the field of epidemiology
              through innovative computational methods and cutting-edge
              research.
            </p>
            <p className="text-slate-700">
              Our interdisciplinary team of researchers combines expertise in
              epidemiology, data science, and computer science to develop novel
              approaches for understanding and combating infectious diseases.
            </p>
            <div className="mt-8 flex space-x-8">
              <div>
                <h4 className="text-xl font-semibold text-teal-600">01.</h4>
                <h5 className="text-lg font-medium mb-2">Advanced Modeling</h5>
                <p className="text-slate-600">
                  Developing sophisticated computational models for disease
                  spread.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-600">02.</h4>
                <h5 className="text-lg font-medium mb-2">Data Analysis</h5>
                <p className="text-slate-600">
                  Leveraging big data to extract meaningful epidemiological
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
