📚 Proyecto Interfaz Estudiantil

Este es un pequeño proyecto hecho con Angular para gestionar estudiantes mediante un CRUD (Crear, Listar, Editar y Eliminar).
El frontend está conectado a un backend en Spring Boot que expone la API de estudiantes.

![WhatsApp Image 2025-09-30 at 4 43 06 PM](https://github.com/user-attachments/assets/89006128-d87a-476c-8996-1168a87484ad)


La idea principal es tener una interfaz sencilla para registrar estudiantes, listarlos en una tabla y poder modificarlos o eliminarlos cuando sea necesario.

🚀 Tecnologías utilizadas

Angular 14 + TypeScript

Bootstrap 5 para estilos rápidos y responsivos

CSS propio para mejorar la interfaz

Módulos de Angular usados:

HttpClientModule → consumo de la API

ReactiveFormsModule → formularios reactivos

@angular/cdk/drag-drop (solo para pruebas de arrastrar y soltar)

Backend (ejemplo usado): Spring Boot con endpoints en http://localhost:8090/api/student

📂 Estructura básica
src/
 ├── app/
 │   ├── componente/
 │   │   ├── add-student/    → Formulario de registro
 │   │   ├── edit-student/   → Formulario de edición
 │   │   └── list-student/   → Tabla de estudiantes
 │   ├── models/
 │   │   └── student.ts      → Modelo Student
 │   ├── service/
 │   │   └── student.service.ts → Lógica para llamar la API
 │   ├── app-routing.module.ts  → Configuración de rutas
 │   └── app.module.ts          → Configuración principal
 ├── assets/       → Imágenes
 ├── environments/ → Configuración de entornos
 └── styles.css    → Estilos globales

⚙️ Cómo levantar el proyecto

1️⃣Clonar el repositorio

cd proyecto-estudiantes


2️⃣Instalar dependencias

npm install


3️⃣Verificar versiones
Este proyecto corre con:

Node.js >= 20

Angular CLI >= 14

node -v
ng version


4️⃣Levantar el servidor en local

ng serve -o


Esto abre la app en: http://localhost:4200

🌐 API del backend

La aplicación consume un backend (Spring Boot) con estos endpoints:

POST /api/student → Crear estudiante
GET /api/student → Listar estudiantes
GET /api/student/{id} → Obtener un estudiante
PUT /api/student → Actualizar estudiante
DELETE /api/student/{id} → Eliminar estudiante

Ejemplo de estudiante en JSON:

{
  "id": 1,
  "firstName": "Carlos",
  "lastName": "Hernández",
  "documentType": "CC",
  "document": "123456789",
  "age": 25,
  "email": "carlos@example.com",
  "state": "Activo",
  "createdAt": "2025-09-30T14:00:00",
  "updatedAt": "2025-09-30T14:00:00"
}

 Qué vas a encontrar en la interfaz

Formulario de estudiante → para crear nuevos registros

Lista de estudiantes → tabla con todos los registros y acciones de editar/eliminar

Diseño responsivo con Bootstrap, más algunos estilos propios

 Comandos útiles

ng serve -o → arranca el servidor de desarrollo

ng build → genera la build para producción

ng test → ejecuta las pruebas unitarias

 Autor

Proyecto desarrollado por Jhohan Palacios
Prueba técnica usando Angular + Spring Boot
