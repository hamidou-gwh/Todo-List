import pytest
import requests

#base URL + the endpoint to add to the base url to accomplish the task
base_URL = "http://127.0.0.1:8000"
task_endpoint = "/tasks"

#Create input data (new task in this case)
def test_create_task():
    new_task = {
        'title': "Look there",
        'description': "Take a peek",
        'created_date': "2024-06-21",
        'due_date': "2024-06-22"
    }
    #send a post request to accomplish the task at the endpoint with the input data
    response = requests.post(base_URL + task_endpoint, json=new_task)

    #Test to see if the response has the correct status code for creation, meaning creation was successful
    assert response.status_code == 201  