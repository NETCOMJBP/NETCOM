import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeatureBox from "@/components/feature-box";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "CERTIFICATES",
      description: "View our professional certifications and accreditations",
      link: "/certificates",
      icon: "Certificate",
    },
    {
      title: "STUDENT DATA",
      description:
        "Access comprehensive student records and program statistics",
      link: "/student-data",
      icon: "Users",
    },
    {
      title: "SKILL TRAINING WORK",
      description: "Explore our specialized skill development programs",
      link: "/skill-training",
      icon: "GraduationCap",
    },
    {
      title: "EXPERIENCE",
      description: "Discover our years of experience in the education sector",
      link: "/experience",
      icon: "Clock",
    },
    {
      title: "TOT CERTIFIED TRAINER",
      description: "Meet our certified Training of Trainers professionals",
      link: "/tot-trainers",
      icon: "Award",
    },
    {
      title: "PROJECT IMPLEMENTATION",
      description: "See our successfully implemented educational projects",
      link: "/projects",
      icon: "Briefcase",
    },
    {
      title: "COMPANIES FOR PLACEMENT",
      description: "View our industry partners for student placements",
      link: "/placements",
      icon: "Building",
    },
    {
      title: "PHOTOS",
      description: "Browse through our gallery of events and activities",
      link: "/photos",
      icon: "Image",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              NETCOM SOCIETY
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Empowering individuals through quality education and skill
                development. We are committed to excellence in training and
                creating opportunities for growth.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="/about"> Learn More</Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Introduction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                NETCOM SOCIETY is a premier educational institution dedicated to
                providing quality education and skill development training to
                students and professionals. Established with a vision to bridge
                the gap between education and industry requirements, we have
                been instrumental in shaping careers and transforming lives.
              </p>
              <p>
                Our comprehensive training programs, certified courses, and
                industry partnerships ensure that our students are well-equipped
                with the knowledge and skills required to excel in their chosen
                fields. With a team of experienced trainers and modern
                facilities, we provide an optimal learning environment for all
                our students.
              </p>
              <p>
                At NETCOM SOCIETY, we believe in the power of education to
                transform lives and communities. Our commitment to excellence,
                innovation, and student success has made us a trusted name in
                the education sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join NETCOM SOCIETY today and take the first step towards a
            successful career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NETCOM SOCIETY</h3>
              <p className="text-gray-400">
                Empowering individuals through quality education and skill
                development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                11/1,2nd Floor,Near Jyoti Cinema,Napier Town,
                <br />
                Jabalpur(MP) Pin-482001
                <br />
                <a
                  href="mailto:info@netcosociety.com"
                  className="hover:text-white"
                >
                  netcomsocietygithub@gmail.com
                </a>
                <br />
                <a href="tel:+1234567890" className="hover:text-white">
                  +91 9630646511
                </a>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} NETCOM SOCIETY. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
