# Manual de Usuario: Gestor de Trabajos Agro Aereo Roberts V1.0 🧑‍🌾✈️

¡Bienvenido al Gestor de Trabajos Agro Aereo Roberts, tu nuevo compañero digital para la gestión de trabajos agrícolas aéreos y terrestres! Esta guía te ayudará a sacar el máximo provecho de la aplicación y a simplificar tus tareas diarias.

**Versión del Manual:** 10.0 (adaptado para Agro Aereo Roberts)

## 1. ¿Qué es el Gestor de Trabajos Agro Aereo Roberts y Cómo Puede Ayudarte?

El Gestor de Trabajos Agro Aereo Roberts es una aplicación inteligente diseñada para actuar como tu asistente virtual personal para la empresa de servicios Agro Aereo Roberts. Se especializa en:

*   **Fumigación Aérea**
*   **Fumigación Terrestre**
*   **Siembra Aérea** (Nota: Aunque el foco es fumigación, se mantiene siembra aérea según prompt original)

Te ayuda a organizar:
*   Clientes y Usuarios
*   Contratistas y Personal (Pilotos, Operarios Terrestres)
*   Maquinaria Agrícola (Avión Fumigador/Sembrador, Fumigadora Terrestre Autopropulsada)
*   Campos, Lotes y Parcelas
*   Campañas Agrícolas
*   Catálogo de Tipos de Tareas (Fumigación Aérea, Fumigación Terrestre, Siembra Aérea)
*   Catálogo de Productos e Insumos (Herbicidas, Insecticidas, Semillas, etc.)
*   Trabajos Ejecutados (con detalles de maquinaria, personal e insumos utilizados)

**El Objetivo Principal:** Simplificar la entrada y consulta de datos, permitiéndote gestionar los trabajos de la empresa de manera más eficiente usando lenguaje natural.

**Ventajas Clave:**
✅ **Fácil de Usar:** Conversa con la IA.
✅ **Comprensión Avanzada del Lenguaje:** Entiende lenguaje coloquial y modismos del agro (Argentina).
✅ **Información Centralizada.**
✅ **Ahorro de Tiempo.**
✅ **Mejor Organización.**
✅ **Funcionalidad Offline:** Encola comandos y los procesa al recuperar conexión.
✅ **Exportación y Reportes Mejorados:** Imprime, descarga CSV o PDF.
✅ **Accesibilidad:** PWA y Modo Voz Interactiva.
✅ **Control de Tus Datos:** Importa/exporta tu información.
✅ **Base de Datos de Prueba:** Comienza a explorar al instante.

---

## 2. Primeros Pasos

Al abrir la aplicación, verás una **Pantalla de Bienvenida**. Desde aquí, puedes acceder al chat.

La interfaz principal se divide en:
*   **Panel de Chat:** Donde interactúas con la IA.
*   **Panel de Datos ("Lista de Trabajos de Agro Aereo Roberts"):** Visualiza tu base de datos.
*   **Barra Superior:** Botones para gestión de datos, modo voz, tema, etc. (agrupados en menús desplegables).

**Base de Datos de Prueba Automática:** Se carga `BD_testing.json` si no hay datos locales.

---

## 3. Interactuando con el Gestor: Tu Asistente Personal

**Comprensión Inteligente del Lenguaje:**
La IA entiende lenguaje coloquial, modismos del agro argentino y audio con ruido.

**Ayuda Detallada (Comando "Ayuda"):**
Escribe `Ayuda` en el chat para obtener la siguiente información formateada:

```markdown
## 🌾 ¡Hola! Soy Gestor de Trabajos de Agro Aereo Roberts, tu asistente con Inteligencia Artificial para gestionar registros y tareas agrícolas.

✅ Aquí te explico cómo puedo ayudarte:

### ✅ Comandos Principales

	✅ **Crear registros**: Puedes pedirme que cree registros de tus:
		- **Clientes** 
		- **Campos** 
		- **Lotes** 
		- **Parcelas** 
		- **Maquinaria** (Avión, Fumigadora Terrestre)
		- **Personal** (Pilotos, Operarios)
		- **Contratistas** 
		- **Campañas** 
		- **Tipos de Tareas** (Fumigación Aérea, Fumigación Terrestre, Siembra Aérea)
		- **Insumos/Productos** 

Solo dime qué quieres crear y los detalles.

- Ejemplo: \`crear cliente "La Tranquera" con teléfono 1122334455\`
- Ejemplo: \`registrar maquina fumigadora del tipo terrestre "La Ceci" modelo 2025\`
- Ejemplo: \`agregar un operario "Nico Sosa" rol Piloto\`

	✅ **Crear Tareas**: Puedes programar tareas para tus campos (principalmente fumigaciones aéreas y terrestres). 
Intenta ser específico con el tipo de tarea, campo, fecha, hora, maquinaria, personal o insumos.

- Ejemplo: \`programar fumigación aerea para el campo "Campo Test Norte" mañana a las 8 AM\`
- Ejemplo: \`crear tarea de pulverización terrestre para el lote "Lote Test S-A" usando la pulverizadora "Pulverizadora Test Azul" y el operario "Operario Test Beta"\`
- Si mencionas algo que no existe (un campo, una máquina, etc.), te preguntaré si quieres crearlo primero para poder completar la tarea.

	✅ **Listar entidades**: Pídeme que te muestre tus registros.
- Ejemplo: \`listar todos los clientes\`
- Ejemplo: \`mostrar maquinaria operativa\`
- Ejemplo: \`qué tareas de fumigación tengo programadas para esta semana\`
- Ejemplo: \`listar personal disponible\`

	✅ **Actualizar entidades**: Puedes pedirme que modifique información existente.
- Ejemplo: \`actualizar el teléfono del cliente "Agro Test del Sur" a 99887766\`
- Ejemplo: \`cambiar el estado de la fumigadora terrestre "Metalfor II" a operativa\`

	✅ **Eliminar entidades**: Puedes pedirme que borre registros.
- Ejemplo: \`eliminar el campo "Campo Viejo"\`
- Ejemplo: \`borrar la tarea de fumigación con ID task-uuid-xyz\`

	✅ **Consultas generales**: Puedes hacerme preguntas sobre tus datos o sobre agricultura en general.
- Ejemplo: \`cuántos campos tiene el cliente "Finca de Prueba Sol Radiante"\`
- Ejemplo: \`qué insumos tengo registrados\`

### ✅ Gestión de Datos (Botones en Barra Superior):
Los comandos para importar, exportar y gestionar tu base de datos y el historial de chat están ahora agrupados en la barra superior:

#### **Grupo \`BD\` (Operaciones de Base de Datos - JSON):**
   - **\`Cargar BD (JSON)\`**: Importa toda tu base de datos desde un único archivo JSON.
   - **\`Guardar BD (JSON)\`**: Exporta toda tu base de datos actual a un archivo JSON (¡tu respaldo principal!).
   - **\`Borrar BD\`**: Elimina **toda** la base de datos actual almacenada en la aplicación (requiere confirmación, ¡úsalo con precaución!).

#### **Grupo \`Tablas\` (Operaciones con Tablas - CSV):**
   - **\`Cargar Múltiples (CSV)\`**: Permite seleccionar varios archivos CSV para importar datos a diferentes tablas a la vez.
   - **\`Guardar Todas (CSV)\`**: Exporta cada tabla de tu base de datos (Clientes, Campos, Tareas, etc.) como un archivo CSV individual.
   - **\`Cargar Individual (CSV)\`**: Importa datos para una tabla específica desde un archivo CSV (se te pedirá seleccionar el tipo de entidad).

#### **Grupo \`Historial\` (Historial de Chat):**
   - **\`Guardar Historial\`**: Guarda la conversación actual del chat en un archivo JSON.
   - **\`Cargar Historial\`**: Carga una conversación previamente guardada desde un archivo JSON.

💾 **Importante**: La base de datos se almacena **localmente en tu navegador**.

### 🔄 **Modo Voz Interactiva:**
- Activa/Desactiva con el botón <VoiceOnIcon /> / <VoiceOffIcon /> en la barra superior para hablar tus comandos y escuchar mis respuestas.

### 🌐 **Funcionalidad Offline:**
- ¡No te preocupes por la conexión! Si no hay internet, tus comandos se guardarán y se procesarán automáticamente cuando vuelva la conexión.
- Verás un indicador <OfflineQueueIcon /> con el número de solicitudes pendientes.

### 📌 **Problemas de conexión con la IA:**
Si tienes problemas de conexión conmigo:
- Usa la opción **\`Guardar Historial\`** (en el grupo \`Historial\`) para no perder tu conversación actual.
- Una vez que la conexión se restablezca, puedes usar **\`Cargar Historial\`** si es necesario, para continuar desde donde dejaste. Los mensajes en el chat (guardados o visibles) me ayudarán a retomar el contexto.
- Anímate a reintentar tus comandos o a seguir conversando cuando la conexión vuelva a la normalidad.
```

**Modo Voz Interactiva:** Usa el botón de micrófono o los comandos "Activar/Desactivar modo voz".

---

## 4. La Barra Superior: Menús Desplegables

*   **Indicador de Solicitudes Pendientes (Offline):** Muestra comandos en cola.
*   **Menú `BD`:**
    *   `Cargar BD (JSON)`
    *   `Guardar BD (JSON)`
    *   `Borrar BD`
*   **Menú `Tablas`:**
    *   `Cargar Múltiples (CSV)`
    *   `Guardar Todas (CSV)`
    *   `Cargar Individual (CSV)` (abre selector de tipo de entidad)
*   **Menú `Historial`:**
    *   `Guardar Historial`
    *   `Cargar Historial`
*   **Botones Directos:**
    *   `Modo Voz`
    *   `Tema` (Claro/Oscuro)

---

## 5. Manejando Tus Datos con Tablas (Archivos CSV)

(La información sobre formato CSV, encabezados, etc., es similar a la versión anterior del manual del Gestor de Trabajos para Agro Aereo Roberts, pero ten en cuenta que las entidades y ejemplos ahora se refieren al contexto de Agro Aereo Roberts, ej. `machineries` incluirá "Avión Fumigador/Sembrador", `tasksList` incluirá "Fumigación Aérea").

Consulta `constants.ts` para la lista actualizada de `ENTITY_DISPLAY_NAMES` y `CSV_HEADERS`.

---

## 6. Visualización, Exportación y Reportes de Datos

(Similar a la versión anterior, con opciones para ver en pantalla completa, descargar CSV, imprimir y generar PDF desde los resultados del chat y la vista de pantalla completa).

---

## 7. Configuración de la API Key de Google Gemini (Para Administradores/Desarrolladores)

(La información es la misma que antes, la clave API es esencial y se carga desde variables de entorno `VITE_API_KEY` o `process.env.API_KEY`).

---

## 8. Funcionalidad Offline

(Similar a la versión anterior, con detección automática, encolamiento de comandos y procesamiento automático al reconectar).

---

## 9. Consejos y Buenas Prácticas

(Similares, enfatizando la especificidad en comandos para tareas de fumigación aérea y terrestre).

---

## 10. PWA: Tu App en el Bolsillo (Android)

(La funcionalidad PWA sigue siendo la misma).

---

## 11. ¿Problemas? (Solución de Problemas)

(Los problemas y soluciones generales son similares. Errores de API Key o Cuota ahora se encolarán si es posible).
*   **“La IA no me entiende bien”**: Reformula, sé específico para fumigación aérea o terrestre.
*   **Problemas al Cargar Datos**: Verifica formatos CSV y JSON, y los botones correctos en los menús.
*   **Errores de API Key/Cuota**: Contacta al administrador; la app intentará encolar comandos.
*   **Modo Voz**: Verifica permisos y volumen.

*   **Contacto y Soporte Adicional:**
    *   **Instagram:** @lawertechnology
    *   **Email:** lawertechnology@gmail.com

---

## 12. ¡Empieza a Transformar tu Gestión de Trabajos!

El Gestor de Trabajos Agro Aereo Roberts está aquí para optimizar tus operaciones de fumigación.
¡Pruébalo y lleva la gestión de tus trabajos aéreos y terrestres al siguiente nivel! ✈️🚜💨
