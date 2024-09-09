"use client";
import Header from "./header";
import Footer from "./footer";

const publications = [
  {
    title:
      "Role of seasonal importation and genetic drift on selection for drug-resistant genotypes of Plasmodium falciparum in high-transmission settings.",
    authors:
      "Zupko RJ, Servadio JL, <strong>Nguyen TD</strong>, Tran TN-A, Tran KT, Somé AF, Boni MF",
    journal: "J R Soc Interface",
    year: 2024,
    abstract: "",
    doi: "https://doi.org/10.1098/rsif.2023.0619",
  },
  {
    title:
      "Assessing emergence risk of double-resistant and triple-resistant genotypes of Plasmodium falciparum",
    authors: "Li EZ, <strong>Nguyen TD</strong>, Tran TN-A, Zupko RJ, Boni MF",
    journal: "Nature Communications",
    year: 2024,
    abstract: "",
    doi: "https://doi.org/10.1038/s41467-024-45547-x",
  },
  {
    title:
      "A combination of annual and nonannual forces drive respiratory disease in the tropics",
    authors:
      "Yang F, Servadio JL, Le Thanh NT, Lam HM, Choisy M, Thai PQ, Thao TTN, Vy NHT, Phuong HT, <strong>Nguyen TD</strong>, Tam DTH, Hanks EM, Vinh H, Bjornstad ON, Chau NVV, Boni MF",
    journal: "BMJ Global Health",
    year: 2023,
    abstract: "",
    doi: "https://doi.org/10.1136/bmjgh-2023-013054",
  },
  {
    title:
      "Modeling policy interventions for slowing the spread of artemisinin-resistant pfkelch R561H mutations in Rwanda",
    authors:
      "Zupko RJ, <strong>Nguyen TD</strong>, Ngabonziza JCS, Kabera M, Li H, Tran TN-A, Tran TK, Uwimana A, Boni MF",
    journal: "Nature Medicine",
    year: 2023,
    abstract: "",
    doi: "https://doi.org/10.1038/s41591-023-02551-w",
  },
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
      "National-scale simulation of human movement in a spatially coupled individual-based model of malaria in Burkina Faso",
    authors:
      "Zupko RJ, <strong>Nguyen TD</strong>, Wesolowski A, Gerardin J, Boni MF",
    journal: "Scientific Report",
    year: 2023,
    abstract: "",
    doi: "https://doi.org/10.1038/s41598-022-26878-5",
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
      "Long-term effects of increased adoption of artemisinin combination therapies in Burkina Faso",
    authors:
      "Zupko RJ, <strong>Nguyen TD</strong>, Somé FA, Tran TN-A, Gerardin J, Dudas P, Giang DDH, Wesolowski A, Ouédraogo J-B, Boni MF",
    journal: "PLOS Global Public Health",
    year: 2022,
    abstract: "",
    doi: "https://doi.org/10.1371/journal.pgph.0000111",
  },
  {
    title:
      "Age-seroprevalence curves for the multi-strain structure of influenza A virus",
    authors:
      "Vinh DN, Nhat NTD, de Bruin E, Vy NHT, Thao TTN, Phuong HT, Anh PH, Todd S, Quan TM, Thanh NTL, Lien NTN, Ha NTH, Hong TTK, Thai PQ, Choisy M, <strong>Nguyen TD</strong>, Simmons CP, Thwaites GE, Clapham HE, Chau NVV, Koopmans M, Boni MF",
    journal: "Nature Communications",
    year: 2021,
    abstract: "",
    doi: "https://doi.org/10.1038/s41467-021-26948-8",
  },
  {
    title:
      "Non-annual seasonality of influenza-like illness in a tropical urban setting.",
    authors:
      "Lam HM, Wesolowski A, Hung NT, <strong>Nguyen TD</strong>, Nhat NTD, Todd S, Vinh DN, Vy NHT, Thao TTN, Thanh NTL, Tin PT, Minh NNQ, Bryant JE, Buckee CO, Ngoc TV, Chau NVV, Thwaites GE, Farrar J, Tam DTH, Vinh H, Boni MF",
    journal: "Influenza and Other Respiratory Viruses",
    year: 2018,
    abstract: "",
    doi: "https://doi.org/10.1111/irv.12595",
  },
  {
    title: "The decline of malaria in Vietnam, 1991-2014",
    authors:
      "Goldlust SM, Thuan PD, Giang DDH, Thang ND, <strong>Nguyen TD</strong>, Thwaites GE, Farrar J, Thanh NV, Grenfell BT, Boni MF, Hien TT",
    journal: "Malaria Journal",
    year: 2018,
    abstract: "",
    doi: "https://doi.org/10.1186/s12936-018-2372-8",
  },
  {
    title:
      "Towards malaria elimination in Savannakhet, Lao PDR: Mathematical modelling driven strategy design",
    authors:
      "Tun STT, von Seidlein L, Pongvongsa T, Mayxay M, Saralamba S, Kyaw SS, Chanthavilay P, Celhay O, <strong>Nguyen TD</strong>, Tran TN-A, Parker DM, Boni MF, Dondorp AM, White LJ",
    journal: "Malaria Journal",
    year: 2018,
    abstract: "",
    doi: "https://doi.org/10.1186/s12936-017-2130-3",
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
  {
    title:
      "Measuring the impact of artemisinin-based case management on malaria incidence in southern Vietnam, 1991-2010.",
    authors:
      "Peak C, Thuan PD, Britton A, <strong>Nguyen TD</strong>, Wolbers M, Thanh NV, Buckee CO, Boni MF",
    journal: "Am J Trop Med Hyg",
    year: 2015,
    abstract: "",
    doi: "https://doi.org/10.4269/ajtmh.14-0461",
  },
  {
    title: "Virulence attenuation during an influenza A/H5N1 pandemic.",
    authors: "Boni MF, <strong>Nguyen TD</strong>, de Jong MD, van Doorn HR",
    journal: "Phil Trans R Soc B",
    year: 2013,
    abstract: "",
    doi: "https://doi.org/10.1098%2Frstb.2012.0207",
  },
  {
    title:
      "Early Pandemic influenza (2009 H1N1) in Ho Chi Minh City, Vietnam: A Clinical Virological and Epidemiological Analysis.",
    authors:
      "Hien TT, Boni MF, Bryant JE, Ngan TT, Wolbers M, <strong>Nguyen TD</strong>, Truong NT, Ha DQ, Hien VM, Nhu LNT, Thanh TT, Uyen LTT, Nhien PT, Chinh NT, Chau NVV, Farrar JJ, van Doorn HR",
    journal: "PLoS Med",
    year: 2010,
    abstract: "",
    doi: "https://doi.org/10.1371/journal.pmed.1000277",
  },
];

export function Publications() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-24">
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 mb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Our Research Publications
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our cutting-edge research in computational epidemiology
              and infectious diseases.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 transition-all hover:shadow-xl flex flex-col justify-between h-full"
              >
                {/* Top content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-700">
                    {pub.title}
                  </h3>
                  <p
                    className="text-sm text-slate-600 mb-2"
                    dangerouslySetInnerHTML={{ __html: pub.authors }}
                  />
                  <p className="text-sm text-slate-500 mb-4">
                    {pub.journal}, {pub.year}
                  </p>
                  {pub.abstract && (
                    <p className="text-slate-700 mb-4">{pub.abstract}</p>
                  )}
                </div>

                {/* Bottom content */}
                <div className="mt-auto pt-6">
                  {pub.clarification && (
                    <p className="text-xs text-slate-500 italic mb-4">
                      {pub.clarification}
                    </p>
                  )}
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    View Publication
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
