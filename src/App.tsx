import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { 
  Brain, 
  Code2, 
  Database, 
  Github, 
  Linkedin, 
  Mail, 
  ScrollText,
  Sparkles,
  Cpu,
  ChevronDown,
  Bot,
  Atom,
  Network,
  Binary,
  Workflow,
  X,
  Award
} from 'lucide-react';

const certificates = [
  
  {
    name: "IBM Machine Learning Professional Certificate",
    issuer: "IBM",
    date: "2024",
    image: "cooking.jpg",
    
  },
  {
    name: "Google Project Management",
    issuer: "Google",
    date: "2024",
    image: "/certificates/google_2.jpg",
    
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "2023",
    image: "/certificates/google.jpg",
    
  },
  {
    name: "Client Needs and Software Requirements",
    issuer: "University of Alberta",
    date: "2023",
    image: "/certificates/Alberta.jpg",
    
  }
];

const projects = [
  {
    title: "Pedestrian Flow Simulation",
    description: "Simulating and optimizing pedestrian movement for efficient evacuation management.",
    tech: ["Python", "MATLAB", "Machine Learning", "Numerical Optimization", "Mathematical Modeling"],
    link: "#",
    fullDescription: `This project focuses on modeling and optimizing crowd dynamics during evacuations using advanced mathematical techniques. I developed simulations integrating cellular automata, differential equations, and multi-agent systems to analyze pedestrian movement in critical situations. The implementation combines machine learning and numerical optimization to improve the accuracy of predictions and enhance safety strategies.`,
    features: [
      "Developed predictive models using differential equations and multi-agent systems",
      "Integrated Python and MATLAB for simulations and data analysis",
      "Applied Monte Carlo simulations for model validation",
      
    ],
    images: [
      
    ],
    backgroundImage: "/cooking.jpg"
  },
  {
    title: "Pedestrian Flow Simulation",
    description: "Simulating and optimizing pedestrian movement for efficient evacuation management.",
    tech: ["Python", "MATLAB", "Machine Learning", "Numerical Optimization", "Mathematical Modeling"],
    link: "#",
    fullDescription: `This project focuses on modeling and optimizing crowd dynamics during evacuations using advanced mathematical techniques. I developed simulations integrating cellular automata, differential equations, and multi-agent systems to analyze pedestrian movement in critical situations. The implementation combines machine learning and numerical optimization to improve the accuracy of predictions and enhance safety strategies.`,
    features: [
      "Developed predictive models using differential equations and multi-agent systems",
      "Integrated Python and MATLAB for simulations and data analysis",
      "Applied Monte Carlo simulations for model validation",
      
    ],
    images: [
      
    ],
    backgroundImage: "/cooking.jpg"
  },
  {
    title: "INNOFAB: Intelligent Laboratory Resource Management",
    description: "A full-stack web application for automated tracking and management of laboratory resources.",
    tech: ["SQL", "Backend Optimization", "Computer Vision", "YOLO", "CNNs", "Full-Stack Development"],
    link: "#",
    fullDescription: `INNOFAB is a laboratory management system designed to optimize resource tracking and improve operational efficiency. I developed an SQL-powered database with an optimized backend, along with an interactive front-end for seamless user interaction. Additionally, I implemented a computer vision system using YOLO and convolutional neural networks (CNNs) to track laboratory equipment and monitor user interactions. The project enhances automation and data flow efficiency, ensuring a more reliable and user-friendly system.`,
    features: [
      "Designed and implemented a full-stack web application",
      "Developed a computer vision tracking system using YOLO and CNNs",
      "Optimized SQL-based database and backend architecture for performance",
      "Automated data flow management to enhance user experience and system reliability"
    ],
    images: [
      "cooking.png",
      
    ],
    backgroundImage: "cooking.png"
  },
  
  {
    title: "Fraud Detection in Credit Card Transactions",
    description: "A machine learning model to detect fraudulent transactions with high accuracy, leveraging resampling techniques and ensemble algorithms.",
    tech: ["Python", "MachineLearning", "XGBoost","Pandas", "Scikit-learn"],
    link: "#",
    fullDescription: `This project focuses on building a robust machine learning-based fraud detection system for credit card transactions, addressing the critical challenge of imbalanced datasets where fraudulent cases are rare. The workflow begins with exploratory data analysis (EDA) to identify patterns and anomalies, followed by data preprocessing steps such as handling missing values, removing duplicates, and filtering outliers. To tackle class imbalance, undersampling (Tomek Links, Random Undersampling) and oversampling (Random Oversampling) techniques were applied, with comparisons highlighting their impact on model performance. Principal Component Analysis (PCA) was used for dimensionality reduction, improving computational efficiency without sacrificing predictive power. Two powerful Machine learning models —Random Forest and XGBoost— were trained and optimized via GridSearchCV for hyperparameter tuning, achieving 98.5% accuracy with oversampled data on XGBoost. The project also includes feature importance analysis to interpret model decisions and probability-based fraud estimation for finer risk assessment. This end-to-end solution demonstrates the effective application of machine learning in financial security, balancing precision, recall, and real-world scalability.

`,
    features: [
      "Class Imbalance Handling : Applied Tomek Links (undersampling) and Random Oversampling to improve fraud detection.",
      "Dimensionality Reduction : Used PCA to optimize feature space without losing predictive power.",
      "Interpretable AI – Analyzed feature importance to identify key fraud indicators.",
      "A/B testing framework"
    ],
    images: [
      
    ]
  },
  {
    title: "Heart Disease Prediction using Random Forest & XGBoost",
    description: "A comparative analysis of machine learning models to predict heart disease leveraging ensemble techniques.",
    tech: ['MachineLearning',"XGBoost", "Random Forest", 'Imbalanced-learn',"Hyperparameter Tuning"],
    link: "#",
    fullDescription: `This project focuses on predicting heart disease risk using patient health data, comparing two powerful machine learning models: Random Forest and XGBoost. The workflow began with data preprocessing, including handling missing values (mean imputation for numerical features, mode for categorical), encoding categorical variables (One-Hot and Label Encoding), and balancing the dataset via Random Oversampling to address class imbalance. Both models were trained and evaluated using metrics like accuracy, precision, recall, and F1-score, with Random Forest achieving superior performance (96% accuracy) due to its robustness against overfitting. The project highlights the importance of model selection in medical diagnostics, providing actionable insights through confusion matrices and classification reports. Future improvements could explore hybrid ensembles or deeper feature engineering to enhance XGBoost’s performance.`,
    features: [
      "Data Balancing : Applied Random Oversampling to address class imbalance in the dataset.",
      "Optimized Model Training : Compared Random Forest (96% accuracy) and XGBoost (77% accuracy) with hyperparameter tuning.",
      "Comprehensive Evaluation : Analyzed precision, recall, and F1-scores for both classes (Heart Disease/No Heart Disease).",
    ],
    images: [
      
    ]
  },
  {
    title: "Time Series Forecasting",
    description: "Deep learning model for accurate prediction of financial market trends",
    tech: ["TensorFlow", "Prophet", "pandas"],
    link: "#",
    fullDescription: `A comprehensive time series forecasting system that combines traditional statistical 
    methods with deep learning approaches. The system provides accurate predictions for financial markets 
    with uncertainty estimation.`,
    features: [
      "Multiple time series support",
      "Uncertainty estimation",
      "Automated feature extraction",
      "Real-time predictions"
    ],
    images: [
      
    ]
  }
];



