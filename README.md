# Nodepop-Frontend

## Advertencia: Deshabilitar tu bloqueador de anuncios o es posible que se bloquee la API del backend(sparrest) al tener esta extension: /api/ads

## Este frontend deberá contar con las siguientes páginas y funcionalidades:

**Página de listado de anuncios:**

- En la página principal encontraremos un listado de anuncios. Cada anuncio presentará una foto (si tiene), nombre, precio y si es compra o venta.
  - Los anuncios deberán cargarse desde el backend utilizando [sparrest](https://github.com/kasappeal/sparrest.js) el cual esta basado en json-server.
  * En este listado de anuncios se deberán gestionar todos los estados de interfaz
    correctamente: vacío (no hay anuncios), error (cuando se produce un error al cargar
    los anuncios), carga (mientras se cargan los anuncios desde el backend) y éxito
    (cuando se han recuperado los anuncios y están listos para ser mostrados).

* Al pulsar sobre un anuncio, se deberá enviar al usuario a la página de detalle de un anuncio.
* Si el usuario está autenticado, se deberá permitir al usuario crear un anuncio que, al pulsarlo, deberá llevar a la página para crear un anuncio.
* Se permite realizar una busqueda de anuncios de manera exacta al nombre y siendo sensible a mayusculas y minusculas. Es decir si buscas "Computer" te aparecerán todos los resultados con nombre "Computer"
* Se permite desloguearte.

**Página de detalle de un anuncio:**

- El detalle de un anuncio deberá mostrar foto (si tiene), nombre, precio y si es compra o venta.
- En este detalle de anuncio se deberá gestionar todos los estados de interfaz
  correctamente: vacío (no existe el anuncio), error (cuando se produce un error al cargar la información del anuncio), carga (mientras se cargan la información del anuncio desde el backend) y éxito (cuando se han recuperado la información del anuncio y está listo para ser mostrado).
- Si el usuario está autenticado y el anuncio le pertenece, deberá además mostrar un botón que permita eliminar el anuncio (aunque antes de eliminarlo, deberá confirmar con el usuario si realmente quiere eliminar o no el anuncio).
- Se permite modificar un anuncio.
- Se permite desloguearte.
- Se permite redireccionarte a la pagina principal mediante el icono principal.

**Página para crear un anuncio:**

- En la página para crear un anuncio se deberá mostrar al usuario un formulario con los
  siguientes campos:
  - Foto (opcional): permitirá subir una foto del anuncio
  - Nombre (obligatorio): nombre del anuncio
  - Precio (obligatorio): precio del anuncio
  - Compra/venta (obligatorio): indica si el anuncio se trata de una compra o de venta
- Cuando el usuario envíe el formulario, deberá enviar al backend una petición para guardar el anuncio.
- Se deberá gestionar todos los estados de interfaz correctamente: error (cuando se produce un error al guardar la información del anuncio), carga (mientras se guarda la información del anuncio en el backend) y éxito (cuando se han guardado correctamente la información del anuncio).
- Se permite redireccionarte a la pagina principal mediante el icono principal.
- Se permite desloguearte.

**Página para modificar un anuncio:**

- Se muestra una interfaz parecida a la hora de crear anuncio pero con los valores ya establecidos. Si no subes ninguna imagen se mantendrá, pero si subes una imagen se el anuncio usará esta nueva imagen.
- Se permite redireccionarte a la pagina principal mediante el icono principal.
- Se permite desloguearte.

**Página de login:**

- La página de login deberá mostrar un formulario solicitando el nombre de usuario y
  contraseña.
- Cuando el usuario envíe el formulario, deberá autenticar al usuario contra el backend para obtener un token JWT que será utilizado en las siguientes comunicaciones con el backend para autenticar al usuario.
- Se deberá gestionar todos los estados de interfaz correctamente: carga, error y éxito.
- Se permite redireccionarte a la pagina principal mediante el icono principal.

**Página de registro:**

- Muy parecida a la de login. Deberá mostrar un formulario solicitando el nombre de usuario y contraseña.
- Cuando el usuario envíe el formulario, deberá registrar al usuario en el backend.
- Se deberá gestionar todos los estados de interfaz correctamente: carga, error y éxito.
- Se permite redireccionarte a la pagina principal mediante el icono principal.
