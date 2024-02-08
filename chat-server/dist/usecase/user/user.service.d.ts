import { ChatAction, UserDto } from 'src/domain';
import { UserRepoAbstract } from 'src/domain';
export declare class UserService {
    private userrepo;
    constructor(userrepo: UserRepoAbstract<UserDto>);
    createUser(data: UserDto): Promise<any>;
    signUpUser(data: object): any;
    getUser(id: string): Promise<object>;
    editUser(data: object): any;
    getAllUsers(): Promise<UserDto>;
    addTochat(data: ChatAction): any;
    removeFromChat(data: ChatAction): any;
    getChatDetails(data: object): any;
    addMessage(data: object): any;
    addMessageToP2(data: object): any;
}
