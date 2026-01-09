import { FaServer, FaDocker, FaDatabase, FaGamepad, FaRobot, FaLinux } from 'react-icons/fa';

export const projects = [
    {
        id: 1,
        title: "Futsal Management System",
        category: "Full Stack Web App",
        description: "A comprehensive booking and tournament management platform for futsal venues. Features role-based access control, real-time availability checking, and automated tournament bracket generation.",
        tech: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
        features: [
            "Multi-role system (Player, Owner, Admin)",
            "Real-time booking engine with conflict resolution",
            "Automated tournament bracket generation",
            "Revenue analytics dashboard"
        ],
        links: {
            github: "#",
            demo: "#"
        },
        image: "futsal-system", // Placeholder for image logic
        featured: true
    },
    {
        id: 2,
        title: "Dockerized MERN Application",
        category: "DevOps",
        description: "A production-ready MERN stack application containerized with Docker, featuring multi-stage builds and Nginx reverse proxy configuration.",
        tech: ["Docker", "Docker Compose", "Nginx", "MongoDB", "React"],
        features: [
            "Multi-container orchestration",
            "Production-grade Nginx configuration",
            "Optimized multi-stage Docker builds",
            "Automated health checks"
        ],
        links: {
            github: "#",
            demo: "#"
        },
        icon: <FaDocker className="text-4xl text-blue-500" />
    },
    {
        id: 3,
        title: "Automated Deployment Pipeline",
        category: "CI/CD",
        description: "End-to-end CI/CD pipeline using GitHub Actions for automated testing, building, and deployment of web applications.",
        tech: ["GitHub Actions", "Bash", "AWS", "Docker"],
        features: [
            "Automated unit and integration testing",
            "Zero-downtime deployment strategy",
            "Environment secret management",
            "Build artifact caching"
        ],
        links: {
            github: "#",
            demo: "#"
        },
        icon: <FaServer className="text-4xl text-green-500" />
    },
    {
        id: 4,
        title: "AI/ML Academic Research",
        category: "Data Science",
        description: "Implementation of machine learning algorithms for data analysis and pattern recognition using Python's data science stack.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        features: [
            "Data preprocessing and cleaning pipelines",
            "Supervised learning model implementation",
            "Statistical analysis and visualization",
            "Model performance evaluation"
        ],
        links: {
            github: "#",
            demo: "#"
        },
        icon: <FaRobot className="text-4xl text-purple-500" />
    },
    {
        id: 5,
        title: "Unity Game Development",
        category: "Game Dev",
        description: "3D game projects demonstrating advanced C# scripting, physics interactions, and object-oriented design patterns.",
        tech: ["Unity", "C#", "HLSL", "Blender"],
        features: [
            "Component-based architecture",
            "Custom physics interactions",
            "Design pattern implementation (Singleton, Observer)",
            "Performance optimization"
        ],
        links: {
            github: "#",
            demo: "#"
        },
        icon: <FaGamepad className="text-4xl text-red-500" />
    },
    {
        id: 6,
        title: "System Admin Scripts",
        category: "Automation",
        description: "Collection of Bash and Python scripts for automating routine system administration tasks and server maintenance.",
        tech: ["Bash", "Python", "Linux", "Cron"],
        features: [
            "Automated backup solutions",
            "Log rotation and analysis",
            "Server health monitoring",
            "User management automation"
        ],
        links: {
            github: "#",
            demo: "#"
        },
        icon: <FaLinux className="text-4xl text-yellow-500" />
    }
];
