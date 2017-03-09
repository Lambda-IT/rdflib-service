
import sys
import rdflib

from rdflib import Graph, plugin
from rdflib.serializer import Serializer

def main():
    source = sys.argv[1]
    sourceFormat = sys.argv[2]
    targetFormat = sys.argv[3]

    g = Graph().parse(data=source, format=sourceFormat)

    targetString = g.serialize(destination=None, format=targetFormat)

    print(targetString)

# def mainTest():
#     source = "<rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'><rdf:Description rdf:about='' xmlns:dc='http://purl.org/dc/elements/1.1/'><dc:subject><rdf:Bag><rdf:li>XMP</rdf:li><rdf:li>SDK</rdf:li><rdf:li>Test2</rdf:li></rdf:Bag></dc:subject><dc:format>image/tiff</dc:format></rdf:Description></rdf:RDF>"
#     sourceFormat = "xml"
#     targetFormat = "n3"

#     g = Graph().parse(data=source, format=sourceFormat)

#     targetString = g.serialize(destination=None, format=targetFormat)

#     print(targetString)

# Start process
if __name__ == '__main__':
    main()
