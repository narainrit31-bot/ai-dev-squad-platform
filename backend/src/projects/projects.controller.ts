import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAllProjects() {
    return this.projectsService.getAllProjects();
  }

  @Get(':id')
  getProject(@Param('id') id: string) {
    return this.projectsService.getProject(id);
  }

  @Post()
  createProject(@Body() projectData: any) {
    return this.projectsService.createProject(projectData);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() projectData: any) {
    return this.projectsService.updateProject(id, projectData);
  }
}
