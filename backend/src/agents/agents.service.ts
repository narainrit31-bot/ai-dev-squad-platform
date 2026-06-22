import { Injectable } from '@nestjs/common';
import { ProjectManagerAgent } from './project-manager.agent';
import { UIUXDesignerAgent } from './ui-ux-designer.agent';
import { FrontendDeveloperAgent } from './frontend-developer.agent';
import { BackendDeveloperAgent } from './backend-developer.agent';
import { AIEngineerAgent } from './ai-engineer.agent';
import { QATesterAgent } from './qa-tester.agent';
import { DevOpsEngineerAgent } from './devops-engineer.agent';
import { MarketingSpecialistAgent } from './marketing-specialist.agent';

@Injectable()
export class AgentsService {
  constructor(
    private projectManagerAgent: ProjectManagerAgent,
    private uiuxDesignerAgent: UIUXDesignerAgent,
    private frontendDeveloperAgent: FrontendDeveloperAgent,
    private backendDeveloperAgent: BackendDeveloperAgent,
    private aiEngineerAgent: AIEngineerAgent,
    private qaTesterAgent: QATesterAgent,
    private devOpsEngineerAgent: DevOpsEngineerAgent,
    private marketingSpecialistAgent: MarketingSpecialistAgent,
  ) {}

  private agents = [
    { id: '1', name: 'Project Manager', emoji: '🎯', service: this.projectManagerAgent },
    { id: '2', name: 'UI/UX Designer', emoji: '🎨', service: this.uiuxDesignerAgent },
    { id: '3', name: 'Frontend Developer', emoji: '💻', service: this.frontendDeveloperAgent },
    { id: '4', name: 'Backend Developer', emoji: '⚙️', service: this.backendDeveloperAgent },
    { id: '5', name: 'AI Engineer', emoji: '🤖', service: this.aiEngineerAgent },
    { id: '6', name: 'QA Tester', emoji: '🧪', service: this.qaTesterAgent },
    { id: '7', name: 'DevOps Engineer', emoji: '🚀', service: this.devOpsEngineerAgent },
    { id: '8', name: 'Marketing Specialist', emoji: '📢', service: this.marketingSpecialistAgent },
  ];

  getAllAgents() {
    return this.agents.map(agent => ({
      id: agent.id,
      name: agent.name,
      emoji: agent.emoji,
      status: 'idle',
    }));
  }

  getAgent(id: string) {
    const agent = this.agents.find(a => a.id === id);
    return agent ? { id: agent.id, name: agent.name, emoji: agent.emoji, status: 'idle' } : null;
  }

  async assignTask(id: string, taskData: any) {
    const agent = this.agents.find(a => a.id === id);
    if (agent && agent.service) {
      return agent.service.execute(taskData);
    }
    return { error: 'Agent not found' };
  }

  updateStatus(id: string, statusData: any) {
    const agent = this.agents.find(a => a.id === id);
    if (agent) {
      return { id, status: statusData.status, message: `Agent ${agent.name} status updated` };
    }
    return { error: 'Agent not found' };
  }
}
