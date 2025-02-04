import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class EditBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  link?: string;
}
