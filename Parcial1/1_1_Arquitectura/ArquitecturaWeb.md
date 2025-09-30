# Arquitectura de las Aplicaciones Web  
La arquitectura de aplicaciones web hace referencia al diseño estructural y la organización de una aplicación web. Abarca la disposición de varios componentes, módulos y subsistemas que trabajan juntos para ofrecer la funcionalidad prevista de la aplicación.  
Esta arquitectura define el modo en que los distintos elementos de la aplicación interactúan entre sí y con sistemas externos, garantizando un funcionamiento eficaz, escalabilidad y facilidad de mantenimiento. 

![ArquitecturaWeb](https://kinsta.com/es/wp-content/uploads/sites/8/2022/10/arquitectura-aplicaciones-web-1024x512.png)

Las Arquitecturas Web se clasifican de la siguiente forma
- **De Acuerdo a como se comunican las partes que componen la App** 
- **De Acuerdo como se organiza el codigo de la App** 

## Arquitecturas Web segun como se comunican los componentes 
### Cliente-Servidor 
Cliente-Servidor es uno de los estilos arquitectónicos distribuidos más conocidos, el cual está compuesto por dos componentes, el proveedor y el consumidor. El proveedor es un servidor que brinda una serie de servicios o recursos los cuales son consumido por el Cliente.

En una arquitectura Cliente-Servidor existe un servidor y múltiples clientes que se conectan al servidor para recuperar todos los recursos necesarios para funcionar, en este sentido, el cliente solo es una capa para representar los datos y se detonan acciones para modificar el estado del servidor, mientras que el servidor es el que hace todo el trabajo pesado. 
![ClienteServidor](https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Fcliente-servidor.png&w=640&q=75)   
Cliente-Servidor es considerada una arquitectura distribuida debido a que el servidor y el cliente se encuentran distribuidos en diferentes equipos (aunque podrían estar en la misma máquina) y se comunican únicamente por medio de la RED o Internet.

En esta arquitectura, el Cliente y el Servidor son desarrollados como dos aplicaciones diferentes, de tal forma que cada una puede ser desarrollada de forma independiente, dando como resultado dos aplicaciones separadas, las cuales pueden ser construidas en tecnologías diferentes, pero siempre respetando el mismo protocolo de comunicación para establecer comunicación. 
### Punto a Punto 
Las redes punto a punto son aquellas que responden a un tipo de arquitectura de red en las que cada canal de datos se usa para comunicar únicamente dos computadoras, en clara oposición a las redes multipunto, en las cuales cada canal de datos se puede usar para comunicarse con diversos nodos. 

En una red punto a punto, los dispositivos en red actúan como socios iguales, o pares entre sí. Como pares, cada dispositivo puede tomar el rol de emisor o la función de receptor. En un momento, el dispositivo A, por ejemplo, puede hacer una petición de un mensaje / dato del dispositivo B, y este es el que le responde enviando el mensaje / dato al dispositivo A. El dispositivo A funciona como receptor, mientras que B funciona como emisor. Un momento después los dispositivos A y B pueden revertir los roles: B, como receptor, hace una solicitud a A, y A, como emisor, responde a la solicitud de B. A y B permanecen en una relación recíproca o par entre ellos. 

![PuntoPunto](https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Fp2p.png&w=828&q=75)
## Arquitecturas Web segun el codigo de la App 
### Monolito 
La arquitectura monolítica es un modelo tradicional de desarrollo de software en el que una única base de código ejecuta múltiples funciones empresariales. En un sistema operativo monolítico, el núcleo dirige toda la funcionalidad. La arquitectura monolítica suele compararse con los microservicios , que realizan servicios similares pero emplean una arquitectura diferente. 
En el software monolítico, todo el código necesario para una aplicación se almacena en una ubicación central. Esto ofrece una ventaja adicional de simplificación a los desarrolladores, ya que el sistema está diseñado para aceptar comunicaciones en un solo formato. El sistema no tiene la carga de traducir las comunicaciones de diferentes servicios.  
![Monolitico](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyDwI8OZykZM7PCP6iWn58Za8LBoA86vmOA&s)  
### Sistema en Capas 
La arquitectura en capas es una de las más utilizadas, no solo por su simplicidad, sino porque también es utilizada por defecto cuando no estamos seguros que arquitectura debemos de utilizar para nuestra aplicación.

La arquitectura en capas consta en dividir la aplicación en capas, con la intención de que cada capa tenga un rol muy definido, como podría ser, una capa de presentación (UI), una capa de reglas de negocio (servicios) y una capa de acceso a datos (DAO), sin embargo, este estilo arquitectónico no define cuantas capas debe de tener la aplicación, sino más bien, se centra en la separación de la aplicación en capas (Aplica el principio Separación de preocupaciones (SoC)).  

En la práctica, la mayoría de las veces este estilo arquitectónico es implementado en 4 capas, presentación, negocio, persistencia y base de datos, sin embargo, es habitual ver que la capa de negocio y persistencia se combinan en una solo capa, sobre todo cuando la lógica de persistencia está incrustada dentro de la capa de negocio.  
![Capas](https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Fcapas.png&w=750&q=75)

### Microservicios 
La arquitectura de microservicios es un enfoque para el desarrollo de software que consiste en construir una aplicación como un conjunto de pequeños servicios, los cuales se ejecutan en su propio proceso y se comunican con mecanismos ligeros (normalmente una API de recursos HTTP). Cada servicio se encarga de implementar una funcionalidad completa del negocio. Cada servicio es desplegado de forma independiente y puede estar programado en distintos lenguajes y usar diferentes tecnologías de almacenamiento de datos.  
Se suele considerar la arquitectura de microservicios como una forma específica de realizar una arquitectura orientada a servicios.  
![Microservicios](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4427fY96fhvsfR9FW0YCXmMfk0L4BqP_aQ&s)
### Serverless  
La arquitectura sin servidor es un método de diseño de software con el que los desarrolladores pueden crear y gestionar aplicaciones sin necesidad de gestionar la arquitectura subyacente. Las aplicaciones sin servidor se siguen ejecutando en los servidores, pero el proveedor de servicios en la nube se encarga de aprovisionar, gestionar y escalar toda la infraestructura en la nube.  
Las arquitecturas sin servidor están diseñadas para abstraer los servidores y la gestión de servidores de los equipos de desarrollo. "Sin servidor" no significa que no haya ningún servidor. el término hace referencia a la experiencia de desarrollo general.  
Desde el punto de vista del desarrollador, solo tienes que escribir el código y ejecutarlo sin tener que preocuparte de nada más. El proveedor de servicios en la nube es el encargado de todas las tareas de aprovisionamiento, mantenimiento del hardware, software y seguridad de los servidores, así como de cualquier otra tarea de administración de servidores. Además, las arquitecturas sin servidor escalan verticalmente o reducen su tamaño de forma automática en función del tráfico.  
![Serverless](https://dc722jrlp2zu8.cloudfront.net/media/uploads/2021/09/17/1.jpg)  
### Fuentes de Informacion  
* [Fuente 1]()  
* [Fuente 2]()  
* [Fuente 3]()  

Tema: Tendencias, sistemas operativos actuales y al futuro