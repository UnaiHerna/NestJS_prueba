import { Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TaskController {
	
	private tasksService:TasksService;

	constructor(tasksService:TasksService) {
		this.tasksService = tasksService;
	}

	@Get('/tasks')
	getAllTasks() {
		return this.tasksService.getTasks();
	}
	
	@Post('/tasks')
	createTask() {
		return "Hola";
	}

	@Put('/tasks/:id')
	updateTask() {
		return "Minuto 45:36";
	}

	@Delete('/tasks/:id')
	deleteTask() {
		return "Hola";
	}
}