FROM python:3.9
WORKDIR /backend/reax
COPY . /backend/reax
RUN pip install -r requirements.txt
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]