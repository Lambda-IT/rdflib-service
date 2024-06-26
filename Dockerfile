FROM docker.io/tiangolo/uwsgi-nginx-flask:python3.11
# copy over our requirements.txt file
COPY requirements.txt /tmp/

# upgrade pip and install required python packages
RUN pip install -U pip
RUN pip install -r /tmp/requirements.txt

COPY ./app /app

EXPOSE 80
