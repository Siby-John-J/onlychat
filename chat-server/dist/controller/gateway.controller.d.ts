import { GatewayService } from 'src/usecase/gateway/gateway.service';
export declare class GatewayController {
    private gateway;
    constructor(gateway: GatewayService);
    getGate(): any;
}
