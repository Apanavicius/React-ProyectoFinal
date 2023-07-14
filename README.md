# Proyecto Ecommerce

Versión 1.0a.
Release Note: (07|14|2023)

Se desarolló un ecommerce simulando un sitio de venta de libros.

### **FEATURES**

- Visualización del stock de libros disponibles.
- Visualización de libros por categoría seleccionada.
- Visualización del detalle de un libro seleccionado.
- Selector de cantidades para comprar.
- Visualización del carrito de compras, con el detalle de los libros aprovisionados, cantidades, subtotales por cada libro y monto total de compra Final.
- Eliminación de items dentro del carrito, en caso de no querer comprar algún producto específico.
- Vaciado del carrito, para una eliminación de todo su contenido.
- Simulación de proceso de compra, con formulario identificatorio del comprador, para completar, con el fin de efectuar una entrega de remito por compra efectuada.

---

### **IMPLEMENTACIÓN**

El diseño de la página es una [SPA](https://es.wikipedia.org/wiki/Single-page_application "Single Page Application")
utilizando React Js como tecnología principal para el desarrollo.

También se integró HTML5 para la estructura y CCS3 para el diseño.

Además se utilizaron las siguientes tecnologías complementarias:

    NPM: Para administrar los diferentes packetes complementarios que se fueron agregando al proyecto.
    VITE: Generación del proyecto y estructura de carpetas.
    REACT ROUTER DOM: Administración de las rutas internas de cada página.
    MUI: Badges, botones, iconos, item cards.
    CLOUDINARY: Repositorio para almacenar las imagenes de las portadas de los libros.
    FORMIK + YUP: Formularios y validación de los campos.
    SWEETALERT2: Notificaciones.
    FIREBASE | Cloud FIRESTORE: Para generar un endpoint donde se almacenan las siguientes colecciones: Stock de productos y registro de órdenes de compra

> _NPM_ : <https://docs.npmjs.com/about-npm>

> _REACT ROUTER DOM_ : <https://reactrouter.com/en/main/start/overview>

> _MUI_ : <https://mui.com/material-ui/getting-started/>

> _CLOUDINARY_ : <https://cloudinary.com/>

> _FORMIK_ : <https://formik.org/docs/overview>

> _YUP_ : <https://www.npmjs.com/package/yup>

> _SWEET ALERT 2_ : <https://sweetalert2.github.io/>

> _FIREBASE_ : <https://firebase.google.com/?hl=es-419>

---

### **INSTALACIONES NECESARIAS**

NPM

```
npm install npm@latest -g
```

MUI

```
npm install @mui/material @mui/styled-engine-sc styled-components
```

REACT ROUTER DOM

```
npm install react-router-dom
```

YUP

```
npm i yup
```

FORMIK

```
 npm install formik --save
```

---

### **BEGINNING**

Una vez clonado el repositorio, dentro de una terminal ejecutar el siguiente comando:

```
npm run dev
```

---

### **DEPLOYMENT**

Se utilizó Vercel para realizar el deployment de la aplicación.

> _VERCEL_ : <https://vercel.com/>

Proyecto:

[TiendaLibro](https://es.wikipedia.org/wiki/Single-page_application "Single Page Application")

---

### **PENDIENTE DE MEJORAS**

- No está registrando (key, Value) el Local Storage. Por lo tanto, cada vez que se cierra la aplicación, no es posible recuperar información del carrito de compra, si es que había algo existente dentro de él
- No se aparece mensaje emergente al efectúa la validación del número telefónico. La validación funciona, pero no aparece mensaje por pantalla.
- Estilizar el proyecto mediante vanilla css, boostrap, sass, etc.

---

FIN DEL DOCUMENTO.
