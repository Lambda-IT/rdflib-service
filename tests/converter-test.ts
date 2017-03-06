import * as test from 'tape';
import { convertN3ToRdfXml, convertRdf, convertRdfXmlToN3 } from '../src/converter';
import { ConverterFormat } from '../src/converter-format';

test('convertRdfXmlToN3_ShouldNotThrowAnException', async function (t) {

    const testRdfXml = `
    <rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'>
		<rdf:Description rdf:about='' xmlns:dc='http://purl.org/dc/elements/1.1/'>
		<dc:subject>
		<rdf:Bag>
		<rdf:li>XMP</rdf:li>
		<rdf:li>SDK</rdf:li>
		<rdf:li>Test2</rdf:li>
		</rdf:Bag>
		</dc:subject>
		<dc:format>image/tiff</dc:format>
		</rdf:Description>
	</rdf:RDF>
    `

    try {
        const n3 = await convertRdfXmlToN3(testRdfXml);
        t.pass('Conversion succeeded')
    } catch(error) {
        t.fail('Convertion failed')
    }

    t.end();
});

test('convertN3ToRdfXml_ShouldNotThrowAnException', async function (t) {

    const testN3 = `@prefix dc: <http://purl.org/dc/elements/1.1/> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix xml: <http://www.w3.org/XML/1998/namespace> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    <> dc:format "image/tiff" ;
        dc:subject [ a rdf:Bag ;
            rdf:_1 "XMP" ;
            rdf:_2 "SDK" ;
            rdf:_3 "Test2" ] .
    `;

    try {
        const rdfXml = await convertN3ToRdfXml(testN3);
        t.pass('Conversion succeeded')
    } catch(error) {
        t.fail('Convertion failed')
    }

    t.end();
});