const profile = {
  name: "Prince Kombila Mbadinga",
  email: "pmbadinga@yahoo.com",
  phone: "+33 6 24 97 24 29",
  linkedin: "https://www.linkedin.com/in/prince-kombila-mbadinga-b616a0198/",
  github: "https://github.com/princekombila",
  cv: "#" // À remplacer par l'URL du CV PDF une fois hébergé
};

const tensionSubtitle =
  "Mon métier ne consiste pas à empiler des outils mais à équilibrer des contraintes : rendre l'IA puissante mais auditable, automatisée mais gouvernée, métier mais technique, rapide à livrer mais robuste en production, ambitieuse mais alignée sur le ROI.";

const activeTensions = [
  { left: "IA",            right: "Auditabilité", duration: "7.8s",  delay: "-1.2s", from: "22%", to: "70%" },
  { left: "Automatisation",right: "Gouvernance",  duration: "9.4s",  delay: "-3.4s", from: "28%", to: "78%" },
  { left: "Métier",        right: "Technique",    duration: "8.6s",  delay: "-0.8s", from: "16%", to: "62%" },
  { left: "Vitesse",       right: "Robustesse",   duration: "10.2s", delay: "-5.1s", from: "34%", to: "84%" },
  { left: "Conception",    right: "Delivery",     duration: "8.9s",  delay: "-2.2s", from: "24%", to: "66%" }
];

