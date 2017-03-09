import * as childProcess from 'child_process';
import * as pythonShell from 'python-shell';
import {ConverterFormat} from '../src/converter-format';
import * as path from 'path';

const PythonScriptFile = path.join(__dirname, './RdfLibConverter.py');

export async function convertRdfXmlToN3(source: string):  Promise<string> {
    return convertRdf(source, ConverterFormat.RdfXml, ConverterFormat.N3);
}

export async function convertN3ToRdfXml(source: string):  Promise<string> {
    return convertRdf(source, ConverterFormat.N3, ConverterFormat.RdfXml);
}

export async function convertRdf(source: string, sourceFormat: ConverterFormat, targetFormat: ConverterFormat): Promise<string> {
    const options = {
        mode: 'text',
        args: [source, getFormatParamter(sourceFormat), getFormatParamter(targetFormat)]
    };

    return new Promise<string>((resolve, reject) => {
        pythonShell.run(PythonScriptFile, options, function (error, result: Array<string>) {
            if (error) {
                return reject(error);
            }

            const normalizedValue = result.join(''); //.replace(/(\r\n|\n|\r)/gm, ' ');

            return resolve(normalizedValue);
        });
    });
}

function getFormatParamter(format: ConverterFormat) {
    if (format === ConverterFormat.N3) {
        return 'n3';
    }
    else if (format === ConverterFormat.NQuads) {
        return 'nquads';
    }
    else if (format === ConverterFormat.NTriples) {
        return 'nt';
    }
    else if (format === ConverterFormat.PrettyXml) {
        return 'pretty-xml';
    }
    else if (format === ConverterFormat.RdfXml) {
        return 'xml';
    }
    else if (format === ConverterFormat.TriX) {
        return 'trix';
    }
    else if (format === ConverterFormat.Trig) {
        return 'trig';
    }
    else if (format === ConverterFormat.Turtle) {
        return 'turtle';
    }
    else if (format === ConverterFormat.JsonLd) {
        return 'json-ld';
    }

    return 'xml';
}
