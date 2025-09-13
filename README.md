#  API de Reservas (NestJS + TypeORM + MySQL)

Este proyecto es una API desarrollada con **NestJS**, conectada a **MySQL** mediante **TypeORM**.  
Permite gestionar **clientes** y sus **reservas**, con operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

---

## Requisitos previos

- Node.js v18+  
- MySQL 8+  
- Nest CLI instalado globalmente:  
  ```bash
  npm install -g @nestjs/cli
  ```

---

## ⚙️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/joaquinAnz/parcialApi.git
   cd parcialApi
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Configura tu archivo `.env` con los datos de la base de datos:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASS=
   DB_NAME=restaurant
   ```

4. Levanta el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```

---

##  Endpoints disponibles (CRUD de Reservas)

### 1. Crear una reserva (POST)
```http
POST /reservas
```
**Body JSON:**
```json
{
  "idCliente": 1,
  "idMesa": 2,
  "fechaReserva": "2025-09-12",
  "cantidadPersonas": 4,
  "estado": "pendiente"
}
```
**Respuesta (201 Created):**
```json
{
  "id": 1,
  "fechaReserva": "2025-09-12T00:00:00.000Z",
  "cantidadPersonas": 4,
  "estado": "pendiente",
  "cliente": { "id": 1 },
  "mesa": { "id": 2 }
}
```

---

### 2. Listar todas las reservas (GET)
```http
GET /reservas
```
**Respuesta (200 OK):**
```json
[
  {
    "id": 1,
    "fechaReserva": "2025-09-12T00:00:00.000Z",
    "cantidadPersonas": 4,
    "estado": "pendiente",
    "cliente": { "id": 1 },
    "mesa": { "id": 2 }
  }
]
```

---

### 3. Obtener una reserva por ID (GET)
```http
GET /reservas/:id
```
Ejemplo:
```
GET /reservas/1
```

**Respuesta (200 OK):**
```json
{
  "id": 1,
  "fechaReserva": "2025-09-12T00:00:00.000Z",
  "cantidadPersonas": 4,
  "estado": "pendiente",
  "cliente": { "id": 1 },
  "mesa": { "id": 2 }
}
```

Si no existe:
```json
{
  "statusCode": 404,
  "message": "Reserva con id 99 no encontrada",
  "error": "Not Found"
}
```

---

### 4. Actualizar una reserva (PATCH)
```http
PATCH /reservas/:id
```
Ejemplo:
```
PATCH /reservas/1
```

**Body JSON:**
```json
{
  "estado": "confirmada",
  "cantidadPersonas": 5
}
```

**Respuesta (200 OK):**
```json
{
  "id": 1,
  "fechaReserva": "2025-09-12T00:00:00.000Z",
  "cantidadPersonas": 5,
  "estado": "confirmada",
  "cliente": { "id": 1 },
  "mesa": { "id": 2 }
}
```

---

### 5. Eliminar una reserva (DELETE)
```http
DELETE /reservas/:id
```
Ejemplo:
```
DELETE /reservas/1
```

**Respuesta (204 No Content):**  
Sin body.

Si no existe:
```json
{
  "statusCode": 404,
  "message": "Reserva con id 99 no encontrada",
  "error": "Not Found"
}
```

---

##  Tecnologías utilizadas
- [NestJS](https://nestjs.com/)  
- [TypeORM](https://typeorm.io/)  
- [MySQL](https://www.mysql.com/)  
- [class-validator](https://github.com/typestack/class-validator)  

---

## Autor
Proyecto desarrollado como parte del **parcial de Tecnologías Web**,  
por ** Joaquin Anzaldo Gutirrez**
