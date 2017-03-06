import sys
import rdflib 

from rdflib import Graph, plugin
from rdflib.serializer import Serializer

def main():
    source = sys.argv[1]
    sourceFormat = sys.argv[2]
    targetFormat = sys.argv[3]

    g = Graph().parse(data=source, format=sourceFormat)

    print g.serialize(destination=None, format=targetFormat)

# Start process
if __name__ == '__main__':
    main()
