from django.conf.urls import url

from . import views

urlpatterns = [
    # Home Page
    url(r'^$', views.index, name='index'),
    # List of pizzas
    url(r'^pizzas/$', views.pizzas, name='pizzas'),
    # Pizza Page
    url(r'^pizzas/(?P<pizza_id>\d+)/$', views.pizza, name='pizza')
]
