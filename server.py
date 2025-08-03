import http.server
import socketserver
import webbrowser

PORT = 8000
DIRECTORY = "" # Sirve archivos desde el directorio actual

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

# Asegurarse de que el puerto esté disponible
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor iniciado en http://localhost:{PORT}")
    print("Presiona Ctrl+C para detener el servidor.")
    
    # Abrir el navegador web en la página de inicio
    # Puedes cambiar 'index.html' por el archivo que prefieras como principal
    webbrowser.open_new_tab(f'http://localhost:{PORT}/bienvenida.html')
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nDeteniendo el servidor...")
        httpd.server_close()
    finally:
        httpd.server_close()