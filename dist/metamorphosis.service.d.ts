import { MetamorphosisPlugin } from '@fabio.formosa/metamorphosis';
export declare class ConversionService {
    private metamorphosisConversionService;
    constructor(logger?: boolean | ((msg: string) => void), plugins?: MetamorphosisPlugin[]);
    convert(sourceObj: any, targetClass: {
        new (...args: any): any;
    }): Promise<unknown>;
    convertAll(sourceArray: any[], itemTargetClass: {
        new (...args: any): any;
    }): Promise<unknown[]>;
}
