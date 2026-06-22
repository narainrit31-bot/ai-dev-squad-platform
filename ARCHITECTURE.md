# 🏗️ ARCHITECTURE.md

## AI Dev Squad Platform - System Architecture

### Overview

The AI Dev Squad Platform is a full-stack, real-time collaborative workspace for AI agents.

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js 15)                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Dashboard │ Office │ Chat │ Tasks │ API Monitor       │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Hooks (useSocket, useAgents) │ State (Zustand)       │ │
│  └────────────────────────────────────────────────────────┘ │
└────────────────────────┬─────────────────────────────────────┘
                         │
           ┌─────────────┼─────────────┐
           │             │             │
      HTTP REST      WebSocket       File
           │             │          Transfer
           │             │             │
┌──────────▼─────────────▼─────────────▼──────────────────────┐
│              Backend (NestJS + Socket.IO)                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Controllers (Agents, Chat, Tasks, Projects)          │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Services (Business Logic)                             │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  8 AI Agents                                           │ │
│  │  • Project Manager      • UI/UX Designer                │ │
│  │  • Frontend Developer   • Backend Developer             │ │
│  │  • AI Engineer          • QA Tester                     │ │
│  │  • DevOps Engineer      • Marketing Specialist          │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────┬───────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
┌───────▼──────┐   ┌──────▼──────┐   ┌──────▼──────┐
│  PostgreSQL  │   │    Redis    │   │  Supabase   │
│              │   │  (Caching)  │   │ (Realtime)  │
└──────────────┘   └─────────────┘   └─────────────┘
```

### Technology Stack

**Frontend:**
- Next.js 15 - React framework
- TailwindCSS - Styling
- Framer Motion - Animations
- Socket.IO Client - Real-time communication
- Zustand - State management

**Backend:**
- NestJS - Node.js framework
- TypeORM - Database ORM
- Socket.IO - WebSocket server
- PostgreSQL - Primary database
- Redis - Caching layer

**DevOps:**
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Vercel (Frontend deployment)
- Railway/Render (Backend deployment)

### Directory Structure

```
ai-dev-squad-platform/
├── frontend/                    # Next.js App
│   ├── src/
│   │   ├── app/                 # Pages and layouts
│   │   ├── components/          # React components
│   │   ├── hooks/               # Custom hooks
│   │   ├── lib/                 # Utilities
│   │   └── store/               # Zustand stores
│   └── package.json
│
├── backend/                     # NestJS API
│   ├── src/
│   │   ├── agents/              # 8 AI Agent modules
│   │   ├── chat/                # WebSocket gateway
│   │   ├── tasks/               # Task management
│   │   ├── projects/            # Project management
│   │   ├── database/            # ORM setup
│   │   └── main.ts              # Entry point
│   └── package.json
│
├── database/                    # PostgreSQL
│   ├── migrations/              # Database migrations
│   ├── seeds/                   # Seed scripts
│   └── schema.sql               # Initial schema
│
├── docker-compose.yml           # Multi-container setup
├── .env.example                 # Environment template
└── package.json                 # Root scripts
```

### Data Flow

1. **User Action** → Frontend component triggers
2. **API Call** → HTTP request to NestJS backend
3. **Agent Processing** → AI agent executes task
4. **Database Update** → Store result in PostgreSQL
5. **Real-time Update** → Socket.IO broadcasts to connected clients
6. **UI Update** → Frontend receives and renders update

### Authentication Flow

1. User logs in via Clerk/OAuth
2. JWT token generated
3. Token stored in secure cookie
4. API requests include JWT in header
5. Backend validates token
6. Access granted to protected resources

### WebSocket Events

**Client → Server:**
- `message` - Send chat message
- `typing` - User is typing
- `join_room` - Join chat room
- `leave_room` - Leave chat room

**Server → Client:**
- `new_message` - New message received
- `user_typing` - User typing indicator
- `user_joined` - User joined room
- `user_left` - User left room
- `user_connected` - User connected
- `user_disconnected` - User disconnected

### Scalability Considerations

- **Horizontal Scaling** - Add more backend instances
- **Load Balancing** - Use Nginx or AWS ALB
- **Database Sharding** - Partition data by project
- **Caching Layer** - Redis for frequently accessed data
- **CDN** - Cloudflare for frontend assets
- **Message Queue** - Bull/RabbitMQ for background jobs

### Security

- JWT authentication
- CORS enabled for trusted domains
- Input validation with class-validator
- SQL injection prevention (TypeORM)
- Rate limiting on endpoints
- Encrypted API keys in environment
