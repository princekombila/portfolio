# BRIEF CLAUDE CODE — Portfolio Prince KOMBILA MBADINGA

> **Comment utiliser ce brief** : ouvre ce dossier dans Claude Code (`cd portfolio_prince_kombila_starter && claude`), puis demande à Claude d'exécuter ce brief étape par étape. Chaque étape est numérotée et contient les blocs de code prêts à coller. Ne saute pas d'étape : l'ordre compte pour les tests intermédiaires.

---

## 0. Contexte du projet

**Tu travailles sur le portfolio personnel de Prince Ismaël KOMBILA MBADINGA**, consultant Salesforce & AI chez Niji, 4× certifié Salesforce, étudiant en MSc2 Manager Data Marketing à l'INSEEC Lyon.

### 0.1 Point de départ

Ce dossier contient une **base technique** récupérée depuis le portfolio public d'Enzo de Matos ([brainfkt.github.io/Brainfkt](https://brainfkt.github.io/Brainfkt/)). C'est une base à **transformer en profondeur** :

- ✅ **Architecture conservée** — HTML + CSS + JS vanille, sans framework, pilotage par les données dans `script.js`
- 🔄 **Données 100 % remplacées** — toutes les structures JS du haut de `script.js` deviennent celles de Prince
- 🔄 **Identité visuelle remaniée** — palette de couleurs orientée "Salesforce / Data / IA" (cf. étape 4)
- 🔄 **Méta-tags réécrits** — SEO et OpenGraph aux couleurs de Prince
- 🔄 **Photo de profil remplacée** — `profile.png` à substituer par celle de Prince

### 0.2 Objectif final

Un portfolio statique déployable sur **GitHub Pages** ou **Vercel** qui :

1. Présente Prince comme consultant Salesforce & AI senior
2. Met en avant ses **10 projets** (3 académiques + 7 Salesforce)
3. Détaille ses **3 expériences pro** (Niji, World Mission Agency, Rhythex Consulting)
4. Affiche ses **certifications** (4 Salesforce + 3 Alteryx + 3 Liora + 3 TECHaway)
5. Permet le contact direct (mail, LinkedIn, GitHub, téléphone)

### 0.3 Identité de Prince — à respecter dans tous les textes

- **Ton** : direct, professionnel, technique mais accessible
- **Langue** : français
- **Verbes d'action** : *conçois, déploie, pilote, automatise, orchestre, sécurise, industrialise*
- **Pas de jargon creux** ("synergies", "écosystème", "leveraging") — préférer le concret métier
- **Posture** : consultant qui livre, pas étudiant qui apprend

---

## 1. Fichiers du projet

```
portfolio_prince_kombila_starter/
├── BRIEF_CLAUDE_CODE.md        ← ce fichier (ne pas modifier)
├── index.html                   ← structure HTML, ~172 lignes (modifications mineures étape 2)
├── styles.css                   ← design CSS, ~1241 lignes (palette à modifier étape 4)
├── script.js                    ← toutes les données + logique (modifications majeures étape 3)
├── profile.png                  ← photo de profil (à remplacer étape 5)
└── assets/
    ├── noise.svg                ← texture bruit de fond (ne pas toucher)
    └── preview-placeholder.svg  ← favicon + image OpenGraph (à remplacer optionnel)
```

---

## 2. ÉTAPE 1 — Méta-tags HTML

Modifier les **lignes 4 à 14** de `index.html`. Voici le bloc cible :

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Portfolio de Prince Kombila Mbadinga, consultant Salesforce & AI, spécialiste Agentforce et Data Cloud, 4× certifié Salesforce.">
<meta name="theme-color" content="#0a0e14">

<meta property="og:type" content="website">
<meta property="og:title" content="Prince Kombila Mbadinga — Consultant Salesforce & AI">
<meta property="og:description" content="Agentforce Specialist · Data Analytics & BI · 4× certifié Salesforce.">
<meta property="og:image" content="assets/preview-placeholder.svg">

