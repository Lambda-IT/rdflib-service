import sys
from flask import Flask, abort, request
from flask_restx import Resource, Api, reqparse
from rdflib import Graph
from rdflib.plugin import PluginException
from urllib import parse

app = Flask(__name__)
app.config['BUNDLE_ERRORS'] = True

api = Api(app, version='1.0.0', title='rdflib-service'
          , description='Translation between different RDF formats')

translate_parser = reqparse.RequestParser()
translate_parser.add_argument('sourceFormat', location='json', required=True)
translate_parser.add_argument('targetFormat', location='json', required=True)
translate_parser.add_argument('source', location='json', required=True)


@api.route('/api/translate')
class Translator(Resource):
    @api.doc('post_data_to_translate')
    @api.expect(translate_parser)
    def post(self):
        try:
            args = translate_parser.parse_args()
            source_format = args['sourceFormat']
            target_format = args['targetFormat']
            source = parse.unquote(args['source'])

            g = Graph().parse(data=source, format=source_format)
            result = g.serialize(format=target_format)

            response_mime_type = evaluate_mime_type(target_format)

            response = app.make_response(result)
            response.headers['Content-Type'] = response_mime_type

            return response
        except PluginException:
            app.logger.error("RDF Format not supported:", sys.exc_info()[0])
            abort(500)


def evaluate_mime_type(rdf_format):
    try:
        return rdf_mime_type_mapping[rdf_format]
    except KeyError:
        return 'text/plain'


rdf_mime_type_mapping = {
    'xml': 'application/rdf+xml',
    'pretty-xml': 'application/rdf+xml',
    'n3': 'text/n3',
    'turtle': 'text/turtle',
    'nquads': 'text/x-nquads',
    'nt': 'text-plan',
    'trix': 'application/xml',
    'json-ld': 'application/ld+json'
}

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)
    # --DEBUG MODE VERSION: app.run(host='0.0.0.0', debug=True, port=80)
