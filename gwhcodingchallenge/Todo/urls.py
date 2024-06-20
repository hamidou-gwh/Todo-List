from django.urls import path
from . import views

urlpatterns = [
    path('tasks', views.task_list, name='task-list'),
    path('tasks/<int:pk>', views.task_detail, name='task-detail')
]

# urls:
# http://127.0.0.1:8000/tasks
# http://127.0.0.1:8000/tasks/id