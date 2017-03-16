
import sys
import rdflib
import uuid
import os

from rdflib import Graph, plugin
from rdflib.serializer import Serializer

def main():
    source = sys.argv[1]
    sourceFormat = sys.argv[2]
    targetFormat = sys.argv[3]
    tmpFileName = sys.argv[4]

    g = Graph().parse(data=source, format=sourceFormat)

    g.serialize(destination=tmpFileName, format=targetFormat)
    print(tmpFileName)

# Start process
if __name__ == '__main__':
    main()
