import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller({})
export class HelloController {
	
	@Get('/hello')
	index(@Req() request: Request, @Res() response: Response) {
		response.status(200).json({
			message: 'Hello World!',
		});
	}

	@Get('notfound')
	@HttpCode(404)
	notFoundPage(){
		return "Not Found Page";
	}

	@Get('/ticket/:num')
	getNumber(@Param('num', ParseIntPipe) num: number){
		return num + 14;	
	}

	@Get('/user/:status')
	isUserActive(@Param('status') status: boolean){
		return status;
	}

	@Get('greet')
	greet(@Query(ValidateUserPipe) query: {name: string, age: number}){
		return `Hello ${query.name}, you are ${query.age} years old`
	}
}
