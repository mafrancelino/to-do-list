import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@ApiTags('To-Do List')
@Controller('to-do-list')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova tarefa' })
  @ApiResponse({ status: 201, description: 'Tarefa criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto)
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as tarefas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas retornada com sucesso',
  })
  findAll() {
    return this.todoService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma tarefa por ID' })
  @ApiResponse({ status: 200, description: 'Tarefa encontrada' })
  @ApiResponse({ status: 404, description: 'Tarefa não encontrada' })
  findOne(@Param('id') id: string) {
    return this.todoService.findById(+id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma tarefa' })
  @ApiResponse({ status: 200, description: 'Tarefa atualizada com sucesso' })
  @ApiResponse({ status: 404, description: 'Tarefa não encontrada' })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma tarefa' })
  @ApiResponse({ status: 200, description: 'Tarefa removida com sucesso' })
  @ApiResponse({ status: 404, description: 'Tarefa não encontrada' })
  delete(@Param('id') id: string) {
    return this.todoService.delete(+id)
  }
}
