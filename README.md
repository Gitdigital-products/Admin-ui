# GitDigital Admin UI

Internal operations, compliance review, and overrides management interface.

## Features

- **Dashboard**: Overview of system metrics and activity
- **Internal Operations**: User management, system monitoring, logs
- **Compliance Review**: Policy enforcement, audit trails, violation tracking
- **Overrides**: Permission overrides, emergency access management

## Tech Stack

- React 18 + TypeScript
- Vite (Build tool)
- Tailwind CSS (Styling)
- React Router (Navigation)
- Lucide React (Icons)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd gitdigital-admin-ui
```

1. Install dependencies

```bash
npm install
```

1. Start development server

```bash
npm run dev
```

1. Open http://localhost:3000 in your browser

Build for Production

```bash
npm run build
```

The built files will be in the dist directory.

Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── types/         # TypeScript definitions
├── utils/         # Utility functions
└── App.tsx        # Main application component
```

Available Scripts

· npm run dev - Start development server
· npm run build - Build for production
· npm run lint - Run ESLint
· npm run preview - Preview production build

Environment Variables

Copy .env.example to .env and configure:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_TITLE=GitDigital Admin
```

License

Proprietary - Internal Use Only
