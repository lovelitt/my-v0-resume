import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Mail, Award, Server, Code, Database, Cloud } from 'lucide-react'

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">허승민</h1>
          <div className="flex justify-center gap-4 mb-4">
            <a href="mailto:seungmin.heo1998@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Mail className="h-4 w-4" />
              seungmin.heo1998@gmail.com
            </a>
            <a href="https://github.com/nolzaheo" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Github className="h-4 w-4" />
              github.com/nolzaheo
            </a>
          </div>
        </header>

        {/* Technical Skills Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="h-6 w-6" />
            기술 스택
          </h2>
          
          <div className="space-y-6">
            {/* Development Section */}
            <div>
              <h3 className="text-xl font-medium mb-4">Development</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Server className="h-4 w-4" />
                    Web Programming
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <Badge variant="outline" className="mr-2">LAMP Stack</Badge>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">L</span>inux,
                        <span className="font-medium"> A</span>pache,
                        <span className="font-medium"> M</span>ySQL,
                        <span className="font-medium"> P</span>HP/Python
                      </div>
                    </div>
                    <div>
                      <Badge variant="outline" className="mr-2">MEVN Stack</Badge>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">M</span>ySQL,
                        <span className="font-medium"> E</span>xpress.js,
                        <span className="font-medium"> V</span>ue.js,
                        <span className="font-medium"> N</span>ode.js
                      </div>
                    </div>
                    <div>
                      <Badge variant="outline">Django</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4" />
                      App Programming
                    </h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">Kotlin</Badge>
                      <Badge variant="outline">Java</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <Server className="h-4 w-4" />
                      System Programming
                    </h4>
                    <Badge variant="outline">OP-TEE</Badge>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Infrastructure Section */}
            <div>
              <h3 className="text-xl font-medium mb-4">Infrastructure</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Cloud className="h-4 w-4" />
                    Openstack
                  </h4>
                  <p className="text-gray-600 text-sm">물리장비를 사용해 직접 클라우드 구축</p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Cloud className="h-4 w-4" />
                    AWS
                  </h4>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">EC2</Badge>
                      <Badge variant="outline">VPC</Badge>
                      <Badge variant="outline">S3</Badge>
                      <Badge variant="outline">RDS</Badge>
                      <Badge variant="outline">Route53</Badge>
                      <Badge variant="outline">Amplify</Badge>
                      <Badge variant="outline">ACM</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">서브넷을 통한 네트워크 아키텍쳐 구성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Education Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">교육</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">고려대학교 정보보호대학원</h3>
                  <p className="text-gray-600">정보보호학과 석사</p>
                </div>
                <span className="text-gray-600">2022.03-2024.08</span>
              </div>
            </div>
            <Separator />
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">숭실대학교</h3>
                  <p className="text-gray-600">컴퓨터학부 학사</p>
                </div>
                <span className="text-gray-600">2018.03-2022.02</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Certifications Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">자격증</h2>
          <div className="flex items-start gap-4">
            <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-medium">AWS Solutions Architect Associate</h3>
              <a 
                href="https://www.credly.com/badges/3039701f-4ee1-4ae0-8d86-c56ea48cd75e"
                className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center gap-1 mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                자격증 확인하기
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

