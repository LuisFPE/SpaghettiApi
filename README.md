# SpaghettiApi

## Información General

Esta api permite al usuario registrase y loguearse, una vez obtenido el token de autenticacion. El usuario puede ver, buscar y crear recetas de spaghettis, tambien puede hacer lo mismo para los ingredientes.

## Funcionalidades Principales

- **Mostrar, Buscar, Crear, Actualizar y Borrar Usuarios (Funcionalidades solo para Administradores) :** La Api posee un CRUD de usuarios completo y funcional para manejar y manipular los usuarios, solo para los administradores debido a su funcion de autenticacion de ultimo modelo.

- **Mostrar, Buscar, Crear, Actualizar y Borrar Spaghettis (Funcionalidades para todos los usuarios) :** La Api posee un CRUD de spaghettis completo y funcional para ver, buscar, crear, actualizar y borrar spaghettis, los spaghettis al ser creados son añadidos a la lista de spaghettis del usuario que los creo y se puede agregar ingredientes a una receta de spaghetti, para llevar a cabos todas estas funciones se debe pasar por el sistema de autenticacion usando los tokens de seguridad.

- **Mostrar, Buscar, Crear, Actualizar y Borrar ingredientes (Funcionalidades para todos los usuarios) :** La Api posee un CRUD de ingredientes completo y funcional para ver, buscar, crear, actualizar y borrar ingredientes, para llevar a cabos todas estas funciones se debe pasar por el sistema de autenticacion usando los tokens de seguridad.

## Notas Adicionales

- Esta Api esta construida con JavaScript y MongoDB.
- El derecho a decidir quienes obtienen el rol de administrador esta reservaddo para el creador de la api.

## Requisitos

- Conexión a Internet para acceder a la API.
- Registrarse, loguearse y hacer uso del token de autenticacion.

## Autor

Este Api fue desarrollada por Luis Padua.