const projects = [
  {
    title: "Broadpeak - Pilote IA Support Client",
    status: "publié",
    description: "Deux pilotes Agentforce pour le support client d'un acteur majeur du streaming et CDN.",
    problem: "Les conseillers support perdaient du temps à chercher des cas similaires dans un historique massif, et la reprise de tickets longs imposait une relecture pénible de tous les emails et posts Chatter.",
    method: "Use Case 1 (Similar Cases) : Einstein Retriever sur Subject + Description, scoring déporté dans un Flow (Account +15, Product +10, Recency), nettoyage HTML via Apex Batch + Trigger sur Description_Clean__c, reconstruction du Search Index Data Cloud. Use Case 2 (Case Summary) : LLM avec lexique métier Broadpeak intégré aux prompts, exclusion des métadonnées à faible poids.",
    result: "Pilotage MEP, cahier de recette et contre-recette livrés. ROI attendus : 20 % de gain de temps conseillers, qualité avec capitalisation des réponses, hausse satisfaction client.",
    limit: "Mesures post-MEP en cours de consolidation sur 3 mois.",
    nextStep: "Extension du Retriever aux pièces jointes des Cases, intégration des résumés dans le workflow Omnichannel.",
    stack: ["Salesforce Agentforce", "Einstein Retriever", "Data Cloud", "Apex Batch", "Apex Trigger", "Flow Builder", "Prompt Engineering"],
    tags: ["IA", "salesforce", "support", "telco"],
    github: "#",
    live: "#",
    accent: "#00A1E0"
  },
  {
    title: "LOXAM - Agent Smart Visit",
    status: "publié",
    description: "Agent commercial Agentforce d'aide post-visite chantier pour les commerciaux du leader européen de la location BTP.",
    details: [
      ["Contexte", "Agent commercial Agentforce d'aide post-visite chantier pour LOXAM, leader européen de la location de matériel BTP. Saisie vocale ou textuelle du commercial, structuration automatique du CR, relance sur éléments manquants, création de la prochaine visite, tâches de suivi, mise à jour contact et offre."],
      ["Mon périmètre", "Responsable des tests avant migration en production. Rédaction du cahier de recette. Conception de la documentation technique couvrant l'ensemble du projet, de la conception jusqu'à la mise en production."],
      ["ROI mesuré", "Taux de CR rédigés : 75 % à 95 % (+20 pts). Complétude des CR : 30 % à 80 % (+50 pts). Temps moyen : 5 min/CR, soit environ 2h30 de gain par commercial et par semaine."]
    ],
    stack: ["Salesforce Agentforce", "Recette technique", "Documentation technique", "Migration de données"],
    tags: ["IA", "salesforce", "BTP", "commercial"],
    github: "#",
    live: "#",
    accent: "#f4a261"
  },
  {
    title: "DPE Reality Check - Open Data University",
    status: "publié",
    description: "Concours national Open Data University (Latitudes × Enedis × data.gouv.fr) - confrontation des Diagnostics de Performance Énergétique aux consommations réelles.",
    problem: "Le DPE théorique cache des écarts importants avec la consommation réelle des logements. Comment objectiver ces écarts à l'échelle nationale pour outiller les politiques publiques ?",
    method: "Croisement Python/Pandas de trois bases ouvertes : DPE Logements existants (ADEME, 8,2 M diagnostics), Consommation Enedis par adresse, Base Adresse Nationale. Datavisualisation Tableau avec diagramme de Sankey, cartographies de risque et matrice de priorisation. Prototype WebApp interactif avec questionnaire de vie énergétique de 24 questions.",
    result: "68 % de taux d'appariement, plus d'1 million d'adresses qualifiées, écart théorique/réel pouvant atteindre 40 %. Découverte de l'Effet Rebond (classes A/B/C qui surconsomment) et de la Précarité Énergétique Masquée (F/G qui sous-consomment par privation). Concept inédit de DPE Vivant à 21 sous-classes.",
    limit: "Couverture nationale mais granularité limitée aux 68 % d'adresses appariées.",
    nextStep: "Industrialisation du DPE Vivant et intégration aux outils décisionnels des bailleurs sociaux.",
    stack: ["Python", "Pandas", "Tableau", "Diagramme de Sankey", "Cartographie", "Open Data", "Scrum"],
    tags: ["data", "écologie", "concours", "open data"],
    github: "https://github.com/princekombila",
    live: "https://www.data.gouv.fr/reuses/dpe-reality-check-diagnostics-de-performance-energetique",
    accent: "#34d399"
  },
  {
    title: "SmartEngine - Prédiction de churn SaaS B2B",
    status: "publié",
    description: "Système de scoring prédictif du churn pour un éditeur SaaS B2B (cas RavenStack) - projet 5 sprints en Scrum.",
    problem: "Anticiper le churn pour permettre aux équipes Customer Success d'intervenir avant la résiliation et sécuriser le MRR.",
    method: "5 sprints Scrum (rôle Product Owner + Dev Data). Pipeline anti-fuite avec détection automatique de colonnes de leakage. Benchmark d'algorithmes (Logistic Regression, Random Forest, Gradient Boosting). Double seuil de décision (0.20 classification, 0.60 priorisation CS). Explicabilité SHAP. Orchestration multi-agents Gemini CLI.",
    result: "Modèle ML opérationnel avec Recall > 75 % sur la classe Churn, dashboard Streamlit pour les CSM, automatisation n8n.",
    limit: "Dataset RavenStack synthétique - à valider sur données réelles avant industrialisation.",
    nextStep: "Branchement sur un vrai pipeline de données SaaS, intégration au CRM.",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Gemini CLI", "n8n", "SHAP"],
    tags: ["ML", "churn", "SaaS", "scrum"],
    github: "https://github.com/Brainfkt/smartengine-groupe-5",
    live: "#",
    accent: "#a78bfa"
  },
  {
    title: "Hermès - Démo Agentforce Retail & Luxe",
    status: "publié",
    description: "5 scénarios Agentforce pour le service client haut de gamme de la maison Hermès.",
    problem: "Comment fluidifier l'expérience client luxe (achat, livraison, réclamation) sans dégrader la posture de marque ?",
    method: "Scénario 1 - Achat coffret parfum avec création contact/compte/opportunité/commande. Scénario 2 - Variante cliente connue. Scénario 3 - Décalage de livraison. Scénario 4 - Produit non conforme et création de case. Scénario 5 - Console agent service client : cases prioritaires, résumé contextualisé, génération de tâches.",
    result: "Démo livrée et présentée. Couverture des principaux parcours clients luxe en B2C.",
    limit: "Démo conceptuelle - pas de mise en production réelle.",
    nextStep: "Si retenu : POC avec données réelles et intégration au site Hermès.",
    stack: ["Salesforce Agentforce", "Service Cloud", "Prompt Engineering", "Conception de scénarios"],
    tags: ["IA", "salesforce", "luxe", "démo"],
    github: "#",
    live: "#",
    accent: "#a78bfa"
  },
  {
    title: "Europe Assistance - Démo Agentforce Assurance",
    status: "publié",
    description: "4 scénarios Agentforce pour la déclaration et l'instruction de sinistres en assurance.",
    problem: "Simplifier la déclaration de sinistre côté assuré et outiller les agents d'instruction côté Salesforce.",
    method: "Scénario 1 - Déclaration éligible (identification, vérif contrat, collecte des infos, prestations, email d'accusé). Scénario 2 - Sinistre non éligible avec transfert Omnichannel à un agent live. Scénario 3 SF - Instruction par un agent (mandatement expert, ajout prestataires). Scénario 4 SF - Dossier incomplet et relance pièces.",
    result: "Démo sectorielle livrée pour EAF avec 4 parcours complets bout en bout.",
    limit: "Conception sectorielle - sans intégration au SI assurance d'EAF.",
    nextStep: "Phase POC avec un sous-périmètre métier réel d'Europe Assistance.",
    stack: ["Salesforce Agentforce", "Service Cloud", "Omnichannel", "Templates email", "Workflow"],
    tags: ["IA", "salesforce", "assurance", "démo"],
    github: "#",
    live: "#",
    accent: "#34d399"
  },
  {
    title: "Retail & Luxe - Cas d'usage Agentforce WhatsApp & Messenger",
    status: "publié",
    description: "5 scénarios Agentforce déployés sur canaux de messagerie (WhatsApp, Messenger) pour Retail et Luxe.",
    problem: "Comment activer Agentforce sur les canaux conversationnels où sont les clients, sans sacrifier la qualité du service ?",
    method: "Scénario Sodastream (B2C, conseil produit), Golden Luxe (réclamation VIP routée Omnichannel), Nike (échange retour), Decathlon (assistant interne conseillère), Maison de luxe (cadeau personnalisé avec relance).",
    result: "Présentation sectorielle complète couvrant les principaux cas d'usage Retail et Luxe en canal messagerie.",
    limit: "Conception sectorielle - démo, pas de déploiement en production.",
    nextStep: "Industrialisation sur un client réel du secteur.",
    stack: ["Salesforce Agentforce", "Omnichannel", "WhatsApp Business", "Messenger", "Service Cloud"],
    tags: ["IA", "salesforce", "retail", "luxe", "omnichannel"],
    github: "#",
    live: "#",
    accent: "#00A1E0"
  },
  {
    title: "RFM Marketing Dashboard",
    status: "publié",
    description: "Pipeline data marketing end-to-end pour une boutique e-commerce de cosmétiques.",
    problem: "Démontrer la maîtrise complète d'une chaîne data marketing, du modèle relationnel jusqu'à la visualisation décisionnelle.",
    method: "MySQL avec schéma relationnel 5 tables (clients, catégories, produits, commandes, lignes_commande). Pipeline Python (mysql-connector, pandas, requests) qui extrait, enrichit via l'API Open Food Facts, calcule les scores RFM en quintiles, détermine les segments client (Champions, Loyalists, At Risk, Lost...) et réinjecte dans rfm_results. Dashboard Plotly Dash pour la restitution.",
    result: "Soutenance orale de 10 minutes devant jury INSEEC, dashboard interactif, code documenté sur GitHub.",
    limit: "Données simulées sur la boutique cosmétique - à brancher sur un vrai e-commerce pour usage production.",
    nextStep: "Industrialisation sur un client réel et ajout de modèles prédictifs (CLV, next best offer).",
    stack: ["MySQL", "Python", "Pandas", "Plotly Dash", "API REST", "ETL", "RFM"],
    tags: ["data", "marketing", "segmentation", "BI"],
    github: "https://github.com/princekombila/algo-bdd-msc2",
    live: "#",
    accent: "#fbbf24"
  },
  {
    title: "LOXAM - Démo Agentforce Voice",
    status: "publié",
    description: "Démo commerciale d'Agentforce en mode vocal pour le contexte terrain BTP.",
    problem: "Démontrer la capacité d'Agentforce à interagir en voix naturelle pour les commerciaux mobiles, mains occupées.",
    method: "Design end-to-end : topics, instructions, Flows d'orchestration sur Events, Contacts et Leads. Sécurisation des actions API REST avec OAuth/JWT.",
    result: "Démo animée en client final pour illustrer l'usage vocal d'Agentforce en mobilité.",
    limit: "Démo - pas de déploiement opérationnel.",
    nextStep: "POC vocal sur un sous-périmètre réel LOXAM si retenu.",
    stack: ["Salesforce Agentforce", "Voice", "Flow Builder", "API REST", "OAuth/JWT"],
    tags: ["IA", "salesforce", "voice", "BTP"],
    github: "#",
    live: "#",
    accent: "#ff6f91"
  },
  {
    title: "Formation Agentforce - Référent Niji",
    status: "en continu",
    description: "Formation des nouveaux entrants Niji sur Agentforce - référent technique interne.",
    problem: "Accélérer la montée en compétences des consultants Niji sur Agentforce pour répondre à la demande client croissante.",
    method: "Sessions de formation structurées : prise en main d'Agentforce, bonnes pratiques de prompt engineering, configuration Data Cloud, intégration aux Flows et Apex, démonstration de cas d'usage clients.",
    result: "Onboarding accéléré des nouveaux entrants Niji, capitalisation des bonnes pratiques projet.",
    limit: "Formation interne - pas de support externe pour l'instant.",
    nextStep: "Création d'un agent IA interne de rédaction de documentation technique pour industrialiser les livrables.",
    stack: ["Salesforce Agentforce", "Pédagogie technique", "Onboarding", "Documentation"],
    tags: ["formation", "salesforce", "interne"],
    github: "#",
    live: "#",
    accent: "#fbbf24"
  }
];

