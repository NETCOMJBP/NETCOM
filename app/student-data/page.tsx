"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, GraduationCap, ClipboardList } from "lucide-react";

export default function StudentDataPage() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCourse, setSelectedCourse] = useState("food-beverage");

  // Food & Beverage 2024 data (Screenshot 133)
  const foodBeverage2024 = [
    { id: 1, name: "Priya Patel", regNo: "R240000344" },
    { id: 2, name: "Tanish Kori", regNo: "R240000346" },
    { id: 3, name: "Vaishnavi Jha", regNo: "R240000347" },
    { id: 4, name: "Vikas Gotiya", regNo: "R240000349" },
    { id: 5, name: "Kanishka Jha", regNo: "R240000391" },
    { id: 6, name: "Annapurna Dahiya", regNo: "R240000395" },
    { id: 7, name: "Shweta", regNo: "R240000396" },
    { id: 8, name: "Shikha Haldkar", regNo: "R240000397" },
    { id: 9, name: "Kajal Patel", regNo: "R240000398" },
    { id: 10, name: "Neha Singh", regNo: "R240000435" },
    { id: 11, name: "Yashi Sahu", regNo: "R240000440" },
    { id: 12, name: "Ankit Choudhary", regNo: "R240000441" },
    { id: 13, name: "Mohit Patel", regNo: "R240000445" },
    { id: 14, name: "Shubham Gupta", regNo: "R240000574" },
    { id: 15, name: "Natasha Vishwakarma", regNo: "R240000578" },
    { id: 16, name: "Umang Seth", regNo: "R240000582" },
    { id: 17, name: "Yuvraj Seth", regNo: "R240000584" },
    { id: 18, name: "Mihir Bhowmik", regNo: "R240000595" },
    { id: 19, name: "Mansi Kapoor", regNo: "R240000599" },
    { id: 20, name: "Sunaina Prajapati", regNo: "R240000619" },
    { id: 21, name: "Manju Kumari", regNo: "R240000693" },
    { id: 22, name: "Surbhi Kumari Dhusiya", regNo: "R240000694" },
    { id: 23, name: "Shivani Katre", regNo: "R240000696" },
    { id: 24, name: "Ajeet Tiwari", regNo: "R240000697" },
    { id: 25, name: "Gagan Chakrawarti", regNo: "R240000754" },
    { id: 26, name: "Prerna Goswami", regNo: "R240000757" },
    { id: 27, name: "Swati Sahu", regNo: "R240000759" },
    { id: 28, name: "Ayush Vishwakarma", regNo: "R240000765" },
    { id: 29, name: "Santoshi", regNo: "R240000774" },
    { id: 30, name: "Shweta Burman", regNo: "R240000775" },
  ];

  // Food & Beverage 2023 data (Screenshot 131)
  const foodBeverage2023 = [
    { id: 1, name: "Jyoti Vishwakarma", regNo: "R230012883" },
    { id: 2, name: "Prince Kumar", regNo: "R230012982" },
    { id: 3, name: "Sanjana Barmana", regNo: "R230012935" },
    { id: 4, name: "Neelam Kachhi", regNo: "R230012924" },
    { id: 5, name: "Ankit Kachhi", regNo: "R230012946" },
    { id: 6, name: "Sourabh Kumar Kachhi", regNo: "R230012948" },
    { id: 7, name: "Ananya Patel", regNo: "R230012959" },
    { id: 8, name: "Farheen Bano", regNo: "R230013047" },
    { id: 9, name: "Akshita Mishra", regNo: "R230012971" },
    { id: 10, name: "Aman", regNo: "R230012967" },
    { id: 11, name: "Varsha Vishwakarma", regNo: "R230012960" },
    { id: 12, name: "Seeta Thakur", regNo: "R230013054" },
    { id: 13, name: "Afreen Bano", regNo: "R230013048" },
    { id: 14, name: "Soniya Kachhi", regNo: "R230012969" },
    { id: 15, name: "Sourabh Dubey", regNo: "R230012977" },
    { id: 16, name: "Naval Kishor", regNo: "R230012979" },
    { id: 17, name: "Ayush Dubey", regNo: "R230012980" },
    { id: 18, name: "Shekhar", regNo: "R230012965" },
    { id: 19, name: "Harsh", regNo: "R230012963" },
    { id: 20, name: "Asif Jamal Khan", regNo: "R230012961" },
    { id: 21, name: "Rashi Sunoriya", regNo: "R230012904" },
    { id: 22, name: "Ruby Baheliya", regNo: "R230013058" },
    { id: 23, name: "Neetesh Rajak", regNo: "R230012976" },
    { id: 24, name: "Geeta Thakur", regNo: "R230013053" },
    { id: 25, name: "Sourabh Kesharwani", regNo: "R230013049" },
    { id: 26, name: "Shyam Sundar Kori", regNo: "R230013045" },
    { id: 27, name: "Ved Kumar Patel", regNo: "R230013044" },
    { id: 28, name: "Vishwas Patel", regNo: "R230013043" },
    { id: 29, name: "Sameer Kurmi", regNo: "R230013041" },
    { id: 30, name: "Adarsh Patel", regNo: "R230013042" },
  ];

  // Food & Beverage 2022 data (Screenshot 130)
  const foodBeverage2022 = [
    { id: 1, name: "Anjali Karsa", regNo: "R220009472" },
    { id: 2, name: "Farahnaaz", regNo: "R220009634" },
    { id: 3, name: "Rachna Gupta", regNo: "R220009088" },
    { id: 4, name: "Shereen Qureshi", regNo: "R220009159" },
    { id: 5, name: "Mehek kuraishi", regNo: "R220009161" },
    { id: 6, name: "Atul Gupta", regNo: "R220009284" },
    { id: 7, name: "Kanchan Gupta", regNo: "R220009557" },
    { id: 8, name: "Navmita Singh", regNo: "R220009554" },
    { id: 9, name: "Shahin Parveen", regNo: "R220009289" },
    { id: 10, name: "Sadap Khan", regNo: "R220009290" },
    { id: 11, name: "Priyanshu Patel", regNo: "R220009435" },
    { id: 12, name: "Aarti Choudhary", regNo: "R220009287" },
    { id: 13, name: "Aaysha Fatima", regNo: "R220009437" },
    { id: 14, name: "Sajiya Bano", regNo: "R220009559" },
    { id: 15, name: "Nilofer Khan", regNo: "R220009561" },
    { id: 16, name: "Shagufta Begam", regNo: "R220009563" },
    { id: 17, name: "Anuradha Gupta", regNo: "R220009069" },
    { id: 18, name: "Shruti Gupta", regNo: "R220009685" },
    { id: 19, name: "Mayank Gupta", regNo: "R220009367" },
    { id: 20, name: "Muskan Mansoori", regNo: "R220009688" },
    { id: 21, name: "Karishma Yadav", regNo: "R220009710" },
    { id: 22, name: "Deepika Kashyap", regNo: "R220009714" },
    { id: 23, name: "Shraddha Upadhyay", regNo: "R220009713" },
    { id: 24, name: "Neha Rohra", regNo: "R220009703" },
    { id: 25, name: "Chandni Badhwani", regNo: "R220009704" },
    { id: 26, name: "Fareen Jahan", regNo: "R220009712" },
    { id: 27, name: "Humera mansoori", regNo: "R220009709" },
    { id: 28, name: "Fareen Bari", regNo: "R220009690" },
    { id: 29, name: "Shivani Yadav", regNo: "R220009717" },
    { id: 30, name: "Shivani Saini", regNo: "R220009718" },
  ];

  // Front Office Associate 2024 data (Screenshot 134)
  const frontOffice2024 = [
    { id: 1, name: "Anshu Ladiya", regNo: "R240000002" },
    { id: 2, name: "Khushboo Ladiya", regNo: "R240000004" },
    { id: 3, name: "Anchal Patel", regNo: "R240000005" },
    { id: 4, name: "Priya Rajak", regNo: "R240000006" },
    { id: 5, name: "Aysha Bano", regNo: "R240000007" },
    { id: 6, name: "Shreya Dehariya", regNo: "R240000009" },
    { id: 7, name: "Sakshi Sahu", regNo: "R240000012" },
    { id: 8, name: "Raj Pratap Singh Chouhan", regNo: "R240000014" },
    { id: 9, name: "Dev Barman", regNo: "R240000015" },
    { id: 10, name: "Nikhil Sen", regNo: "R240000016" },
    { id: 11, name: "Ankita Jain", regNo: "R240000018" },
    { id: 12, name: "Reetika Thakur", regNo: "R240000019" },
    { id: 13, name: "Mansi Thakur", regNo: "R240000020" },
    { id: 14, name: "Pooja Gayakwad", regNo: "R240000039" },
    { id: 15, name: "Neelam Sharma", regNo: "R240000040" },
    { id: 16, name: "Neeti Jha", regNo: "R240000042" },
    { id: 17, name: "Neha Choudhary", regNo: "R240000048" },
    { id: 18, name: "Taniya Choudhary", regNo: "R240000053" },
    { id: 19, name: "Mohanlal Jhariya", regNo: "R240000054" },
    { id: 20, name: "Varun Kumar Ahirwar", regNo: "R240000056" },
    { id: 21, name: "Shivani Choudhary", regNo: "R240000063" },
    { id: 22, name: "Sakshi Choudhary", regNo: "R240000070" },
    { id: 23, name: "Pankaj Bhunjwa", regNo: "R240000071" },
    { id: 24, name: "Satyam Prajapati", regNo: "R240000073" },
    { id: 25, name: "Shubhi Gupta", regNo: "R240000124" },
    { id: 26, name: "Raja Choudhary", regNo: "R240000140" },
    { id: 27, name: "Jyoti Pandey", regNo: "R240000201" },
    { id: 28, name: "Archana Kushwaha", regNo: "R240000216" },
    { id: 29, name: "Manshi Lodhi", regNo: "R240000226" },
    { id: 30, name: "Pratyush Mehra", regNo: "R240000256" },
  ];

  // Front Office Associate 2023 data (Screenshot 132)
  const frontOffice2023 = [
    { id: 1, name: "Neelophar Khan", regNo: "R230012888" },
    { id: 2, name: "Shubham Rajbhar", regNo: "R230012900" },
    { id: 3, name: "Himanshu Soni", regNo: "R230012909" },
    { id: 4, name: "Arvind Yadav", regNo: "R230012914" },
    { id: 5, name: "Afsha Anjum", regNo: "R230013001" },
    { id: 6, name: "Raksha Naseene", regNo: "R230013004" },
    { id: 7, name: "Himani Rawat", regNo: "R230013006" },
    { id: 8, name: "Abhishek Maravi", regNo: "R230013010" },
    { id: 9, name: "Aayushi Saini", regNo: "R230012998" },
    { id: 10, name: "Rame Singh", regNo: "R230013011" },
    { id: 11, name: "Sahil Kariyar", regNo: "R230013012" },
    { id: 12, name: "Harshit Gupta", regNo: "R230013013" },
    { id: 13, name: "Krishna Saxena", regNo: "R230013015" },
    { id: 14, name: "Mohini Kachhi", regNo: "R230013016" },
    { id: 15, name: "Bharti Bariba", regNo: "R230013018" },
    { id: 16, name: "Arti Sen", regNo: "R230013020" },
    { id: 17, name: "Roshni Peepra", regNo: "R230013024" },
    { id: 18, name: "Simran Verma", regNo: "R230013027" },
    { id: 19, name: "Sakshi Gotiya", regNo: "R230013029" },
    { id: 20, name: "Varsha Kori", regNo: "R230013030" },
    { id: 21, name: "Rajani Sallam", regNo: "R230013031" },
    { id: 22, name: "Triveni Sharma", regNo: "R230013033" },
    { id: 23, name: "Arti Kushwaha", regNo: "R230013037" },
    { id: 24, name: "Neha Parte", regNo: "R230013038" },
    { id: 25, name: "Deeksha Kushwaha", regNo: "R230013039" },
    { id: 26, name: "Shital Verma", regNo: "R230013050" },
    { id: 27, name: "Suman Verma", regNo: "R230013051" },
    { id: 28, name: "Priyanka Rai", regNo: "R230013052" },
    { id: 29, name: "Sonam Burman", regNo: "R230013055" },
    { id: 30, name: "Shivani Gadari", regNo: "R230013057" },
  ];

  // Front Office Associate 2022 data (Screenshot 129)
  const frontOffice2022 = [
    { id: 1, name: "Monika Dubey", regNo: "R220009081" },
    { id: 2, name: "Heena Kousar", regNo: "R220009109" },
    { id: 3, name: "Shobhana", regNo: "R220009107" },
    { id: 4, name: "Umme Tyfa", regNo: "R220009110" },
    { id: 5, name: "Pooja Chouhan", regNo: "R220009106" },
    { id: 6, name: "Sanjana Vanshkar", regNo: "R220009102" },
    { id: 7, name: "Vaishnavi Solanki", regNo: "R220009094" },
    { id: 8, name: "Gouri Sahu", regNo: "R220009090" },
    { id: 9, name: "Shraddha Gupta", regNo: "R220009085" },
    { id: 10, name: "Zainab Parveen Chhipa", regNo: "R220009103" },
    { id: 11, name: "Bharti Kol", regNo: "R220009125" },
    { id: 12, name: "Jaya Kalyani", regNo: "R220009124" },
    { id: 13, name: "Tanisha Bano", regNo: "R220009123" },
    { id: 14, name: "Koushal", regNo: "R220009122" },
    { id: 15, name: "Jaya Gouri", regNo: "R220009121" },
    { id: 16, name: "Deepika Velu", regNo: "R220009120" },
    { id: 17, name: "Raveena Khare", regNo: "R220009219" },
    { id: 18, name: "Ram Pratap Singh Kushwaha", regNo: "R220009220" },
    { id: 19, name: "Shreya Shrivastava", regNo: "R220009221" },
    { id: 20, name: "Rishi Mishra", regNo: "R220009223" },
    { id: 21, name: "Babita Dehariya", regNo: "R220009280" },
    { id: 22, name: "Priyanshu Gupta", regNo: "R220009281" },
    { id: 23, name: "Muskan Shripal", regNo: "R220009162" },
    { id: 24, name: "Prachi Jha", regNo: "R220009376" },
    { id: 25, name: "Kriti Dehariya", regNo: "R220009377" },
    { id: 26, name: "Harsh Patel", regNo: "R220009371" },
    { id: 27, name: "Ranjeeta Rajput", regNo: "R220009384" },
    { id: 28, name: "Deepak Kushwaha", regNo: "R220009388" },
    { id: 29, name: "Kishan", regNo: "R220009375" },
    { id: 30, name: "Pratibha Shahi", regNo: "R220009099" },
  ];

  // Get the appropriate data based on course and year selection
  const getStudentData = () => {
    if (selectedCourse === "food-beverage") {
      switch (selectedYear) {
        case "2022":
          return foodBeverage2022;
        case "2023":
          return foodBeverage2023;
        case "2024":
          return foodBeverage2024;
        default:
          return foodBeverage2024;
      }
    } else {
      // Front Office Associate
      switch (selectedYear) {
        case "2022":
          return frontOffice2022;
        case "2023":
          return frontOffice2023;
        case "2024":
          return frontOffice2024;
        default:
          return frontOffice2024;
      }
    }
  };

  // Get course title for display
  const getCourseTitle = () => {
    return selectedCourse === "food-beverage"
      ? "Food & Beverage"
      : "Front Office Associate";
  };

  const displayData = getStudentData();

  const keyMetrics = [
    {
      title: "Total Students",
      value: "30",
      description: `${getCourseTitle()} ${selectedYear}`,
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Training Program",
      value: getCourseTitle(),
      description: "Industry Standard Training",
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Registration Period",
      value: selectedYear,
      description: "Year of Registration",
      icon: <ClipboardList className="h-8 w-8 text-orange-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Data
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NETCOM SOCIETY maintains comprehensive records of all students
            enrolled in our various training programs. View student information
            organized by course and year.
          </p>
        </div>

        {/* Course and Year Selection */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div>
            <label
              htmlFor="course-select"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Course
            </label>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger id="course-select" className="w-full">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                <SelectItem value="front-office">
                  Front Office Associate
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="year-select"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Year
            </label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger id="year-select" className="w-full">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium text-gray-600">
                    {metric.title}
                  </CardTitle>
                  {metric.icon}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Data Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              {getCourseTitle()} {selectedYear}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-3 text-left">S.No.</th>
                    <th className="border px-4 py-3 text-left">
                      Name of the Candidate
                    </th>
                    <th className="border px-4 py-3 text-left">
                      Registration No.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((student) => (
                    <tr
                      key={student.id}
                      className={
                        student.id % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="border px-4 py-3">{student.id}</td>
                      <td className="border px-4 py-3">{student.name}</td>
                      <td className="border px-4 py-3">{student.regNo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Program Overview */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {getCourseTitle()} Program
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {selectedCourse === "food-beverage" ? (
              <>
                <p>
                  Our Food & Beverage Service program is designed to equip
                  students with the skills and knowledge needed to excel in the
                  hospitality industry. The program covers all aspects of food
                  and beverage service, including customer service, menu
                  knowledge, beverage service, and event management.
                </p>
                <p>
                  As part of the program, students undergo On-the-Job Training
                  (OJT) under the supervision of industry professionals. This
                  hands-on experience allows them to apply their classroom
                  learning in real-world settings and develop practical skills
                  valued by employers.
                </p>
              </>
            ) : (
              <>
                <p>
                  The Front Office Associate program prepares students for
                  careers in hotel reception, customer service, and hospitality
                  management. Students learn essential skills including guest
                  relations, reservation systems, check-in/check-out procedures,
                  and hospitality software applications.
                </p>
                <p>
                  Our comprehensive training includes both theoretical knowledge
                  and practical experience through internships at partner hotels
                  and resorts. Graduates of this program are well-equipped to
                  handle the diverse responsibilities of front office operations
                  in the hospitality industry.
                </p>
              </>
            )}
            <p>
              Upon completion of the program, students receive certification
              that is recognized by the hospitality industry. Our high placement
              rate in this sector is a testament to the quality of our training
              and the industry relevance of our curriculum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
