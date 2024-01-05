import { MainGateWayAbstract } from 'src/domain/abstracts';
export declare class GatewayService {
    private gateway;
    constructor(gateway: MainGateWayAbstract);
    get(value: string): any;
}
