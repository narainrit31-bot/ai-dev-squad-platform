import { Module } from '@nestjs/common';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { ProjectManagerAgent } from './project-manager.agent';
import { UIUXDesignerAgent } from './ui-ux-designer.agent';
import { FrontendDeveloperAgent } from './frontend-developer.agent';
import { BackendDeveloperAgent } from './backend-developer.agent';
import { AIEngineerAgent } from './ai-engineer.agent';
import { QATesterAgent } from './qa-tester.agent';
import { DevOpsEngineerAgent } from './devops-engineer.agent';
import { MarketingSpecialistAgent } from './marketing-specialist.agent';

@Module({
  controllers: [AgentsController],
  providers: [
    AgentsService,
    ProjectManagerAgent,
    UIUXDesignerAgent,
    FrontendDeveloperAgent,
    BackendDeveloperAgent,
    AIEngineerAgent,
    QATesterAgent,
    DevOpsEngineerAgent,
    MarketingSpecialistAgent,
  ],
  exports: [AgentsService],
})
export class AgentsModule {}
