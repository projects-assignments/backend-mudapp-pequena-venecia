# Proyecto Mudapp
## La app de las mudanzas. Paso 2 Diseño y Desarrollo del backend (APIRest)

<a href="https://ibb.co/GPmrfsZ"><img src="https://i.ibb.co/GPmrfsZ/como-hacer-una-mini-mudanza.jpg" alt="como-hacer-una-mini-mudanza"></a>

## Equipo Pequeña Venecia
conformado por:
Ana Maria Herrera: Developer 
Isadora Matias: Developer 
Jose Alberto Pérez: Product Owner/Developer 
Karyoli Nieves: Scrum Master/Developer 

**INDICE**
1. [Descripción de proyecto](#descripcion)
2. [Metodología de trabajo.Tablero Kanban](#metodologia)
3. [Diagrama Entidad-Relacion](#diagrama) 
4. [Deploy](#deploy)
5. [Herramientas utilizadas](#herramientas)
6. [Fichero Dump](#dump)
7. [Swagger](#swagger)
8. [Instrucciones de instalación de la app](#instrucciones)


## Descripción:
"MUDApp es una aplicación de mudanzas revolucionaria que redefine el proceso de contratación. Distinguiéndose de las opciones convencionales, MudApp prioriza la experiencia del usuario al ofrecer un enfoque personalizado y ágil. 

Nuestra plataforma conecta de manera rápida y eficiente a clientes con necesidades de transporte de bienes con transportistas capacitados, proporcionando una solución integral y sin complicaciones para las mudanzas y el transporte de paquetería. Con MudApp, el proceso de contratación se simplifica, permitiendo 
a los usuarios acceder a servicios de calidad con tan solo unos pocos clics."

Después de haber completado con éxito el diagrama de entidad-relación, hemos dado un paso significativo hacia el desarrollo del backend de nuestro proyecto. Con esta sólida representación visual de la estructura de nuestra base de datos, estamos listos para conectar nuestro backend a la base de datos. Utilizando un entorno en la nube, hemos comenzado a implementar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar los datos de manera eficiente. Además, estamos trabajando activamente en resolver las necesidades de los endpoints, asegurando que nuestra API proporcione las funcionalidades requeridas por nuestra aplicación. Este progreso nos acerca cada vez más a la creación de un sistema robusto y funcional.

## Metodologia:

Utilizamos un tablero Kanban en Jira para gestionar nuestro trabajo de manera eficiente.Optimizamos la organización de tareas, priorizamos el flujo de trabajo y mantenemos una comunicación fluida dentro del equipo. 

[¡DALE CLICK Y MIRA NUESTRO TABLERO KANBAN!](https://pequenavenecia.atlassian.net/jira/software/projects/PVMB/boards/1)

<a href="https://ibb.co/wNyBDp6"><img src="https://i.ibb.co/MDnZqPN/Captura-de-pantalla-90.png" alt="Captura-de-pantalla-90" border="0"></a>

## Diagrama:

Realizamos un detallado diagrama entidad-relación tras un exhaustivo análisis de las necesidades empresariales, identificando las entidades y atributos necesarios para garantizar el correcto funcionamiento del sistema.

<a href="https://ibb.co/mbTzrPc"><img src="https://i.ibb.co/GnpPfr5/diagrama-mudapp-completado.png" alt="diagrama-mudapp-completado" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

#Deploy:

[Click aquí para entrar en el proyecto](link)
(aqui ira una imagen del deploy)

## Herramientas:

[JIRA](https://pequenavenecia.atlassian.net/jira/software/projects/PVMB/boards/1)
[MySQL](https://www.mysql.com/products/workbench/)
[VS CODE](https://code.visualstudio.com/)
[Free SQL Database](https://www.freesqldatabase.com/)
[NEST JS](https://nestjs.com/)
[TYPE ORM](https://typeorm.io/)
[GIT/GITHUB](https://github.com/)
[SWAGGER](https://swagger.io/tools/open-source/getting-started/)
[RENDER](https://render.com/)


## Dump:

(Aquí te lleva al link de git con el dump)

## Swagger:



## Instrucciones:

Ingresa en (link) y descarga nuestro proyecto, abre tu editor de codigo fuente, y en tu terminal asegurate de instalar las dependencias necesarias (PNPM, TYPEORM, NEST, JEST)






























<!-- ![](https://imgur.com/MiDuWQ5.png)
# MUDApp: : La app de las mudanzas. Paso 2 Diseño y Desarrollo del backend (APIRest)


## Introducción

Una start-up de nueva creación ha solicitado una aplicación para dinamizar el mundo de las mudanzas y del transporte de paquetería en general.

La aplicación tiene cierta semejanza con la aplicación de UBER y, su objetivo principal es poner en contacto a personas con necesidades de transporte de bienes con transportistas que tengan un vehículo de las características adecuadas a esas necesidades.

Enhorabuena equipo, habéis empezado a desarrollar nuestra aplicación web y estamos bastante satisfechos del trabajo realizado con la base de datos. Ahora nos gustaría que abordaseis la parte del backend de nuestra aplicación.

Hemos seguido analizando los requerimientos que queremos tener en nuestra aplicación y os los detallamos a continuación:

## Requerimientos funcionales

<details>
  <summary><b>Usuaria-Cliente (en adelante Cliente) no registrada</b></summary>

  - Puede registrarse
  - Puede realizar búsquedas por condiciones: Localidad, Destino, nº paquetes, tamaño máximo del paquete, fecha del transporte.

  </details>
  <details>
  <summary><b>Cliente registrada</b></summary>

  - Puede logarse
  - Puede recuperar la contraseña
  - Puede realizar búsquedas por condiciones: Localidad, Destino, nº paquetes, tamaño máximo del paquete, fecha del transporte.
  - Puede actualizar su perfil de usuaria (menos nombre, email)
  - Puede seleccionar un transportista de una lista
  - Puede contratar el servicio de un transportista
  - Puede pagar el servicio
  - Puede cancelar un servicio si todavía no lo ha pagado
  - Puede ver el detalle del servicio contratado
  - Puede valorar el servicio realizado
  - Puede comentar el servicio realizado (sólo 1 vez)
  - Puede enviar un mensaje a un transportista contratado.
  - Puede visualizar mensajes de un transportista contratado

  </details>
<details>
  <summary><b>Usuaria-Proveedor de transporte (en adelante Transportista) no registrada</b></summary>

  - Puede registrarse

  </details>
  <details>
  <summary><b>Transportista registrada</b></summary>

  - Puede logarse
  - Puede recuperar la contraseña
  - Puede dar de alta un vehículo
  - Puede modificar los datos de un vehículo
  - Puede eliminar los datos de un vehículo
  - Puede actualizar su perfil de usuaria (menos nombre, email). Puede cambiar su estado a NO DISPONIBLE.
  - Puede ver el detalle del servicio contratado
  - Puede enviar un mensaje a un cliente.
  - Puede visualizar mensajes de un cliente.
  - Pueden ver la lista de condiciones del servicio.

  </details>

  <details>
  <summary><b>Administradora de la aplicación</b></summary>

  - Puede visualizar la lista de clientes y transportistas
  - Puede realizar búsquedas por palabras claves.
  - Puede editar la lista de condiciones del servicio de transporte.
  - Puede editar o borrar un cliente
  - Puede editar o borrar un transportista
  - Puede editar o borrar un servicio
  - Notifica a los transportistas valorados que van a recibir un pago.


  </details>

  <details>
  <summary><b>Sistema</b></summary>

  - Filtra la lista de transportistas por el check de disponibilidad
  - Modifica la disponibilidad de un transportista cuando se ha recibido el pago de un servicio.
  - Modifica la disponibilidad de un transportista cuando se ha finalizado un servicio.
  - Modifica la disponibilidad e un transportista si se ha cancelado un servicio.
  - Notifica al cliente que tiene que valorar un servicio cuando se ha realizado.
  - Ajusta la valoración del transportista con cada valoración de un cliente.

  </details>

## Requerimientos Técnicos

  - Incluir Linting
  - Incluir testing unitario y testing de integración de todos los endpoints
  - Incluir documentación con OpenAPI ([Swagger](https://swagger.io/tools/open-source/getting-started/))
  - Desplegar en producción

BONUS-TRACK
  - Dockerizar API y BBDD
  - Desplegar mediante CI/CD con GitHub Actions

## Modalidad Pedagógica
  - Proyecto grupal
  - Desarrollo en 2 sprints, 1 semana de duración cada uno
  - Fecha de presentación: 5/2/2023

## Evaluación
  - Vía pull-request a través de Github-classromm
  - Comentarios orales día de la presentación
  - Autoevaluación

## Entregables
- Repositorio de GitHub que contenga la siguiente información:
  - Readme con índice,contenido del repositorio, las tecnologías utilizadas, links a los recursos.
  - Modelo lógico de la base de datos.
  - Fichero de dump de la base de datos.
  - Instrucciones de instalación de la aplicación
  - Presentación

## Criterios de rendimiento
  |  | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Indicador | Deficiente | Regular | Excelente |
| Trabajo en equipo | Ha habido problemas de comunicación, alguno de los miembros del equipo no ha participado en el desarrollo y/o no conoce el funcionamiento de la API. | Se ha trabajado de forma modular, pero no se ha trabajado de forma equitativa en cuanto a cantidad y complejidad del trabajo. Ha habido algún problema de comunicación | Se dividió la carga de trabajo por igual, los dos han contribuido al desarrollo del trabajo y conocen por igual todos los detalles del proyecto |
| Documentación de la API | La documentación es incorrecta, omite servicios o estos no se corresponden con la implementación, no hay descripción de historias de usuario | La documentación es completa o faltan pocas especificaciones. Falta claridad en la descripción. Faltan historias de usuario y a las que hay les falta información | La documentación es clara y corresponde perfectamente a los servicios. Cuenta con descripciones detalladas y es intuitiva. Se describen las historias de usuario con tareas y criterios de aceptación asociados. |
| Testing | El porcentaje de cobertura de los tests no supera el 50% | El % de cobertura es inferior al 80% | El % de cobertura es superior al 80% |
| Implementación de la API | Hay requerimientos que no se resolvieron o su solución es incorrecta. El código es confuso y carece de buenas prácticas. Falta el desarrollo de muchos servicios o éstos son incorrectos. Las consultas a la bbdd son muy ineficientes, lo cual aumenta el tiempo de respuesta. El comportamiento de los endpoints no es el esperado. | Se resuelven satisfactoriamente los requerimientos especificados, pero el código podría mejorarse con buenas prácticas o limpieza. Sobra código o es redundante. | El código es limpio y está bien estructurado. Resuelve satisfactoriamente los requerimientos del proyecto. Se aplicaron buenas prácticas de programación: responsabilidad única, no es redundante y no mezcla capas de abstracción. Las conexiones a la bbbdd son eficientes. |
| Comunicación del Proyecto | No quedan claros la motivación ni los requerimientos del proyecto. No es posible conocer la evolución del proyecto. La presentación es incompleta y carece de hilo conductor. No refleja para nada el trabajo realizado | Existe cierta calidad en la presentación aunque faltan apartados o estos no están claramente definidos. Existe cierto grado de confusión pero refleja el desarrollo | Las presentaciones están bien preparadas, se ajustan a los apartados requeridos y reflejan correctamente la evolución del proyecto. | -->