const experiences = [
  {
    role: "Consultant Salesforce (Alternance) · Agentforce Specialist",
    context: "Niji - Lyon, France",
    period: "Sept. 2024 - Sept. 2026",
    missions: [
      "Conception et delivery de pilotes Agentforce IA pour Broadpeak (Similar Cases, Case Summary) : Retriever Einstein, Data Cloud, Apex Batch de nettoyage HTML",
      "Design end-to-end du use case Agentforce Voice pour LOXAM : topics, Flows d'orchestration, sécurisation API REST avec OAuth/JWT",
      "Réalisation de démos sectorielles Agentforce (Assurance pour Europe Assistance, Retail & Luxe pour Hermès) sur Service Cloud",
      "Pilotage MEP, rédaction des cahiers de recette et contre-recette, recettes techniques",
      "Référent technique Agentforce : formation des nouveaux entrants Niji"
    ],
    tools: ["Salesforce Agentforce", "Einstein AI", "Data Cloud", "Apex", "Flow Builder", "SOQL", "API REST", "OAuth/JWT", "Jira"],
    impact: "Devenir un consultant Salesforce IA opérationnel sur tout le cycle de vie d'un agent : du cadrage métier au pilotage post-MEP."
  },
  {
    role: "Responsable Marketing Digital & Analytics",
    context: "World Mission Agency - Lyon, France",
    period: "Fév. 2023 - Sept. 2024",
    missions: [
      "Conception et pilotage de campagnes marketing digital multi-canaux (Facebook Ads, Instagram, YouTube)",
      "Suivi des performances via Google Analytics 4 et Google Tag Manager (engagement, conversion, portée)",
      "Mise en place d'une intégration Facebook Ads → Salesforce pour la collecte automatique des leads (Lead Ads, mapping, synchro CRM)",
      "Qualification et scoring des leads dans Salesforce, reporting sur le funnel d'acquisition complet",
      "Production de dashboards marketing décisionnels Tableau Salesforce pour les parties prenantes"
    ],
    tools: ["Facebook Ads", "Instagram Ads", "Google Analytics 4", "Google Tag Manager", "Salesforce Sales Cloud", "Tableau"],
    impact: "Construire une lecture data-driven du marketing digital, de l'acquisition à la conversion CRM."
  },
  {
    role: "Data Analyst",
    context: "Rhythex Consulting - Ghana",
    period: "Fév. 2022 - Avr. 2024",
    missions: [
      "Collecte, nettoyage et consolidation de données multi-sources avec Alteryx (workflows automatisés, jointures, dédoublonnage)",
      "Préparation de pipelines analytiques avec Dataiku",
      "Modélisation et analyse avec data.iq pour identifier tendances, corrélations et anomalies",
      "Création de dashboards Tableau (filtres croisés, drill-down) et Power BI / Power Query",
      "Participation aux ateliers de cadrage avec les stakeholders et formulation de recommandations stratégiques"
    ],
    tools: ["Alteryx", "Dataiku", "data.iq", "Tableau", "Power BI", "Power Query", "SQL"],
    impact: "Maîtriser une chaîne data complète, du nettoyage à la recommandation business, sur des contextes multi-clients."
  }
];

