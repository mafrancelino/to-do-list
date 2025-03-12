import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateTodoDto } from './create-todo.dto'

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({
    example: 'Novo título da tarefa',
    description: 'Título atualizado da tarefa',
    required: false,
  })
  title?: string

  @ApiProperty({
    example: true,
    description: 'Status atualizado da tarefa',
    required: false,
  })
  completed?: boolean
}
