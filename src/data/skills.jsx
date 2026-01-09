import { FaDocker, FaGithub, FaLinux, FaTerminal, FaCode, FaServer } from 'react-icons/fa';
import { SiNginx, SiKubernetes, SiJenkins, SiAnsible, SiTerraform, SiPrometheus, SiGrafana } from 'react-icons/si';

export const devOpsSkills = [
    {
        category: "Containerization & Orchestration",
        skills: [
            { name: "Docker", level: 90, description: "Multi-stage builds, optimization, networking" },
            { name: "Docker Compose", level: 85, description: "Multi-container orchestration" },
            { name: "Kubernetes", level: 70, description: "Basic cluster management, deployments" }
        ],
        icon: <FaDocker className="text-blue-500" />
    },
    {
        category: "CI/CD & Automation",
        skills: [
            { name: "GitHub Actions", level: 85, description: "Workflow automation, pipelines" },
            { name: "Jenkins", level: 65, description: "Classic CI/CD pipelines" },
            { name: "GitLab CI", level: 70, description: "Integrated CI/CD" }
        ],
        icon: <FaServer className="text-green-500" />
    },
    {
        category: "Infrastructure & SysAdmin",
        skills: [
            { name: "Linux (Ubuntu/CentOS)", level: 85, description: "System administration, shell" },
            { name: "Nginx", level: 80, description: "Reverse proxy, load balancing" },
            { name: "AWS", level: 60, description: "EC2, S3, Basic networking" }
        ],
        icon: <FaLinux className="text-yellow-500" />
    },
    {
        category: "Scripting & IaC",
        skills: [
            { name: "Bash", level: 80, description: "Automation scripts" },
            { name: "Python", level: 90, description: "Tooling, automation" },
            { name: "Terraform", level: 60, description: "Infrastructure as Code" }
        ],
        icon: <FaTerminal className="text-gray-400" />
    }
];

export const technicalSkills = {
    languages: [
        { name: "Python", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "C", level: 4 },
        { name: "C#", level: 4 },
        { name: "Bash", level: 4 }
    ],
    frameworks: [
        { name: "React", level: 5 },
        { name: "Node.js", level: 5 },
        { name: "Express.js", level: 5 },
        { name: "Unity", level: 4 }
    ],
    databases: [
        { name: "MySQL", level: 5 },
        { name: "MongoDB", level: 4 },
        { name: "PostgreSQL", level: 4 }
    ],
    tools: [
        { name: "Git & GitHub", level: 5 },
        { name: "VS Code", level: 5 },
        { name: "Postman", level: 5 },
        { name: "Figma", level: 3 }
    ]
};
