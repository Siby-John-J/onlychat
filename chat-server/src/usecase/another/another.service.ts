import { Injectable } from '@nestjs/common';
import { anotherAbstract } from 'src/domain/abstracts';

@Injectable()
export class AnotherService extends anotherAbstract {
    get() {
        return 'string'
    }

    post() {
        return 'string'
    }
}
