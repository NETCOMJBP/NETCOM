import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function CertificatesPage() {
  const certificates = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      image: "/images/certificate1.jpg",
      issuer: "International Organization for Standardization",
    },
    {
      title: "NSDC Partnership",
      description:
        "National Skill Development Corporation Certified Training Partner",
      image: "/images/certificate2.jpg",
      issuer: "National Skill Development Corporation",
    },
    {
      title: "ESTABLISHMENT CERTIFICATE",
      description: "Established in the year 2001",
      image: "/images/certificate3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Certificates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NETCOM SOCIETY is proud to be recognized by various national and
            international organizations for our commitment to quality education
            and training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {certificates.map((certificate, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full flex items-center justify-center p-4 bg-white">
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  width={400}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {certificate.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>Issued by: {certificate.issuer}</p>
                      <p>Year: {certificate.year}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Our Certifications Matter
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              At NETCOM SOCIETY, we believe in maintaining the highest standards
              of education and training. Our certifications and accreditations
              are a testament to our commitment to quality and excellence.
            </p>
            <p>
              These certifications ensure that our courses and training programs
              meet industry standards and are recognized by employers across
              sectors. They also enable us to provide our students with globally
              recognized certifications that enhance their employability.
            </p>
            <p>
              We continuously strive to expand our partnerships and
              accreditations to offer the most relevant and up-to-date training
              programs to our students.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
