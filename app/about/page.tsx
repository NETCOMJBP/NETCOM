import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About NETCOM SOCIETY</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our history, mission, vision, and the values that drive
            us forward.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At NETCOM SOCIETY, our mission is to provide quality education
                that empowers students to excel academically and develop into
                responsible global citizens. We strive to create a nurturing
                environment that fosters critical thinking, creativity, and
                personal growth.
              </p>
              <p className="text-gray-600">
                We are committed to maintaining high academic standards while
                ensuring that our teaching methodologies evolve with changing
                times and technological advancements.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                We envision NETCOM SOCIETY as a leading educational institution
                recognized globally for its academic excellence, innovative
                teaching approaches, and commitment to holistic development of
                students.
              </p>
              <p className="text-gray-600">
                We aim to create future leaders who are not only academically
                proficient but also socially conscious, ethically grounded, and
                equipped with the skills needed to navigate an increasingly
                complex world.
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our History
          </h2>
          <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="NETCO SOCIETY History"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">
              Founded in 2001, NETCOM SOCIETY began as a small educational
              initiative with a vision to provide quality education accessible
              to all. What started as a modest institution with just a handful
              of students and dedicated educators has now grown into a
              comprehensive educational society serving thousands of students.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we have expanded our facilities, diversified our
              academic programs, and strengthened our commitment to educational
              excellence. Each milestone in our journey reflects our unwavering
              dedication to our founding principles and our ability to adapt to
              the evolving educational landscape.
            </p>
            <p className="text-gray-600">
              Today, NETCOM SOCIETY stands as a testament to the vision of its
              founders and the collective effort of all who have been part of
              this remarkable journey. We continue to build on our rich legacy
              while embracing innovation and forward-thinking approaches to
              education.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in all aspects of education, from academic programs to extracurricular activities.",
              },
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of honesty, ethics, and transparency in all our interactions and practices.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovative teaching methodologies and technologies to enhance the learning experience.",
              },
              {
                title: "Inclusivity",
                description:
                  "We foster an inclusive environment that respects diversity and promotes equal opportunities for all.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of collaboration and encourage teamwork among students, faculty, and staff.",
              },
              {
                title: "Social Responsibility",
                description:
                  "We instill a sense of social responsibility and encourage community service and environmental stewardship.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Educational Community
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of an institution that values academic excellence, personal
            growth, and community engagement. Discover the NETCOM SOCIETY
            difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Contact Us</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} NETCOM SOCIETY. All rights
            reserved.
          </p>
          <p className="mt-2">
            <a href="/" className="text-gray-400 hover:text-white">
              Home
            </a>{" "}
            |
            <a href="/about" className="text-gray-400 hover:text-white ml-4">
              About
            </a>{" "}
            |
            <a href="/contact" className="text-gray-400 hover:text-white ml-4">
              Contact
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
