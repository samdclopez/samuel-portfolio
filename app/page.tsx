import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Samuel De la cruz Lopez</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="nav-link">
                About
              </Link>
              <Link href="#experience" className="nav-link">
                Experience
              </Link>
              <Link href="#skills" className="nav-link">
                Skills
              </Link>
              <Link href="#education" className="nav-link">
                Education
              </Link>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section id="about" className="py-10 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight gradient-text">Samuel De la cruz Lopez</h1>
              <h2 className="mt-2 text-2xl font-semibold text-secondary">Software Developer .NET</h2>
              <p className="mt-4 text-lg text-foreground opacity-80">Villahermosa, TAB</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#experience">View Experience</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Link href="https://github.com/samdclopez" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/samueldclopez" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:samdl8116@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
                <Link href="tel:9931502823">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="images/profile.jpg"
                  alt="Samuel De la cruz Lopez"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="py-10">
          <h2 className="section-title">Professional Summary</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-foreground leading-7">
                .NET Developer with over 8 years of experience, specialized in .NET Core, .NET Framework, and ASP.NET
                Web Forms. Competence in backend system development, RESTful APIs, and handling databases with SQL
                Server. Background in industries such as finance, pharmaceuticals, oil and gas, and retail. Currently
                developing skills in Angular, React, and Docker to improve full-stack capabilities. Fluent in B2 English
                and previously worked in cross-functional teams.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-10">
          <h2 className="section-title">Technical Skills</h2>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="tools">Tools & Methods</TabsTrigger>
            </TabsList>
            <TabsContent value="languages" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                  <CardDescription>Languages I've worked with professionally</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">C# (8+ years)</Badge>
                  <Badge className="px-3 py-1 text-sm">Visual Basic .NET</Badge>
                  <Badge className="px-3 py-1 text-sm">T-SQL</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="frameworks" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frameworks & Technologies</CardTitle>
                  <CardDescription>Frameworks and technologies I specialize in</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">.NET Core</Badge>
                  <Badge className="px-3 py-1 text-sm">.NET Framework</Badge>
                  <Badge className="px-3 py-1 text-sm">Entity Framework Core</Badge>
                  <Badge className="px-3 py-1 text-sm">RESTful APIs</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="frontend" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Technologies</CardTitle>
                  <CardDescription>Frontend technologies I work with</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">Angular (learning)</Badge>
                  <Badge className="px-3 py-1 text-sm">React (learning)</Badge>
                  <Badge className="px-3 py-1 text-sm">HTML</Badge>
                  <Badge className="px-3 py-1 text-sm">CSS</Badge>
                  <Badge className="px-3 py-1 text-sm">Bootstrap</Badge>
                  <Badge className="px-3 py-1 text-sm">JavaScript</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="databases" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Databases</CardTitle>
                  <CardDescription>Database systems I'm proficient with</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">SQL Server (advanced)</Badge>
                  <Badge className="px-3 py-1 text-sm">PostgreSQL (Basic)</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Methodologies</CardTitle>
                  <CardDescription>Tools, methodologies and other skills</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">Azure (basic)</Badge>
                  <Badge className="px-3 py-1 text-sm">Docker (learning)</Badge>
                  <Badge className="px-3 py-1 text-sm">CI/CD</Badge>
                  <Badge className="px-3 py-1 text-sm">Git</Badge>
                  <Badge className="px-3 py-1 text-sm">Azure Repos DevOps</Badge>
                  <Badge className="px-3 py-1 text-sm">Postman</Badge>
                  <Badge className="px-3 py-1 text-sm">JIRA</Badge>
                  <Badge className="px-3 py-1 text-sm">DevExpress</Badge>
                  <Badge className="px-3 py-1 text-sm">RDLC</Badge>
                  <Badge className="px-3 py-1 text-sm">Agile & Scrum</Badge>
                  <Badge className="px-3 py-1 text-sm">Repository Pattern</Badge>
                  <Badge className="px-3 py-1 text-sm">Singleton Pattern</Badge>
                  <Badge className="px-3 py-1 text-sm">English (B2)</Badge>
                  <Badge className="px-3 py-1 text-sm">Spanish (native)</Badge>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-10">
          <h2 className="section-title">Professional Experience</h2>
          <div className="space-y-6">
            <ExperienceCard
              company="Capgemini Engineering"
              position=".NET Backend Developer"
              period="September 2023 - September 2024"
              location="Guadalajara, JAL"
              responsibilities={[
                "Developed and maintained backend systems, improving query execution and system performance.",
                "Designed and maintained stored procedures, views, and tables for efficient database management with the team.",
                "Debugged and resolved technical issues, enhancing system reliability.",
              ]}
              technologies={["C#.NET", "SQL Server 2012", "RDLC", "GitHub", "Postman", "ASP.WEB API"]}
            />

            <ExperienceCard
              company="Arte Digital"
              position="Sr. Backend Developer"
              period="January 2023 - September 2023"
              location="Tijuana, BC"
              responsibilities={[
                "Led API migration for text messaging services, improving performance and security.",
                "Worked in multicultural teams across LATAM, US, and Middle East regions.",
                "Enhanced UI components with ASP.NET WebForms, maintained the existing codebase, and resolved application bugs.",
              ]}
              technologies={[
                "ASP.NET WebForms",
                "C#",
                "Hibernate ORM",
                "SQL Server 2012",
                "BitBucket",
                "JIRA",
                "ASP.WEB API Restful",
              ]}
            />

            <ExperienceCard
              company="AXEN IT Consulting"
              position="Sr. Developer"
              period="October 2017 - January 2023"
              location="Monterrey, NL"
              responsibilities={[
                "Developed new features and supported the existing codebase for the MMS solution, improving system reliability.",
                "Designed and developed WebAPIs using CQRS for scalable architecture of the project.",
                "Integrated third-party tools and optimized SQL Server queries with the team.",
              ]}
              technologies={[
                "C#.NET",
                "WinForm",
                "WPF",
                "SQL Server 2016",
                "Entity Framework Core 2.2",
                "DevExpress",
                "CQRS",
                ".Net Core 2.0",
                "ASP.WEB API",
              ]}
            />

            <ExperienceCard
              company="Punto Zhufu"
              position="Web Developer"
              period="October 2019 - October 2021"
              location="Mexico, CDMX"
              responsibilities={[
                "Led backend development, improving security and performance with Page Model, Entity Framework, and .NET Core.",
                "Razor Pages were used to create front-end user interfaces.",
                "Implemented PDF generation and advanced role-based authentication.",
              ]}
              technologies={[
                "ASP.NET Core",
                "Razor Pages",
                "SQL Server 2016",
                "Bootstrap",
                "JavaScript",
                "Azure Repos DevOps",
                ".NET Core 2.2",
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-10">
          <h2 className="section-title">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle>Universidad del Valle de Mexico</CardTitle>
              <CardDescription>Computer Systems Engineering</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">August 1999 - January 2006</p>
              <p className="mt-2">Bachelor's Degree</p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10">
          <h2 className="section-title">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:9931502823" className="hover:underline">
                    9931502823
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:samdl8116@gmail.com" className="hover:underline">
                    samdl8116@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://github.com/samdclopez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    samdclopez
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://linkedin.com/in/samueldclopez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    samdl8116
                  </a>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Samuel De la cruz Lopez. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/samdclopez" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/samueldclopez" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ExperienceCardProps {
  company: string
  position: string
  period: string
  location: string
  responsibilities: string[]
  technologies: string[]
}

function ExperienceCard({ company, position, period, location, responsibilities, technologies }: ExperienceCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <CardTitle>{position}</CardTitle>
            <CardDescription className="text-base">{company}</CardDescription>
          </div>
          <div className="text-sm text-muted-foreground">
            <div>{period}</div>
            <div>{location}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="text-foreground opacity-90">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Key Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-2 py-1 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

