export const personalInfo = {
  name: "OUEDRAOGO Najibe Jean Jacques",
  location: "Saint Cyr l'Ecole 78210",
  email: "najibe252@gmail.com",
  linkedin: "https://www.linkedin.com/in/ouedraogo-najibe-jean-jacques-9a7a4a14a",
  profilePicture: "/profile.png",
  heroDescription:
    "Data Engineer passionné, je me spécialise dans la conception et la mise en œuvre de pipelines de données scalables et robustes. Fort d'une expertise technique solide autour des écosystèmes Big Data et Cloud, je construis des architectures données modernes qui transforment la data en un actif stratégique et actionnable. Mon objectif est de résoudre des problématiques métier complexes grâce à des infrastructures performantes, garantissant la fiabilité, l'accessibilité et l'exploitation efficace de la donnée pour une prise de décision éclairée.",
};

export const workExperience = [
  {
    company: "QuantCube Technology",
    location: "Grands Boulevards - Paris",
    position: "Data Engineer",
    period: "Avril 2021 - Present",
    achievements: [
      "Mise en place d’une architecture automatisée pour l’acquisition de données maritimes via une pipeline ETL sur AWS, utilisant AWS Lambda et SQS.",
      "Migration de workflows d’indicateurs(EC2) vers une architecture containeurisée, déployée sur AWS via une pipeline CI/CD et Terraform.",
      "Automatisation de l’infrastructure avec Terraform pour un déploiement IaC efficace.",
      "Mise en place de structures de transfert de données vers les bases de données NoSQL.",
      "Implémentation d'outils de monitoring d'infrastructure et de services" 
    ],
  }
];

export const education = [
  {
    institution: "Université Paris Saclay, DataScale Gestion de données et Extraction de connaissances à large échelle",
    location: "Avenue des États Unis - Versailles",
    degree: "Master",
    period: "2019 - 2021",
    achievements: [
      "Ingénierie des données : conception, administration, sécurisation et optimisation d’architectures multi-échelles (des grands « data centers » aux myriades d'objets connectés).",
      "Analyse des données : intégration de données hétérogènes, qualité des données, fouille de données et apprentissage automatique pour transformer les données en réelles connaissances."
    ],
  },
];
export const skills = {
  cloudAndInfrastructure: [
    "AWS",
    "ECS", 
    "ECR", 
    "EMR",
    "Lambda", 
    "S3", 
    "Athena", 
    "SQS", 
    "Secret Manager", 
    "Terraform",
    "G42"
  ],
  containerizationAndOrchestration: [
    "Docker",
    "DockerCompose",
    "Kubernetes"
  ],
  bigDataAndDataEngineering: [
    "Hadoop",
    "Airflow", 
    "Athena", 
    "Hive", 
    "MLflow", 
    "Cookiecutter", 
    "Hydra", 
    "DVC"
  ],
  monitoringAndCICD: [
    "CloudWatch", 
    "Grafana", 
    "Bitbucket Pipelines"
  ],
  visualisation: [
    "Streamlit", 
    "Plotly", 
    "Matplotlib"
  ],
  langageAndFrameworks: [
    "Python (Pandas)", 
    "SQL", 
    "Bash", 
    "GraphQL", 
    "FastAPI"
  ],
};

export const projects = [
  {
    title: "Infrastructure Data Multi-Cloud (AWS & G42)",
    description: [
      "Mise en place complète d’une architecture AWS (VPC, subnets publics/privés, route tables, NAT/IGW, Security Groups, Load Balancer) et déploiement automatisé des environnements dev / preprod / prod.",
      "Automatisation du déploiement des bases MySQL (instances, schémas, tables) et configuration avancée (Security Groups, subnet groups) pour les environnements dev / preprod / prod.",
      "Connexion sécurisée entre clouds via VPN site-to-site.",
      "Déploiement d'instances (EC2 AWS + VMs G42) pour traitement data (ETL).",
      "Configuration des règles de firewall et des tables de routage pour un accès contrôlé.",
      "Configuration des rôles IAM et des politiques d’accès.",
      "Automatisation CI/CD avec validation progressive des environnements."
    ],
  },
  {
    title: "Pipeline Data & ML pour Indicateurs Manufacturiers",
    description: [
      "Automatisation du build d'images Docker via CI/CD et stockage dans AWS ECR.",
      "Déploiement infrastructure as Code avec Terraform (cluster ECS, IAM, networking).",
      "Gestion centralisée des secrets via AWS Secrets Manager.",
      "Gestion centralisée des modèles avec MLflow (versioning, metadata)",
      "Tracking des expériences et métriques ML",
      "Orchestration des workflows avec Apache Airflow pour le calcul quotidien des indicateurs.",
      "Mise en place d'alertes Slack.",
      "Surveillance des performances en temps réel."
    ],
  },
  {
    title: "Pipeline Data pour Indicateurs Trade Maritime (AIS)",
    description: [
      "Acquisition de données AIS via API et ingestion dans une file SQS, pour un flux > 25 GB/jour de données brutes, destiné à l’alimentation de pipelines distribués et scalables.",
      "Déploiement d’une pipeline distribuée sur AWS, basée sur SQS pour l’ingestion et la mise en file des données à grande échelle, et AWS Lambda pour le traitement serverless parallèle, garantissant scalabilité, tolérance aux pannes et exécution en quasi-temps réel.",
      "Déploiement automatique de cluster EMR pour le calcul des indicateurs.",
      "Orchestration complète via Apache Airflow",
      "Stockage dans le data lake S3 (input/output)"
    ],
  },
  {
    title: "Portail IT de Monitoring AWS Interne",
    description: [
      "Script Python POO pour l’inventaire et le reporting des ressources AWS, incluant IAM, S3, EC2 et autres services clés, pour un suivi automatisé des coûts et une meilleure visibilité sur l’utilisation des ressources cloud.",
      "Tagging des ressources pour le suivi des coûts.",
      "API GraphQL avec FastAPI pour l'accès aux données.",
      "Dashboard Grafana pour la visualisation en temps réel des ressources existantes et de leurs coûts associés.",
      "Infrastructure as Code avec Terraform (EC2, RDS, Lambda...)",
      "CI/CD avec tests automatisés"
    ],
  },
  {
    title: "Pipeline d'Acquisition d'Images Satellitaires Copernicus",
    description: [
      "Script Python pour ingestion d’images satellites via l’API Copernicus, utilisant SQS pour la mise en file des requêtes et permettre un traitement distribué, scalable et résilient des téléchargements.",
      "Déployer une fonction Lambda containerisée (ECR) déclenchée par SQS.",
      "Stockage des images dans S3.",
      "Policy S3 pour l'archivage automatique des données."
    ],
  },
];

export const awards = [
  {
    name: "Certified Cloud Practitioner",
    issuer: "AWS",
    date: "Octobre 2022",
    type: "International",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "Linux Foundation",
    date: "May 2025",
    type: "International"
  },
  {
    name: "AI Agents Course",
    issuer: "Hugging Face",
    date: "Oct 2025",
    type: "International"
  }
];
