# 🚀 GETTING_STARTED.md

## Getting Started with AI Dev Squad Platform

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL 14+
- Docker & Docker Compose (optional but recommended)

### Quick Start (Docker)

```bash
# Clone the repository
git clone https://github.com/narainrit31-bot/ai-dev-squad-platform.git
cd ai-dev-squad-platform

# Copy environment file
cp .env.example .env

# Start all services
docker-compose up -d

# Wait for services to be healthy
sleep 30

# Run database migrations
npm run db:migrate

# Open browser to http://localhost:3000
```

### Manual Installation

#### 1. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp ../.env.example .env

# Start PostgreSQL
pg_ctl -D /usr/local/var/postgres start

# Run migrations
npm run db:migrate

# Start development server
npm run start:dev
```

#### 2. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Environment Variables

Create `.env` file:

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001

# Backend
NODE_ENV=development
PORT=3001
JWT_SECRET=your_jwt_secret_key

# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=ai_dev_squad

# AI Models
OPENAI_API_KEY=your_openai_key
CLAUDE_API_KEY=your_claude_key
```

### Available Commands

```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Frontend only
npm run dev:backend      # Backend only

# Production
npm run build            # Build both
npm run start            # Start production backend

# Database
npm run db:migrate       # Run migrations
npm run db:seed          # Seed database

# Testing
npm run test             # Run tests
npm run test:watch       # Watch mode

# Docker
npm run docker:up        # Start containers
npm run docker:down      # Stop containers
npm run docker:build     # Rebuild containers
```

### Troubleshooting

**Port 3000/3001 already in use:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**Database connection failed:**
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env
- Verify credentials

**WebSocket connection failed:**
- Check backend is running on port 3001
- Verify NEXT_PUBLIC_WS_URL in frontend .env
- Check CORS settings in backend

### Next Steps

1. Check out [ARCHITECTURE.md](./ARCHITECTURE.md) for system design
2. Read [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for API endpoints
3. Review [AGENT_GUIDE.md](./AGENT_GUIDE.md) for AI agent development
