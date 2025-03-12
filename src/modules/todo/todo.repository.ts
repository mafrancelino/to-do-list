import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Todo } from './entities/todo.entity'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>
  ) {}

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = this.repository.create(todoDto)
    return this.repository.save(newTodo)
  }

  async findAll(): Promise<Todo[]> {
    return this.repository.find()
  }

  async findById(id: number): Promise<Todo | null> {
    return this.repository.findOneBy({ id })
  }

  async update(id: number, todoDto: UpdateTodoDto): Promise<Todo | null> {
    await this.repository.update(id, todoDto)
    return this.findById(id)
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}
