import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/starts.with.decorators';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  // проверка - является ли название для таска строкой, проверка не пустая ли строка
  @IsString()
  @IsNotEmpty()
  @StartsWith("Task:", {message: "Невалидное название"})
  @Length(2, 40)
  title: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным числом' })
  @IsOptional()
  priority: number;

  // валидация массивов

  @IsArray({ message: 'Теги должны быть массивом' })
  @IsEnum(TaskTag, { message: 'Недопустимое значение тега', each: true })
  @IsOptional()
  tags: string[];

}





//   @IsString({ message: 'Пароль должен быть строкой' })
//   @MinLength(6, { message: 'Пароль минимум 6 символов' })
//   // Указание регулярных выражений для валидации
//   @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
//     message: 'Пароль должен содержать одну заглавную букву и цифру',
//   })
//   password: string;

//   //require_protocol: true , require_port: true
//   @IsUrl(
//     {
//       protocols: ['https', 'wss'],
//       require_valid_protocol: true,
//       host_blacklist: ['htmllesson.io'],
//     },
//     { message: 'Некорректный формат url' },
//   )
//   websiteUrl: string;

//   @IsUUID('4', {message: 'Некорректный формат uuid'})
//   userId: string;