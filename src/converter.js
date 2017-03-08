"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pythonShell = require("python-shell");
const converter_format_1 = require("../src/converter-format");
const path = require("path");
const PythonScriptFile = path.join(__dirname, './RdfLibConverter.py');
async function convertRdfXmlToN3(source) {
    return convertRdf(source, converter_format_1.ConverterFormat.RdfXml, converter_format_1.ConverterFormat.N3);
}
exports.convertRdfXmlToN3 = convertRdfXmlToN3;
async function convertN3ToRdfXml(source) {
    return convertRdf(source, converter_format_1.ConverterFormat.N3, converter_format_1.ConverterFormat.RdfXml);
}
exports.convertN3ToRdfXml = convertN3ToRdfXml;
async function convertRdf(source, sourceFormat, targetFormat) {
    const options = {
        mode: 'text',
        args: [source, getFormatParamter(sourceFormat), getFormatParamter(targetFormat)]
    };
    return new Promise((resolve, reject) => {
        pythonShell.run(PythonScriptFile, options, function (error, result) {
            if (error) {
                return reject(error);
            }
            const normalizedValue = result.join('');
            return resolve(normalizedValue);
        });
    });
}
exports.convertRdf = convertRdf;
function getFormatParamter(format) {
    if (format === converter_format_1.ConverterFormat.N3) {
        return 'n3';
    }
    else if (format === converter_format_1.ConverterFormat.NQuads) {
        return 'nquads';
    }
    else if (format === converter_format_1.ConverterFormat.NTriples) {
        return 'nt';
    }
    else if (format === converter_format_1.ConverterFormat.PrettyXml) {
        return 'pretty-xml';
    }
    else if (format === converter_format_1.ConverterFormat.RdfXml) {
        return 'xml';
    }
    else if (format === converter_format_1.ConverterFormat.TriX) {
        return 'trix';
    }
    else if (format === converter_format_1.ConverterFormat.Trig) {
        return 'trig';
    }
    else if (format === converter_format_1.ConverterFormat.Turtle) {
        return 'turtle';
    }
    else if (format === converter_format_1.ConverterFormat.JsonLd) {
        return 'json-ld';
    }
    return 'xml';
}
//# sourceMappingURL=converter.js.map