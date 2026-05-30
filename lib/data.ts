export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export const typingRoles = [
  "Data Science Engineer",
  "ML Engineer",
  "Algorithmic Trader",
  "MLOps Enthusiast",
] as const;

export const socialLinks = {
  github: "https://github.com/Anzay12",
  linkedin: "https://linkedin.com/in/himanshu-pandey12",
  email: "mailto:26anjay06@gmail.com",
} as const;

export const skillCategories = [
  {
    icon: "⚡",
    title: "Backend",
    skills: [
      "Python",
      "Flask",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "JWT Authentication",
    ],
    accent: "cyan" as const,
  },
  {
    icon: "🗄️",
    title: "Databases",
    skills: [
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Query Optimization",
      "Schema Design",
      "ETL Pipelines",
    ],
    accent: "purple" as const,
  },
  {
    icon: "🚀",
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD", "Linux", "Git", "GitHub Actions"],
    accent: "cyan" as const,
  },
  {
    icon: "🔬",
    title: "MLOps",
    skills: [
      "MLflow",
      "DVC",
      "DagsHub",
      "Apache Airflow",
      "Grafana",
      "Prometheus",
      "Kubeflow",
      "TensorBoard",
      "Weights & Biases",
      "Great Expectations",
      "MinIO",
      "BentoML",
      "Evidently AI",
      "Feast",
      "ClearML",
      "Model Registry",
      "Experiment Tracking",
      "Data Versioning",
      "Pipeline Automation",
    ],
    accent: "purple" as const,
  },
  {
    icon: "🤖",
    title: "ML & Data",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "PyTorch",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "EDA",
      "Data Visualization",
    ],
    accent: "cyan" as const,
  },
  {
    icon: "🌐",
    title: "Frontend",
    skills: ["React", "Vue.js", "JavaScript", "HTML/CSS", "Next.js"],
    accent: "purple" as const,
  },
];

export const experience = {
  company: "Shodhshala",
  role: "Data Science Intern (ML)",
  period: "Jan 2026 – Present",
  location: "Remote",
  bullets: [
    "Engineered 30+ features from raw high-frequency market data, boosting model signal quality by ~15% and significantly improving overall strategy performance across multiple trading instruments.",
    "Designed and backtested algorithmic trading strategies using advanced statistical methods (mean reversion, momentum), achieving a ~12% improvement in average win rate.",
    "Managed and optimized PostgreSQL databases containing 1M+ rows of tick-level financial data, writing efficient queries for fast data retrieval and analysis.",
    "Built end-to-end automated ETL pipelines that reduced data preprocessing time by ~40%, enabling faster iteration cycles for the research and strategy team.",
    "Actively monitored deployed model performance in production, generating actionable insights to continuously refine and improve live trading strategies.",
  ],
};

export const projects = [
  {
    emoji: "📽️",
    title: "Movie Audience Prediction",
    subtitle: "ML & Time Series Forecasting",
    tech: ["Python", "XGBoost", "LightGBM", "Scikit-learn", "Pandas"],
    bullets: [
      "Built a full end-to-end audience forecasting system leveraging lag features (1, 7, 14, 30-day) and rolling means with Random Forest, XGBoost, and LightGBM. Selected the best model via RMSE benchmarking across all variants.",
      "Engineered a sophisticated weighted ensemble that blends day-of-week cyclical patterns, 7 & 30-day rolling trends, and theater-level behavioral signals — with multi-level fallback logic for robust predictions in edge cases.",
    ],
    github: "https://github.com/Anzay12/movie-audience-prediction-ml",
  },
  {
    emoji: "🛒",
    title: "E-commerce RTO Prediction",
    subtitle: "Classification & Feature Engineering",
    tech: ["Python", "Gradient Boosting", "Scikit-learn", "Pandas"],
    bullets: [
      "Built a Gradient Boosting classifier achieving 68.75% F1-Score and 73.33% ROC-AUC to predict Return-to-Origin orders, benchmarked against 5 different models using rigorous cross-validation (CV: 70.66% ± 1.42%).",
      "Engineered 4 high-impact domain-specific features (Cost Weight Ratio, Weight Bin, etc.) that contributed 54%+ of total feature importance — with Weight and Discount emerging as the primary RTO risk drivers.",
    ],
    github: "https://github.com/Anzay12/Prediction_RTO",
  },
  {
    emoji: "💰",
    title: "Customer Purchase Value Prediction",
    subtitle: "Regression Pipeline",
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
    bullets: [
      "Built a production-grade regression pipeline engineering 20+ behavioral, temporal, and user-level features. Used GroupKFold validation grouped by userId to prevent data leakage and ensure honest evaluation.",
      "Trained XGBoost achieving R² = 0.422, outperforming the HistGradientBoosting baseline (R² = 0.374) by ~13% on a competitive Kaggle dataset.",
    ],
    github: "https://github.com/Anzay12/customer-purchase-value-prediction",
  },
  {
    emoji: "🚗",
    title: "Vehicle Parking System",
    subtitle: "Full-Stack Distributed Web App",
    tech: [
      "Python",
      "Flask",
      "Vue.js",
      "SQLite",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "REST APIs",
    ],
    bullets: [
      "Designed a role-based parking management platform (Admin & User roles) with real-time slot booking, full reservation history, and dedicated dashboards — all powered by a clean REST API architecture.",
      "Implemented Celery + Redis task queue for asynchronous job processing — including automated daily reminders and scheduled monthly CSV report generation delivered via email.",
      "Built soft-deletion logic to preserve historical reservation data integrity when parking lots or spots are removed, ensuring complete audit trail.",
    ],
    github: "https://github.com/Anzay12/Vehicle_Parking_System",
  },
];

const professionalIssuer = "Professional Certification" as const;

/** Metadata for certificate images — keyed by filename in public/certificates */
export const certificateMeta: Record<
  string,
  { name: string; issuer: string }
> = {
  "udemy_mlops_.jpg": {
    name: "Complete MLOps Bootcamp (10+ End-to-End ML Projects)",
    issuer: professionalIssuer,
  },
  "Full Stack Developer.jpg": {
    name: "Full Stack Developer",
    issuer: professionalIssuer,
  },
  "SQL.jpg": {
    name: "SQL (Advanced)",
    issuer: professionalIssuer,
  },
  "e7e346423ac16ed60f83b6b4e49291ad_page-0001.jpg": {
    name: "AWS Cloud Practitioner Certification",
    issuer: professionalIssuer,
  },
  "certificate-voxhofna4cb4-1779058903_page-0001.jpg": {
    name: "Claude Code 101",
    issuer: professionalIssuer,
  },
  "Cloud Computing and Distributed Systems_page-0001.jpg": {
    name: "Cloud Computing and Distributed Systems",
    issuer: professionalIssuer,
  },
  "Data Analysis and Decision Making_page-0001.jpg": {
    name: "Data Analysis and Decision Making",
    issuer: professionalIssuer,
  },
  "Data Mining_page-0001.jpg": {
    name: "Data Mining",
    issuer: professionalIssuer,
  },
};

/** Certificates excluded from display */
export const excludedCertificates = [
  "diploma-programming.jpg",
  "diploma-data-science.jpg",
  "advanced-certificate.jpg",
];

/** Featured certificates shown first (by filename) */
export const featuredCertificates = [
  "udemy_mlops_.jpg",
  "Full Stack Developer.jpg",
  "SQL.jpg",
  "e7e346423ac16ed60f83b6b4e49291ad_page-0001.jpg",
  "certificate-voxhofna4cb4-1779058903_page-0001.jpg",
];
