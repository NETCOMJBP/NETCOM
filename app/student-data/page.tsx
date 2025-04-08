"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Users, GraduationCap, ClipboardList } from "lucide-react"

export default function StudentDataPage() {
  const [selectedYear, setSelectedYear] = useState("2024")

  // Student data for 2024
  const studentData2024 = [
    {
      id: 1,
      name: "Priya Patel",
      regNo: "R240000344",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 2,
      name: "Tanish Kori",
      regNo: "R240000346",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 3,
      name: "Vaishnavi Jha",
      regNo: "R240000347",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 4,
      name: "Vikas Gotiya",
      regNo: "R240000349",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 5,
      name: "Kanishka Jha",
      regNo: "R240000391",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 6,
      name: "Annapurna Dahiya",
      regNo: "R240000395",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 7,
      name: "Shweta",
      regNo: "R240000396",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 8,
      name: "Shikha Haldkar",
      regNo: "R240000397",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 9,
      name: "Kajal Patel",
      regNo: "R240000398",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 10,
      name: "Neha Singh",
      regNo: "R240000435",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 11,
      name: "Yashi Sahu",
      regNo: "R240000440",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 12,
      name: "Ankit Choudhary",
      regNo: "R240000441",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 13,
      name: "Mohit Patel",
      regNo: "R240000445",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 14,
      name: "Shubham Gupta",
      regNo: "R240000574",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 15,
      name: "Natasha Vishwakarma",
      regNo: "R240000578",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 16,
      name: "Umang Seth",
      regNo: "R240000582",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 17,
      name: "Yuvraj Seth",
      regNo: "R240000584",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 18,
      name: "Mihir Bhowmik",
      regNo: "R240000595",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 19,
      name: "Mansi Kapoor",
      regNo: "R240000599",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 20,
      name: "Sunaina Prajapati",
      regNo: "R240000619",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 21,
      name: "Manju Kumari",
      regNo: "R240000693",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 22,
      name: "Surbhi Kumari Dhusiya",
      regNo: "R240000694",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 23,
      name: "Shivani Katre",
      regNo: "R240000696",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 24,
      name: "Ajeet Tiwari",
      regNo: "R240000697",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 25,
      name: "Gagan Chakrawarti",
      regNo: "R240000754",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 26,
      name: "Prerna Goswami",
      regNo: "R240000757",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 27,
      name: "Swati Sahu",
      regNo: "R240000759",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 28,
      name: "Ayush Vishwakarma",
      regNo: "R240000765",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 29,
      name: "Santoshi",
      regNo: "R240000774",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 30,
      name: "Shweta Burman",
      regNo: "R240000775",
      startDate: "01/04/2024",
      endDate: "30/04/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
  ]

  // Student data for 2023
  const studentData2023 = [
    {
      id: 1,
      name: "Jyoti Vishwakarma",
      regNo: "R230012883",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 2,
      name: "Prince Kumar",
      regNo: "R230012982",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 3,
      name: "Sanjana Barmana",
      regNo: "R230012935",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 4,
      name: "Neelam Kachhi",
      regNo: "R230012924",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 5,
      name: "Ankit Kachhi",
      regNo: "R230012946",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 6,
      name: "Sourabh Kumar Kachhi",
      regNo: "R230012948",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 7,
      name: "Ananya Patel",
      regNo: "R230012959",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 8,
      name: "Farheen Bano",
      regNo: "R230013047",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 9,
      name: "Akshita Mishra",
      regNo: "R230012971",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 10,
      name: "Aman",
      regNo: "R230012967",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 11,
      name: "Varsha Vishwakarma",
      regNo: "R230012960",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 12,
      name: "Seeta Thakur",
      regNo: "R230013054",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 13,
      name: "Afreen Bano",
      regNo: "R230013048",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 14,
      name: "Soniya Kachhi",
      regNo: "R230012969",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 15,
      name: "Sourabh Dubey",
      regNo: "R230012977",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 16,
      name: "Naval Kishor",
      regNo: "R230012979",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 17,
      name: "Ayush Dubey",
      regNo: "R230012980",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 18,
      name: "Shekhar",
      regNo: "R230012965",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 19,
      name: "Harsh",
      regNo: "R230012963",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 20,
      name: "Asif Jamal Khan",
      regNo: "R230012961",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 21,
      name: "Rashi Sunoriya",
      regNo: "R230012904",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 22,
      name: "Ruby Baheliya",
      regNo: "R230013058",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 23,
      name: "Neetesh Rajak",
      regNo: "R230012976",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 24,
      name: "Geeta Thakur",
      regNo: "R230013053",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 25,
      name: "Sourabh Kesharwani",
      regNo: "R230013049",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 26,
      name: "Shyam Sundar Kori",
      regNo: "R230013045",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 27,
      name: "Ved Kumar Patel",
      regNo: "R230013044",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 28,
      name: "Vishwas Patel",
      regNo: "R230013043",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 29,
      name: "Sameer Kurmi",
      regNo: "R230013041",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
    {
      id: 30,
      name: "Adarsh Patel",
      regNo: "R230013042",
      startDate: "01/01/2024",
      endDate: "30/01/2024",
      supervisor: "Amit Jain",
      position: "Owner",
      jobRole: "F & B Service",
    },
  ]

  const displayData = selectedYear === "2024" ? studentData2024 : studentData2023

  const keyMetrics = [
    {
      title: "Total Students",
      value: "30",
      description: selectedYear === "2024" ? "Food & Beverage Service 2024" : "Food & Beverage Service 2023",
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Training Program",
      value: "F & B Service",
      description: "Industry Standard Training",
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Registration Period",
      value: selectedYear === "2024" ? "April 2024" : "January 2024",
      description: "Month of Registration",
      icon: <ClipboardList className="h-8 w-8 text-orange-600" />,
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Data</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NETCOM SOCIETY maintains comprehensive records of all students enrolled in our various training programs.
            View student information organized by year.
          </p>
        </div>

        {/* Year Selection */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-xs">
            <label htmlFor="year-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select Year
            </label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger id="year-select" className="w-full">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Image Preview */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-[300px] w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
            <Image
              src={selectedYear === "2024" ? "/images/food-beverage-2024.png" : "/images/food-beverage-2023.png"}
              alt={`Food & Beverage Service ${selectedYear} Data`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium text-gray-600">{metric.title}</CardTitle>
                  {metric.icon}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Data Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Food & Beverage Service {selectedYear}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-3 text-left">S.No.</th>
                    <th className="border px-4 py-3 text-left">Name of the Candidate</th>
                    <th className="border px-4 py-3 text-left">Registration No.</th>
                    <th className="border px-4 py-3 text-left">OJT Start Date</th>
                    <th className="border px-4 py-3 text-left">OJT End Date</th>
                    <th className="border px-4 py-3 text-left">Name</th>
                    <th className="border px-4 py-3 text-left">Post</th>
                    <th className="border px-4 py-3 text-left">Job Role</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((student) => (
                    <tr key={student.id} className={student.id % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border px-4 py-3">{student.id}</td>
                      <td className="border px-4 py-3">{student.name}</td>
                      <td className="border px-4 py-3">{student.regNo}</td>
                      <td className="border px-4 py-3">{student.startDate}</td>
                      <td className="border px-4 py-3">{student.endDate}</td>
                      <td className="border px-4 py-3">{student.supervisor}</td>
                      <td className="border px-4 py-3">{student.position}</td>
                      <td className="border px-4 py-3">{student.jobRole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Program Overview */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Food & Beverage Service Program</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Our Food & Beverage Service program is designed to equip students with the skills and knowledge needed to
              excel in the hospitality industry. The program covers all aspects of food and beverage service, including
              customer service, menu knowledge, beverage service, and event management.
            </p>
            <p>
              As part of the program, students undergo On-the-Job Training (OJT) under the supervision of industry
              professionals. This hands-on experience allows them to apply their classroom learning in real-world
              settings and develop practical skills valued by employers.
            </p>
            <p>
              Upon completion of the program, students receive certification that is recognized by the hospitality
              industry. Our high placement rate in this sector is a testament to the quality of our training and the
              industry relevance of our curriculum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

