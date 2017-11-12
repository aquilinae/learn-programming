from django.shortcuts import render

# Create your views here.
'''
def returnArticles(request):
    args = {}
    from .models import Article
    args['articles'] = Article.objects.all()
    return render(request, 'app_name/template_name.html', args)
'''

def return_articles(request):
    args = {}
    from .models import Article
    args['articles'] = Article.objects.all()
    return render(request, 'dj_proj_another/index.html', args)

def article(request, article_id):
    args = {}
    from .model import Article, Comment
    args['article'] = Article.objects.get(pk=article_id)
    args['Comments'] = Commnet.objects.filter(article_id=article_id)
    return render(request, 'dj_proj_another/article.html', args)
