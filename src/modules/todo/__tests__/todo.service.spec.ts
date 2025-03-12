import { Test, TestingModule } from '@nestjs/testing'
import { TodoService } from '../todo.service'
import { TodoRepository } from '../todo.repository'
import { CreateTodoDto } from '../dto/create-todo.dto'
import { UpdateTodoDto } from '../dto/update-todo.dto'

describe('TodoService', () => {
  let service: TodoService

  const mockTodo = { id: 1, title: 'Tarefa Teste', completed: false }

  const mockTodoRepository = {
    create: jest.fn().mockResolvedValue(mockTodo),
    findAll: jest.fn().mockResolvedValue([mockTodo]),
    findById: jest.fn().mockResolvedValue(mockTodo),
    update: jest.fn().mockResolvedValue({ ...mockTodo, title: 'Atualizado' }),
    delete: jest.fn().mockResolvedValue(undefined),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: TodoRepository,
          useValue: mockTodoRepository,
        },
      ],
    }).compile()

    service = module.get<TodoService>(TodoService)
  })

  it('deve ser definido', () => {
    expect(service).toBeDefined()
  })

  it('deve criar uma nova tarefa', async () => {
    const dto: CreateTodoDto = { title: 'Nova tarefa', completed: false }
    await service.create(dto)
    expect(mockTodoRepository.create).toHaveBeenCalledWith(dto)
  })

  it('deve listar todas as tarefas', async () => {
    await service.findAll()
    expect(mockTodoRepository.findAll).toHaveBeenCalled()
  })

  it('deve buscar uma tarefa por ID', async () => {
    await service.findById(1)
    expect(mockTodoRepository.findById).toHaveBeenCalledWith(1)
  })

  it('deve atualizar uma tarefa', async () => {
    const dto: UpdateTodoDto = { title: 'Atualizado' }
    await service.update(1, dto)
    expect(mockTodoRepository.update).toHaveBeenCalledWith(1, dto)
  })

  it('deve excluir uma tarefa', async () => {
    await service.delete(1)
    expect(mockTodoRepository.delete).toHaveBeenCalledWith(1)
  })
})
