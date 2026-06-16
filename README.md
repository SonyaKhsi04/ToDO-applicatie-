# ToDO-applicatie - Sonya Khosravani

## overview

Dit project is gebouwd voor mensen die meer structuur willen in hun dagelijks leven door middel van het gebruiken van een todo list om taken af te ronden en dingen niet te vergeten.Een moderne Todo-app gebouwd met Next.js App Router met eigen API routes en in-memory data opslag.

## Inleiding

Todo App (Next.js 13+ App Router)
Dit project is een Todo applicatie gebouwd met Next.js 13+ (App Router).
De applicatie bestaat uit een moderne frontend met herbruikbare componenten en een eigen API-laag voor het beheren van todos.
Het project is ontwikkeld als leerproject om te werken met een nieuw framework (Next.js App Router architecture) en om zowel frontend als backend functionaliteit binnen één project te combineren. Dit project gebruikt een custom REST API met Next.js Route Handlers. _De data wordt opgeslagen in een server-side in-memory array (module scope), zonder externe database._

## projectstructuur

app/
├── api/todos/
│ ├── route.js
│ └── [id]/
│ └── route.js
├── layout.tsx
├── page.tsx
├── componenten/
│ ├── filter.tsx
│ ├── overzicht.tsx
│ ├── todos.tsx
│ └── toevoegen.tsx
└── css/
├── globals.css
├── filter.module.css
├── overzicht.module.css
├── todos.module.css
└── toevoegen.module.css

## Features

- Todo’s toevoegen met titel en categorie
- Overzicht van alle todos
- Filteren op: Alles, Open, Klaar enCategorieën
- Todo’s afvinken (completed / not completed)
- Todo’s verwijderen
- Responsive UI met CSS Modules
- Real-time state updates in de frontend

## Componenten

Overzicht - datum en percentage overzicht van het afgevinkte werk
Filter - Je kan op basis van catogorien zien welke to do's je nog moet afvinken
Toevoegen - Hier kan je op basis van catogorie een nieuwe task toevoegen
Todos - Je kan je to do's verwijderen en afstrepen

## UI

(https://i562410.hera.fontysict.net/public_html/semester%204/UI%20todo%20app)

## Tech Stack

- Next.js (App Router)
- React (Client Components)
- TypeScript
- CSS Modules
- Native Fetch API

## Werking van de API

De API beheert todos via HTTP requests:

**/api/todos**
GET → haalt alle todos op
POST → maakt een nieuwe todo aan

**/api/todos/[id]**
PATCH → togglet een todo (completed / open)
DELETE → verwijdert een todo

## Data opslag

De data wordt opgeslagen in een server-side in-memory array (module scope).

- Geen externe database gebruikt
- Data wordt niet permanent opgeslagen
- Geschikt voor learning/demo doeleinden

## Styling

- CSS Modules per component
- Globale styles via globals.css
- Responsive design
- Animatie ( task completed effect)

# Installatie

1. Clone de repository

- git clone <jouw-repo-url>
- cd <jouw-project-naam>

2. Installeer dependencies

- npm install

3. Start de development server

- npm run dev

4. Open in je browser
   (http://localhost:3000)

## Wat heb ik geleerd

- het werken met een nieuwe framework: Next.js App Router.
  Hierdoor heb ik geleerd hoe je:
- Werkt met client components en server API routes
- Een fullstack applicatie in één project bouwt
- State synchroniseert met een eigen API
- Dynamische CRUD-functionaliteit opzet zonder externe database
