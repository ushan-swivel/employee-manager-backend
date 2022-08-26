import { GENDERS } from '@/constants/Genders';
import { Allow, IsEmail, IsIn, IsMobilePhone, IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class CreateEmployeeDto {
  @IsEmail()
  public email: string;

  @IsMobilePhone('si-LK', { message: 'Only Valid Sri Lankan Numbers Are Allowed!' })
  public number: number;

  @Allow()
  public firstName: string;

  @Allow()
  public lastName: string;

  @IsIn([GENDERS.MALE, GENDERS.FEMALE])
  public gender: string;

  @IsOptional()
  public photo: string;
}
