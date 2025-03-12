import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsBoolean } from 'class-validator'

export class CreateTodoDto {
  @ApiProperty({ example: 'Comprar leite', description: 'Título da tarefa' })
  @IsString()
  title: string

  @ApiProperty({
    example: false,
    description: 'Se a tarefa foi concluída ou não',
  })
  @IsBoolean()
  completed: boolean
}
