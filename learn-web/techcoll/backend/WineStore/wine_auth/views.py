from .serializers import *
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from django.contrib import auth


@api_view(['POST'])
def register(request):
    email = request.data['email']
    if CustomUser.objects.filter(email__iexact=email).exists():
        return Response({'c': 'error', 'd': 'exist'}, status=400)
    serializer = CustomUserSerializer(data=request.data, partial=True)
    if serializer.is_valid():
        from django.contrib.auth.hashers import make_password
        serializer.save(email=email, password=make_password(request.data['password']))
        user = CustomUser.objects.get(email=request.data['email'])
        Token.objects.create(user=user)
        return Response({'status': 'success'}, status=201)
    else:
        return Response({'c': 'error', 'd': 'data is not valid'}, status=400)


@api_view(['POST'])
def signin(request):
    email = request.data['email']
    password = request.data['password']
    user = auth.authenticate(email=email, password=password)
    if user:
        auth.login(request, user)
        serializer = CustomUserSerializer(user)
        response_data = serializer.data
        token = Token.objects.get(user=user)
        response_data['token'] = token.key
        # auth.logout(request)
        return Response(response_data, status=200)
    elif CustomUser.objects.filter(email=email, is_active=False).exists():
        return Response({'c': 'error', 'd': 'inactive'}, status=401)
    else:
        return Response({'c': 'error', 'd': 'not_exist'}, status=401)

@api_view(['GET'])
def logout(request):
    auth.logout(request)
    return Response('OK')

@api_view(['POST'])
def edit_user(request):
    if request.auth:
        user = request.auth.user
        serializer = CustomUserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response('OK', status=200)
        return Response(serializer.error_messages, status=200)
    return Response('ERROR', status=400)

'''
# Пример того, как можно заполнить базу из джейсон объекта
@api_view(['POST'])
def create_db(request):
    VineItem.objects.all().delete()
    bulk = []
    for item in request.data:
        bulk.append(VineItem(
        # тут перечисляются айтемы, описанные в модели
        item[''],
        ))
    VineItem.objects.bulk_create(bulk)
    return Response('OK', status=201)
'''