<title>Prince Kombila Mbadinga — Consultant Salesforce & AI · Agentforce Specialist</title>
```

Modifier aussi la balise `<html lang="fr">` — déjà bonne, à laisser telle quelle.

---

## 3. ÉTAPE 2 — Modifications mineures de `index.html`

### 3.1 Logo / brand (lignes ~23-28)

Remplacer :
```html
<a class="brand" href="#accueil" aria-label="Retour a l'accueil">
  <span class="brand-mark">EDM</span>
  <span class="brand-slash">/</span>
  <span>Brainfkt</span>
</a>
```

Par :
```html
<a class="brand" href="#accueil" aria-label="Retour à l'accueil">
  <span class="brand-mark">PKM</span>
  <span class="brand-slash">/</span>
  <span>Salesforce & AI</span>
</a>
```

### 3.2 Lien GitHub header (ligne ~37)

Remplacer `https://github.com/Brainfkt` par `https://github.com/princekombila`.

### 3.3 Ligne d'identité hero (ligne ~42)

Remplacer :
```html
<p class="identity-line">Enzo de Matos - data analyst, interface design, marketing systems</p>
```

Par :
```html
<p class="identity-line">Prince Kombila Mbadinga — consultant Salesforce & AI, Agentforce Specialist, Data & BI</p>
```

### 3.4 Titre hero (ligne ~43)

Remplacer le `<h1>` par :
```html
<h1 id="hero-title">Je conçois des agents IA qui rendent les équipes Salesforce plus rapides, plus précises et plus autonomes.</h1>
```

### 3.5 Paragraphe d'accroche hero (lignes ~44-49)

Remplacer le `<p class="hero-copy">` par :
```html
<p class="hero-copy">
  Consultant Salesforce Data & IA, je conçois et déploie des solutions Agentforce, Einstein AI
  et Data Cloud pour des clients grand compte (Broadpeak, LOXAM, Hermès, Europe Assistance).
  Mon approche combine prompt engineering, configuration Data Cloud, développement Apex et
  recette technique — du cadrage à la mise en production.
</p>
```

### 3.6 Alt de l'image (ligne ~54)

Remplacer `Portrait dithered d'Enzo de Matos` par `Portrait de Prince Kombila Mbadinga`. Idem ligne ~53 sur l'`aria-label`.

### 3.7 Boutons CTA hero (lignes ~58-59)

Remplacer :
```html
<a class="button button-primary" href="#projets">Voir les projets</a>
<a class="button button-muted" href="mailto:email@example.com">Me contacter</a>
```

Par :
```html
<a class="button button-primary" href="#projets">Voir les projets</a>
<a class="button button-muted" href="mailto:pmbadinga@yahoo.com">Me contacter</a>
```

### 3.8 Footer (ligne dernière)

Chercher `© 2026 Enzo de Matos` et remplacer par `© 2026 Prince Kombila Mbadinga`. La sous-mention `Data / interface / marketing systems` devient `Salesforce · IA · Data Marketing`.

---

## 4. ÉTAPE 3 — Réécriture complète de `script.js` (données)

**Remplacer les lignes 1 à 205 de `script.js`** par le bloc ci-dessous. Ne pas toucher au reste du fichier (à partir de la ligne `const createElement = ...` qui contient la logique de rendu).

