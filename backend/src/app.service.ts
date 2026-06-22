import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'online',
      message: '🤖 AI Dev Squad Backend is running',
      timestamp: new Date().toISOString(),
    };
  }

  getAgents() {
    return [
      {
        id: 1,
        name: 'Project Manager',
        emoji: '🎯',
        description: 'Analyzes requirements and creates roadmaps',
        status: 'idle',
      },
      {
        id: 2,
        name: 'UI/UX Designer',
        emoji: '🎨',
        description: 'Creates wireframes and design specifications',
        status: 'idle',
      },
      {
        id: 3,
        name: 'Frontend Developer',
        emoji: '💻',
        description: 'Builds React and Next.js components',
        status: 'idle',
      },
      {
        id: 4,
        name: 'Backend Developer',
        emoji: '⚙️',
        description: 'Creates APIs and database schemas',
        status: 'idle',
      },
      {
        id: 5,
        name: 'AI Engineer',
        emoji: '🤖',
        description: 'Sets up RAG and fine-tuning pipelines',
        status: 'idle',
      },
      {
        id: 6,
        name: 'QA Tester',
        emoji: '🧪',
        description: 'Tests and reports bugs',
        status: 'idle',
      },
      {
        id: 7,
        name: 'DevOps Engineer',
        emoji: '🚀',
        description: 'Handles deployment and CI/CD',
        status: 'idle',
      },
      {
        id: 8,
        name: 'Marketing Specialist',
        emoji: '📢',
        description: 'Creates content and SEO strategies',
        status: 'idle',
      },
    ];
  }
}
