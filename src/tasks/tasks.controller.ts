import { Controller, Get, Patch, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {
	
	private tasksService:TasksService;

	constructor(tasksService:TasksService) {
		this.tasksService = tasksService;
	}

	@Get()
	getAllTasks(@Query() query: any) {
		if(query.name){
			console.log("Hola!" + query.name);
		}

		return this.tasksService.getTasks();
	}

	@Get('/:id')
	getTask(@Param('id') id: string) {
		return this.tasksService.getTask(parseInt(id));
	}
	
	@Post()
	createTask(@Body() task: any) {
		return this.tasksService.createTask(task);
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