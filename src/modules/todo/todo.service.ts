import { Injectable, NotFoundException } from '@nestjs/common'
import { TodoRepository } from './todo.repository'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo } from './entities/todo.entity'

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.create(createTodoDto)
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll()
  }

  async findById(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findById(id)
    if (!todo) throw new NotFoundException('Tarefa não encontrada')
    return todo
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    await this.findById(id)
    return this.todoRepository.update(id, updateTodoDto) as Promise<Todo>
  }

  async delete(id: number): Promise<void> {
    await this.findById(id)
    return this.todoRepository.delete(id)
  }
}
