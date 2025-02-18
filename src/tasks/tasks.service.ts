import { Injectable } from '@nestjs/common';

export interface User {
	name: string;
	age: number;
}
@Injectable()
export class TasksService {
	getTasks(): User {
		return {
			name: "Juan",
			age: 23
		}
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