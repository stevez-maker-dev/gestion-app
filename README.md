# Gestión App — Trabajo Final Integrador Angular

## Descripción
Aplicación de gestión de productos y usuarios desarrollada con Angular.
Integra routing con lazy loading, rutas dinámicas, módulos de funcionalidad,
servicios con inyección de dependencias, pipes estándar y personalizados,
y almacenamiento en localStorage.

---

## Tecnologías utilizadas
- Angular 19
- TypeScript
- CSS

---

## Funcionalidades

### Módulo Inicio
- Mensaje de bienvenida con accesos directos a cada sección

### Módulo Productos
- Lista de productos con precio, descripción y descuento
- Pipe personalizado `descuento` para calcular precio final
- Pipe estándar `currency` para formatear precios
- Ver detalle de cada producto en ruta dinámica `/productos/:id`
- Eliminar productos de la lista

### Módulo Usuarios
- Lista de usuarios con nombre, email, rol y estado
- Pipe personalizado `estadoUsuario` para mostrar Activo/Inactivo
- Ver detalle de cada usuario en ruta dinámica `/usuarios/:id`
- Eliminar usuarios de la lista
- Cambiar estado activo/inactivo de cada usuario

### Extras
- Sidebar permanente para navegación entre secciones
- localStorage guarda la última sección visitada y redirige al recargar
- Servicios centralizados para manejo de datos

---

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio
git clone https://github.com/stevez-maker-dev/gestion-app.git

### 2. Instalar dependencias
npm install

### 3. Ejecutar el proyecto
ng serve

### 4. Abrir en el navegador
http://localhost:4200

---

## Despliegue
- Plataforma: Vercel
- URL: [Deploy demo](https://gestion-app-delta.vercel.app/)

---

## Créditos
- Autor: Sebastian Tevez
- Curso: Desarrollo en Angular — Centro de e-Learning UTN BA
- Trabajo Final Integrador

---

## Bibliografía
- Freeman, A. Pro Angular 9. 6ª ed. Apress; 2020.
- Angular. Routing. https://angular.dev/guide/routing/common-router-tasks
- Angular. NgModules. https://angular.dev/guide/ngmodules/overview
- Angular. Dependency injection. https://angular.dev/guide/di/dependency-injection
- Angular. Pipes. https://angular.dev/guide/templates/pipes
- MDN Web Docs. localStorage. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage