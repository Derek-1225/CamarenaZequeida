# HTTP 

## Definicion de HTTP 
El **protocolo de transferencia de hipertexto** es el protocolo de comunicacion que permite las transferencias de informacion a traves de archivos (XML,HTML) en la World Wide Web(WWW)   
Fue desarrollado por el World Wide Web Consortium y la Internet Engineering Task Force, colaboración que culminó en 1999 con la publicación de una serie de RFC, siendo el más importante de ellos el RFC 2616 que especifica la versión 1.1. HTTP define la sintaxis y la semántica que utilizan los elementos de software de la arquitectura web (clientes, servidores, proxies) para comunicarse.  
HTTP es un protocolo sin estado, por lo que no guarda ninguna información sobre conexiones anteriores. El desarrollo de aplicaciones web necesita frecuentemente mantener estado. Para esto se usan las cookies, que es información que un servidor puede almacenar en el sistema cliente. Esto le permite a las aplicaciones web instituir la noción de sesión, y también permite rastrear usuarios, ya que las cookies pueden guardarse en el cliente por tiempo indeterminado.  

![http](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAEkLFkKibhoEzpF6nFXkfC94v5RYOExGWQ&s)

### Versiones de HTTP
* **HTTP 0.9**  
  Obsoleta. Soporta solo un comando, GET, y además no especifica el número de versión HTTP. No soporta cabeceras. Como esta versión no soporta POST, el cliente no puede enviarle mucha información al servidor.
* **HTTP/1.0**  
  Esta es la primera revisión del protocolo que especifica su versión en las comunicaciones, y todavía se usa ampliamente, sobre todo en servidores proxy. Permite los métodos de petición GET, HEAD y POST.
* **HTTP/1.1**  
  Versión más usada actualmente; Las conexiones persistentes están activadas por defecto y funcionan bien con los proxies. También permite al cliente enviar múltiples peticiones a la vez por la misma conexión (pipelining) lo que hace posible eliminar el tiempo de Round-Trip delay por cada petición.
* **HTTP/1.2**  
  Los primeros borradores de 1995 del documento PEP — an Extension Mechanism for HTTP (el cual propone el Protocolo de Extensión de Protocolo, abreviado PEP) los hizo el World Wide Web Consortium y se envió al Internet Engineering Task Force. El PEP inicialmente estaba destinado a convertirse en un rango distintivo de HTTP/1.2.
* **HTTP/2**  
  En el año 2012 aparecen los primeros borradores de la nueva versión de HTTP (HTTP/2). Esta nueva versión no modifica la semántica de aplicación de http (todos los conceptos básicos continúan sin cambios). Sus mejoras se enfocan en como se empaquetan los datos y en el transporte.
* **HTTP/3**  
  HTTP/3 es el sucesor propuesto de HTTP/2, que ya está en uso en la web, utilizando UDP en lugar de TCP para el protocolo de transporte subyacente.  
  El soporte para HTTP/3 fue agregado a Cloudflare y Google Chrome en septiembre de 2019, y puede ser habilitado en las versiones estables de Chrome y Firefox.  

![lineaTiempoHttp](https://upload.wikimedia.org/wikipedia/es/timeline/ez3l5y4x2p6xo9yie9m3t781wt9cm6y.png)
## Estructura de una Peticion  
Una petición HTTP es un mensaje que envía un cliente, como un navegador web, a un servidor para solicitar un recurso, como una página web, o para realizar una acción, como enviar datos. Este mensaje contiene el método HTTP (como GET o POST) que indica la acción a realizar, la URL del recurso, la versión del protocolo y encabezados con metadatos, así como un cuerpo opcional para enviar datos al servidor.  
### Solicitud  
Un cliente realiza una solicitud HTTP a un host con nombre, que se encuentra en un servidor. El objetivo de la solicitud es acceder a un recurso en el servidor.  
Para hacer la petición, el cliente utiliza componentes de una URL (Uniform Resource Locator), que incluye la información necesaria para acceder al recurso.  
Una peticion HTTP se componone de los siguientes elementos:  
* *Una linea de solicitud*  
  La línea de solicitud es la primera línea del mensaje de solicitud. Consta de al menos tres elementos:  
  * Un método. El método es un mandato de una palabra que indica al servidor lo que debe hacer con el recurso.  
  * El componente de ruta de la URL de la solicitud.  
  * El número de versión HTTP  
  Un ejemplo es el siguiente  
  ```
    GET /software/htp/cics/index.html HTTP/1.1
  ```
* *Una serie de cabeceras HTTP o campos de cabecera*  
  * Las cabeceras HTTP se escriben en un mensaje para proporcionar al destinatario información sobre el mensaje, el remitente y la forma en que el remitente desea comunicarse con el destinatario  
  Un ejemplo es el siguiente
  ```
    Accept-Language: fr, de
    If-Modified-Since: Fri, 10 Dec 2004 11:22:13 GMT
  ```
* *Un cuerpo de mensaje, si es necesario*  
  * El contenido del cuerpo de cualquier mensaje HTTP puede denominarse cuerpo del mensaje o cuerpo de la entidad.

### Respuesta  
Una respuesta HTTP la realiza un servidor a un cliente. El objetivo de la respuesta es proporcionar al cliente el recurso que ha solicitado, o informar al cliente de que se ha llevado a cabo la acción que ha solicitado; o bien informar al cliente de que se ha producido un error al procesar su solicitud.  
Una respuesta HTTP se compone de:  
* Una línea de estado.
  La línea de estado es la primera línea del mensaje de respuesta. Consta de tres elementos:
  * El número de versión HTTP, que muestra la especificación HTTP que el servidor ha intentado que cumpla el mensaje.
  * Un código de estado, que es un número de tres dígitos que indica el resultado de la solicitud.
  * Una frase de razón, también conocida como texto de estado, que es texto legible por el usuario que resume el significado del código de estado.
  Ejemplo
  ```
    HTTP/1.1 200 OK
  ```
* Una serie de cabeceras HTTP o campos de cabecera.  
  Las cabeceras HTTP de la respuesta de un servidor contienen información que un cliente puede utilizar para saber más sobre la respuesta y sobre el servidor que la envió.
* Un cuerpo de mensaje, que suele ser necesario.  
  El cuerpo del mensaje de una respuesta puede ser referido por conveniencia como un cuerpo de respuesta.  
  Para obtener una respuesta a una solicitud satisfactoria, el cuerpo del mensaje contiene el recurso solicitado por el cliente o alguna información sobre el estado de la acción solicitada por el cliente.

![peticionHTTP](https://blog.makeitreal.camp/assets/images/http-messages.jpg)  

## Metodos más utilizados 
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs.  
Algunos ejemplos son los siguientes
| Metodo | Descripcion |
|--------|-------------|
|   **GET**  | Solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.|
|  **HEAD**  | Pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta. |
| **POST**   |  Se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor. |
|  **PUT**   | Reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición. |
|  **DELETE** | Borra un recurso en específico. |
|  **CONNECT** | Es utilizado para describir las opciones de comunicación para el recurso de destino. |
|  **TRACE**  | Realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino. |
| **PATCH** | Es utilizado para aplicar modificaciones parciales a un recurso. |  

![metodosHTTP](https://cl.abstracta.us/wp-content/uploads/2021/09/metodos-HTTP-pruebas-API-REST.png)
## Codigos de Estado 
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:  
1. Respuestas Informativas (`100`-`199`)  
2. Respuestas Satisfactorias  (`200`-`299`)
3. Redirecciones  (`300`-`399`)
4. Error de los Clientes  (`400`-`499`)
5. Error de los Servidores (`500`-`599`)

### Informativos (`1xx`)  
| Codigo | Nombre | Descripcion |
|--------|--------|-------------|
| 100 | Continue | indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.|
| 101 | Switching Protocol | indica que el servidor acepta el cambio de protocolo propuesto por el agente de usuario. |
| 102 | Processing |  indica que el servidor ha recibido la solicitud y aún se encuentra procesandola, por lo que no hay respuesta disponible. |
### Satisfactorios (`2xx`)  
| Codigo | Nombre | Descripcion |
|--------|--------|-------------|
| 200 | OK | La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP|
| 201 | Created | La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT. |
| 202 | Accepted | La solicitud se ha recibido, pero aún no se ha actuado. Es una petición "sin compromiso", lo que significa que no hay manera en HTTP que permite enviar una respuesta asíncrona que indique el resultado del procesamiento de la solicitud. |
| 203 | Non-Authoritative Information | La petición se ha completado con éxito, pero su contenido no se ha obtenido de la fuente originalmente solicitada, sino que se recoge de una copia local o de un tercero |
| 204 | No Content | La petición se ha completado con éxito pero su respuesta no tiene ningún contenido, aunque los encabezados pueden ser útiles.  |
| 205 | Reset Content |  La petición se ha completado con éxito, pero su respuesta no tiene contenidos y además, el agente de usuario tiene que inicializar la página desde la que se realizó la petición |
| 206 | Partial Content |  La petición servirá parcialmente el contenido solicitado. |
### Redirecciones (`3xx`)  
| Codigo | Nombre | Descripcion |
|--------|--------|-------------|
| 300 | Multiple Choice |Esta solicitud tiene más de una posible respuesta. User-Agent o el usuario debe escoger uno de ellos.|
| 301 | Moved Permanently | Este código de respuesta significa que la URI del recurso solicitado ha sido cambiado. Probablemente una nueva URI sea devuelta en la respuesta. |
| 302 | Found | Este código de respuesta significa que el recurso de la URI solicitada ha sido cambiado temporalmente. |
| 303 | See Other | El servidor envía esta respuesta para dirigir al cliente a un nuevo recurso solicitado a otra dirección usando una petición GET. |
| 304 | Not Modified | Esta es usada para propósitos de "caché". Le indica al cliente que la respuesta no ha sido modificada.  |
| 307 | Temporary Redirect | El servidor envía esta respuesta para dirigir al cliente a obtener el recurso solicitado a otra URI con el mismo método que se usó la petición anterior. |
| 308 | Permanent Redirect |  Significa que el recurso ahora se encuentra permanentemente en otra URI, especificada por la respuesta de encabezado HTTP Location |
### Error de parte del cliente (`4xx`)
| Codigo | Nombre | Descripcion |
|--------|--------|-------------|
| 400 | Bad Request |Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.|
| 401 | Unathorized | Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible. |
| 403 | Forbidden | El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada. |
| 404 | Not Found |El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web. |
| 405 | Method Not Allowed | El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, GET y HEAD, nunca deben ser deshabilitados y no deberían retornar este código de error.  |
| 406 | Not Acceptable | Esta respuesta es enviada cuando el servidor, después de aplicar una negociación de contenido servidor-impulsado |
| 408 | Request Timeout |  Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. |
| 409 | Conflict |  Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor. |
| 410 | Gone |  Esta respuesta puede ser enviada cuando el contenido solicitado ha sido borrado del servidor. |
| 411 | Length Required | El servidor rechaza la petición porque el campo de encabezado Content-Length no esta definido y el servidor lo requiere. |
| 414 | URI Too Long |  La URI solicitada por el cliente es más larga de lo que el servidor está dispuesto a interpretar. |
| 415 | Unsupported Media Type | El formato multimedia de los datos solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud. |
| 423 | Locked | El recurso que está siendo accedido está bloqueado. |
| 429 | Too Many Requests | El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado. |
### Error de parte del servidor (`5xx`)  
| Codigo | Nombre | Descripcion |
|--------|--------|-------------|
| 500 | Internal Server Error |El servidor ha encontrado una situación que no sabe cómo manejarla.|
| 501 | Not Implemented | El método solicitado no está soportado por el servidor y no puede ser manejado. |
| 502 | Bad Gateway | Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida. |
| 503 | Service Unavailable | El servidor no está listo para manejar la petición. Causas comunes puede ser que el servidor está caído por mantenimiento o está sobrecargado. |
| 504 | Gateway Timeout | Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo. |
| 505 | HTTP Version Not Supported | La versión de HTTP usada en la petición no está soportada por el servidor. |
| 506 | Variant Also Negotiates | El servidor tiene un error de configuración interna: negociación de contenido transparente para la petición resulta en una referencia circular. |
| 507 | Insufficient Storage | El servidor tiene un error de configuración interna: la variable de recurso escogida está configurada para acoplar la negociación de contenido transparente misma, y no es por lo tanto un punto final adecuado para el proceso de negociación. |
| 508 | Loop Detected | El servidor detectó un ciclo infinito mientras procesaba la solicitud. |
| 510 | Not Extended | Extensiones adicionales para la solicitud son requeridas para que el servidor las cumpla. |
| 511 | Network Authentication Required | El código de estado 511 indica que el cliente necesita autenticar para obtener acceso a la red. |
## Encabezados  
Los encabezados HTTP son pares clave-valor de información que se transmiten entre un cliente y un servidor web en cada solicitud o respuesta HTTP, proporcionando detalles contextuales como el navegador del cliente, el tipo de contenido, el idioma preferido o la autenticación, lo que permite una comunicación más eficiente y segura.   
Estos encabezados son esenciales para la transferencia y recepción de datos en la web, y puedes verlos usando las herramientas de desarrollador de tu navegador.  
Algunos ejemplos de encabezados HTTP son los siguientes  
| Nombre| Descripcion | Ejemplo |
|-------|-------------|---------|
|Accept|Content-Types (tipos de contenido) que se aceptan.|```Accept: text/plain``` |
|Accept-Charset|Conjunto de caracteres que se aceptan.|```Accept-Charset: utf-8``` |
|Accept-Language| Idiomas que se aceptan.|```Accept-Language: en-US``` |
|Authorization|Credenciales de autorización para la autenticación HTML.|```Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==``` |
|Cache-Control|	Se controla las políticas de caché.|```Cache-Control: no-cache``` |
|Connection| Se controla el tipo de conexión.|```Connection: keep-alive,Connection: Upgrade``` |
|Cookie|Una cookie enviada previamente por el servidor usando Set-Cookie|```Cookie: $Version=1; Skin=new;``` |
|Content-type|El tipo de contenido de la petición en POST o PUT|```Content-Type: application/x-www-form-urlencoded``` |
|Date|La fecha y la hora de la petición	|```Date: Tue, 15 Nov 1994 08:12:31 GMT``` |
|From|La dirección de correo electrónico de la petición.|```From: user@example.com``` |
|Host|	El nombre de dominio o dirección IP (puede incluir número de puerto).|```Host: es.wikipedia.org:8080``` |
|Origin|Inicia una petición para servidores con respuesta a Access-Control-Allow-Origin.|```Origin: http://www.example-social-network.com``` |
|Warning|Una advertencia general sobre problemas de la entidad.|```Warning: 199 Miscellaneous warning``` |
## Definicion de URL  
Un URL (Uniform Resource Locator)​ es un identificador de recursos uniforme (Uniform Resource Identifier, URI) cuyos recursos referidos pueden cambiar, esto es, la dirección puede apuntar a recursos variables en el tiempo. Están formados por una secuencia de caracteres de acuerdo con un formato modélico y estándar que designa recursos en una red como, por ejemplo, Internet.  
Los URL fueron una innovación en la historia de Internet. Fueron usados por primera vez por Tim Berners-Lee en 1991, para permitir a los autores de documentos establecer hiperenlaces en la World Wide Web (WWW).  
## Estructura de una URL  
Una URL esta compuesta de varios componentes que se explicaran a continuacion
![EstructuraURL](https://static.semrush.com/blog/uploads/media/1c/61/1c6180e4294fd6f5f51be7067be9b2ef/ES-Parts-of-a-URL-2.webp)  

1. **Protocolo**  
   El protocolo indica a tu navegador cómo conectarse a una página.  
   Puede ser HTTP (Hypertext Transfer Protocol, o “protocolo de transferencia de hipertextos”) o HTTPS (HTTP seguro).  
   La principal diferencia entre ambos es que el HTTPS cifra y protege los datos transmitidos entre el servidor y el navegador.  

2. **Subdominio**  
   Un subdominio es una cadena de letras o una palabra completa que aparece antes del primer punto de una URL.  
   El subdominio más popular es www., que significa World Wide Web, comunicando que la URL es una dirección web.   
   Luego hay otros subdominios (blog, tienda, soporte, noticias, etc.) que se utilizan para gestionar y organizar secciones de una web que cumplen una función específica.   

3. **Dominio**  
   Un dominio es la parte principal de la URL que identifica a la web. Como eBay, Expedia o Semrush.    

4. **Dominio de Primer Nivel (TLD)**
   El TLD (“Top level domain” en inglés, también llamado extensión de dominio) es la parte que va después del nombre de tu web, como ".com".  
   Algunos ejemplos de TLD son los siguientes
   * .com : webs comerciales
   * .org : organizaciones sin animos de lucro
   * .net : empresas de software y alojamiento
   * .edu : instituciones educativas
   * .gov : instituciones de gobierno  
   Ademas existen los dominios de nivel superior de codigo de pais(ccTLD), algunos ejemplos de estos son los siguientes:
   * .uk para Reino Unido
   * .de para Alemania
   * .cn para China
   * .ca para Canada
   * .in para la India
   * .es para España
   * .au para Australia
   * .nz para Nueva Zelanda
   * .mx para Mexico  

5. **Subcarpeta**   
   Una subcarpeta es una carpeta o directorio que se encuentra dentro del directorio superior (o directorio raíz) en la jerarquía de tu web.  
   Por ejemplo, en la URL "www.dominio.com/zapatos/", la subcarpeta "zapatos" se encuentra dentro del directorio principal de la web, que es "www.dominio.com".  

6. **Slug**  
   El slug es la parte de una URL que identifica una página específica o una entrada de una web. Ayuda a los usuarios a comprender el contexto y el contenido de una página.  
   En la URL "/mejores-champus-para-bebes/", los usuarios pueden hacerse una idea de qué trata la página.  
   A veces, también te encontrarás con slugs del tipo "/785321/", lo que confunde a los usuarios.  
   El objetivo principal del slug es describir el contenido de una página, por lo que debes asegurarte de que sea descriptivo.  

7. **Parametros de URL**  
   Los parámetros de URL (o cadenas de consulta) son partes de una URL que van después de un signo de interrogación (?).  
   Se componen de claves y valores, separados por un signo igual (=).   
   Esta clave te indica el tipo de información que se envía, mientras que el valor indica la información enviada.
   