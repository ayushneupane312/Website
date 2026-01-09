import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaJs, FaUnity, FaCode } from 'react-icons/fa';

const concepts = [
    {
        id: 'python',
        title: 'Python OOP',
        icon: <FaPython />,
        description: "Leveraging Python's class-based design for scalable automation tools.",
        code: `class InfrastructureManager:
    def __init__(self, provider):
        self.provider = provider
        self._resources = []

    @property
    def resource_count(self):
        return len(self._resources)

    def provision(self, resource_config):
        # Encapsulation of provisioning logic
        resource = self.provider.create(resource_config)
        self._resources.append(resource)
        return resource`
    },
    {
        id: 'csharp',
        title: 'C# & Unity',
        icon: <FaCode />,
        description: "Using component-based architecture and inheritance in game development.",
        code: `public class Enemy : MonoBehaviour, IDamageable {
    [SerializeField] private float health = 100f;
    
    // Polymorphism implementation
    public virtual void TakeDamage(float amount) {
        health -= amount;
        if (health <= 0) Die();
    }

    protected abstract void Die(); // Force implementation
}`
    },
    {
        id: 'js',
        title: 'Modern JS',
        icon: <FaJs />,
        description: "Implementing functional patterns and ES6+ features for clean code.",
        code: `// Composition over Inheritance
const withLogging = (fn) => (...args) => {
  console.log(\`Calling \${fn.name}\`);
  return fn(...args);
};

class ApiService {
  #baseUrl; // Private field

  constructor(url) {
    this.#baseUrl = url;
  }

  async fetchData() {
    // Async/Await pattern
    const response = await fetch(this.#baseUrl);
    return response.json();
  }
}`
    }
];

const OOPSection = () => {
    const [activeTab, setActiveTab] = useState(concepts[0].id);

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-emerald-400">05.</span> Engineering Principles
                    </h2>

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Tabs */}
                        <div className="lg:col-span-4 flex flex-col space-y-4">
                            {concepts.map((concept) => (
                                <button
                                    key={concept.id}
                                    onClick={() => setActiveTab(concept.id)}
                                    className={`p-6 rounded-xl text-left transition-all border ${activeTab === concept.id
                                            ? 'bg-slate-800 border-emerald-500 shadow-lg shadow-emerald-500/10'
                                            : 'bg-slate-900 border-slate-800 hover:bg-slate-800'
                                        }`}
                                >
                                    <div className="flex items-center mb-2">
                                        <span className={`text-2xl mr-3 ${activeTab === concept.id ? 'text-emerald-400' : 'text-slate-500'}`}>
                                            {concept.icon}
                                        </span>
                                        <h3 className={`text-lg font-bold ${activeTab === concept.id ? 'text-white' : 'text-slate-400'}`}>
                                            {concept.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-slate-400 pl-9">
                                        {concept.description}
                                    </p>
                                </button>
                            ))}
                        </div>

                        {/* Code Window */}
                        <div className="lg:col-span-8">
                            <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl h-full">
                                <div className="bg-slate-900 px-4 py-2 flex items-center space-x-2 border-b border-slate-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 text-xs text-slate-500 font-mono">code_snippet.ts</span>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <AnimatePresence mode="wait">
                                        <motion.pre
                                            key={activeTab}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="font-mono text-sm leading-relaxed text-slate-300"
                                        >
                                            <code>
                                                {concepts.find(c => c.id === activeTab).code}
                                            </code>
                                        </motion.pre>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OOPSection;
