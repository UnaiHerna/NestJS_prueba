import { Controller, Get, Patch, Post, Put, Delete, Body, Query, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

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
	createTask(@Body() task: CreateTaskDto) {
		return this.tasksService.createTask(task);
	}

	@Put()
	updateTask(task: UpdateTaskDto) {
		console.log(task.title);
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