const skillNodes = [
  { label: "Agentforce",        x: 50, y: 18, group: "ai" },
  { label: "Einstein AI",       x: 35, y: 30, group: "ai" },
  { label: "Data Cloud",        x: 65, y: 30, group: "salesforce" },
  { label: "Apex",              x: 25, y: 48, group: "salesforce" },
  { label: "Flow Builder",      x: 50, y: 42, group: "salesforce" },
  { label: "Service Cloud",     x: 75, y: 48, group: "salesforce" },
  { label: "Python",            x: 15, y: 65, group: "data" },
  { label: "SQL",               x: 30, y: 75, group: "data" },
  { label: "Machine Learning",  x: 50, y: 72, group: "data" },
  { label: "Tableau",           x: 68, y: 80, group: "viz" },
  { label: "Power BI",          x: 82, y: 70, group: "viz" },
  { label: "Prompt Engineering",x: 50, y: 28, group: "ai" }
];

const skillLinks = [
  ["Agentforce", "Einstein AI"],
  ["Agentforce", "Data Cloud"],
  ["Agentforce", "Prompt Engineering"],
  ["Einstein AI", "Apex"],
  ["Einstein AI", "Flow Builder"],
  ["Data Cloud", "Service Cloud"],
  ["Apex", "Flow Builder"],
  ["Flow Builder", "Service Cloud"],
  ["Python", "SQL"],
  ["Python", "Machine Learning"],
  ["SQL", "Tableau"],
  ["Machine Learning", "Tableau"],
  ["Tableau", "Power BI"],
  ["Prompt Engineering", "Einstein AI"]
];