const skills = [
  { name: "Machine Learning", level: 95, icon: Brain },
  { name: "Deep Learning", level: 90, icon: Cpu },
  { name: "Python", level: 95, icon: Code2 },
  { name: "Data Engineering", level: 85, icon: Database },
];

interface CertificateModalProps {
  certificate: typeof certificates[0];
  onClose: () => void;
}

const education = [
  {
    school: "École Centrale Lille",
    degree: "",
    year: "2025-2024",
    description: "Specialized in Artificial Intelligence and Machine Learning",
    image: "acad/lille.png"
  },
  {
    school: "École Centrale Casablanca",
    degree: "",
    year: "2025-2023",
    description: "Focus on algorithms and computational theory",
    image: "acad/casa.png"
  },
  {
    school: "classe préparatoire aux grandes écoles",
    degree: "",
    year: "2023-2021",
    description: "Advanced placement in mathematics and computer science",
    image: "acad/prepa.png"
  }
];

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl max-w-3xl w-full modal-animation">
        <div className="p-6 border-b border-purple-500/20 flex justify-between items-center">
          <h3 className="text-2xl font-bold">{certificate.name}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <img
            src={certificate.image}
            alt={certificate.name}
            className="w-[450px] h-[400px] object-cover rounded-lg mb-6"
          />
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-6 h-6 text-purple-400" />
            <span className="text-lg">{certificate.issuer}</span>
            <span className="text-gray-400">{certificate.date}</span>
          </div>
          <p className="text-gray-300">{certificate.description}</p>
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}
const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-animation relative"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.75), rgba(26, 26, 46, 0.75)), url(${project.backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: ''
        }}
      >
        <div className="sticky top-0 bg-[#1a1a2e]/50 backdrop-blur-sm p-6 border-b border-purple-500/20 flex justify-between items-center">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-6">{project.fullDescription}</p>
          
          <h4 className="text-xl font-semibold mb-4">Key Features</h4>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold mb-4">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-600/30 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-4">Gallery</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { t, i18n } = useTranslation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent, ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current && e.shiftKey) {
        e.preventDefault();
        ref.current.scrollLeft += e.deltaY;
      }
    };

    const projects = projectsRef.current;
    const skills = skillsRef.current;
    const certificates = certificatesRef.current;
    const education = educationRef.current;

    if (projects) {
      projects.addEventListener('wheel', (e) => handleWheel(e, projectsRef), { passive: false });
    }
    if (skills) {
      skills.addEventListener('wheel', (e) => handleWheel(e, skillsRef), { passive: false });
    }
    if (certificates) {
      certificates.addEventListener('wheel', (e) => handleWheel(e, certificatesRef), { passive: false });
    }
    if (education) {
      education.addEventListener('wheel', (e) => handleWheel(e, educationRef), { passive: false });
    }

    return () => {
      if (projects) {
        projects.removeEventListener('wheel', (e) => handleWheel(e, projectsRef));
      }
      if (skills) {
        skills.removeEventListener('wheel', (e) => handleWheel(e, skillsRef));
      }
      if (certificates) {
        certificates.removeEventListener('wheel', (e) => handleWheel(e, certificatesRef));
      }
      if (education) {
        education.removeEventListener('wheel', (e) => handleWheel(e, educationRef));
      }
    };
  }, []);

  useEffect(() => {
    const createBinaryElement = () => {
      const binary = document.createElement('div');
      binary.className = 'binary-animation';
      binary.textContent = Math.random() < 0.5 ? '0' : '1';
      binary.style.left = `${Math.random() * 100}vw`;
      binary.style.animationDuration = `${8 + Math.random() * 7}s`;
      document.body.appendChild(binary);

      binary.addEventListener('animationend', () => {
        document.body.removeChild(binary);
      });
    };

    const interval = setInterval(createBinaryElement, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen">
      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" 
               style={{ top: '20%', left: '60%' }} />
          <div className="absolute w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse delay-1000" 
               style={{ top: '60%', left: '30%' }} />
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            < img 
              src="/image.png" 
              alt="Description" 
               className="w-30 h-auto opacity-90 mix-blend-multiply" 
             />
            </div>
      {/* Main Content */}
<div className="relative">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center p-8 relative">
          <div className="max-w-4xl relative">
            <div className="absolute -top-10 -left-20">
              <Sparkles className="w-12 h-12 text-purple-400 animate-pulse" />
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-10 right-40 flex flex-col items-center grid grid-cols-2 gap-8">
                <Network className="w-16 h-16 text-purple-300 animate-float" style={{ animationDelay: '1s' }} />
                <Binary className="w-16 h-16 text-indigo-300 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="absolute -top-10 -right-64  grid grid-cols-2 gap-8">
              <Bot className="w-16 h-16 text-purple-400 animate-float" style={{ animationDelay: '0s' }} />
            </div>
            
            <div className="absolute -left-24 top-1/2 grid gap-8">
              <Workflow className="w-16 h-16 text-purple-500 animate-float" style={{ animationDelay: '0.7s' }} />
              <Brain className="w-16 h-16 text-indigo-500 animate-float" style={{ animationDelay: '1.2s' }} />
            </div>
            

            

          
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
              Hamza Erraji
            </h1>
            

            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              AI & Machine Learning Engineer
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Crafting intelligent solutions through code and algorithms
            </p>
            <p className="text-xl text-gray-100 mb-8">
            Centralien engineering student passionate about AI, machine learning, and deep learning. I create intelligent systems that solve real-world challenges.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hamza-erraji-7a8985285/" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('education')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </section>
        
        {/* Education Section */}


        <section id="education" className="min-h-screen p-8 relative">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <GraduationCap className="w-10 h-10 text-purple-400" />
            {t('Education')}
          </h2>
          <div 
            ref={educationRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {education.map((edu, index) => (
              <div 
                key={index}
                className="min-w-[450px] bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 snap-center overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Big Image (No Overlay) */}
                <div className="h-64 w-full overflow-hidden"> {/* Increased height */}
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
        
                {/* Text Below Image */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <p className="text-purple-300 mb-2">{edu.year}</p> {/* Added margin-bottom */}
                  <h4 className="text-lg font-semibold text-purple-400">{edu.degree}</h4>
                  <p className="text-gray-300 mt-2">{edu.description}</p> {/* Added margin-top */}
                </div>
              </div>
            ))}
          </div>
        

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('projects')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen p-8 relative">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div 
            ref={projectsRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="min-w-[350px] bg-purple-900/40 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20 snap-center cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  onClick={(e) => e.stopPropagation()}
                  href={project.link} 
                  className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
                >
                  View Project <Code2 className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('certificates')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="min-h-screen p-8 relative">
          <h2 className="text-4xl font-bold mb-12 text-center">Certificates</h2>
          <div 
            ref={certificatesRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {certificates.map((certificate, index) => (
              <div 
                key={index}
                className={`min-w-[300px] bg-purple-900/30 backdrop-blur-sm rounded-xl 
                  transition-all duration-300 border border-purple-500/20 snap-center cursor-pointer 
                  overflow-hidden ${selectedCertificate === certificate ? "scale-125" : "hover:scale-105"}`}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{certificate.name}</h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Award className="w-4 h-4" />
                    <span>{certificate.issuer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('skills')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen p-8 relative">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div 
            ref={skillsRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="min-w-[300px] bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 snap-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-8 h-8 text-purple-400" />
                  <span className="text-xl font-medium">{skill.name}</span>
                </div>
                <div className="h-3 bg-purple-900/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center p-8">
        
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
            
            <div className="flex flex-col gap-6 items-center">
              <a href="#" className="flex items-center gap-3 text-xl hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
                hello@example.com
              </a>
              
              <a href="#" className="flex items-center gap-3 text-xl hover:text-purple-400 transition-colors">
                <ScrollText className="w-6 h-6" />
                Download Resume
              </a>
              
            </div>
          </div>
        </section>
      </div>
      

      {/* Modals */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}

export default App;