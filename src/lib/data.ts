export const personalInfo = {
  name: "OUEDRAOGO Najibe Jean Jacques",
  location: "Saint Cyr l'Ecole 78210",
  email: "najibe252@gmail.com",
  linkedin: "www.linkedin.com/in/ouedraogo-najibe-jean-jacques-9a7a4a14a",
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
    title: "Lorem Ipsum Project",
    github: "https://github.com/loremipsum/project",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      "Excepteur sint occaecat cupidatat non proident.",
    ],
  },
  {
    title: "Dolor Sit Amet App",
    github: "https://github.com/loremipsum/dolorapp",
    description: [
      "Morbi in sem quis dui placerat ornare.",
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
      "Praesent dapibus, neque id cursus faucibus.",
      "Fusce feugiat malesuada odio.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
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