const skillMatrix = [
  ["Concevoir",     "Agentforce, prompt engineering, scénarios métier, design d'agent"],
  ["Développer",    "Apex (Batch, Trigger), Flow Builder, SOQL, API REST, OAuth/JWT"],
  ["Modéliser",     "Data Cloud, Data Streams, DMO, Search Index, RAG architecture"],
  ["Analyser",      "Python, SQL, Pandas, Scikit-learn, RFM, scoring prédictif"],
  ["Visualiser",    "Tableau, Power BI, Plotly Dash, Streamlit, data storytelling"],
  ["Livrer",        "recette technique, MEP, documentation, formation utilisateurs"]
];

const contacts = [
  { label: "Email",    value: profile.email,                                  href: `mailto:${profile.email}` },
  { label: "Téléphone",value: "06 24 97 24 29",                               href: `tel:+33624972429` },
  { label: "LinkedIn", value: "linkedin.com/in/prince-kombila-mbadinga",      href: profile.linkedin },
  { label: "GitHub",   value: "github.com/princekombila",                     href: profile.github }
];

const certifications = [
  // ——— SALESFORCE (4 certifications officielles) ———
  {
    name: "Agentforce Specialist",
    issuer: "Salesforce",
    code: "AI-201",
    badge: "assets/badges/agentforce-specialist.png",
    href: "https://trailheadacademy.salesforce.com/certificate/exam-agentforce-specialist---AI-201",
    competences: "Conception et déploiement d'agents IA conversationnels sur Salesforce Agentforce. Configuration des topics, actions et instructions d'agent. Prompt engineering appliqué aux agents autonomes. Orchestration d'actions dans des workflows Salesforce."
  },
  {
    name: "Data Cloud Consultant",
    issuer: "Salesforce",
    code: "Data-Con-101",
    badge: "assets/badges/data-cloud-consultant.png",
    href: "https://trailheadacademy.salesforce.com/certificate/exam-data-cloud---Data-Con-101",
    competences: "Configuration de Salesforce Data Cloud : Data Streams, Data Model Objects (DMO), Search Index. Ingestion et harmonisation de données multi-sources. Segmentation, activation et résolution d'identités. Intégration avec Einstein AI et les flux Salesforce."
  },
  {
    name: "Platform Administrator",
    issuer: "Salesforce",
    code: "Plat-Admn-201",
    badge: "assets/badges/platform-admin.png",
    href: "https://trailheadacademy.salesforce.com/certificate/exam-platform-admin---Plat-Admn-201",
    competences: "Administration complète de la plateforme Salesforce. Gestion des utilisateurs, profils, rôles et permissions. Configuration du modèle de données, objets custom et relations. Automatisation via Flow Builder. Sécurité des données, règles de partage et audit."
  },
  {
    name: "AI Associate",
    issuer: "Salesforce",
    code: "Certifié",
    badge: "assets/badges/ai-associate.png",
    href: "https://trailhead.salesforce.com/credentials/aiassociate",
    competences: "Fondamentaux de l'intelligence artificielle appliquée au CRM. Concepts de machine learning, NLP et IA générative dans l'écosystème Salesforce. Éthique de l'IA, biais et gouvernance des données. Cas d'usage Einstein AI et Trust Layer."
  },

  // ——— SALESFORCE COMMUNAUTÉ (2 distinctions) ———
  {
    name: "Trailhead Double Star Ranger",
    issuer: "Salesforce Trailhead",
    code: "Communauté",
    badge: "assets/badges/trailhead-ranger.png",
    href: null,
    competences: "Plus de 100 badges Trailhead complétés couvrant l'administration, le développement, Data Cloud et l'IA. Superbadges validant des compétences appliquées dans des scénarios de complexité réelle."
  },
  {
    name: "Agentblazer Legend",
    issuer: "Salesforce Community",
    code: "Communauté 2025",
    badge: "assets/badges/agentblazer-legend.jpg",
    href: null,
    competences: "Distinction communautaire Salesforce reconnaissant une expertise avancée sur Agentforce. Contribution active à l'adoption et à la diffusion des bonnes pratiques autour des agents IA Salesforce."
  },

  // ——— ALTERYX (2 certifications) ———
  {
    name: "Designer Core Certification",
    issuer: "Alteryx",
    code: "Validée",
    badge: "assets/badges/alteryx-designer-core.png",
    href: null,
    competences: "Maîtrise d'Alteryx Designer pour la construction de workflows ETL visuels. Nettoyage, transformation, jointure et enrichissement de données. Préparation analytique et automatisation de pipelines data sans code."
  },
  {
    name: "Foundational Micro-Credential",
    issuer: "Alteryx",
    code: "Nov. 2025",
    badge: "assets/badges/alteryx-foundational.png",
    href: null,
    competences: "Fondamentaux de la plateforme Alteryx. Manipulation de données tabulaires, blending de sources, filtrage et agrégation. Première brique de compétence vers les certifications avancées."
  },

  // ——— LIORA / DATASCIENTEST (1 certification) ———
  {
    name: "Data Analyst - Niveau 3 (FR)",
    issuer: "Liora (DataScientest)",
    code: "29 mai 2026",
    badge: null,
    href: null,
    competences: "Analyse de données avancée : statistiques descriptives et inférentielles, tests d'hypothèses. Programmation Python (Pandas, NumPy, Matplotlib). Requêtes SQL complexes. Datavisualisation et restitution de résultats pour la prise de décision."
  },

  // ——— TECHAWAY × DATASCIENTEST × OMNES EDUCATION (3 certifications) ———
  {
    name: "Python Fundamentals for Data Science",
    issuer: "TECHaway × DataScientest × Omnes",
    code: "21 juil. 2025",
    badge: null,
    href: null,
    competences: "Programmation Python appliquée à la data science. Structures de données, fonctions, librairies Pandas et NumPy. Manipulation, nettoyage et exploration de jeux de données."
  },
  {
    name: "Building Data Workflows with No-Code Platforms",
    issuer: "TECHaway × DataScientest × Omnes",
    code: "21 juil. 2025",
    badge: null,
    href: null,
    competences: "Construction de workflows de données sur plateformes no-code. Automatisation de pipelines d'ingestion, transformation et export. Orchestration de tâches data marketing sans écrire de code."
  },
  {
    name: "Data-Driven Marketing with No-Code Tools",
    issuer: "TECHaway × DataScientest × Omnes",
    code: "21 juil. 2025",
    badge: null,
    href: null,
    competences: "Marketing piloté par la donnée à l'aide d'outils no-code. Segmentation client, scoring, personnalisation de campagnes. Mesure de performance et optimisation basée sur les données."
  }
];

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
  return parent;
};

