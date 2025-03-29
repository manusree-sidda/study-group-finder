"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JoinRoom() {
  const [roomType, setRoomType] = useState("existing")

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Join a Study Room</CardTitle>
          <CardDescription className="text-center">Connect with fellow Aggies and study together</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant={roomType === "existing" ? "default" : "outline"}
                className={roomType === "existing" ? "bg-[#500000]" : ""}
                onClick={() => setRoomType("existing")}
              >
                Join Existing
              </Button>
              <Button
                variant={roomType === "new" ? "default" : "outline"}
                className={roomType === "new" ? "bg-[#500000]" : ""}
                onClick={() => setRoomType("new")}
              >
                Create New
              </Button>
            </div>

            {roomType === "existing" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="course">Select Course</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csce121">CSCE 120 - Program Design and Concept</SelectItem>
                      <SelectItem value="math151">MATH 151 - Engineering Mathematics I</SelectItem>
                      <SelectItem value="phys218">PHYS 216 - Experimental Physics and Engineering Lab II</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="room">Select Room</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a room" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="room1">General Study Room (5 students)</SelectItem>
                      <SelectItem value="room2">Exam Prep (3 students)</SelectItem>
                      <SelectItem value="room3">Homework Help (2 students)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="course">Select Course</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csce121">CSCE 120 - Program Design and Concept</SelectItem>
                      <SelectItem value="math151">MATH 151 - Engineering Mathematics I</SelectItem>
                      <SelectItem value="phys218">PHYS 216 - Experimental Physics and Engineering Lab II</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="roomName">Room Name</Label>
                  <Input id="roomName" placeholder="Enter a name for your room" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="What will you be studying?" />
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#500000] hover:bg-[#400000]">
            {roomType === "existing" ? "Join Room" : "Create Room"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