```javascript
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
    title: "Broadpeak — Pilote IA Support Client",
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
    title: "LOXAM — Agent Smart Visit",
    status: "publié",
    description: "Agent commercial Agentforce d'aide post-visite chantier pour les commerciaux du leader européen de la location BTP.",
    problem: "Les comptes-rendus de visite étaient rédigés à 75 %, et seulement 30 % étaient complets — perte d'informations terrain et reporting inutilisable.",
    method: "Saisie vocale ou textuelle du commercial, structuration auto du CR, relance par questions de l'agent en cas d'éléments manquants. Automatisation des actions liées : création prochaine visite, tâches, mise à jour contact et offre. Lexique métier BTP intégré.",
    result: "95 % de CR rédigés (+20 pts), 80 % de CR complets (+50 pts), 5 min par CR — soit 2h30 de gain par commercial et par semaine.",
    limit: "Couverture limitée au workflow post-visite, pas encore d'extension à la prospection.",
    nextStep: "Extension aux interventions techniques et au reporting consolidé direction commerciale.",
    stack: ["Salesforce Agentforce", "Reconnaissance vocale", "Flow Builder", "Apex", "Migration de données", "Recette technique"],
    tags: ["IA", "salesforce", "BTP", "commercial"],
    github: "#",
    live: "#",
    accent: "#f4a261"
  },
  {
    title: "DPE Reality Check — Open Data University",
    status: "publié",
    description: "Concours national Open Data University (Latitudes × Enedis × data.gouv.fr) — confrontation des Diagnostics de Performance Énergétique aux consommations réelles.",
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
    title: "SmartEngine — Prédiction de churn SaaS B2B",
    status: "publié",
    description: "Système de scoring prédictif du churn pour un éditeur SaaS B2B (cas RavenStack) — projet 5 sprints en Scrum.",
    problem: "Anticiper le churn pour permettre aux équipes Customer Success d'intervenir avant la résiliation et sécuriser le MRR.",
    method: "5 sprints Scrum (rôle Product Owner + Dev Data). Pipeline anti-fuite avec détection automatique de colonnes de leakage. Benchmark d'algorithmes (Logistic Regression, Random Forest, Gradient Boosting). Double seuil de décision (0.20 classification, 0.60 priorisation CS). Explicabilité SHAP. Orchestration multi-agents Gemini CLI.",
    result: "Modèle ML opérationnel avec Recall > 75 % sur la classe Churn, dashboard Streamlit pour les CSM, automatisation n8n.",
    limit: "Dataset RavenStack synthétique — à valider sur données réelles avant industrialisation.",
    nextStep: "Branchement sur un vrai pipeline de données SaaS, intégration au CRM.",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Gemini CLI", "n8n", "SHAP"],
    tags: ["ML", "churn", "SaaS", "scrum"],
    github: "https://github.com/Brainfkt/smartengine-groupe-5",
    live: "#",
    accent: "#a78bfa"
  },
  {
    title: "Hermès — Démo Agentforce Retail & Luxe",
    status: "publié",
    description: "5 scénarios Agentforce pour le service client haut de gamme de la maison Hermès.",
    problem: "Comment fluidifier l'expérience client luxe (achat, livraison, réclamation) sans dégrader la posture de marque ?",
    method: "Scénario 1 — Achat coffret parfum avec création contact/compte/opportunité/commande. Scénario 2 — Variante cliente connue. Scénario 3 — Décalage de livraison. Scénario 4 — Produit non conforme et création de case. Scénario 5 — Console agent service client : cases prioritaires, résumé contextualisé, génération de tâches.",
    result: "Démo livrée et présentée. Couverture des principaux parcours clients luxe en B2C.",
    limit: "Démo conceptuelle — pas de mise en production réelle.",
    nextStep: "Si retenu : POC avec données réelles et intégration au site Hermès.",
    stack: ["Salesforce Agentforce", "Service Cloud", "Prompt Engineering", "Conception de scénarios"],
    tags: ["IA", "salesforce", "luxe", "démo"],
    github: "#",
    live: "#",
    accent: "#a78bfa"
  },
  {
    title: "Europe Assistance — Démo Agentforce Assurance",
    status: "publié",
    description: "4 scénarios Agentforce pour la déclaration et l'instruction de sinistres en assurance.",
    problem: "Simplifier la déclaration de sinistre côté assuré et outiller les agents d'instruction côté Salesforce.",
    method: "Scénario 1 — Déclaration éligible (identification, vérif contrat, collecte des infos, prestations, email d'accusé). Scénario 2 — Sinistre non éligible avec transfert Omnichannel à un agent live. Scénario 3 SF — Instruction par un agent (mandatement expert, ajout prestataires). Scénario 4 SF — Dossier incomplet et relance pièces.",
    result: "Démo sectorielle livrée pour EAF avec 4 parcours complets bout en bout.",
    limit: "Conception sectorielle — sans intégration au SI assurance d'EAF.",
    nextStep: "Phase POC avec un sous-périmètre métier réel d'Europe Assistance.",
    stack: ["Salesforce Agentforce", "Service Cloud", "Omnichannel", "Templates email", "Workflow"],
    tags: ["IA", "salesforce", "assurance", "démo"],
    github: "#",
    live: "#",
    accent: "#34d399"
  },
  {
    title: "Retail & Luxe — Cas d'usage Agentforce WhatsApp & Messenger",
    status: "publié",
    description: "5 scénarios Agentforce déployés sur canaux de messagerie (WhatsApp, Messenger) pour Retail et Luxe.",
    problem: "Comment activer Agentforce sur les canaux conversationnels où sont les clients, sans sacrifier la qualité du service ?",
    method: "Scénario Sodastream (B2C, conseil produit), Golden Luxe (réclamation VIP routée Omnichannel), Nike (échange retour), Decathlon (assistant interne conseillère), Maison de luxe (cadeau personnalisé avec relance).",
    result: "Présentation sectorielle complète couvrant les principaux cas d'usage Retail et Luxe en canal messagerie.",
    limit: "Conception sectorielle — démo, pas de déploiement en production.",
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
    limit: "Données simulées sur la boutique cosmétique — à brancher sur un vrai e-commerce pour usage production.",
    nextStep: "Industrialisation sur un client réel et ajout de modèles prédictifs (CLV, next best offer).",
    stack: ["MySQL", "Python", "Pandas", "Plotly Dash", "API REST", "ETL", "RFM"],
    tags: ["data", "marketing", "segmentation", "BI"],
    github: "https://github.com/princekombila/algo-bdd-msc2",
    live: "#",
    accent: "#fbbf24"
  },
  {
    title: "LOXAM — Démo Agentforce Voice",
    status: "publié",
    description: "Démo commerciale d'Agentforce en mode vocal pour le contexte terrain BTP.",
    problem: "Démontrer la capacité d'Agentforce à interagir en voix naturelle pour les commerciaux mobiles, mains occupées.",
    method: "Design end-to-end : topics, instructions, Flows d'orchestration sur Events, Contacts et Leads. Sécurisation des actions API REST avec OAuth/JWT.",
    result: "Démo animée en client final pour illustrer l'usage vocal d'Agentforce en mobilité.",
    limit: "Démo — pas de déploiement opérationnel.",
    nextStep: "POC vocal sur un sous-périmètre réel LOXAM si retenu.",
    stack: ["Salesforce Agentforce", "Voice", "Flow Builder", "API REST", "OAuth/JWT"],
    tags: ["IA", "salesforce", "voice", "BTP"],
    github: "#",
    live: "#",
    accent: "#ff6f91"
  },
  {
    title: "Formation Agentforce — Référent Niji",
    status: "en continu",
    description: "Formation des nouveaux entrants Niji sur Agentforce — référent technique interne.",
    problem: "Accélérer la montée en compétences des consultants Niji sur Agentforce pour répondre à la demande client croissante.",
    method: "Sessions de formation structurées : prise en main d'Agentforce, bonnes pratiques de prompt engineering, configuration Data Cloud, intégration aux Flows et Apex, démonstration de cas d'usage clients.",
    result: "Onboarding accéléré des nouveaux entrants Niji, capitalisation des bonnes pratiques projet.",
    limit: "Formation interne — pas de support externe pour l'instant.",
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
    context: "Niji — Lyon, France",
    period: "Sept. 2024 — Sept. 2026",
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
    context: "World Mission Agency — Lyon, France",
    period: "Fév. 2023 — Sept. 2024",
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
    context: "Rhythex Consulting — Ghana",
    period: "Fév. 2022 — Avr. 2024",
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
```

