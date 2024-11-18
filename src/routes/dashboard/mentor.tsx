import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Sidebar from '@/components/Sidebar'

export const Route = createFileRoute('/dashboard/mentor')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
      <div className="flex h-screen bg-gray-100 overflow-clip">
        <Sidebar />
        <FindAMentor />
      </div>
    
);
}

'use client'

import { Search, Filter, ChevronDown, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for mentors
const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    company: "TechCorp",
    experience: "10+ years",
    skills: ["React", "Node.js", "Python"],
    rating: 4.8,
    imageUrl: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Product Manager",
    company: "InnovateTech",
    experience: "8 years",
    skills: ["Product Strategy", "Agile", "UX Design"],
    rating: 4.9,
    imageUrl: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    about: "",
    role: "Data Scientist",
    company: "DataDriven Inc.",
    experience: "6 years",
    skills: ["Machine Learning", "Python", "SQL"],
    rating: 4.7,
    imageUrl: "/placeholder-user.jpg"
  }
]

export default function FindAMentor() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedSkill, setSelectedSkill] = React.useState("")

  const filteredMentors = mentors.filter(mentor => 
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSkill === "" || mentor.skills.includes(selectedSkill))
  )

  return (
    <div className="container mx-auto py-10 px-10 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Find a Mentor</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id}>
            <CardHeader>
              <article>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a>
                      <span className="absolute inset-0"></span>
                      {mentor.role}
                    </a>
                  </h3>
                  <p className="line-clamp-3 text-sm/6 text-gray-600">
                    {mentor.about}
                  </p>
                </div>
                <div className="relative mt-4 flex items-center gap-x-4">
                  <img
                    src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/Annunziata.jpg"
                    alt=""
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a>
                        <span className="absolute inset-0"></span>
                        Annunziata Kinya
                      </a>
                    </p>
                    <p className="text-gray-600">Android Engineer</p>
                  </div>
                </div>
              </article>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">
                Experience: {mentor.experience}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Request Mentorship</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No mentors found. Try adjusting your search criteria.
        </p>
      )}
    </div>
  );
}