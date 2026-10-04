# Practica de Ingreso - Analista Desarrollador Java - Angular

## Descripción

Aplicación web para la gestión de productos mediante un CRUD completo.

El proyecto permite registrar, consultar, actualizar y eliminar productos, además de realizar búsquedas por nombre y validar los datos tanto en el frontend como en el backend.

## Tecnologías utilizadas

### Backend

- Java 8
- Spring Boot 2.7.18
- Spring Data JPA
- Hibernate
- MySQL
- Maven
- API REST

### Frontend

- Angular 18
- TypeScript
- HTML5
- CSS3
- Reactive Forms
- HttpClient

## Requisitos

Para ejecutar el proyecto se necesita tener instalado:

- Java JDK 8
- Maven
- Node.js
- Angular CLI 18
- MySQL

## Base de datos

Crear una base de datos MySQL con el siguiente nombre:

```sql
CREATE DATABASE BDProducto;

```

La configuración utilizada por el backend se encuentra en:

```text
producto-api/src/main/resources/application.properties
```

Configuración de conexión:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/BDProducto?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=
```

Si el usuario de MySQL utiliza una contraseña, debe configurarse en:

```properties
spring.datasource.password=TU_CONTRASEÑA
```

La aplicación utiliza Hibernate para crear o actualizar automáticamente las tablas necesarias.

## Ejecución del Backend

Ingresar a la carpeta del backend:

```bash
cd producto-api/producto-api
```

Ejecutar la aplicación:

```bash
mvn spring-boot:run
```

El backend estará disponible en:

```text
http://localhost:9099
```

La API de productos estará disponible en:

```text
http://localhost:9099/api/productos
```

## Ejecución del Frontend

Ingresar a la carpeta del frontend:

```bash
cd producto-frontend
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
ng serve
```

El frontend estará disponible en:

```text
http://localhost:4200
```

## Funcionalidades

- Listar productos.
- Registrar productos.
- Editar productos.
- Eliminar productos con confirmación.
- Buscar productos por nombre en tiempo real.
- Validar campos obligatorios.
- Validar cantidad.
- Validar precio.
- Manejar errores del backend.
- Comunicación entre Angular y Spring Boot mediante API REST.

## Endpoints REST

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/productos` | Listar productos |
| POST | `/api/productos` | Registrar producto |
| PUT | `/api/productos/{id}` | Actualizar producto |
| DELETE | `/api/productos/{id}` | Eliminar producto |

## Estructura del proyecto

```text
TIP-JN-01/
├── producto-api/
│   ├── src/
│   └── pom.xml
│
├── producto-frontend/
│   ├── src/
│   └── package.json
│
└── README.md
```

## Autor

Luis Manuel Jesus Ramirez Jeri