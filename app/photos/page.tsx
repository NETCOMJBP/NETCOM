"use client";

import { Card, CardContent } from "@/components/ui/card";
import PhotoCarousel from "@/components/photo-carousel";

export default function PhotosPage() {
  // Campus image data
  const campusImages = [
    { src: "/images/food-beverage-2023.png", alt: "Campus Building" },
    { src: "/images/food-beverage-2024.png", alt: "Computer Lab" },
    { src: "/images/photo3.jpeg", alt: "Computer Lab" },
    { src: "/images/photo4.jpeg", alt: "Computer Lab" },
    { src: "/images/photo5.jpeg", alt: "Computer Lab" },
    { src: "/images/photo6.jpeg", alt: "Computer Lab" },
    { src: "/images/photo7.jpeg", alt: "Computer Lab" },
    { src: "/images/photo8.jpeg", alt: "Computer Lab" },
    { src: "/images/photo9.jpeg", alt: "Computer Lab" },
    { src: "/images/photo10.jpeg", alt: "Computer Lab" },
    { src: "/images/photo10 (2).jpeg", alt: "Computer Lab" },
    { src: "/images/photo11.jpeg", alt: "Computer Lab" },
    { src: "/images/photo12.jpeg", alt: "Computer Lab" },
    { src: "/images/photo13.jpeg", alt: "Computer Lab" },
    { src: "/images/photo14.jpeg", alt: "Computer Lab" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our campus through our photo gallery.
          </p>
        </div>

        <Card className="mb-16">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Campus Gallery
            </h2>
            <p className="text-gray-600 mb-6">
              Take a virtual tour of our state-of-the-art campus facilities,
              including classrooms, labs, library, and student areas.
            </p>
            <PhotoCarousel images={campusImages} />
          </CardContent>
        </Card>

        {/* Thumbnail Grid */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Photo Highlights
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {campusImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
