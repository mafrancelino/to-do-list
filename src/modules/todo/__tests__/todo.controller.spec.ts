import { Test, TestingModule } from '@nestjs/testing'
import { TodoController } from '../todo.controller'
import { TodoService } from '../todo.service'
import { CreateTodoDto } from '../dto/create-todo.dto'

describe('TodoController', () => {
  let controller: TodoController
  let service: TodoService

  const mockTodo = { id: 1, title: 'Tarefa Teste', completed: false }

  const mockService = {
    create: jest.fn().mockResolvedValue(mockTodo),
    findAll: jest.fn().mockResolvedValue([mockTodo]),
    findById: jest.fn().mockResolvedValue(mockTodo),
    update: jest.fn().mockResolvedValue({ ...mockTodo, title: 'Atualizado' }),
    delete: jest.fn().mockResolvedValue(undefined),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: mockService,
        },
      ],
    }).compile()

    controller = module.get<TodoController>(TodoController)
    service = module.get<TodoService>(TodoService)
  })

  it('deve ser definido', () => {
    expect(controller).toBeDefined()
  })

  it('deve criar uma nova tarefa', async () => {
    const dto: CreateTodoDto = { title: 'Nova tarefa', completed: false }
    expect(await controller.create(dto)).toEqual(mockTodo)
  })

  it('deve listar todas as tarefas', async () => {
    expect(await controller.findAll()).toEqual([mockTodo])
  })

  it('deve buscar uma tarefa por ID', async () => {
    expect(await controller.findOne('1')).toEqual(mockTodo)
  })

  it('deve atualizar uma tarefa', async () => {
    expect(await controller.update('1', { title: 'Atualizado' })).toEqual({
      ...mockTodo,
      title: 'Atualizado',
    })
  })

  it('deve excluir uma tarefa', async () => {
    const spy = jest.spyOn(service, 'delete')
    await controller.delete('1')
    expect(spy).toHaveBeenCalledWith(1)
  })
})
