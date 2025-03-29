import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Clock, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#500000] to-[#8B0000] text-transparent bg-clip-text">
        Study together, anytime
      </h1>
      <p className="text-xl mb-8 text-gray-600">
        Join virtual study rooms with fellow Aggies and boost your productivity
      </p>
      <Link href="/join-room">
        <Button className="bg-[#500000] hover:bg-[#400000] text-white px-8 py-3 text-lg rounded-full">
          Join a room
        </Button>
      </Link>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <Users className="w-12 h-12 mb-4 text-[#500000]" />
          <h2 className="text-2xl font-bold mb-2">70,000k</h2>
          <p className="text-gray-600">Aggies</p>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-12 h-12 mb-4 text-[#500000]" />
          <h2 className="text-2xl font-bold mb-2">100+</h2>
          <p className="text-gray-600">Study hours logged</p>
        </div>
        <div className="flex flex-col items-center">
          <GraduationCap className="w-12 h-12 mb-4 text-[#500000]" />
          <h2 className="text-2xl font-bold mb-2">10+</h2>
          <p className="text-gray-600">Courses covered</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Live Study Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">CSCE 120 Study Room</h3>
              <p className="text-sm text-gray-600 mb-4">Program Design and Concepts</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>5 students</span>
                <span>2h 30m</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

