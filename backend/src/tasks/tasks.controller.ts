import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() taskData: any) {
    return this.tasksService.createTask(taskData);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() taskData: any) {
    return this.tasksService.updateTask(id, taskData);
  }
}
