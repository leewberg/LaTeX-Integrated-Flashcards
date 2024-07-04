import webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
webbrowser.open("http://localhost:8000/index.html")
httpd.serve_forever()