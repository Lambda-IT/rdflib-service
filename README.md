# rdflib-service
Microservice for [rdflib](https://github.com/RDFLib/rdflib).

## Features
### Converter Functionality
Supports conversation for the following formats:
- RDF/XML
- N3
- NTriples
- N-Quads
- Turtle
- TriX
- Trig
- RDFa
- JsonLd

## Getting Started

### Methods
#### Translate RDF formats
**URL** /api/translate  
**HTTP Method** POST   
**Content-Type** application/json   
**JSON Payload**
* **sourceFormat** Possible values: xml, n3, turtle, nquads, nt, trix, json-ld
* **targetFormat**: Possible values: xml, pretty-xml, n3, turtle, nquads, nt, trix, json-ld
* **source** RDF Text

#### Example
```json
{
	"sourceFormat": "n3",
	"targetFormat": "pretty-xml",
	"source": "%40prefix%20gr%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fgoodrelations%2Fv1%23%3E%20.%0A%0A%3Chttp%3A%2F%2Fwww.acme.com%2F%23store%3E%20a%20gr%3ALocation%3B%0A%20%20%20%20gr%3AhasOpeningHoursSpecification%20%5B%20a%20gr%3AOpeningHoursSpecification%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gr%3Aopens%20%2208%3A00%3A00%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gr%3Acloses%20%2220%3A00%3A00%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gr%3AhasOpeningHoursDayOfWeek%20gr%3AFriday%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20gr%3AMonday%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20gr%3AThursday%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20gr%3ATuesday%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20gr%3AWednesday%20%5D%3B%0A%20%20%20%20gr%3Aname%20%22Hepp%27s%20Happy%20Burger%20Restaurant%22%20.%0A"
}
```

## Version information
### 1.0.0
Features:
- Conversation between the common rdf formats

## Installation

### Flask Built-in web server
1. pip install -r requirements.txt
2. cd app
3. python main.py

### Docker
Use the microservice with a docker image (using nginx and flask)
Yo can find more information about the base image: https://github.com/tiangolo/uwsgi-nginx-flask-docker
#### Build your own Docker image
```bash
docker build -t registry.lambda-it.ch/library/rdflib-service:1.1.0 .
```
#### Run the image
```bash
docker run --rm --name rdflib-service -p 5000:80 registry.lambda-it.ch/library/rdflib-service:1.1.0
docker run -d --name rdflib-service -p 5000:80 registry.lambda-it.ch/library/rdflib-service:1.1.0
```

#### Optional: Push you image to a docker repository
*  [Login Docker Reference](https://docs.docker.com/engine/reference/commandline/login/#options)
* [Push Docker Reference](https://docs.docker.com/engine/reference/commandline/push/)





