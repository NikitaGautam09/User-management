import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    findAll(): Promise<import("./schemas/user.schema").User[]>;
    findOne(id: string): Promise<import("./schemas/user.schema").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schemas/user.schema").User>;
    remove(id: string): Promise<import("./schemas/user.schema").User>;
    search(userId: string, username?: string, minAge?: number, maxAge?: number): Promise<import("./schemas/user.schema").User[]>;
}
