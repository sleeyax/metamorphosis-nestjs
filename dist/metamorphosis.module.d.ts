import { DynamicModule } from '@nestjs/common';
import { MetamorphosisPlugin } from '@fabio.formosa/metamorphosis';
export declare class MetamorphosisModule {
    static register({ logger, plugins }?: {
        logger: boolean | ((msg: string) => void);
        plugins?: MetamorphosisPlugin[];
    }): DynamicModule;
}
