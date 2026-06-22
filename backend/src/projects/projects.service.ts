import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private projects: any[] = [];
  private projectCounter = 0;

  getAllProjects() {
    return this.projects;
  }

  getProject(id: string) {
    return this.projects.find(project => project.id === id);
  }

  createProject(projectData: any) {
    const project = {
      id: (++this.projectCounter).toString(),
      ...projectData,
      status: 'planning',
      createdAt: new Date().toISOString(),
      agents: [
        { id: '1', name: 'Project Manager', status: 'idle' },
        { id: '2', name: 'UI/UX Designer', status: 'idle' },
        { id: '3', name: 'Frontend Developer', status: 'idle' },
        { id: '4', name: 'Backend Developer', status: 'idle' },
        { id: '5', name: 'AI Engineer', status: 'idle' },
        { id: '6', name: 'QA Tester', status: 'idle' },
        { id: '7', name: 'DevOps Engineer', status: 'idle' },
        { id: '8', name: 'Marketing Specialist', status: 'idle' },
      ],
    };
    this.projects.push(project);
    return project;
  }

  updateProject(id: string, projectData: any) {
    const project = this.projects.find(p => p.id === id);
    if (project) {
      Object.assign(project, projectData);
      project.updatedAt = new Date().toISOString();
    }
    return project;
  }
}
