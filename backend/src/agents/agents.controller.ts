import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AgentsService } from './agents.service';

@Controller('api/agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Get()
  getAllAgents() {
    return this.agentsService.getAllAgents();
  }

  @Get(':id')
  getAgent(@Param('id') id: string) {
    return this.agentsService.getAgent(id);
  }

  @Post(':id/task')
  assignTask(@Param('id') id: string, @Body() taskData: any) {
    return this.agentsService.assignTask(id, taskData);
  }

  @Post(':id/status')
  updateStatus(@Param('id') id: string, @Body() statusData: any) {
    return this.agentsService.updateStatus(id, statusData);
  }
}
