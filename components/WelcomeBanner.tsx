import React from 'react';
import { VoiceOnIcon, VoiceOffIcon } from './icons/VoiceModeIcons'; 
import { UploadIcon, MultiFileIcon, FileCsvIcon, DownloadIcon, ExportPackageIcon } from './icons/FileIcons'; 

interface WelcomeBannerProps {
  isVoiceModeActive: boolean;
  onToggleVoiceMode: () => void;
  onDismiss: () => void; 
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ 
    isVoiceModeActive, 
    onToggleVoiceMode,
    onDismiss 
}) => {
  return (
    <div 
        className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8"
        style={{
          backgroundImage: "url('/images/Asistente_Virtual_IA.png')", // Consider updating this image if needed
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-banner-title"
    >
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-3xl text-center transform transition-all duration-500 ease-out scale-100 opacity-100 max-h-[95vh] overflow-y-auto">
        
        <div className="flex flex-col items-center justify-center mb-6">
            <h1 id="welcome-banner-title" className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white leading-tight">
              Gestor de Trabajos
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white leading-tight">
              Agro Aereo Roberts v1.0 <span role="img" aria-label="airplane">✈️</span>
            </h2>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
          Soy tu asistente virtual para ayudarte a gestionar los trabajos de fumigación y siembra aérea de forma sencilla.
        </p>

        <div className="text-left bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6">
            <p className="text-gray-700 dark:text-gray-200 font-semibold mb-2 text-sm sm:text-base">Puedes interactuar conmigo escribiendo comandos como:</p>
            <ul className="list-none space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-2">
                <li><span role="img" aria-label="customer" className="mr-2">👤</span> "Crear cliente Campos del Norte SA"</li>
                <li><span role="img" aria-label="spray" className="mr-2">💨</span> "Programar fumigación aérea para el campo La Noria mañana"</li>
                <li><span role="img" aria-label="plane" className="mr-2">✈️</span> "Listar aviones disponibles"</li>
                <li><span role="img" aria-label="question mark" className="mr-2">❓</span> "Ayuda" (para ver más acciones)</li>
            </ul>
        </div>

        <div className="text-left bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2 text-sm sm:text-base">Opciones de Carga y Guardado de Datos:</h3>
            <p className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 mb-3">
                Puedes gestionar tus datos usando los botones en la barra superior (agrupados en `BD`, `Tablas`, `Historial`):
            </p>
            <ul className="list-none space-y-2 text-xs sm:text-sm text-yellow-600 dark:text-yellow-400">
                <li className="flex items-center">
                    <UploadIcon className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                    <span><strong className="text-blue-600 dark:text-blue-400">Cargar BD (JSON):</strong> Carga una base de datos completa. (Menú `BD`)</span>
                </li>
                <li className="flex items-center">
                    <DownloadIcon className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                    <span><strong className="text-green-600 dark:text-green-400">Guardar BD (JSON):</strong> Guarda la base de datos actual. (Menú `BD`)</span>
                </li>
                <li className="flex items-center">
                    <MultiFileIcon className="h-4 w-4 mr-2 text-purple-500 flex-shrink-0" />
                    <span><strong className="text-purple-600 dark:text-purple-400">Cargar Múltiples (CSV):</strong> Sube varios archivos CSV. (Menú `Tablas`)</span>
                </li>
                 <li className="flex items-center">
                    <ExportPackageIcon className="h-4 w-4 mr-2 text-teal-500 flex-shrink-0" />
                    <span><strong className="text-teal-600 dark:text-teal-400">Guardar Todas (CSV):</strong> Guarda todas las tablas actuales en CSV. (Menú `Tablas`)</span>
                </li>
                 <li className="flex items-center">
                    <FileCsvIcon className="h-4 w-4 mr-2 text-yellow-700 flex-shrink-0" />
                    <span><strong className="text-yellow-800 dark:text-yellow-500">Cargar Individual (CSV):</strong> Importa una tabla específica. (Menú `Tablas`)</span>
                </li>
            </ul>
             <p className="text-xs text-yellow-500 dark:text-yellow-600 mt-2">
                No olvides la opción de <strong className="text-red-600 dark:text-red-400">Borrar BD</strong> para limpiar todos los datos (¡con confirmación!, en Menú `BD`).
            </p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-8 text-sm">
          <p className="text-blue-700 dark:text-blue-300 flex items-center justify-center">
            {isVoiceModeActive ? <VoiceOnIcon className="h-5 w-5 mr-2 text-green-500" /> : <VoiceOffIcon className="h-5 w-5 mr-2 text-red-500" />}
            Modo Voz Interactiva: <span className={`font-semibold ml-1 ${isVoiceModeActive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {isVoiceModeActive ? 'ACTIVADO' : 'DESACTIVADO'}
            </span>.
          </p>
          <p className="text-blue-600 dark:text-blue-400 mt-1">
            Actívalo/Desactívalo con el icono <button onClick={onToggleVoiceMode} aria-label="Toggle voice mode" className="inline-block align-middle p-1 bg-gray-200 dark:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">{ isVoiceModeActive ? <VoiceOnIcon className="h-4 w-4"/> : <VoiceOffIcon className="h-4 w-4"/> }</button> en la barra superior para respuestas por voz y activación automática del micrófono.
          </p>
        </div>

        <button
          onClick={onDismiss}
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          aria-label="Acceder al gestor"
        >
          Acceder al Gestor
        </button>
      </div>
    </div>
  );
};