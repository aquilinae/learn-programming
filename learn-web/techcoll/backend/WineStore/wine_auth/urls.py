from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^register/', register),
    url(r'^signin/', signin),
    url(r'^edit-user/', edit_user),
    url(r'^logout/', logout),
]
