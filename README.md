# Manual de Usuario Completo: Gestor de Trabajos Agro Aereo Roberts V1.0 🧑‍🌾✈️

¡Bienvenido al Gestor de Trabajos Agro Aereo Roberts, tu nuevo compañero digital para la gestión de trabajos agrícolas aéreos y terrestres! Esta guía te ayudará a sacar el máximo provecho de la aplicación y a simplificar tus tareas diarias.

**Versión del Manual:** 1.0 (para Gestor de Trabajos Agro Aereo Roberts)

## Índice

1.  [¿Qué es el Gestor de Trabajos Agro Aereo Roberts?](#1-qué-es-el-gestor-de-trabajos-agro-aereo-roberts)
2.  [Primeros Pasos](#2-primeros-pasos)
    *   [Interfaz Principal](#interfaz-principal)
    *   [Base de Datos de Prueba](#base-de-datos-de-prueba)
3.  [Interactuando con el Gestor (Panel de Chat)](#3-interactuando-con-el-gestor-panel-de-chat)
    *   [Comando "Ayuda"](#comando-ayuda)
    *   [Crear Registros](#crear-registros)
    *   [Listar Registros](#listar-registros)
    *   [Actualizar Registros](#actualizar-registros)
    *   [Eliminar Registros](#eliminar-registros)
    *   [Consultas Generales](#consultas-generales)
    *   [Modo Voz Interactiva](#modo-voz-interactiva)
    *   [Repetir Comando](#repetir-comando)
    *   [Visualización de Resultados en el Chat](#visualización-de-resultados-en-el-chat)
4.  [La Barra Superior: Centro de Control](#4-la-barra-superior-centro-de-control)
    *   [Indicador de Solicitudes Offline](#indicador-de-solicitudes-offline)
    *   [Menú `BD` (Base de Datos JSON)](#menú-bd-base-de-datos-json)
    *   [Menú `Tablas` (Archivos CSV)](#menú-tablas-archivos-csv)
    *   [Menú `Historial` (Chat)](#menú-historial-chat)
    *   [Botones Directos (Modo Voz, Tema)](#botones-directos-modo-voz-tema)
5.  [Panel de Datos: Tu Base de Datos a la Vista](#5-panel-de-datos-tu-base-de-datos-a-la-vista)
6.  [Vista de Datos a Pantalla Completa](#6-vista-de-datos-a-pantalla-completa)
    *   [Buscar y Filtrar](#buscar-y-filtrar)
    *   [Ordenar Columnas](#ordenar-columnas)
    *   [Zoom](#zoom)
    *   [Exportar (CSV, PDF) e Imprimir](#exportar-csv-pdf-e-imprimir)
7.  [Manejando Tus Datos: Formatos de Archivo](#7-manejando-tus-datos-formatos-de-archivo)
    *   [Archivos JSON para Base de Datos Completa](#archivos-json-para-base-de-datos-completa)
    *   [Archivos CSV para Tablas Individuales](#archivos-csv-para-tablas-individuales)
8.  [Funcionalidad Offline](#8-funcionalidad-offline)
9.  [PWA: Tu App en el Bolsillo (Android)](#9-pwa-tu-app-en-el-bolsillo-android)
10. [Configuración de API Key (Administradores/Desarrolladores)](#10-configuración-de-api-key-administradoresdesarrolladores)
11. [Consejos y Buenas Prácticas](#11-consejos-y-buenas-prácticas)
12. [Solución de Problemas](#12-solución-de-problemas)
13. [Contacto y Soporte](#13-contacto-y-soporte)

---

## 1. ¿Qué es el Gestor de Trabajos Agro Aereo Roberts?

El Gestor de Trabajos Agro Aereo Roberts es una aplicación inteligente diseñada para actuar como tu asistente virtual personal para la empresa de servicios Agro Aereo Roberts. Se especializa en la gestión de:

*   **Fumigación Aérea**
*   **Fumigación Terrestre**
*   **Siembra Aérea** (y otras tareas agrícolas relevantes)

Te ayuda a organizar de manera eficiente y centralizada:
*   **Clientes** y **Usuarios** de la aplicación.
*   **Contratistas** (internos o externos) y **Personal** (Pilotos, Operarios Terrestres, Ingenieros).
*   **Maquinaria Agrícola** (Avión Fumigador/Sembrador, Fumigadora Terrestre Autopropulsada, y otros).
*   Ubicaciones de trabajo: **Campos**, **Lotes** y **Parcelas**.
*   Planificación a largo plazo: **Campañas Agrícolas**.
*   Definiciones estándar: **Catálogo de Tipos de Tareas** (ej. "Fumigación Aérea") y **Catálogo de Productos e Insumos** (Herbicidas, Insecticidas, Semillas, etc.).
*   El corazón de la operación: **Trabajos Ejecutados (Tareas)**, con todos sus detalles, incluyendo maquinaria asignada, personal involucrado, e insumos utilizados.

**El Objetivo Principal:** Simplificar drásticamente la entrada y consulta de datos, permitiéndote gestionar los trabajos de la empresa usando lenguaje natural (texto o voz), como si hablaras con un colega experto.

**Ventajas Clave:**
*   ✅ **Fácil de Usar:** Conversa con la IA para realizar acciones. No más formularios complejos para entradas rápidas.
*   🗣️ **Comprensión Avanzada del Lenguaje:** Entiende lenguaje coloquial, modismos del agro (especialmente de Argentina), e incluso se esfuerza con audio que pueda tener ruido de fondo.
*   📊 **Información Centralizada y Organizada:** Todos tus datos en un solo lugar, visibles y accesibles.
*   ⏱️ **Ahorro de Tiempo:** Reduce la carga manual de ingreso de datos.
*   🗂️ **Mejor Organización:** Facilita el seguimiento de tareas, recursos y clientes.
*   🌐 **Funcionalidad Offline:** ¡No te detengas por falta de internet! La aplicación encola tus comandos y los procesa automáticamente cuando recuperas la conexión.
*   📄 **Exportación y Reportes Mejorados:**
    *   Visualiza datos en tablas dentro del chat.
    *   Abre estas tablas en una **vista de pantalla completa** para mejor análisis.
    *   En la vista de pantalla completa, puedes **buscar**, **ordenar por columnas**, y ajustar el **zoom**.
    *   Descarga los datos filtrados y ordenados como **CSV** o **PDF**.
    *   Imprime las tablas directamente.
*   📱 **Accesibilidad Multiplataforma (PWA):** Instala la aplicación en tu dispositivo Android para un acceso rápido como si fuera una app nativa.
*   🎤 **Modo Voz Interactiva:** Habla tus comandos y escucha las respuestas de la IA. Ideal para manos libres.
*   🔄 **Control Total de Tus Datos:** Importa y exporta tu base de datos completa (JSON) o tablas individuales (CSV).
*   🚀 **Base de Datos de Prueba:** Comienza a explorar las funcionalidades de inmediato con datos de ejemplo que se cargan automáticamente.

---

## 2. Primeros Pasos

### Interfaz Principal
Al abrir la aplicación por primera vez, verás una **Pantalla de Bienvenida** que te introduce a las capacidades básicas. Una vez descartada, la interfaz principal se divide en tres secciones clave:

1.  **Panel de Chat (Izquierda o Superior en Móviles):**
    *   Aquí es donde te comunicas con el asistente de IA.
    *   Puedes escribir tus comandos o usar el micrófono para dictarlos.
    *   Las respuestas de la IA, incluyendo tablas de datos, aparecerán aquí.
    *   Puedes encontrar un pie de página con información de contacto y un enlace al manual de uso.

2.  **Panel de Datos ("Lista de Trabajos de Agro Aereo Roberts", Derecha o Inferior en Móviles):**
    *   Muestra una vista general de las entidades principales de tu base de datos.
    *   Puedes expandir cada tipo de entidad (Clientes, Campos, Tareas, etc.) para ver los registros.
    *   Si la IA genera resultados de una consulta, estos también se pueden reflejar aquí o mostrarse como tablas dedicadas.

3.  **Barra Superior (Arriba):**
    *   Contiene botones y menús desplegables para acciones globales:
        *   Gestión de la base de datos (cargar/guardar JSON, borrar).
        *   Gestión de tablas (cargar/guardar CSVs).
        *   Gestión del historial del chat (guardar/cargar).
        *   Activar/desactivar el modo de voz interactiva.
        *   Cambiar el tema visual (claro/oscuro).
        *   Un indicador de solicitudes offline pendientes.

### Base de Datos de Prueba
Para que puedas empezar a usar la aplicación de inmediato y ver cómo funciona, se carga automáticamente un archivo `BD_testing.json` si no se encuentra una base de datos local o si esta está vacía o corrupta. Esto te permite probar comandos de listado, creación (aunque se añadirán a la BD de prueba), etc., sin tener que ingresar datos manualmente al principio.

---

## 3. Interactuando con el Gestor (Panel de Chat)

La forma principal de usar la aplicación es conversando con el asistente de IA en el panel de chat.

### Comando "Ayuda"
Si en algún momento no estás seguro de qué puedes hacer, simplemente escribe o di:
`Ayuda`

La IA te responderá con un resumen de los comandos principales, ejemplos, y una explicación de las funcionalidades de gestión de datos disponibles en la barra superior. Este mensaje de ayuda está formateado en Markdown para facilitar la lectura.

### Crear Registros
Puedes pedirle a la IA que cree nuevos registros para cualquiera de las entidades. Intenta ser lo más claro posible.
*   **Clientes:** `crear cliente "La Esperanza SRL" telefono 234567890 email info@esperanza.com`
*   **Campos:** `registrar campo "El Amanecer" ubicación ruta 3 km 50 para el cliente "La Esperanza SRL" con 120 hectareas`
*   **Maquinaria:** `agregar avion fumigador "LV-CKM" modelo PA-25 Pawnee para "Agro Aereo Roberts"`
*   **Personal:** `nuevo piloto "Carlos Rodriguez" disponibilidad disponible para "Agro Aereo Roberts"`
*   **Tareas:** `programar fumigacion aerea para el campo "El Amanecer" el 15 de agosto a las 7 AM con el avion "LV-CKM" y el piloto "Carlos Rodriguez"`
    *   **Manejo de Entidades Faltantes:** Si al crear una tarea mencionas una entidad (ej. un campo o una máquina) que no existe, la IA te preguntará si deseas crearla primero. Este proceso es secuencial, manejando una entidad faltante a la vez. Si rechazas crear la entidad faltante, la IA te informará que no puede continuar con la tarea original y esperará nuevas instrucciones.
    *   **Confirmación y Validación:** Antes de crear tareas complejas, la IA puede pedirte confirmación (acción `CONFIRM_CREATION`). También realiza validaciones de sentido común (ej. disponibilidad de maquinaria/personal, fechas).

### Listar Registros
Pide listas de tus datos.
*   `listar todos los clientes`
*   `mostrar maquinaria operativa`
*   `qué tareas de fumigacion terrestre tengo para esta semana?`
*   `ver personal disponible`
*   `muestrame los campos del cliente "La Esperanza SRL"`

### Actualizar Registros
Modifica la información existente. Necesitarás saber el ID del registro o ser muy específico con el nombre.
*   `actualizar el estado del avion "LV-CKM" a "en mantenimiento"`
*   `cambiar el telefono del cliente con ID client_test_01 a 1122334455`

### Eliminar Registros
Borra registros. Sé cuidadoso con esta acción.
*   `eliminar el campo "Campo Viejo"` (la IA podría pedirte el ID si hay ambigüedad)
*   `borrar la tarea con ID task_entry_test_001`

### Consultas Generales
Puedes hacer preguntas sobre tus datos o incluso pedir resúmenes.
*   `cuantos campos tiene "La Esperanza SRL"?`
*   `dame un resumen de las tareas de fumigacion aerea del ultimo mes`

### Modo Voz Interactiva
*   **Activación:** Haz clic en el botón <VoiceOnIcon /> / <VoiceOffIcon /> en la barra superior.
*   **Uso:**
    *   Cuando está activo, la IA intentará leer sus respuestas en voz alta.
    *   Después de que la IA hable (especialmente si hace una pregunta o presenta opciones), el micrófono puede activarse automáticamente para que respondas.
    *   También puedes iniciar la grabación manualmente con el botón de micrófono en la barra de chat.
*   **Detección de Silencio:** La grabación de voz se detendrá automáticamente después de unos segundos de silencio, procesando lo que hayas dicho.
*   **Interrupción:** Si comienzas a grabar mientras la IA está hablando, la reproducción de voz de la IA se detendrá.

### Repetir Comando
Junto a cada mensaje que hayas enviado, al pasar el mouse (o con un primer toque en dispositivos móviles), aparecerá un pequeño icono de "repetir" (🔄). Haz clic en él para reenviar ese mismo comando de texto a la IA. Útil para reintentar un comando o para realizar una acción similar.

### Visualización de Resultados en el Chat
Cuando la IA lista entidades (ej. `LIST_ENTITIES`, `GROUPED_QUERY`), los resultados a menudo se muestran como:
*   **Un mensaje de texto resumen.**
*   **Una o más "tarjetas" o "burbujas de grupo"** debajo del mensaje de texto. Cada tarjeta representa un grupo de datos (ej. "Listado de Clientes").
*   Dentro de cada tarjeta de grupo:
    *   **Título del Grupo** y cantidad de elementos.
    *   **Botones de Acción:**
        *   <CsvDownloadIcon /> **Descargar CSV:** Descarga los datos de ESE grupo como un archivo CSV.
        *   <ExpandIcon /> **Ver en Pantalla Completa:** Abre los datos de ESE grupo en la [Vista de Datos a Pantalla Completa](#6-vista-de-datos-a-pantalla-completa).
        *   <PrintIcon /> **Imprimir Lista:** Imprime los datos de ESE grupo.
    *   **Vista Previa de Items:** Se muestran los primeros 5 items del grupo con detalles clave. Si hay más, se indica.
*   **Respuesta Completa del LLM (oculta):** Puedes expandir una sección de "detalles" para ver la respuesta JSON cruda que la IA generó, útil para depuración o curiosidad técnica.
*   **Renderizado de Markdown para "Ayuda":** La respuesta al comando "Ayuda" utiliza Markdown para una presentación más clara y estructurada directamente en el chat.

---

## 4. La Barra Superior: Centro de Control

La barra superior contiene herramientas esenciales agrupadas en menús desplegables y botones de acceso rápido.

### Indicador de Solicitudes Offline
Si tienes comandos que se enviaron mientras no tenías conexión, aparecerá un indicador <OfflineQueueIcon /> con un número. Este número representa las solicitudes pendientes de procesar. Desaparecerá una vez que todas las solicitudes encoladas se hayan procesado con éxito.

### Menú `BD` (Base de Datos JSON)
Este menú se activa con un botón que muestra <DatabaseIcon /> y la etiqueta "BD".
*   **`Cargar BD (JSON)`**: <UploadIcon /> Te permite seleccionar un archivo `.json` de tu computadora que contenga una base de datos completa guardada previamente. Esto reemplazará la base de datos actual en la aplicación.
*   **`Guardar BD (JSON)`**: <DownloadIcon /> Exporta TODA tu base de datos actual (clientes, campos, tareas, etc.) a un único archivo `.json`. **Este es tu respaldo principal.** Guárdalo en un lugar seguro.
*   **`Borrar BD`**: <DeleteDatabaseIcon /> Elimina **COMPLETAMENTE** toda la base de datos almacenada localmente en tu navegador. Aparecerá un modal de confirmación, ya que esta acción es irreversible. Úsalo con extrema precaución.

### Menú `Tablas` (Archivos CSV)
Este menú se activa con un botón que muestra <TableCellsIcon /> y la etiqueta "Tablas".
*   **`Cargar Múltiples (CSV)`**: <MultiFileIcon /> Abre un diálogo para seleccionar VARIOS archivos `.csv` a la vez. Luego, un modal te permitirá asignar cada archivo al tipo de entidad correcto (ej. `clientes.csv` a "Clientes", `campos.csv` a "Campos") antes de procesarlos.
*   **`Guardar Todas (CSV)`**: <ExportPackageIcon /> Exporta cada tabla de tu base de datos (Clientes, Campos, Tareas, etc., que tengan datos) como un archivo `.csv` individual, todos en una sola operación (se descargarán múltiples archivos).
*   **`Cargar Individual (CSV)`**: <FileCsvIcon /> Al hacer clic, primero se despliega un submenú donde debes seleccionar el **tipo de entidad** para el cual vas a cargar el CSV (ej. "Clientes", "Campos"). Una vez seleccionado el tipo, se abrirá el diálogo para que elijas el archivo `.csv` correspondiente.

### Menú `Historial` (Chat)
Este menú se activa con un botón que muestra <ChatHistoryIcon /> y la etiqueta "Historial".
*   **`Guardar Historial`**: <SaveHistoryIcon /> Guarda la conversación actual del chat (todos los mensajes visibles) en un archivo `.json`. Útil si quieres revisar la conversación más tarde o si tienes problemas de conexión y no quieres perder el contexto actual.
*   **`Cargar Historial`**: <LoadHistoryIcon /> Carga una conversación previamente guardada desde un archivo `.json`. Esto reemplazará los mensajes actuales en el chat.

### Botones Directos (Modo Voz, Tema)
*   **Botón Modo Voz** (<VoiceOnIcon /> / <VoiceOffIcon />): Activa o desactiva el modo de voz interactiva. Cambia de color para indicar el estado (rojo para activo, gris para inactivo).
*   **Botón Tema** (<SunIcon /> / <MoonIcon />): Cambia entre el tema visual claro y oscuro de la aplicación. Tu preferencia se guarda.

---

## 5. Panel de Datos: Tu Base de Datos a la Vista

Ubicado a la derecha del chat (o debajo en pantallas pequeñas), este panel te da una visión general de tu base de datos.
*   Muestra una lista de todos los tipos de entidades (Clientes, Campos, Tareas, etc.).
*   Junto a cada tipo de entidad, verás la cantidad de registros existentes.
*   Puedes hacer clic en cualquier tipo de entidad para expandir/contraer y ver los registros individuales.
*   Cada registro individual se puede expandir para ver todos sus detalles.
*   Si la IA devuelve resultados de una consulta (por ejemplo, después de un comando "listar..."), esos resultados se mostrarán principalmente en el panel de chat como tarjetas interactivas. El Panel de Datos siempre refleja el estado completo de la base de datos.

---

## 6. Vista de Datos a Pantalla Completa

Cuando la IA muestra resultados en una tarjeta de grupo en el chat, o cuando exploras datos en el Panel de Datos y hay una opción para "ver más", puedes acceder a una vista de pantalla completa para esa lista de datos.

*   **Activación:** Haz clic en el icono <ExpandIcon /> en una tarjeta de resultados del chat, o a través de opciones similares en el Panel de Datos.
*   **Contenido:** Muestra los datos en una tabla grande y clara.
*   **Barra de Herramientas Superior (dentro del modal):**
    *   **Título y Conteo:** Nombre de la lista y número de elementos.
    *   **Buscar:** <SearchIcon /> Un campo de texto para filtrar rápidamente los registros en la tabla por cualquier valor.
    *   **Zoom:** <ZoomInIcon /> <ZoomOutIcon /> Botones para aumentar o disminuir el tamaño del texto dentro de la tabla para mejor legibilidad.
    *   **Imprimir:** <PrintIcon /> Imprime la tabla actual (filtrada y ordenada).
    *   **Descargar CSV:** <CsvDownloadIcon /> Descarga los datos actualmente visibles (filtrados y ordenados) como un archivo CSV.
    *   **Descargar PDF:** <PdfFileIcon /> Descarga los datos actualmente visibles (filtrados y ordenados) como un archivo PDF.
    *   **Cerrar:** <MinimizeIcon /> Botón para cerrar la vista de pantalla completa y volver a la interfaz principal.
*   **Tabla de Datos:**
    *   **Columnas:** Las columnas se seleccionan y ordenan automáticamente para mostrar la información más relevante primero.
    *   **Scroll:** La tabla tiene scroll horizontal y vertical si los datos exceden el espacio visible. El scroll horizontal SIEMPRE está accesible al pie de la tabla, sin importar el scroll vertical.
    *   **Ordenar Columnas:** Haz clic en el encabezado de cualquier columna para ordenar los datos por esa columna. Un segundo clic en el mismo encabezado invertirá el orden (ascendente ▼ / descendente ▲). Un indicador visual muestra la columna y dirección de ordenación activa.

---

## 7. Manejando Tus Datos: Formatos de Archivo

### Archivos JSON para Base de Datos Completa
*   **Guardar BD (JSON):** Crea un archivo `.json` que es una "fotografía" completa de toda tu base de datos. Es la mejor forma de hacer un respaldo total.
*   **Cargar BD (JSON):** Restaura tu base de datos desde un archivo `.json` previamente guardado. **Advertencia:** Esto sobrescribe cualquier dato que tengas actualmente en la aplicación.

### Archivos CSV para Tablas Individuales
El formato CSV (Valores Separados por Comas) es útil para ver o editar tus datos en programas de hojas de cálculo como Excel, Google Sheets, o LibreOffice Calc.

*   **Encabezados:** Cuando importas un CSV, la aplicación espera que la primera fila contenga los **encabezados de columna**. Estos deben coincidir (o ser muy similares) a los nombres de campo internos de la aplicación (generalmente en `snake_case`, ej. `task_name`, `client_id`). Consulta `constants.ts` en el código fuente para ver los `CSV_HEADERS` exactos esperados para cada entidad si necesitas precisión.
*   **Importación (`Cargar Individual (CSV)` o `Cargar Múltiples (CSV)`):**
    *   Al cargar, los datos del CSV reemplazarán los datos existentes para ESE TIPO DE ENTIDAD si los IDs coinciden, o agregarán nuevos registros.
    *   La aplicación intentará convertir los datos del CSV a los tipos correctos (números, booleanos).
    *   Se generarán IDs automáticamente si no se proporcionan en el CSV para nuevos registros.
*   **Exportación (`Guardar Todas (CSV)` o desde vistas de tabla):**
    *   Crea archivos `.csv` con encabezados en la primera fila.
    *   Los datos se exportan tal como están en la base de datos.

---

## 8. Funcionalidad Offline

El Gestor de Trabajos Agro Aereo Roberts está diseñado para seguir funcionando incluso si pierdes tu conexión a internet.
*   **Detección Automática:** La aplicación detecta cuándo estás online u offline.
*   **Encolamiento de Comandos:** Si envías un comando (de texto o voz) mientras estás offline, o si ocurre un error de red o un error de API Key/Cuota con el servicio de IA, la aplicación guardará tu solicitud en una cola local.
    *   Se te notificará en el chat que el comando ha sido encolado.
    *   El icono <OfflineQueueIcon /> en la barra superior mostrará el número de solicitudes pendientes.
*   **Procesamiento Automático:** Cuando la conexión a internet se restablezca (y si el servicio de IA está disponible y la API Key es válida), la aplicación intentará procesar automáticamente los comandos encolados, uno por uno.
    *   Se mostrarán mensajes en el chat sobre el estado de estos reintentos.
*   **Persistencia:** La cola de solicitudes offline se guarda en el almacenamiento local de tu navegador, por lo que persistirá incluso si cierras la pestaña o el navegador (dentro de los límites de almacenamiento del navegador).

---

## 9. PWA: Tu App en el Bolsillo (Android)

El Gestor de Trabajos Agro Aereo Roberts es una Progressive Web App (PWA).
*   **Instalación:** En dispositivos Android (y algunos navegadores de escritorio), verás una opción para "Añadir a la pantalla de inicio" o "Instalar aplicación". Esto crea un icono de acceso directo, permitiéndote abrirla como una app nativa.
*   **Experiencia Similar a Nativa:** Se ejecuta en su propia ventana, puede funcionar offline (gracias al Service Worker y la cola de solicitudes), y está optimizada para móviles.
*   **Actualizaciones Automáticas:** El Service Worker ayuda a mantener la aplicación actualizada en segundo plano.

---

## 10. Configuración de API Key (Administradores/Desarrolladores)

Para que la funcionalidad de Inteligencia Artificial (IA) con Google Gemini funcione, la aplicación necesita una API Key válida.
*   **Obtención:** Debes obtener una API Key desde Google AI Studio (anteriormente MakerSuite).
*   **Configuración:**
    *   La API Key **DEBE** configurarse como una variable de entorno antes de construir o ejecutar la aplicación.
    *   Si usas Vite (como en el `vite.config.ts` proporcionado), crea un archivo `.env` en la raíz del proyecto con:
        `VITE_API_KEY=TU_CLAVE_API_AQUI`
    *   Si despliegas en una plataforma diferente, configura la variable de entorno `API_KEY` allí.
*   **Seguridad:** **NUNCA** incluyas la API Key directamente en el código fuente que se sube a repositorios públicos. El uso de variables de entorno es crucial.
*   **Error de API Key:** Si la API Key falta, es incorrecta, o es un placeholder, la aplicación mostrará un mensaje de error en el chat, y la IA no funcionará. Los comandos que requieran la IA se encolarán si es posible.

---

## 11. Consejos y Buenas Prácticas

*   **Sé Específico:** Cuanta más información proporciones en tus comandos, mejor te entenderá la IA. Para tareas, incluye tipo (fumigación aérea/terrestre, siembra aérea), campo/lote, fechas, y si es posible, maquinaria o personal.
*   **Usa los IDs:** Si conoces el ID de un cliente, campo, tarea, etc., usarlo en tus comandos de actualización o eliminación es más preciso.
*   **Revisa los Resultados:** Después de crear o actualizar datos, echa un vistazo al Panel de Datos o pide a la IA que liste la información para confirmar que todo está correcto.
*   **Guarda tu BD Regularmente:** Usa "Guardar BD (JSON)" para hacer respaldos.
*   **Modo Voz en Ambientes Ruidosos:** La IA hace su mejor esfuerzo, pero un ambiente más silencioso mejora el reconocimiento de voz.
*   **Explora con "Ayuda":** Es tu mejor amigo para descubrir qué puedes hacer.

---

## 12. Solución de Problemas

*   **La IA no me entiende bien:**
    *   Intenta reformular tu comando. Sé más simple y directo.
    *   Asegúrate de que tu micrófono funciona bien si usas voz.
    *   Verifica que no haya mucho ruido de fondo.
*   **Problemas al Cargar/Guardar Archivos:**
    *   Asegúrate de usar el formato correcto (JSON para BD completa, CSV para tablas).
    *   Verifica que los encabezados de tus CSV sean los esperados.
    *   Revisa los permisos de tu navegador para descargar/subir archivos.
*   **Errores de "API Key Inválida" o "Cuota Excedida":**
    *   Contacta al administrador de la aplicación.
    *   Tus comandos se encolarán e intentarán procesar cuando el problema se resuelva.
*   **Modo Voz no Funciona o No Responde:**
    *   Asegúrate de haber dado permisos al navegador para usar el micrófono.
    *   Verifica que tu micrófono esté seleccionado y funcionando en la configuración de tu sistema.
    *   El modo voz interactiva podría estar desactivado; verifica el botón en la barra superior.
*   **La aplicación parece "atascada" o el spinner de "Procesando" no desaparece:**
    *   Verifica tu conexión a internet.
    *   Puede haber una solicitud encolada intentando procesarse. Revisa el indicador <OfflineQueueIcon />.
    *   Intenta recargar la página (Ctrl+R o Cmd+R). Tus datos (BD y cola offline) deberían persistir.
    *   Abre la consola del desarrollador (F12 en la mayoría de los navegadores) y busca mensajes de error que puedan dar más pistas.

---

## 13. Contacto y Soporte

Si encuentras problemas persistentes o tienes sugerencias, puedes contactar a:
*   **Instagram:** @lawertechnology
*   **Email:** lawertechnology@gmail.com
*   **Manual Online (este documento):** Busca el enlace en el pie de página de la aplicación.

---

¡Gracias por usar el Gestor de Trabajos Agro Aereo Roberts! Esperamos que te ayude a optimizar tus operaciones y a tener un control más eficiente de todos tus trabajos agrícolas. ✈️🚜💨
