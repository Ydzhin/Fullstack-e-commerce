import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
} from 'class-validator';
import { isUserAlreadyExist } from '../../user/validators/is-user-already-exist.validator';
export class SignUp {
  @IsDefined()
  @IsNotEmpty()
  readonly name: string;

  @IsDefined()
  @IsEmail()
  @Validate(isUserAlreadyExist)
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}
