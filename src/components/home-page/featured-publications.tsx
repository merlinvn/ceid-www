import { RefObject } from "react";
import Link from "next/link";

interface PublicationsProps {
  publicationsRef: RefObject<HTMLDivElement | null>;
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  abstract: string;
  doi: string;
  clarification?: string;
}

const publications: Publication[] = [
  {
    title:
      "Preventing antimalarial drug resistance with triple artemisinin-based combination therapies",
    authors:
      "<strong>Nguyen TD</strong> *, Gao B*, Amaratunga C, Dhorda M, Tran TN-A, White NJ, Dondorp AM, Boni MF*, Aguas R*",
    journal: "Nature Communications",
    year: 2023,
    abstract: "",
    doi: "https://doi.org/10.1038/s41467-023-39914-3",
    clarification: "* indicates equal contribution",
  },
  {
    title:
      "Antimalarial mass drug administration in large populations and the evolution of drug resistance",
    authors:
      "<strong>Nguyen TD</strong> *, Tran TN-A* , Parker DM, White NJ, Boni MF",
    journal: "PLoS Global Health",
    year: 2023,
    abstract: "",
    doi: "https://doi.org/10.1371%2Fjournal.pgph.0002200",
    clarification: "* indicates equal contribution",
  },
  {
    title:
      "Pre-existing partner-drug resistance facilitates the emergence and spread of artemisinin resistance: a consensus modelling",
    authors:
      "Watson OJ*, Gao B*, <strong>Nguyen TD</strong>*, Tran TN-A, Penny MA, Smith DL, Okell L, Aguas R, Boni MF",
    journal: "The Lancet Microbe",
    year: 2022,
    abstract: "",
    doi: "https://doi.org/10.1016/s2666-5247(22)00155-0",
    clarification: "* indicates equal contribution",
  },
  {
    title:
      "Optimal population-level deployment of artemisinin combination therapies.",
    authors:
      "<strong>Nguyen TD</strong>, Olliaro P, Dondorp AM, Baird JK, Lam HM, Farrar J, Thwaites GE, White NJ, Boni MF",
    journal: "Lancet Global Health",
    year: 2015,
    abstract: "",
    doi: "https://doi.org/10.1016/s2214-109x(15)00162-x",
  },
];

export default function FeaturePublications({
  publicationsRef,
}: PublicationsProps) {
  return (
    <section
      id="publications"
      ref={publicationsRef}
      className="bg-white text-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Publications</h2>
        <ul className="space-y-4 mb-8">
          {publications.map((pub, index) => (
            <li key={index} className="bg-[#f0f5f7] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p
                className="text-slate-600"
                dangerouslySetInnerHTML={{ __html: pub.authors }}
              />
              <p className="text-slate-600">
                Published in {pub.journal}, {pub.year}
              </p>
              {pub.abstract && (
                <p className="mt-2 text-slate-700">{pub.abstract}</p>
              )}
              {pub.clarification && (
                <p className="mt-2 text-xs text-slate-500 italic">
                  {pub.clarification}
                </p>
              )}
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-teal-500 hover:underline"
              >
                View Publication
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Link
            href="/publications"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  );
}
