# [STEPIK]
# Web-технологии https://stepik.org/course/154
# 1.6 Сетевые протоколы (7)

'''
Измените ваш echo сервер так, что бы он работать одновременно с 10 клиентами. 

Протокол передачи такой же как в прошлой задаче.
'''

# UPD. Решение плохое.

import socket
import os

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('0.0.0.0', 2222))
s.listen(10)

pid = os.fork()

if pid == 0:
	while True:
		conn, addr = s.accept()
		data = conn.recv(1024)
		conn.send(data)		
		conn.close()
		
# Полезная информация по решению
'''
https://youtu.be/wV2WavaPNrU?t=44m11s
https://docs.python.org/3/library/asyncore.html#asyncore-example-basic-echo-server
https://xakep.ru/2017/01/11/python-3-asyncio/
http://django-tutorial.blogspot.ru/2012/12/python_11.html
http://ideafix.name/wp-content/uploads/2012/07/Python-11.pdf
'''

