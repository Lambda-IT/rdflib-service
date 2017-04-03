FROM tiangolo/uwsgi-nginx-flask:flask-python3.5

# copy over our requirements.txt file
COPY requirements.txt /tmp/

# upgrade pip and install required python packages
RUN pip install -U pip
RUN pip install -r /tmp/requirements.txt

COPY ./app /app