> ⚠️ **Important** : ne pas modifier le code au-delà de la ligne `const contacts = [...]`. Toute la logique de rendu en dessous reste intacte.

> ℹ️ **Note** : la structure d'origine de `contacts` avait 3 éléments. Ici on en a 4 (ajout du téléphone). Si le rendu HTML ne supporte pas une 4ᵉ ligne, vérifier que la grille CSS `.contact-grid` (ou équivalent) s'adapte ou rester sur 3.

---

## 5. ÉTAPE 4 — Palette de couleurs personnalisée

Pour différencier le portfolio de Prince de celui d'Enzo, **remplacer les variables `:root` aux lignes 1-20 de `styles.css`** par :

```css
:root {
  color-scheme: dark;
  --bg: #0a0e14;          /* bleu nuit profond — différent du noir d'Enzo */
  --panel: #11161e;
  --panel-2: #161c25;
  --ink: #f0ede7;
  --muted: #aaa39a;
  --dim: #696f6f;
  --line: rgba(240, 237, 231, 0.18);
  --line-strong: rgba(240, 237, 231, 0.36);
  --cyan: #00A1E0;        /* bleu Salesforce officiel — signature de Prince */
  --orange: #f4a261;      /* chaud — projets terrain/BTP */
  --yellow: #fbbf24;      /* doré — certifications & marketing */
  --violet: #a78bfa;      /* IA générative & luxe */
  --pink: #ff6f91;        /* innovation/voice */
  --green: #34d399;       /* data & écologie */
  --max: 1280px;
  --sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}
```

