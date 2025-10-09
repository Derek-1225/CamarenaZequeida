# Tipos de Datos en JavaScript  
JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos.  
El ultimo estándar de ECMAScript define nueve tipos
* Undefined
* Boolean
* Number
* String
* BigInt
* Symbol  

Estos se les conoce como datos **primitivos**.  
En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos. Hay 6 tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol. También hay null, que aparentemente es primitivo, pero de hecho es un caso especial para cada Object: y cualquier tipo estructurado se deriva de null por la Cadena de prototipos.

## Descripción de los tipos de datos primitivos  
| **Tipo** | **Descripción** | **Valores que puede tomar** |
|------|-------------|-------------------------|
| Boolean | Representa una entidad lógica | *True* o *False*|
| Null | Representa un valor que es intencionalmente inexistente o invalido | null |
| Undefined | Una variable a la que no se le ha asignado un valor | undefined |
| Number | Es un valor en formato binario de 64 bits de doble precision. Ademas puede representar números de punto flotante | De -253 a 253., Ademas puede tomar valores simbólicos como +Infinity, -Infinity y NaN |
| BigInt | Es un primitivo numérico en JavaScript que puede representar números enteros con precisión arbitraria. Con BigInt, puedes almacenar y operar de forma segura en números enteros grandes incluso más allá del límite seguro de enteros para Numbers. Se crea agregando un *n* al final del numero entero | -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807 |
| String | Se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits. Cada elemento del String ocupa una posición en la cadena. El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene. | Secuencias de caracteres encerradas entre comillas simples ('), comillas dobles (") o comillas invertidas (`), las cuales pueden contener letras, números y símbolos. |
| Symbol | Es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto (ve más abajo). En algunos lenguajes de programación, los símbolos se denominan "átomos". | Valor Primitivo único e inmutable creado con Symbol() | 

## Tipos de Datos no Primitivos  
Existen tipos de datos que se componen de un conjunto de tipos de datos que son mas complejos. A estos se les conocen como *No Primitivos* y a diferencia de los primitivos estos si son mutables, es decir, el valor de un objeto se puede cambiar después de su creación.  
Algunos ejemplos de datos no primitivos son:
* Objetos
* Arreglos 
* Funciones

### Descripción de los Datos No Primitivos
| Nombre | Descripción |
|--------|-------------|
| Objeto | Colección de pares clave-valor (propiedades) que permite agrupar datos relacionados y funciones (métodos) bajo un solo nombre. Los objetos se pueden crear con la notación literal {} o mediante clases, y sus propiedades pueden contener cualquier tipo de dato, incluyendo otros objetos y arrays.  |
| Arreglo | Son un tipo de dato complejo que puede contener múltiples valores (números, cadenas, booleanos, objetos, o incluso otros arreglos) bajo un mismo nombre. |
| Función | Bloque de código reutilizable que realiza una tarea específica y puede tomar entradas (parámetros) y devolver una salida (valor de retorno). |

## Resumen

* Tipos de Datos Primitivos
    * Boolean
    * Null
    * Undefined
    * Number
    * BigInt
    * String
    * Symbol
* Tipos de Datos No Primitivos
    * Objetos
    * Arreglos
    * Funciones

![TiposDatosJS](https://www.c-sharpcorner.com/article/datatypes-in-javascript/Images/Datatypes%20In%20JavaScript_presentation20.jpg)
.