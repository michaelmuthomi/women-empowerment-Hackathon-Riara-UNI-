import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Bell, Calendar, MessageSquare, Search, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Sidebar from '@/components/Sidebar'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome back, Jane!
              </h1>
              <p className="text-gray-600">Software Engineer | Mentor</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon">
              <MessageSquare className="h-4 w-4" />
              <span className="sr-only">Messages</span>
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Quick Stats */}
          <Card className='col-span-2'>
            <CardHeader>
              <CardTitle>Your Impact</CardTitle>
              <CardDescription>
                See how you're making a difference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-700">12</p>
                  <p className="text-sm text-gray-600">Mentees</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700">35</p>
                  <p className="text-sm text-gray-600">Connections</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700">5</p>
                  <p className="text-sm text-gray-600">Events Attended</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Don't miss out on these opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-700" />
                  <div>
                    <p className="font-medium">Women in AI Workshop</p>
                    <p className="text-sm text-gray-600">
                      March 15, 2024 | 2:00 PM
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-700" />
                  <div>
                    <p className="font-medium">Tech Leadership Panel</p>
                    <p className="text-sm text-gray-600">
                      March 22, 2024 | 6:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Community Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Community Buzz</CardTitle>
              <CardDescription>
                Recent activity from your network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="Sarah" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah C. shared an article</p>
                    <p className="text-sm text-gray-600">
                      "Breaking the Glass Ceiling in Tech"
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="Emily" />
                    <AvatarFallback>EL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      Emily L. is looking for a mentor
                    </p>
                    <p className="text-sm text-gray-600">
                      in Full Stack Development
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Recommended Connections */}
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle>Grow Your Network</CardTitle>
              <CardDescription>
                Connect with these inspiring women in tech
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'Alicia Wong',
                    role: 'UX Designer',
                    company: 'TechCorp',
                  },
                  {
                    name: 'Maria Rodriguez',
                    role: 'Data Scientist',
                    company: 'AI Innovations',
                  },
                  {
                    name: 'Zoe Chen',
                    role: 'Cybersecurity Analyst',
                    company: 'SecureNet',
                  },
                ].map((person) => (
                  <div
                    key={person.name}
                    className="flex flex-col space-x-4"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt={person.name}
                      />
                      <AvatarFallback>
                        {person.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-gray-600">
                        {person.role} at {person.company}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      <Users className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