### 5.1 Mettre à jour le radial-gradient du body (lignes 42-45)

Remplacer :
```css
background:
  radial-gradient(circle at 86% 8%, rgba(85, 203, 211, 0.09), transparent 24rem),
  radial-gradient(circle at 12% 0%, rgba(255, 139, 74, 0.08), transparent 22rem),
  var(--bg);
```

Par :
```css
background:
  radial-gradient(circle at 86% 8%, rgba(0, 161, 224, 0.10), transparent 24rem),
  radial-gradient(circle at 12% 0%, rgba(167, 139, 250, 0.08), transparent 22rem),
  var(--bg);
```

(Le premier gradient passe de cyan d'Enzo au bleu Salesforce ; le second du orange d'Enzo au violet IA.)

### 5.2 Chercher d'autres références hard-codées

Faire un `grep` sur les couleurs originales d'Enzo dans `styles.css` et adapter si besoin :

```bash
grep -nE "#ff8b4a|#55cbd3|#f4d35e|#b98cff|255, *139, *74|85, *203, *211" styles.css
```

Pour chaque résultat, remplacer en cohérence avec la nouvelle palette.

---

## 6. ÉTAPE 5 — Photo de profil

Prince doit fournir une **photo de profil professionnelle au format PNG ou JPG**, idéalement carrée (1:1) ou portrait (4:5). La placer à la racine du projet sous le nom `profile.png` (écraser le fichier existant).

L'effet "dithered" rétro d'Enzo est appliqué via CSS — il fonctionne avec n'importe quelle photo. Si Prince préfère un rendu plus clean (sans dithering), Claude peut éventuellement retirer le filtre CSS, mais c'est optionnel et déconseillé en première intention (le dithering fait partie de la signature visuelle du template).

---

## 7. ÉTAPE 6 — Tester en local

Une fois toutes les modifications appliquées, tester immédiatement :

```bash
cd portfolio_prince_kombila_starter
python3 -m http.server 8000
# Ouvrir http://localhost:8000 dans un navigateur
```

### 7.1 Critères de validation

