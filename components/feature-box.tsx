"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import * as LucideIcons from "lucide-react"

interface FeatureBoxProps {
  title: string
  description: string
  link: string
  icon: keyof typeof LucideIcons
}

export default function FeatureBox({ title, description, link, icon }: FeatureBoxProps) {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.FileText

  return (
    <Link href={link} className="block transition-transform hover:scale-105">
      <Card className="h-full border-2 hover:border-blue-500 hover:shadow-lg transition-all">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

