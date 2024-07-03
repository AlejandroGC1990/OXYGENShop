# OXYGENShop - https://alejandrogc1990.github.io/OXYGENShop/

Proyecto de Maquetación y JavaScript.
Este repositorio contiene dos proyectos continuados, uno enfocado en la maquetación de una página web y otro en la adición de funcionalidades con JavaScript.

## Proyecto 1. Desarrollo de la vista de un app móvil y web en html y CSS. 

### Descripción

Este proyecto consiste en la construcción de una página web basada en un diseño preestablecido en Figma, utilizando HTML, SASS y BEM. La maquetación debe comenzar con la versión móvil y luego adaptarse para pantallas más grandes mediante media queries.


## Proyecto 2: Funcionalidades con JavaScript

Este proyecto añade varias funcionalidades a la página web maquetada en el Proyecto 1, utilizando JavaScript.

### Funcionalidades:
- Menú desplegable en la vista móvil al hacer clic en el botón hamburguesa.
- Barra de progreso (percentage scroller).
- Botón "Return to the top" con animación suave.
- Validación de formulario:
   + Nombre: 2 a 100 letras.
   + Correo: Dirección válida (regex).
   + Checkbox requerido.
- Envío de datos del formulario a una API de testing (JSONPlaceholder).
- Selector de moneda (EUR, USD, GBP) con actualización de precios usando Currency API.
- Popup/modal "Subscribe to our newsletter":
   + Aparece después de 5 segundos o al bajar 25% de la página.
   + Validación de correo y envío a la misma API que el formulario de contacto.
   + Métodos de cierre: botón X, clic fuera del modal, tecla ESC.
   + No reaparece después de ser cerrado (usar localStorage/sessionStorage).
- Slider con imágenes:
   + Botones prev/next, puntos para las imágenes individuales, avance automático.
   + HTML: <div id="slider"> que contiene varios <img />.
   + JS: Clase Slider cuyo constructor acepta el ID del elemento principal (slider).

### Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de enviar un pull request.