- [ ] La page se charge sans erreur dans la console JS du navigateur
- [ ] Le héros affiche le bon titre, la bonne accroche, les bons CTA
- [ ] Les 10 projets s'affichent avec leurs accents de couleur respectifs
- [ ] Les 3 expériences pro s'affichent avec leurs détails
- [ ] Le module "tensions actives" s'anime (IA ↔ Auditabilité, etc.)
- [ ] Le module "compétences" (skill nodes + matrix) s'affiche avec les bonnes données Salesforce/IA/Data
- [ ] Les contacts en bas affichent email, téléphone, LinkedIn, GitHub
- [ ] La palette est cohérente (fond bleu nuit, accent Salesforce, etc.)
- [ ] La page est responsive (tester sur largeur mobile via le devtools)

### 7.2 Si erreur dans la console

Les erreurs typiques :
- **`Uncaught SyntaxError`** dans `script.js` → vérifier les virgules manquantes ou guillemets non échappés dans les chaînes (attention aux apostrophes françaises dans les descriptions)
- **Image cassée pour `profile.png`** → s'assurer que le fichier existe à la racine
- **CSS variables non définies** → vérifier que les `--cyan`, `--green` etc. sont bien définis dans `:root`

---

## 8. ÉTAPE 7 — Déploiement

### Option A — GitHub Pages (gratuit, recommandé)

```bash
cd portfolio_prince_kombila_starter
git init
git add .
git commit -m "Initial commit : portfolio Prince Kombila Mbadinga"
git branch -M main
git remote add origin https://github.com/princekombila/portfolio.git
git push -u origin main
```

Puis dans **Settings → Pages → Source : Deploy from branch → main → /(root) → Save**.

Le site sera accessible à `https://princekombila.github.io/portfolio/` après ~2 minutes.

### Option B — Vercel (gratuit, plus rapide, domaine custom plus simple)

```bash
npx vercel
```

Suivre les prompts. URL générée en ~30 secondes.

---

## 9. Checklist finale de livraison

- [ ] Étape 1 — Méta-tags HTML mis à jour (description, OG, title)
- [ ] Étape 2 — Header, hero, CTA et footer personnalisés
- [ ] Étape 3 — `script.js` réécrit (lignes 1-205) avec toutes les données de Prince
- [ ] Étape 4 — Palette `:root` modifiée + radial-gradient body
- [ ] Étape 5 — Photo `profile.png` remplacée
- [ ] Étape 6 — Test local sans erreur console
- [ ] Étape 7 — Déploiement effectué et URL communiquée à Prince

## 10. Pour aller plus loin (optionnel)

Si Prince le souhaite, propositions d'évolutions :

1. **Ajouter une section "Certifications"** avec ses 13 certifications (4 Salesforce + 3 Alteryx + 3 Liora + 3 TECHaway + distinctions Agentblazer Legend / Double Star Ranger). Cela nécessite un ajout léger en HTML + structure JS `const certifications = [...]` + bloc de rendu dans `script.js`.
2. **Ajouter le CV PDF** dans `assets/` et mettre à jour `profile.cv` avec le chemin.
3. **Internationaliser** (FR/EN) — Prince est bilingue, un toggle EN/FR ouvrirait le portfolio à des recruteurs internationaux.
4. **Améliorer l'image OpenGraph** — remplacer `assets/preview-placeholder.svg` par un visuel personnalisé (1200×630px).
5. **Ajouter un favicon** dédié (icône PKM).

Ces évolutions ne sont pas dans le périmètre initial mais peuvent être proposées à Prince après le premier déploiement.

---

## 11. Note licence

Le code HTML/CSS/JS de ce projet est dérivé du portfolio public d'Enzo de Matos ([Brainfkt/Brainfkt](https://github.com/Brainfkt/Brainfkt)). Le repo d'origine n'a pas de fichier LICENSE — en droit strict, cela signifie "tous droits réservés". Prince connaît Enzo (collaboration sur SmartEngine) — **lui demander son accord avant publication publique du fork** est la voie la plus saine. Les modifications de palette et de contenu apportées dans ce brief font déjà du portfolio quelque chose de substantiellement différent, mais l'accord explicite reste recommandé.
