import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TOTTrainersPage() {
  const trainers = [
    {
      srNo: 1,
      sectorSkillCouncil: "AMHSSC",
      jobRoleName: "Finisher & Packer(AMH/Q2255)",
      trainerName: "Amandeep Singh Kalra",
      certificateValidUpto: "24/03/2026",
    },
    {
      srNo: 2,
      sectorSkillCouncil: "AMHSSC",
      jobRoleName: "Finisher & Packer(AMH/Q2255)",
      trainerName: "Sukhraj Kaur",
      certificateValidUpto: "24/03/2026",
    },
    {
      srNo: 3,
      sectorSkillCouncil: "AMHSSC",
      jobRoleName: "Finisher & Packer(AMH/Q2255)",
      trainerName: "Balkaran Kaur",
      certificateValidUpto: "24/03/2026",
    },
    {
      srNo: 4,
      sectorSkillCouncil: "AMHSSC",
      jobRoleName: "Finisher & Packer(AMH/Q2255)",
      trainerName: "Muskhan Rani",
      certificateValidUpto: "24/03/2026",
    },
    {
      srNo: 5,
      sectorSkillCouncil: "AMHSSC",
      jobRoleName: "Finisher & Packer(AMH/Q2255)",
      trainerName: "Rajni Maurya",
      certificateValidUpto: "24/03/2026",
    },
    {
      srNo: 6,
      sectorSkillCouncil: "Beauty & Wellness SSC",
      jobRoleName: "Bridal, Fashion and Portfolio Makeup Artist (BWS/Q0301)",
      trainerName: "Ayushi Bihare",
      certificateValidUpto: "26/03/2026",
    },
    {
      srNo: 7,
      sectorSkillCouncil: "Beauty & Wellness SSC",
      jobRoleName: "Bridal, Fashion and Portfolio Makeup Artist (BWS/Q0301)",
      trainerName: "Garima Raghuwanshi",
      certificateValidUpto: "26/03/2026",
    },
    {
      srNo: 8,
      sectorSkillCouncil: "Beauty & Wellness SSC",
      jobRoleName: "Bridal, Fashion and Portfolio Makeup Artist (BWS/Q0301)",
      trainerName: "Pratiksha Sharma",
      certificateValidUpto: "26/03/2026",
    },
    {
      srNo: 9,
      sectorSkillCouncil: "Beauty & Wellness SSC",
      jobRoleName: "Bridal, Fashion and Portfolio Makeup Artist (BWS/Q0301)",
      trainerName: "Rashi Sahu",
      certificateValidUpto: "26/03/2026",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TOT Certified Trainers
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of Training of Trainers (TOT) certified professionals
            brings extensive industry experience and pedagogical expertise to
            deliver exceptional learning experiences.
          </p>
        </div>

        {/* What is TOT Certification */}
        <div className="bg-white p-8 rounded-lg shadow mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is TOT Certification?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Training of Trainers (TOT) is a comprehensive certification
              program designed to equip trainers with advanced pedagogical
              skills, assessment techniques, and training methodologies. TOT
              certification ensures that trainers not only possess domain
              expertise but also have the skills to effectively transfer
              knowledge to learners.
            </p>
            <p>
              At NETCOM SOCIETY, all our trainers are TOT certified, which means
              they have undergone rigorous training in adult learning
              principles, instructional design, training delivery, and
              assessment methods. This certification is recognized by the
              National Skill Development Corporation (NSDC) and other industry
              bodies.
            </p>
          </div>
        </div>

        {/* TOT Certified Trainers Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              TOT Certified Trainers Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border px-4 py-3 text-left">Sr No</th>
                    <th className="border px-4 py-3 text-left">
                      Sector Skill Council
                    </th>
                    <th className="border px-4 py-3 text-left">
                      Job Role Name
                    </th>
                    <th className="border px-4 py-3 text-left">Trainer Name</th>
                    <th className="border px-4 py-3 text-left">
                      Certificate Valid Upto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trainers.map((trainer, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="border px-4 py-3">{trainer.srNo}</td>
                      <td className="border px-4 py-3">
                        {trainer.sectorSkillCouncil}
                      </td>
                      <td className="border px-4 py-3">
                        {trainer.jobRoleName}
                      </td>
                      <td className="border px-4 py-3">
                        {trainer.trainerName}
                      </td>
                      <td className="border px-4 py-3">
                        {trainer.certificateValidUpto}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sector-wise Breakdown */}
        <div className="bg-white p-8 rounded-lg shadow mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sector-wise Trainer Distribution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AMHSSC</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5 certified trainers</li>
                  <li>• Specialization: Finisher & Packer</li>
                  <li>• Certification valid until: March 2026</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Beauty & Wellness SSC
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4 certified trainers</li>
                  <li>
                    • Specialization: Bridal, Fashion and Portfolio Makeup
                    Artist
                  </li>
                  <li>• Certification valid until: March 2026</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits of TOT Certified Trainers */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Learning from TOT Certified Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Structured Learning Experience
              </h3>
              <p className="text-gray-600">
                Our TOT certified trainers design structured learning
                experiences with clear objectives, appropriate content
                sequencing, and effective assessment methods to ensure optimal
                learning outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Industry-Relevant Training
              </h3>
              <p className="text-gray-600">
                With their specialized certifications in specific job roles, our
                trainers provide practical, industry-relevant training that
                prepares students for real-world challenges in their respective
                sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
