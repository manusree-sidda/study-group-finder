"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CreateGroup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    courseName: "",
    courseCode: "",
    date: "",
    time: "",
    location: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log(formData)
    // Redirect to home page after submission
    router.push("/")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#500000]">Create a New Study Group</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="courseName">Course Name</Label>
          <Input id="courseName" name="courseName" value={formData.courseName} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="courseCode">Course Code</Label>
          <Input id="courseCode" name="courseCode" value={formData.courseCode} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="time">Time</Label>
          <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full bg-[#500000] hover:bg-[#400000]">
          Create Study Group
        </Button>
      </form>
    </div>
  )
}

