from rdflib import Graph

g = Graph()
g.parse("./test/test.nt")

print(len(g))
# prints: 2

import pprint
for stmt in g:
    pprint.pprint(stmt)

result = g.serialize(format='pretty-xml')
print(result)