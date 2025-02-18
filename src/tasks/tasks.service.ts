import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
	getTasks() {
		return ["Task 1", "Task 2", "Task 3"];
	}

	createTask() {
		return "Hola";
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