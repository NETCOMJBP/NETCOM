import { Card, CardContent } from "@/components/ui/card";

export default function ExperiencePage() {
  const skillExperience = [
    {
      srNo: 1,
      year: "2019-20",
      departmentName: "Ministry Of Minority Affairs, New Delhi",
      detailsOfWorking: "Seekho Aur Kamao Scheme",
      totalTarget: 350,
    },
    {
      srNo: 2,
      year: "2021-22",
      departmentName: "NSDC",
      detailsOfWorking: "NSDC Market Led Fee Based Programe",
      totalTarget: 1559,
    },
    {
      srNo: 3,
      year: "2021-22",
      departmentName: "State Urban Livelihood Mission, UP",
      detailsOfWorking: "Day NULM Scheme",
      totalTarget: 180,
    },
    {
      srNo: 4,
      year: "2021-22",
      departmentName: "Madhya Pradesh Khadi Gramodhyog Board, Bhopal",
      detailsOfWorking: "Skill Development Scheme",
      totalTarget: 50,
    },
    {
      srNo: 5,
      year: "2021-22",
      departmentName: "State Urban Livelihood Mission, MP",
      detailsOfWorking: "Day NULM Scheme",
      totalTarget: 210,
    },
    {
      srNo: 6,
      year: "2022-23",
      departmentName: "Madhya Pradesh Khadi Gramodhyog Board, Bhopal",
      detailsOfWorking: "Skill Development Scheme",
      totalTarget: 50,
    },
    {
      srNo: 7,
      year: "2022-23",
      departmentName: "Ministry Of Tourism, New Delhi",
      detailsOfWorking: "Hunar Se Rozgar Tak",
      totalTarget: 60,
    },
    {
      srNo: 8,
      year: "2023-24",
      departmentName: "Ministry Of Tourism, New Delhi",
      detailsOfWorking: "Hunar Se Rozgar Tak",
      totalTarget: 120,
    },
    {
      srNo: 9,
      year: "2023-24",
      departmentName: "NSDC",
      detailsOfWorking: "PMKVY4.0",
      totalTarget: 2000,
    },
    {
      srNo: 10,
      year: "2023-24",
      departmentName: "NSDC",
      detailsOfWorking: "NSDC Market Led Fee Based Programe",
      totalTarget: 609,
    },
    {
      srNo: 11,
      year: "2023-24",
      departmentName: "Madhya Pradesh Khadi Gramodhyog Board, Bhopal",
      detailsOfWorking: "Skill Development Scheme",
      totalTarget: 50,
    },
    {
      srNo: 12,
      year: "2023-24",
      departmentName: "UPSDM",
      detailsOfWorking: "SSDF(STT)",
      totalTarget: 108,
    },
  ];

  const experienceBoxes = [
    {
      title: "Ministry Partnerships",
      description:
        "Collaborations with Ministry of Minority Affairs, Ministry of Tourism, and other government bodies for skill development initiatives.",
      highlight: "3+ ministries",
    },
    {
      title: "NSDC Programs",
      description:
        "Implementation of various National Skill Development Corporation programs including PMKVY4.0 and Market Led Fee Based Programs.",
      highlight: "4,000+ beneficiaries",
    },
    {
      title: "State-Level Initiatives",
      description:
        "Partnerships with state-level organizations like MP Khadi Gramodhyog Board and State Urban Livelihood Missions.",
      highlight: "Multiple states",
    },
    {
      title: "Skill Development Schemes",
      description:
        "Experience in implementing various skill development schemes including Seekho Aur Kamao, Hunar Se Rozgar Tak, and Day NULM Scheme.",
      highlight: "6+ schemes",
    },
    {
      title: "Training Capacity",
      description:
        "Demonstrated capability to handle large-scale training programs with targets ranging from 50 to 2000 candidates.",
      highlight: "5,000+ total target",
    },
    {
      title: "Years of Experience",
      description:
        "Consistent track record of implementing skill development programs from 2019 to present day.",
      highlight: "5+ years",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NETCOM SOCIETY has extensive experience in implementing skill
            development programs in partnership with government ministries,
            NSDC, and other organizations.
          </p>
        </div>

        {/* Experience Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {experienceBoxes.map((box, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {box.title}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  {box.highlight}
                </p>
                <p className="text-gray-600">{box.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Experience Table */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Skilling Experience
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border px-4 py-3 text-left">S. No</th>
                    <th className="border px-4 py-3 text-left">Year</th>
                    <th className="border px-4 py-3 text-left">
                      Department Name
                    </th>
                    <th className="border px-4 py-3 text-left">
                      Details of Working
                    </th>
                    <th className="border px-4 py-3 text-left">Total Target</th>
                  </tr>
                </thead>
                <tbody>
                  {skillExperience.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="border px-4 py-3">{item.srNo}</td>
                      <td className="border px-4 py-3">{item.year}</td>
                      <td className="border px-4 py-3">
                        {item.departmentName}
                      </td>
                      <td className="border px-4 py-3">
                        {item.detailsOfWorking}
                      </td>
                      <td className="border px-4 py-3">{item.totalTarget}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-200 font-bold">
                    <td className="border px-4 py-3" colSpan={4}>
                      Total
                    </td>
                    <td className="border px-4 py-3">5,346</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Journey in Skill Development
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Since 2019, NETCOM SOCIETY has been at the forefront of skill
              development initiatives, partnering with various government bodies
              and organizations to implement impactful training programs. Our
              journey began with the Seekho Aur Kamao Scheme in collaboration
              with the Ministry of Minority Affairs, and has since expanded to
              include multiple programs across different sectors.
            </p>
            <p>
              Our experience spans across various schemes including NSDC Market
              Led Fee Based Programs, Day NULM Scheme, Skill Development Scheme,
              Hunar Se Rozgar Tak, and PMKVY4.0. Through these initiatives, we
              have successfully trained thousands of candidates, equipping them
              with skills that enhance their employability and contribute to
              their economic empowerment.
            </p>
            <p>
              The scale of our operations has grown significantly over the
              years, with our total target increasing from 350 in 2019-20 to
              over 2,000 in recent programs. This growth reflects our expanding
              capabilities and the trust placed in us by our partners.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
