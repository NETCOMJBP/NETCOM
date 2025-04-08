import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Award, Briefcase } from "lucide-react";

export default function PlacementsPage() {
  const placementStats = [
    {
      title: "Partner Companies",
      value: "12+",
      icon: <Building className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Total Candidates Required",
      value: "1,395+",
      icon: <Users className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Salary Range",
      value: "₹12K-18K",
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Placement Locations",
      value: "Pan India",
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Companies for Placement
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NETCOM SOCIETY has strong partnerships with leading companies across
            industries, providing excellent placement opportunities for our
            students.
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Tie-Ups Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              Company tie-Ups for placement with organizations in applied sector
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border px-4 py-3 text-left">
                      Name of the organization and address
                    </th>
                    <th className="border px-4 py-3 text-left">
                      Contact person name, designation & contact of the employer
                    </th>
                    <th className="border px-4 py-3 text-left">Sector/trade</th>
                    <th className="border px-4 py-3 text-left">
                      Number of candidates required
                    </th>
                    <th className="border px-4 py-3 text-left">
                      Offered Salary
                    </th>
                    <th className="border px-4 py-3 text-left">
                      Location of the placement/apprenticeship
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-3">
                      New Era Society Of Education and Computer Technology
                      <br />
                      Infront of Post Office, sihora, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr. Anil Tiwari, President
                      <br />
                      Mob-93298-73766
                    </td>
                    <td className="border px-4 py-3">Electronics</td>
                    <td className="border px-4 py-3">65</td>
                    <td className="border px-4 py-3">12000-14500</td>
                    <td className="border px-4 py-3">Madhya Pradesh</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-3">
                      Digital Solution
                      <br />
                      Near Post Office, Bilhari, Mandla road, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr. Sanjeev Mishra, Propwritter
                      <br />
                      Mob-9300986112
                    </td>
                    <td className="border px-4 py-3">Electronics</td>
                    <td className="border px-4 py-3">75</td>
                    <td className="border px-4 py-3">13000-16000</td>
                    <td className="border px-4 py-3">Madhya Pradesh</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-3">
                      Shri Narmada Jan Kalyan Samiti
                      <br />
                      A1, Kachnar City, vijay Nagar, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr Pranav Bhatt, Secretary
                      <br />
                      9424927225
                    </td>
                    <td className="border px-4 py-3">
                      Beauty & Wellness Sector, Apparel, Electronics
                    </td>
                    <td className="border px-4 py-3">200</td>
                    <td className="border px-4 py-3">14500-18000</td>
                    <td className="border px-4 py-3">Pan India</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-3">
                      Neeta Jan Kalyan Samiti
                      <br />
                      B2 Samarth Nilay apartment, Mahanadda, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr. Maneesh Gheeya, Secretary
                      <br />
                      9893446488
                    </td>
                    <td className="border px-4 py-3">
                      Beauty & Wellness Sector, Apparel, Electronics
                    </td>
                    <td className="border px-4 py-3">150</td>
                    <td className="border px-4 py-3">14000-18000</td>
                    <td className="border px-4 py-3">Pan India</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-3">
                      Research Indian,
                      <br />
                      Main Road Garha Phatak, Ranital, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Monika Dubey, HR
                      <br />
                      9575080333
                    </td>
                    <td className="border px-4 py-3">Apparel</td>
                    <td className="border px-4 py-3">120</td>
                    <td className="border px-4 py-3">13500-17500</td>
                    <td className="border px-4 py-3">Madhya Pradesh</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-3">
                      Neeta Traders
                      <br />
                      608, Sarafa Ward, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Peetamber Singh Kourav, Manager
                      <br />
                      Mob-7000201975
                    </td>
                    <td className="border px-4 py-3">Electronics</td>
                    <td className="border px-4 py-3">120</td>
                    <td className="border px-4 py-3">12500-15500</td>
                    <td className="border px-4 py-3">Pan India</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-3">
                      Narmada Samaj Kalyan Samiti
                      <br />
                      1977, Sagda, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr. Sharad Kesharwani, President
                      <br />
                      Mob-9827119590
                    </td>
                    <td className="border px-4 py-3">
                      Beauty & Wellness Sector, Apparel, Electronics
                    </td>
                    <td className="border px-4 py-3">120</td>
                    <td className="border px-4 py-3">14000-18000</td>
                    <td className="border px-4 py-3">Pan India</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-3">
                      Sanjeevani Jan Seva Samiti
                      <br />
                      553, Mother Teresa Nagar, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mrs. Pooja Rai, Secretary
                      <br />
                      Mob-9302150888
                    </td>
                    <td className="border px-4 py-3">
                      Beauty & Wellness Sector, Apparel
                    </td>
                    <td className="border px-4 py-3">80</td>
                    <td className="border px-4 py-3">12000-14000</td>
                    <td className="border px-4 py-3">Pan India</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-3">
                      Vandana Consultancy
                      <br />
                      G-26 B, City Centre M G Road, Indore(MP)-1
                    </td>
                    <td className="border px-4 py-3">
                      Mr. Ashutosh Behre, Manager
                    </td>
                    <td className="border px-4 py-3">
                      Beauty & Wellness Sector, Apparel, Electronics
                    </td>
                    <td className="border px-4 py-3">200</td>
                    <td className="border px-4 py-3">14000-18000</td>
                    <td className="border px-4 py-3">Pan India</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-3">
                      Sai Traders
                      <br />
                      Shivaji Nagar, Greencity, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr. Sourabh Rai, Propwritter
                      <br />
                      Mob-8770653328
                    </td>
                    <td className="border px-4 py-3">Electronics</td>
                    <td className="border px-4 py-3">60</td>
                    <td className="border px-4 py-3">12000-15000</td>
                    <td className="border px-4 py-3">Madhya Pradesh</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-3">
                      Darshan Texyarn Limited
                      <br />
                      Near Indore Sev bhandar, Garha road, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr. Sunil Jain, Manager
                      <br />
                      Mob-6266016163
                    </td>
                    <td className="border px-4 py-3">Apparel</td>
                    <td className="border px-4 py-3">70</td>
                    <td className="border px-4 py-3">12000-15000</td>
                    <td className="border px-4 py-3">Madhya Pradesh</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-3">
                      Vasundhara vikas Seva Samiti
                      <br />H No 333, Jai Nagar, Jabalpur(MP)
                    </td>
                    <td className="border px-4 py-3">
                      Mr S.K. Jain, President
                      <br />
                      Mob-94065-68453
                    </td>
                    <td className="border px-4 py-3">
                      Beauty & Wellness Sector, Apparel
                    </td>
                    <td className="border px-4 py-3">120</td>
                    <td className="border px-4 py-3">13000-16000</td>
                    <td className="border px-4 py-3">Pan India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sector-wise Breakdown */}
        <div className="bg-white p-8 rounded-lg shadow mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sector-wise Placement Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Electronics
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5+ partner companies</li>
                  <li>• 380+ positions available</li>
                  <li>• Salary range: ₹12,000-16,000</li>
                  <li>• Locations across Madhya Pradesh and Pan India</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Beauty & Wellness
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 6+ partner organizations</li>
                  <li>• 870+ positions available</li>
                  <li>• Salary range: ₹12,000-18,000</li>
                  <li>• Primarily Pan India locations</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Apparel
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4+ partner companies</li>
                  <li>• 310+ positions available</li>
                  <li>• Salary range: ₹12,000-17,500</li>
                  <li>• Locations in Madhya Pradesh and Pan India</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Placement Process */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Placement Process
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              At NETCOM SOCIETY, we have a structured placement process designed
              to prepare students for the job market and connect them with
              suitable employment opportunities across various sectors including
              Electronics, Beauty & Wellness, and Apparel industries.
            </p>
            <p>
              Our industry partnerships ensure that students receive relevant
              training and are placed in positions that match their skills and
              career aspirations. The salary ranges offered by our partner
              companies are competitive and provide excellent starting
              opportunities for our graduates.
            </p>
            <p>
              We maintain strong relationships with our industry partners to
              ensure continuous placement opportunities for our students and to
              stay updated with the latest industry requirements and trends.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
