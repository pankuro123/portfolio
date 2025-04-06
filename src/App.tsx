import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { 
  Camera,
  Users, 
  ClipboardList, 
  GitPullRequestArrow, 
  Handshake, 
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
  ChevronRight,
  Award
} from 'lucide-react';

const certificates = [
  
  {
    name: "IBM Machine Learning Professional Certificate",
    issuer: "IBM",
    date: "2024",
    image: "certificates/oven.png",
    description : "This certificate is still in the oven  final touches in progress!Come back soon to see it fresh and crisp. In the meantime, feel free to explore the rest of the achievements!",
    
  },
  {
    name: "Google Project Management",
    issuer: "Google",
    date: "2024",
    image: "certificates/google_2.jpg",
    
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "2023",
    image: "certificates/google.jpg",
    
  },
  {
    name: "Client Needs and Software Requirements",
    issuer: "University of Alberta",
    date: "2023",
    image: "certificates/Alberta.jpg",
    
  }
];

const projects = [
  {
    title: "Optimisation des tournées de véhicules (VRP)",
    description: "Optimisation des tournées de véhicules (VRP) en utilisant des métaheuristiques hybrides pour minimiser les coûts tout en respectant les contraintes de livraison.",
    tech: ["Algorithme génétique ", "Machine Learning", "AI agent"],
    link: "#",
    fullDescription: `This project is still being cooked — please wait until the host serves the final dish! In the meantime, feel free to check out the other projects on the menu! `,
    features: [
      ,
    ],
    images: [
      
    ],
    backgroundImage: "cooking.jpg"
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
    backgroundImage: ""
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
  
];



const skills = [
  { name: "Machine Learning", level: 95, icon: Brain },
  { 
    name: "Image Processing", 
    icon: Camera,
  },
  { name: "Deep Learning", level: 90, icon: Cpu },
  { name: "Python", level: 95, icon: Code2 },
  { name: "Data Engineering", level: 85, icon: Database },
  { name: "Teamwork", level: 90, icon: Users },
  { name: "Project Management", level: 85, icon: ClipboardList },
  { name: "Change Management", level: 80, icon: GitPullRequestArrow },
  { name: "Interdisciplinary Collaboration", level: 88, icon: Handshake },
  { name: "Operational Coordination", level: 87, icon: Network },
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
    description: "",
    image: "acad/lille.png"
  },
  {
    school: "École Centrale Casablanca",
    degree: "",
    year: "2025-2023",
    description: "",
    image: "acad/casa.png"
  },
  {
    school: "classe préparatoire aux grandes écoles MP",
    degree: "",
    year: "2023-2021",
    description: "",
    image: "acad/prepa.png"
  }
];

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Adjusted container with max-height and centered layout */}
      <div className="bg-[#1a1a2e] border border-purple-500/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-purple-500/20 flex justify-between items-center sticky top-0 bg-[#1a1a2e] z-10">
          <h3 className="text-2xl font-bold">{certificate.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Flexible image container */}
        <div className="p-6 flex flex-col items-center">
          <div className="w-full max-w-2xl mx-auto">
            <img
              src={certificate.image}
              alt={certificate.name}
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          
          {/* Certificate details - now properly spaced */}
          <div className="w-full max-w-2xl mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <Award className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <div>
                <p className="font-medium">{certificate.issuer}</p>
                <p className="text-gray-400 text-sm">{certificate.date}</p>
              </div>
            </div>
            
            {certificate.description && (
              <p className="text-gray-300 mt-4">{certificate.description}</p>
            )}
          </div>
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
          backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.5), rgba(26, 26, 46, 0.5)), url(${project.backgroundImage})`,
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
              src="image.png" 
              alt="Description" 
               className="w-30 h-auto opacity-90 mix-blend-multiply" 
             />
            </div>
      {/* Main Content */}
<div className="relative">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center p-8 relative">
          <div className="max-w-4xl relative">
            <div className="absolute -top-10 -left-20 hidden md:block">
              <Sparkles className="w-12 h-12 text-purple-400 animate-pulse" />
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-10 right-40 flex flex-col items-center hidden md:grid grid-cols-2 gap-8 ">
                <Network className="w-16 h-16 text-purple-300 animate-float" style={{ animationDelay: '1s' }} />
                <Binary className="w-16 h-16 text-indigo-300 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            
            
            <div className="absolute -left-24 top-1/2 grid gap-8 hidden md:block">
              <Workflow className="w-16 h-16 text-purple-500 animate-float" style={{ animationDelay: '0.7s' }} />
              <Brain className="w-16 h-16 text-indigo-500 animate-float" style={{ animationDelay: '1.2s' }} />
            </div>
            

            

          
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 pb-2">
              Hamza Erraji
            </h1>
            

            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 pb-2">
              AI & Machine Learning Engineer
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Crafting intelligent solutions through code and algorithms
            </p>
            <p className="text-xl text-gray-100 mb-8">
            Centralien engineering student passionate about AI, machine learning, and deep learning. I create intelligent systems that solve real-world challenges.
            </p>
            <div className="flex gap-4">
              
              <a href="https://www.linkedin.com/in/hamza-erraji-7a8985285/" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('education')}
            className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
          </section>
        
        {/* Education Section */}


        <section id="education" className="min-h-screen p-4 md:p-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center flex items-center justify-center gap-3 md:gap-4">
            <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
            {t('Education')}
          </h2>
        
          {/* Mobile Layout (vertical stack) */}
          <div className="md:hidden space-y-4">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="w-full bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image - Square aspect on mobile */}
                  <div className="w-full h-48 md:h-64 md:w-1/3 overflow-hidden">
                    <img
                      src={edu.image}
                      alt={edu.school}
                              className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content - Optimized for small screens */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white line-clamp-1">{edu.school}</h3>
                    <p className="text-purple-300 text-sm md:text-base mb-1 md:mb-2">{edu.year}</p>
                    <h4 className="text-base md:text-lg font-semibold text-purple-400 line-clamp-1">{edu.degree}</h4>
                    <p className="text-gray-300 text-sm md:text-base mt-1 md:mt-2 line-clamp-2">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
          {/* Desktop Layout (horizontal scroll) */}
          <div 
            ref={educationRef}
            className="hidden md:flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {education.map((edu, index) => (
              <div 
                key={index}
                className="min-w-[350px] md:min-w-[450px] bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 snap-center overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex-shrink-0"
              >
                {/* Big Image */}
                <div className="h-48 md:h-64 w-full overflow-hidden">
                  <img
                    src={edu.image}
                    alt={edu.school}
            className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Below Image */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white">{edu.school}</h3>
                  <p className="text-purple-300 text-sm md:text-base mb-1 md:mb-2">{edu.year}</p>
                  <h4 className="text-base md:text-lg font-semibold text-purple-400">{edu.degree}</h4>
                  <p className="text-gray-300 text-sm md:text-base mt-1 md:mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('projects')}
            className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
          </section>


        {/* projects Section */}

        <section id="projects" className="min-h-screen p-4 md:p-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center">Projects</h2>
        
          {/* MOBILE LAYOUT (vertical scroll) */}
          <div className="md:hidden space-y-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="w-full bg-purple-900/40 backdrop-blur-sm p-4 rounded-xl
                          border border-purple-500/20 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mt-1">{project.description}</p>
                  </div>
                  <ChevronRight className="text-purple-400 mt-0.5 flex-shrink-0 animate-pulse-x" />
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-purple-600/30 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        
          {/* DESKTOP LAYOUT (horizontal scroll) */}
          <div 
            ref={projectsRef}
            className="hidden md:flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="min-w-[400px] bg-purple-900/40 backdrop-blur-sm p-6 rounded-xl
                          hover:transform hover:scale-105 transition-all duration-300 
                          border border-purple-500/20 snap-center cursor-pointer
                          relative overflow-hidden group"
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
                
                <div className="absolute bottom-4 right-4 flex items-center gap-1 text-purple-300/80 group-hover:text-purple-200">
                  <span className="text-sm">View details</span>
                  <ChevronRight className="w-4 h-4 animate-pulse-x" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('certificates')}
            className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
          </section>

        {/* Certificates Section */}
        <section id="certificates" className="min-h-screen p-4 md:p-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center">Certificates</h2>

          {/* MOBILE LAYOUT (vertical stack) */}
          <div className="md:hidden space-y-4">
            {certificates.map((certificate, index) => (
              <div 
                key={index}
                className="w-full bg-purple-900/30 backdrop-blur-sm rounded-lg border border-purple-500/20 cursor-pointer"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold line-clamp-1">{certificate.name}</h3>
                    <div className="flex items-center gap-2 text-gray-300 mt-1">
                      <Award className="w-3 h-3 flex-shrink-0" />
                      <span className="text-sm">{certificate.issuer}</span>
                    </div>
                    <span className="text-xs text-purple-400/60 mt-1 block">{certificate.date}</span>
                  </div>
                  <ChevronRight className="text-purple-400 mt-1 flex-shrink-0 animate-pulse-x" />
                </div>
              </div>
            ))}
          </div>
        
          {/* DESKTOP LAYOUT (horizontal scroll) */}
          <div 
            ref={certificatesRef}
            className="hidden md:flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {certificates.map((certificate, index) => (
              <div 
                key={index}
                className={`min-w-[400px] bg-purple-900/30 backdrop-blur-sm rounded-xl 
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
                    <span className="text-purple-400/60 ml-auto">{certificate.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('skills')}
            className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
          </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 px-8 relative">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
  
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-purple-900/20 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 hover:bg-purple-900/30 transition-colors duration-200 flex flex-col items-center text-center"
              >
                <skill.icon className="w-6 h-6 text-purple-400 mb-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        
          {/* Navigation Arrow */}
          <button 
            onClick={() => scrollToSection('centact')}
            className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
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
                hamza.erraji@centrale.centralelille.fr
              </a>
              
              <a href="https://drive.google.com/file/d/1SXfpaPi07SdipshbYr_ohjno0Zep61lU/view?usp=drive_link" className="flex items-center gap-3 text-xl hover:text-purple-400 transition-colors">
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