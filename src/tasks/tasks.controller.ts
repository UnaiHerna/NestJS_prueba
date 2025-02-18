import { Controller, Get, Patch, Post, Put, Delete } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {
	
	private tasksService:TasksService;

	constructor(tasksService:TasksService) {
		this.tasksService = tasksService;
	}

	@Get()
	getAllTasks() {
		return this.tasksService.getTasks();
	}
	
	@Post()
	createTask() {
		return this.tasksService.createTask();
	}

	@Put()
	updateTask() {
		return this.tasksService.updateTask();
	}

	@Delete()
	deleteTask() {
		return this.tasksService.deleteTask();
	}

	@Patch()
	patchTask() {
		return this.tasksService.patchTask();
	}
}