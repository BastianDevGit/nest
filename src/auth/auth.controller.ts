import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create.user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login( loginUserDto );
  }  

  @Get('private')
  @UseGuards( AuthGuard() )
  testinggPrivateRoute(
    // @Req() request: Express.Request
    @GetUser() user: User
  ) {
    // console.log({ user: request.user });
    console.log({user})
    return {
      ok: true,
      message: 'hola mundo',
      user: {name: 'Bastian'}
    }
  }

}
