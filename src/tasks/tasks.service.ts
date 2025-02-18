import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

export interface User {
	name: string;
	age: number;
}
@Injectable()
export class TasksService {
	
	private tasks: any[] = [];

	getTasks() {
		return this.tasks;
	}

	getTask(id: number) {
		const result = this.tasks.find(task => task.id === id);
		if (!result) {
			return new NotFoundException("Task not found");
		}
		return result;
	}

	createTask(task: CreateTaskDto) {
		console.log(task);
		this.tasks.push({
			...task,
			id: this.tasks.length + 1,
		});
		return task;
	}

	updateTask() {
		return "Minuto 45:36";
	}

	deleteTask() {
		return "Hola";
	}

	patchTask() {
		return "Hola";
	}
}