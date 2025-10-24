import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Resume = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handleDownloadPDF = () => {
    setIsPrinting(true);
    window.print();
    setTimeout(() => setIsPrinting(false), 1000);
  };

  const personalInfo = {
    name: "Charlene Mae Rafael",
    title: "Frontend Web Developer",
    email: "charlene.rafael@email.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    github: "github.com/charlene-rafael",
    linkedin: "linkedin.com/in/charlene-rafael",
    website: "charlene-rafael.dev",
  };

  const experience = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Developed responsive web applications using React, Next.js, and Tailwind CSS. Collaborated with design teams to implement pixel-perfect UI components and optimized application performance.",
      achievements: [
        "Built 10+ responsive web applications with React and Next.js",
        "Improved application performance by 40% through code optimization",
        "Collaborated with cross-functional teams in agile environment",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description:
        "Created and maintained client websites using modern web technologies. Focused on user experience and accessibility standards.",
      achievements: [
        "Developed 15+ client websites with HTML, CSS, and JavaScript",
        "Implemented responsive designs for mobile and desktop",
        "Maintained 99% uptime for client websites",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2018 - 2022",
      description:
        "Relevant coursework: Web Development, Database Systems, Software Engineering",
    },
  ];

  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    backend: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Adobe Creative Suite",
      "Webpack",
      "Vite",
    ],
  };

  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with React frontend and Node.js backend",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      name: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-primary/10 py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {personalInfo.title}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-primary" />
                  <span>{personalInfo.github}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-primary" />
                  <span>{personalInfo.linkedin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-primary" />
                  <span>{personalInfo.website}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleDownloadPDF}
              className={cn(
                "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
                isPrinting && "opacity-50"
              )}
            >
              <Download size={16} />
              {isPrinting ? "Generating..." : "Download PDF"}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2">
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Passionate frontend developer with expertise in React, Next.js, and
            modern web technologies. Experienced in building responsive,
            accessible, and high-performing web applications. Strong
            problem-solving skills and a commitment to writing clean,
            maintainable code.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary/30 pl-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{job.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary/30 pl-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2">
            Key Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .bg-background {
            background: white !important;
          }
          .text-foreground {
            color: black !important;
          }
          .text-muted-foreground {
            color: #666 !important;
          }
          .text-primary {
            color: #3b82f6 !important;
          }
          .border-primary {
            border-color: #3b82f6 !important;
          }
          .bg-primary {
            background-color: #3b82f6 !important;
          }
          .text-primary-foreground {
            color: white !important;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

