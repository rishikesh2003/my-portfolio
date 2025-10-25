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
    location: "Grand Boulevard - Paris",
    position: "Data Engineer",
    period: "Avril 2021 - Present",
    achievements: [
      "Mise en place d’une architecture automatisée pour l’acquisition des données de bateaux via une pipeline ETL sur AWS, utilisant AWS Lambda et SQS.",
      "Migration des workflows d’indicateurs(EC2) vers AWS avec un déploiement automatisé via une pipeline de CI/CD et terraform.",
      "Automatisation de l’infrastructure avec Terraform pour un déploiement IaC efficace.",
      "Mise en place des structures de transfert de données vers les bases de données NoSQL.",
      "Implémentation des outils de monitoring de l'infrastructure et des services" 
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
    "G42",
    "AWS",
    "ECS", 
    "ECR", 
    "EMR",
    "Lambda", 
    "S3", 
    "Athena", 
    "SQS", 
    "Secret", 
    "Terraform"
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
      "Infrastructure as Code avec Terraform : VPC, sous-réseaux, bases de données (MySQL) pour dev/preprod/prod.",
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
      "Script d'acquisition de données AIS via API → file SQS.",
      "Lambda function pour prétraitement et conversion Parquet avec partitionnement.",
      "Déploiement automatique de cluster EMR pour le calcul des indicateurs.",
      "Orchestration complète via Apache Airflow",
      "Stockage dans le data lake S3 (input/output)"
    ],
  },
  {
    title: "Portail IT de Monitoring AWS Interne",
    description: [
      "Script Python POO pour inventorier les services AWS (IAM, S3, EC2...).",
      "Tagging des ressources pour le suivi des coûts.",
      "API GraphQL avec FastAPI pour l'accès aux données.",
      "Dashboard Grafana pour la visualisation en temps réel.",
      "Infrastructure as Code avec Terraform (EC2, RDS, Lambda...)",
      "CI/CD avec tests automatisés"
    ],
  },
  {
    title: "Pipeline d'Acquisition d'Images Satellitaires Copernicus",
    description: [
      "Script Python pour interroger l'API Copernicus et publier sur SQS.",
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
  }
];
