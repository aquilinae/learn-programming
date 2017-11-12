from django.conf.urls import url
from .views import return_articles

urlpatterns = [
    url(r'^articles/$', return_articles, name='return-articles')
    url(r'^articles/(?P<article_id>(0-9)+)/$', article, name='article')
]
