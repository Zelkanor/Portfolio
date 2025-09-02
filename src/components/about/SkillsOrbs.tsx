"use client";

import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, useMemo, Suspense } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiGit,
  SiPython,
  SiFigma,
  SiFramer,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiRedux,
  SiGraphql,
  SiPrisma,
  SiJest,
  SiEslint,
  SiLinux,
  SiNotion,
} from "react-icons/si";
import * as THREE from "three";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  level: number;
  category: "frontend" | "backend" | "misc";
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      className="group relative p-4 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black/60"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div
          className="relative transition-all duration-300 group-hover:scale-110"
          style={{
            color: skill.color,
            filter: isHovered ? `drop-shadow(0 0 12px ${skill.color})` : "none",
          }}
        >
          <Icon className="w-12 h-12" />
        </div>

        <div>
          <h3 className="font-semibold text-white text-sm mb-1">
            {skill.name}
          </h3>

          {/* Skill level indicators */}
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i < skill.level
                    ? "bg-current opacity-100"
                    : "bg-gray-600 opacity-40"
                }`}
                style={{
                  color: skill.color,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
  description: string;
}

function SkillSection({ title, skills, description }: SkillSectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

// 3D Quantum Computing Visualization
function QuantumVisualization() {
  const particlesRef = useRef<THREE.Points>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group>
      {/* Quantum Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
            count={200}
          />
        </bufferGeometry>
        <pointsMaterial color="#8B5CF6" size={0.02} transparent opacity={0.6} />
      </points>

      {/* Central Quantum Core */}
      <mesh ref={torusRef}>
        <torusGeometry args={[0.5, 0.1, 16, 32]} />
        <meshPhysicalMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>

      <Html center>
        <div className="text-center animate-pulse">
          <div className="text-2xl mb-2">🔬</div>
          <div className="text-purple-300 font-bold text-sm">
            Quantum Computing
          </div>
          <div className="text-purple-400 text-xs mt-1">
            Exploring quantum algorithms
          </div>
        </div>
      </Html>
    </group>
  );
}

function QuantumSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Quantum Computing
        </h3>
        <p className="text-gray-400 text-lg">
          Advanced Computing Research & Development
        </p>
      </div>

      {/* 3D Quantum Visualization */}
      <Card className="bg-black/40 border border-white/10 backdrop-blur-sm overflow-hidden relative group hover:border-purple-500/30 transition-all duration-500">
        <CardContent className="relative p-0">
          <div className="h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
              <ambientLight intensity={0.2} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#8B5CF6" />
              <pointLight
                position={[-5, -5, -5]}
                intensity={0.5}
                color="#4C1D95"
              />
              <Suspense fallback={null}>
                <QuantumVisualization />
              </Suspense>
            </Canvas>

            {/* Elegant content overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Bottom row - Three quantum concept cards */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {/* Quantum Algorithms */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 min-w-[180px]">
                  <div className="text-center">
                    <div className="text-4xl mb-3 filter drop-shadow-lg">
                      ⚛️
                    </div>
                    <div className="text-purple-200 font-bold text-base mb-1">
                      Algorithms
                    </div>
                    <div className="text-purple-300/70 text-xs">
                      Quantum speedup
                    </div>
                  </div>
                </div>

                {/* Superposition */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 min-w-[180px]">
                  <div className="text-center">
                    <div className="text-4xl mb-3 filter drop-shadow-lg">
                      🌀
                    </div>
                    <div className="text-blue-200 font-bold text-base mb-1">
                      Superposition
                    </div>
                    <div className="text-blue-300/70 text-xs">
                      Parallel states
                    </div>
                  </div>
                </div>

                {/* Entanglement */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 min-w-[180px]">
                  <div className="text-center">
                    <div className="text-4xl mb-3 filter drop-shadow-lg">
                      🔗
                    </div>
                    <div className="text-green-200 font-bold text-base mb-1">
                      Entanglement
                    </div>
                    <div className="text-green-300/70 text-xs">
                      Correlations
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle glow effects */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function SkillsOrbs() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills: Skill[] = [
    // Frontend
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      level: 5,
      category: "frontend",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#ffffff",
      level: 5,
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      level: 4,
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      level: 5,
      category: "frontend",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#06B6D4",
      level: 5,
      category: "frontend",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26",
      level: 5,
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      color: "#1572B6",
      level: 4,
      category: "frontend",
    },
    {
      name: "Three.js",
      icon: SiThreedotjs,
      color: "#ffffff",
      level: 3,
      category: "frontend",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "#764ABC",
      level: 4,
      category: "frontend",
    },
    {
      name: "Framer",
      icon: SiFramer,
      color: "#0055FF",
      level: 4,
      category: "frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      level: 4,
      category: "backend",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "#ffffff",
      level: 4,
      category: "backend",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791",
      level: 3,
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      level: 4,
      category: "backend",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
      level: 3,
      category: "backend",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
      level: 4,
      category: "backend",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      color: "#3ECF8E",
      level: 3,
      category: "backend",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      color: "#2D3748",
      level: 4,
      category: "backend",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      color: "#E10098",
      level: 3,
      category: "backend",
    },

    // Miscellaneous
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      level: 3,
      category: "misc",
    },
    { name: "Git", icon: SiGit, color: "#F05032", level: 4, category: "misc" },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "#ffffff",
      level: 5,
      category: "misc",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "#F24E1E",
      level: 4,
      category: "misc",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#ffffff",
      level: 5,
      category: "misc",
    },
    {
      name: "Jest",
      icon: SiJest,
      color: "#C21325",
      level: 3,
      category: "misc",
    },
    {
      name: "ESLint",
      icon: SiEslint,
      color: "#4B32C3",
      level: 4,
      category: "misc",
    },
    {
      name: "Linux",
      icon: SiLinux,
      color: "#FCC624",
      level: 3,
      category: "misc",
    },
    {
      name: "Notion",
      icon: SiNotion,
      color: "#000000",
      level: 4,
      category: "misc",
    },
  ];

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const miscSkills = skills.filter((s) => s.category === "misc");

  return (
    <div className="space-y-8 relative">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Professional Skills
        </h2>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-black/40 border border-white/10 backdrop-blur-sm">
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="studying"
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400"
            >
              Currently Studying
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="skills" className="space-y-12">
          <SkillSection
            title="Frontend Development"
            description="Building engaging user interfaces and experiences"
            skills={frontendSkills}
          />

          <SkillSection
            title="Backend Development"
            description="Server-side architecture and database management"
            skills={backendSkills}
          />

          <SkillSection
            title="Tools & Technologies"
            description="Development workflow and productivity tools"
            skills={miscSkills}
          />
        </TabsContent>

        <TabsContent value="studying">
          <QuantumSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
