import { Card, CardContent } from "@/components/ui/card";

export function StorySection() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Card
        className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-gray-700/30"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(15,15,15,0.6) 100%)",
        }}
      >
        <CardContent className="p-0">
          <h4 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4">
            My Story
          </h4>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
            I&apos;m a passionate Computer Science student with a growing love
            for web development. My journey started with curiosity about how
            websites work, and it has evolved into a dedicated pursuit of
            creating innovative digital solutions.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Currently learning modern web technologies like React, Next.js, and
            TypeScript. I&apos;m always eager to take on new challenges and
            expand my skillset through hands-on projects and continuous
            learning.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <Card
          className="p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center backdrop-blur-sm border border-gray-700/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(0,0,0,0.9) 100%)",
          }}
        >
          <CardContent className="p-0">
            <div className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 sm:mb-2">
              15+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Projects Built
            </div>
          </CardContent>
        </Card>

        <Card
          className="p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center backdrop-blur-sm border border-gray-700/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(0,0,0,0.9) 100%)",
          }}
        >
          <CardContent className="p-0">
            <div className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 sm:mb-2">
              3+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Years Learning
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