const createLink = (href, text, className = "") => {
  const link = createElement("a", className, text);
  link.href = href;
  if (href && href !== "#" && !href.startsWith("#") && !href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

function findNode(nodes, label) {
  return nodes.find((node) => node.label === label);
}

function renderNetwork(container, nodes, links, className) {
  if (!container) return;

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("aria-hidden", "true");

  const markerId = `${className}-arrow`;
  const defs = document.createElementNS(svgNS, "defs");
  const marker = document.createElementNS(svgNS, "marker");
  const arrow = document.createElementNS(svgNS, "path");
  marker.setAttribute("id", markerId);
  marker.setAttribute("markerWidth", "6");
  marker.setAttribute("markerHeight", "6");
  marker.setAttribute("refX", "5");
  marker.setAttribute("refY", "3");
  marker.setAttribute("orient", "auto");
  arrow.setAttribute("d", "M0,0 L6,3 L0,6 Z");
  marker.appendChild(arrow);
  defs.appendChild(marker);
  svg.appendChild(defs);

  links.forEach(([from, to, type]) => {
    const source = findNode(nodes, from);
    const target = findNode(nodes, to);
    if (!source || !target) return;
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", source.x);
    line.setAttribute("y1", source.y);
    line.setAttribute("x2", target.x);
    line.setAttribute("y2", target.y);
    if (type) line.classList.add(type);
    if (type === "path") line.setAttribute("marker-end", `url(#${markerId})`);
    if (type === "bidirectional") {
      line.setAttribute("marker-start", `url(#${markerId})`);
      line.setAttribute("marker-end", `url(#${markerId})`);
    }
    if (type === "vertical") line.setAttribute("marker-end", `url(#${markerId})`);
    svg.appendChild(line);
  });

  container.appendChild(svg);

  nodes.forEach((node) => {
    const item = createElement("span", `${className} ${node.type || node.group || ""}`, node.label);
    item.style.left = `${node.x}%`;
    item.style.top = `${node.y}%`;
    container.appendChild(item);
  });
}

function renderActiveTensions(container) {
  if (!container) return;

  const module = createElement("div", "tension-module");
  const subtitle = createElement("p", "tension-subtitle", tensionSubtitle);
  const rows = createElement("div", "tension-rows");

  activeTensions.forEach(({ left, right, duration, delay, from, to }) => {
    const row = createElement("div", "tension-row");
    row.style.setProperty("--duration", duration);
    row.style.setProperty("--delay", delay);
    row.style.setProperty("--from", from);
    row.style.setProperty("--to", to);

    const track = createElement("span", "tension-track");
    track.appendChild(createElement("span", "tension-cursor"));

    appendChildren(row, [
      createElement("span", "tension-concept", left),
      track,
      createElement("span", "tension-concept right", right)
    ]);
    rows.appendChild(row);
  });

  appendChildren(module, [subtitle, rows]);
  container.appendChild(module);
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  if (!grid) return;

  projects.forEach((project, index) => {
    const card = createElement("article", "project-card reveal");
    card.style.setProperty("--accent", project.accent);

    const top = createElement("div", "project-top");
    appendChildren(top, [
      createElement("span", "", String(index + 1).padStart(2, "0")),
      createElement("span", "project-status", project.status)
    ]);

    const title = createElement("h3", "", project.title);
    const description = createElement("p", "project-description", project.description);

    const details = createElement("dl", "project-details");
    const detailRows = project.details || [
      ["Probleme", project.problem],
      ["Methode", project.method],
      ["Livrable", project.result],
      ["Limite", project.limit],
      ["Suite", project.nextStep]
    ];
    detailRows.forEach(([term, value]) => {
      details.appendChild(createElement("dt", "", term));
      details.appendChild(createElement("dd", "", value));
    });

    const stack = createElement("div", "tag-row");
    project.stack.forEach((item) => stack.appendChild(createElement("span", "stack-tag", item)));

    const tags = createElement("div", "tag-row secondary");
    project.tags.forEach((tag) => tags.appendChild(createElement("span", "meta-tag", tag)));

    const links = createElement("div", "project-links");
    appendChildren(links, [
      createLink(project.github, "GitHub"),
      createLink(project.live, "Live")
    ]);

    appendChildren(card, [top, title, description, details, stack, tags, links]);
    grid.appendChild(card);
  });
}

function renderExperiences() {
  const grid = document.querySelector("#experience-grid");
  if (!grid) return;

  experiences.forEach((experience, index) => {
    const card = createElement("article", "experience-card reveal");
    const top = createElement("div", "experience-top");
    appendChildren(top, [
      createElement("span", "", String(index + 1).padStart(2, "0")),
      createElement("time", "", experience.period)
    ]);

    const title = createElement("h3", "", experience.role);
    const context = createElement("p", "experience-context", experience.context);
    const missions = createElement("ul", "mission-list");
    experience.missions.forEach((mission) => missions.appendChild(createElement("li", "", mission)));

    const tools = createElement("div", "tag-row");
    experience.tools.forEach((tool) => tools.appendChild(createElement("span", "stack-tag", tool)));

    const impact = createElement("p", "experience-impact", experience.impact);

    appendChildren(card, [top, title, context, missions, tools, impact]);
    grid.appendChild(card);
  });
}

function renderSkills() {
  renderNetwork(document.querySelector("#skill-network"), skillNodes, skillLinks, "skill-node");

  const matrix = document.querySelector("#skill-matrix");
  if (!matrix) return;
  skillMatrix.forEach(([label, value]) => {
    const row = createElement("article", "matrix-row");
    appendChildren(row, [
      createElement("strong", "", label),
      createElement("span", "", value)
    ]);
    matrix.appendChild(row);
  });
}

function renderCertifications() {
  const grid = document.querySelector("#certification-grid");
  if (!grid) return;

  certifications.forEach((cert, index) => {
    const card = createElement("article", "certification-card reveal");

    const top = createElement("div", "certification-top");
    appendChildren(top, [
      createElement("span", "", String(index + 1).padStart(2, "0")),
      createElement("span", "certification-issuer", cert.issuer)
    ]);

    const badgeContainer = createElement("div", "certification-badge");
    if (cert.badge) {
      const img = document.createElement("img");
      img.src = cert.badge;
      img.alt = cert.name;
      img.loading = "lazy";
      badgeContainer.appendChild(img);
    } else {
      const placeholder = createElement("div", "certification-badge-placeholder");
      placeholder.textContent = cert.issuer.charAt(0);
      badgeContainer.appendChild(placeholder);
    }

    const title = createElement("h3", "", cert.name);
    const code = createElement("span", "certification-code", cert.code);
    const desc = createElement("p", "certification-competences", cert.competences);

    const actions = createElement("div", "certification-actions");
    if (cert.href) {
      const link = createLink(cert.href, "Vérifier", "button button-muted certification-link");
      actions.appendChild(link);
    }

    appendChildren(card, [top, badgeContainer, title, code, desc, actions]);
    grid.appendChild(card);
  });
}

function renderContacts() {
  const grid = document.querySelector("#contact-grid");
  if (!grid) return;

  contacts.forEach((contact, index) => {
    const link = createLink(contact.href, "", "contact-card");
    appendChildren(link, [
      createElement("span", "contact-index", String(index + 1).padStart(2, "0")),
      createElement("strong", "", contact.label),
      createElement("span", "", contact.value)
    ]);
    grid.appendChild(link);
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupCursor() {
  const cursor = document.querySelector(".cursor");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!cursor || !canHover) return;

  window.addEventListener("pointermove", (event) => {
    cursor.classList.add("is-active");
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll("a, .project-card, .experience-card, .skill-node").forEach((element) => {
    element.addEventListener("pointerenter", () => cursor.classList.add("is-hovering"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("is-hovering"));
  });
}

function setupActiveNavigation() {
  const links = Array.from(document.querySelectorAll(".nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const active = links.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
        links.forEach((link) => link.classList.remove("is-current"));
        if (active) active.classList.add("is-current");
      });
    },
    { rootMargin: "-32% 0px -58% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  renderActiveTensions(document.querySelector("#hero-system-map"));
  renderProjects();
  renderExperiences();
  renderSkills();
  renderCertifications();
  renderContacts();
  setupReveal();
  setupCursor();
  setupActiveNavigation();
});
