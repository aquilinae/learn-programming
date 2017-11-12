from django import forms
from .model import Article, Comment

class ArticleForm(forms):
    class Meta:
        model = Article
        fields = '__all__'

class CommentForm(forms):
    class Meta:
        model = Comment
        fields = '__all__'
