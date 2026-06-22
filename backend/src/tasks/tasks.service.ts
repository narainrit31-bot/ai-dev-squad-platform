import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: any[] = [];
  private taskCounter = 0;

  getAllTasks() {
    return this.tasks;
  }

  getTask(id: string) {
    return this.tasks.find(task => task.id === id);
  }

  createTask(taskData: any) {
    const task = {
      id: (++this.taskCounter).toString(),
      ...taskData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, taskData: any) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      Object.assign(task, taskData);
      task.updatedAt = new Date().toISOString();
    }
    return task;
  }
}
