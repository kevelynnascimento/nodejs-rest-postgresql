import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccessUserEntity } from './access-user.entity';
import { AccessUserRepository } from './access-user.repository';
import { UserFindAllResponse } from './dtos/responses/user-account-find-all.response';
import ProducerService from 'src/shared/kafka/producer.service';
import { ConfigService } from '@nestjs/config';
import { CurrentUser } from 'src/shared/auth/decorators/current-user.decorator';
import { CurrentUserModel } from 'src/shared/auth/models/current-user.model';
import { BusinessException } from 'src/shared/exceptions/business.exception';
import { UserLoginRequest } from './dtos/requests/access-user-login.request';
import { AuthService } from 'src/shared/auth/services/auth.service';
import { UserCreateRequest } from './dtos/requests/access-user-create.request';

@Injectable()
export class AccessUserService {
  constructor(
    private readonly accessUserRepository: AccessUserRepository,
    private readonly producerService: ProducerService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) { }

  public async login(request: UserLoginRequest): Promise<string> {
    const user = await this.accessUserRepository.findByUsername(request.username);

    if (!user)
      throw new BusinessException('Usuário ou senha inválidos.');

    const success = bcrypt.compareSync(request.password, user.password);

    if (!success) throw new BusinessException('Usuário ou senha inválidos.');

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = await this.authService.generateToken(payload);

    return token;
  }

  public async findAll(): Promise<UserFindAllResponse[]> {
    const users = await this.accessUserRepository.findAll();

    const response = users?.map(user => ({
      name: user.name
    }));

    return response;
  }

  public async create(request: UserCreateRequest): Promise<void> {
    const { name, email, username, password } = request;

    const user = await this.accessUserRepository.findByUsername(username);

    if (user)
      throw new BusinessException('Usuário já existente.');

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const userAccount = new AccessUserEntity(
      name,
      email,
      username,
      encryptedPassword
    );

    await this.accessUserRepository.insert(userAccount);
  }

  public async getSummary(@CurrentUser() currentUser: CurrentUserModel): Promise<CurrentUserModel> {
    return currentUser;
  }
}
