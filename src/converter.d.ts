import { ConverterFormat } from '../src/converter-format';
export declare function convertRdfXmlToN3(source: string): Promise<string>;
export declare function convertN3ToRdfXml(source: string): Promise<string>;
export declare function convertRdf(source: string, sourceFormat: ConverterFormat, targetFormat: ConverterFormat): Promise<string>;
