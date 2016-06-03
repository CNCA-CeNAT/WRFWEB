//----------------------------&time_control-----------------------COMPLETO
var diccionario ={"param1": "Corre el tiempo en dias", 
                  "param2": "Corre el tiempo en horas. *Nota: Si es mas de un dia es mejor usar ambos run_days y run_hours. Si no dejar days en 0 y solo usar hours" , 
                  "param3":"Corre el tiempo en minutos",
                  "param4":"Corre el tiempo en segundos", 
                  "param5":"Un año de comienzo de 4 digitos",
                  "param6":"Un mes de comienzo de 2 digitos",
                  "param7":"Un dia de comienzo de 2 digitos", 
                  "param8":"Horas de comienzo de 2 digitos",  
                  "param9":"Minutos de comienzo de 2 digitos",
                  "param10":"Segundos de comienzo de 2 digitos",
                  "param11":"Un fin de año de 4 digitos",
                  "param12":"Un fin de mes de 2 digitos",
                  "param13":"Un dia final de 2 digitos",
                  "param14":"Un fin de hora de 2 digitos",
                  "param15":"Un fin de minutos de 2 digitos",
                  "param16":"Un fin de segundos de 2 digitos",
                  "param17":"Intervalo de tiempo entre los datos reales de entrada, que será el intervalo entre el archivo de condición de contorno lateral(solo para el real)",
                  "param18":"(lógico); Si la ejecución anidada tendrá archivos de entrada para los dominios que no sean de dominio 1",
                  "param19":"Campos seleccionados de entrada anidada. Si es 0 por defecto se utilizan todos los campos de nido de entrada. Si es 2 solo se utilizaran este tipo de agrupamiento(que se define en el Registro)",
                  "param20":"La historia intervalo de archivo de salida en minutos (sólo números enteros)",
                  "param21":"La historia intervalo de archivo de salida en días (sólo números enteros)",
                  "param22":"La historia intervalo de archivo de salida en horas (sólo números enteros)",
                  "param23":"La historia intervalo de archivo de salida en minutos (sólo números enteros)",
                  "param24":"La historia intervalo de archivo de salida en segundos (sólo números enteros)",
                  "param25":"Número de veces salidas voluminosas en cada archivo de historia; se utiliza para separar los archivos de salida en trozos más pequeños",
                  "param26":"(lógico); Si este plazo es un reinicio",
                  "param27":"Intervalo de archivo de salida de reinicio en minutos",
                  "param28":"Cuando es .false. (Por defecto) utiliza todos los intervalos de salida (incluyendo la historia) dadas por los archivos sst wrf. Cuando es .true. utiliza intervalos de salida de reinicio dadas por la lista de nombres",
                  "param29":"Cuando es .false. (Por defecto) no da un archivo de la historia en el momento inicial de reinicio (previene la sobreescritura de archivos historia original, en este momento). Cuando es .true. da un archivo de la historia en el momento inicial de reinicio",
                  "param30":"Pregunta el modelo de escribir de salida un archivo vacío con el nombre",
                  "param31":"Si se debe sobrescribir la fecha de inicio de la simulación con la hora de inicio de previsión",
                  "param32":"(defecto); Nombre del archivo de entrada de WPS",
                  "param33":"Nombre del archivo de entrada para el archivo de límite inferior",
                  "param34":"Presentar intervalo en minutos para el archivo de límite inferior",
                  "param35":"IO formato para los archivos wrflowinp",
                  "param36":"El formato en que el archivo de salida será la historia. Si es 2 es netCDF. Si es 102 divide los archivos netCDF, uno por procesador. Si es 1 es un formato binario. Si es 4 es un formato PHDF5. Si es 5 es GRIB1. Si es 10 es GRIB2. Si es 11 es netCDF paralelo.",
                  "param37":"El formato en que los archivos de salida seran reiniciados. Si es 2 es nedCDF. Si es 102 es divide los archivos netCDF, uno por procesador (debe reiniciar con el mismo número de procesadores)",
                  "param38":"El formato de los archivos de entrada. Si es 2 es netCDF. Si es 102 permite que el real.exe programa para leer en met_em dividida * archivos y escribir archivos divididos wrfinput. No hay división de archivo para el archivo de wrfbdy.",
                  "param39":"El formato para el archivo de wrfbdy. Si es 2 el formato es netCDF. Si es 4 el formato es PHD5. Si es 5 el formato es GRIB1. Si es 10 el formato es GRIB2. Si es 11 el formato es pnetCDF.",
                  "param40":"(Por defecto), sólo una única escritura, no la secuencia de escritura / lectura / escritura",
                  "param41":"Formato de IO para flujo de entrada de datos 2. Si es 2 el formato es netCDF. Si es 4 el formato es PHD5. Si es 5 el formato es GRIB1. Si es 10 el formato es GRIB2. Si es 11 el formato es pnetCDF.",
                  "param42":"(Por defecto) Cuando se establece en 1 o 2, que permite a algunos campos de diagnóstico simples se impriman. Si es 1 cada 3 horas tendencia de dominio promediada hidrostática presión superficial (Dpsfc / dt), y tendencia de la presión hidrostática-columna seca (DMU / Dt) aparecerán en el archivo de salida estándar. Si es 2 la precipitación promediada de dominio, la evaporación superficial, y los flujos de calor sensible y latente tendrá salida en el archivo de salida estándar",
                  "param43":"Dando esto un valor mayor (50, 100, 200, ect.) aumenta la depuración impresiones cuando se ejecuta el FRM",
                  "param44":"El nombre del archivo para escribir salida adicional a una unidad o la salida de corriente de diferente .. Si no se especifica, auxhist2_d <dominio> _ <fecha> será utilizado. También tenga en cuenta que para escribir las variables de salida que no sea el archivo de la historia requiere de un cambio en el archivo Registry.EM_COMMON, o el uso de la opción de opción iofields_filename",
                  "param45":"El intervalo en minutos para la salida",
                  "param46":"Formato de salida para el uso de auxhist2. Si es 2 el formato es netCDF. Si es 4 el formato es PHD5. Si es 5 el formato es GRIB1. Si es 10 el formato es GRIB2. Si es 11 el formato es pnetCDF.",
                  "param47":"Cuántas veces la salida será en cada archivo de salida",
                  "param48":"Intervalo en minutos para la entrada de empuje obs. Se debe ajustar como el mismo (o más) de frecuencia como pbs_iff (con la unidad de la etapa de tiempo de dominio grueso)",
                  "param49":"Final del tiempo de observación (en horas), cuando se utiliza la opción diag_print",
                  "param50":"Cuando se establece en .true. esto reemplaza los dos puntos con guiones en los nombres de archivo de salida",
                  "param51":"Escribir los datos de entrada con formato como salida para la aplicación 3DVAR",
                  "param52":"Intervalo en minutos cuando se utiliza la opción de entrada de escritura",
                  "param53":"Nombre del archivo de salida de 3DVAR",
                  "param54":"Comienzo del año para escribir los datos 3DVAR",
                  "param55":"Comienzo del dia para escribir los datos 3DVAR",
                  "param56":"Comienzo de la hora para escribir los datos 3DVAR",
                  "param57":"Comienzo de los minutos para escribir los datos 3DVAR",
                  "param58":"Comienzo de los segundos para escribir los datos 3DVAR",
                  "param59":"Cierre del año para escribir los datos 3DVAR",
                  "param60":"Cierre del dia para escribir los datos 3DVAR",
                  "param61":"Cierre de la hora para escribir los datos 3DVAR",
                  "param62":"Cierre de los minutos para escribir los datos 3DVAR",
                  "param63":"Cierre de los segundos para escribir los datos 3DVAR",
                  "param64":"Cuando se establece en .true.,  permite a la salida de un archivo wrfinput para todos los períodos de tiempo",
                  "param65":"(defecto); Ajusta los tiempos de salida a la hora más cercana",
                  "param66":"(Por defecto = .false.); cuando se enciende, el modelo escribirá un archivo vacío con el nombre wrfoutReady_d <domain> _ <date>. Esto es útil en series de producción para que el código de post-procesamiento puede comprobar la existencia de este archivo para empezar a hacer su procesamiento.",
                  "param67":"Si es 0 esta apagado. Si es 1 las matrices de diagnóstico 36 de superficie (max / min / media / STD) en el intervalo de tiempo se especifican. La salida va al flujo de salida auxiliar 3 historia con el nombre de archivo por defecto 'wrfxtrm_d <domain> _ <date>.'",
                  "param68":"Si es 0 esta apagado",
                  "param69":"Cuando se establece en .true., la alta resolución del terreno y uso de la tierra serán utilizados en los nidos (requiere datos de entrada especiales, y TERRAIN_AND_LANDUSE variable de entorno establecido en tiempo de compilación). Esta suscripción voluntaria sobrescribirá opción input_from_file para los dominios de nidos.",
                  "param70":"La ruta del directorio donde se encuentran los datos de alta resolución",
                  "param71":"Una opción para solicitar variables particulares que aparezca en la salida, si no lo están ya, o que no aparecen si lo hacen y que no quieren que lo hagan. También debe crear un archivo de texto (my_iofields_list.txt) en el que se declara las variables se impriman.",
                  "param72":"Si es .true. dice el modelo a seguir si se encuentra un error en los archivos especificados por el usuario. Si es .false. dice el modelo de abortar si se detecta un error en los archivos especificados por el usuario",
                  
                  //--------Domains----------FALTA
                  
                  "param73":"Paso de tiempo de segundos de integración (recomendado 6 * dx en km para un caso típico)",
                  "param74":"Numerador de paso de tiempo fraccional",
                  "param75":"Denominador para paso de tiempo fraccional",
                  "param76":"Paso de tiempo al configurar dfi_opt = 1, puede ser diferente de la etapa de tiempo regulares",
                  "param77":"El número de dominios sobre el que está ejecutando",
                  "param78":"Indice inicial en x (oeste-este) dirección (licencia como es)",
                  "param79":"El índice final de x (de este a oeste) dirección (dimensión escalonada)",
                  "param80":"Indice inicial en y (sur-norte) dirección (licencia como es)",
                  "param81":"El índice final en y (sur-norte) dirección (dimensión escalonada)",
                  "param82":"Indice inicial en Z (vertical)",
                  
                  "param83":"El índice final en z (vertical) (dimensión escalonada - esto se refiere a los niveles completos). La mayoría de las variables están en niveles unstaggered",
                  
                  "param84":"Longitud de rejilla en la dirección x (en metros)",
                  "param85":"Longitud de rejilla en la dirección y (en metros)",
                  "param86":"Identificador de dominios",
                  "param87":"Identificación del dominio padre",
                  "param88":"A partir de la esquina inferior izquierda i-indice desde el dominio primario",
                  "param89":"A partir de la esquina inferior izquierda j-indice desde el dominio primario",
                  "param90":"Relación de tamaño de la cuadrícula de dominio de padres a nido.",
                  "param91":"Relación padre-a-nido de paso de tiempo",
                  "param92":"Si es 0 no feedback. Feedback desde nido a su dominio principal",
                  
                  "param93":"Si es 0 sin suavizado. Si es  1 opción para suavizar dominio principal 1-2-1; usado solamente con retroalimentación = 1. Si es 2 (Por defecto) smoothing-desmoothing opción de dominio principal; usado solamente con retroalimentación = 1",
                  
                  "param94":"(Por defecto) de altura calculada en real.exe programa y la presión en el modelo (ARE solamente) mediante el uso de un método alternativo (menos sesgada cuando se compara con los datos de entrada)",
                  "param95":"Número máximo de sitios de series de tiempo",
                  "param96":"Más alto nivel de modelo para la salida de perfil",
                 
                  // -----------------------------------------------------------
                  "param97":"(Por defecto) no microfísica. Si es 1 esquema de kessler. Si es 2 esquema de Lin et al. Si es 3 sencillo esquema de hielo de 3 clases WSM. Si es 4 esquema de hielo de 5 clases WSM. Si es 5 Ferrier (ETA) nuevos microfísica, operativo Resolución de alta Ventana. Si es 6 esquema de granizo blando 6-clase WSM. Si es 7 esquema de Goddard GCE. Si es 8 esquema de Thompson. Si es 9  esquema de momento 2 de Milbrandt-Yau. Si es 10 esquema de momento 2 de Morrison. Siu es 11 esquema de clase 5 de CAM 5.1. Si es 13 esquema de clase 5 de SBU_YLin. Si es 14 esquema de clase de 5 de doble momento del WRF. Si es 16 esquema de clase de 6 de doble momento del WRF. Si es 17 esquema de hielo 4 de momento 2 del NSSL. Si es 18 esquema de hielo 4 de momento 2 del NSSL con CCN predecible. Si es 19 esquema clase 6 de momento 1 del NSSL. Si es 21 esquema de clase 6 de momento 1 del NSSL-LFO. Si es 22 esquema de hielo 3 de momento 2 del NSSL, sin granizo. Si es 28 Thompson esquema de aerosol cuenta con agua y hielo de usar la climatología de aerosoles. Si es 30 HUJI (Universidad Hebrea de Jerusalén, Israel) microfísica bin espectrales, versión rápida. Si es 32 HUJI microfísica bin espectral, la versión completa. Si es 95 Ferrier (antiguo Eta), NAM operativo (WRF NMM). Si es 98 esquema de Thompson V3.0.",
                  
                  
                  "param98":"Si es 0 (Por defecto) sin radiación de onda larga. Si es 1 esquema RRTM. Si es 3 esquema de CAM. Si es 4 esquema rrtmg. Si es 24 rrtmg esquema rápido para la GPU y MIC. Si es 5 esquema de Goddard. Si es 7 FLG (UCLA) esquema. Si es 31 Tierra Held-Suárez forzando. Si es 99 GFDL (Eta) de onda larga (semi-apoyado)",
                  
                  "param99":"Si es 0 (Por defecto) sin radiación de onda corta. Si es 1 esquema Dudhia (PTOP> 50 mb). Si es 2 (Antiguo) sistema de onda corta Goddard. Si es 3 CAM esquema (rearranque debe estar en el intervalo de 6 horas). Si es 4 esquema rrtmg. Si es 24 rrtmg esquema rápido para la GPU y MIC. Si es 5 esquema de Goddard. Si es 7 FLG (UCLA) esquema. Si es 99 GFDL (Eta) de onda larga (semi-apoyado)",
                  
                  "param100":"Minutos entre llamadas física de la radiación. Recomendado 1 minuto por km de dx (por ejemplo de 10 a 10 km rejilla); utilizar el mismo valor para todos los nidos",
                  
                  "param101":"Opción capa de superficie. Si es 0 (Por defecto) sin la capa superficial. Si es 1 MM5 esquema de Monin-Obukhov revisada. Si es 2 Monin-Obukhov (Janjic Eta) esquema. Si es 3 esquema GFS del NCEP (sólo NMM). Si es 4 QNSE. Si es 5 MYNN. Si es 7 Pleim-Xiu (± RW), sólo se probó con la superficie Pleim-Xiu y ACM2 PBL. Si es 10 TEMF (sólo ARW). Si es 91 esquema de capas vieja superficie MM5 (anteriormente la opción 1)",
                  
                  "param102":"La superficie opción (ajustado antes de ejecutar este real.exe; también asegurarse de num_soil_layers está ajustado correctamente). Si es 0 (Por defecto) hay superficie de predicción temporal. Si es 1 esquema de difusión térmica. Si es 2 unificado modelo de la superficie terrestre Noah. Si es 3 modelo de la superficie terrestre RUC. Si es 4 Noah-MP-modelo de la superficie terrestre (opciones adicionales en la sección y noah_mp). Si es 5 CLM4 (Comunidad Tierra Modelo versión 4). Si es 7 esquema Pleim-Xiu (sólo ARW). Si es 8 SSIB modelo de la superficie terrestre (ARW solamente). Funciona con ra_lw_physics = 1, 3, o 4, y ra_sw_physics = 1, 3, o 4",
                 
                  "param103":"Opción capa límite. Si es 0 (Por defecto) sin capa límite. Si es 1 esquema YSU; utilizar sf_sfclay_physics = 1. Si es 2 esquema de Mellor-Yamada-Janjic (Eta) TKE; utilizar sf_sfclay_physics = 2. Si es 3 esquema GFS del NCEP (NMM solamente); utilizar sf_sfclay_physics = 3. Si es 4 QNSE-EDMF; utilizar sf_sfclay_physics = 4. Si es 5 MYNN TKE 2.5 nivel; utilizar sf_sfclay_physics = 1, 2, o 5. Si es 6 MYNN TKE nivel 3ª; utilizar sf_sfclay_physics = 5. Si es 7 ACM2 esquema (Pleim) (ARW solamente); uso sf_sfclay_physics = 1 ó 7. Si es 8 Bougeault y Lacarrere (Boulac) TKE; uso sf_sfclay_physics = 1 o 2. Si es 9 Bretherton-Park / UW esquema de TKE; uso sf_sfclay_physics = 1 o 2. Si es 10 TEMF esquema (sólo ARW); utilizar sf_sfclay_physics = 10. Si es 11 PBL esquema de escala-consciente 'Shin-Hong. Si es 12 GBM esquema de tipo TKE (ARW solamente); utilizar sf_sfclay_physics = 1. Si es 99 esquema de MRF",
                  
                  "param104":"Minutos entre la clase de física de la capa límite (0 = llaman cada paso de tiempo)",
                  
                  "param105":"Opción de parametrización de cúmulos. Si es 0 (Por defecto) sin parametrización de cúmulos. Si es 1 Kain-Fritsch (nueva Eta) esquema. Si es 2 esquema Betts-Miller-Janjic. Si es 3 Grell-Freitas esquema de conjunto. Si es 4 Antiguo GFS simplificado Arakawa-Schubert (SAS). Si es 5 esquema de Grell nueva (G3). Si es 6 Tiedtke esquema (sólo ARW). Si es 7 Zhang-McFarlane de CESM (trabaja con MYJ y UW PBL). Si es 10 Modificado esquema de Kain-Fritsch con función de disparo basado en archivos PDF (ARW-only). Si es 11 Multiescalar esquema de Kain-Fritsch. Si es 14 Nueva GFS SAS del YSU (ARW solamente). Si es 16 Un esquema más reciente Tiedke. Si es 84 New SAS (HWRF). Si es 93 Grell-Devenyi esquema de conjunto. Si es 99 anterior esquema Kain-Fritsch",
                  
                  "param106":"Minutos entre llamadas cúmulos de física; se debe establecer en 0 cuando se utiliza toda la física de la CPU excepto Kain-Fritsch (0 = llaman cada paso de tiempo)",
                  
                  "param107":"Da calor y humedad flujos de la superficie para los casos en datos real y cuando se utiliza un PBL (sólo funciona con sf_sfclay_physics = 1, 5, 7, o 11). 1 = flujos están. 0 = flujos están fuera. También controla los flujos de superficie cuando no se utiliza diff_opt = 2 y km_opt = 3, y un PBL",
                  
                  "param108":"Efectos cubierta de nieve. Si es 1 (Por defecto), con efectos capa de nieve. Si es 0 sin efecto la capa de nieve.",
                  
                  "param109":"(Por defecto) efecto de la nube a la profundidad óptica de la radiación (sólo funciona con ra_sw_physics = 1,4 y ra_lw_physics = 1,4); desde V3.6 esto también controla las opciones de la fracción de nubes. Si es 1 (Por defecto) a partir de nubes, y la opción de uso fracción de nubes 1 (Xu-Randall mehod). Si es 0 sin efecto la nube. Si es 2 con efecto a la nube, y el uso de la fracción de nubes opción 2, 0/1 basado en umbral",
                  
                  "param110":"Donde los datos de las categorías de suelo de uso del suelo y provienen. Si es 1 (Por defecto antes de v3.8) WPS / geogrid, pero con categorías dominantes recalculada en bienes. Si es 2 datos GRIB de otro modelo (sólo si existe matrices VEGCAT / SOILCAT). Si es 3 (Inicio predeterminada en v3.8) utiliza dominantes tierra y el suelo categorías de WPS / geogrid",
                  
                  "param111":"Número de capas de suelo en el modelo de la superficie terrestre (establecido antes de ejecutar real.exe). Si es 5 (Por defecto) esquema de difusión térmica de la temperatura solamente. Si es 4 Noah modelo de la superficie terrestre. Si es 6 o 9 modelo de la superficie terrestre RUC. Si es 10 CLM4 modelo de la superficie terrestre. Si es 2 Pleim-Xu modelo de la superficie terrestre. Si es 3 SSIB modelo de la superficie terrestre",
                  
                  
                  "param112":"Activar el modelo de vegetación urbana (en Noah LSM solamente). Si es 0 (Por defecto) apagado. Si es 1 de una sola capa, UCM. Si es 2 multicapa, Edificio Entorno de parametrización (BEP) esquema (sólo funciona con el MYJ y Boulac PBL). Si es 3 multicapa, Edificio Entorno Modelo (BEM) esquema (sólo funciona con MYJ y Boulac PBL)",
                  
                  //-----------&dynamics----------------------------------FALTA
                  
                  "param113":"Bandera de amortiguación velocidad vertical (para uso operacional). Si es 0 (Por defecto) sin amortiguación. Si es 1 con amortiguación",
                  
                  "param114":"Turbulencia y la opción de mezcla. Si es 0 sin turbulencia o filtros espaciales numéricos explícitos (km_opt se ignora). Si es 1 (Por defecto) evalúa segundo término de difusión fin de coordinar las superficies, utiliza kvdif de difusión vertical a no ser que se usa la opción de PBL, puede ser utilizado con km_opt = 1 (se recomienda para casos y datos reales) y 4. Si es 2 evalúa términos de mezcla en el espacio físico (forma estrés) (x, y, z); parametrización turbulencia se elige especificando km_opt",
                  
                  "param115":"Opción coeficiente de Foucault. Si es 1 (Por defecto) constante (uso khdif y kvdif). Si es 2 entonces 1.5 orden de cierre TKE (3D) ** No se recomienda para DX> 2 kilometros. Si es 3 cierre de primer orden Smagorinsky (3D) ** No se recomienda para DX> 2 km. Si es 4 primero ordenar el cierre horizontal Smagorinsky (recomendado para casos y datos reales)",
                  
                  "param116":"6º orden difusión numérica. Si es 0 (Por defecto) sin difusión sexto orden. Si es 1 entonces 6º orden difusión numérica. Si es 2 entonces 6º orden difusión numérica, pero prohíbe la difusión de la gradiente",
                  
                  "param117":"6º orden difusión numérica adimensional tasa (valor máximo de 1,0 corresponde a la remoción completa de la onda 2dx en un solo paso de tiempo)",
                  
                  "param118":"Bandera de amortiguación del nivel superior. Si es 0 (Por defecto) sin amortiguación. Si es 1 con amortiguación de difusión; puede ser usado para los casos en datos reales (dampcoef no dimensional ~ 0,01 a 0,1). Si es 2 Rayleigh con amortiguación (dampcoef escala de tiempo inversa [1 / s], por ejemplo, 0.003). Si es 3 Rayleigh con amortiguación (dampcoef escala de tiempo inversa [1 / s], por ejemplo, 0,2; para los casos en datos reales)",
                  
                  "param119":"Temperatura de estado base (K); solo lectura",
                  
                  "param120":"Amortiguación de profundidad (m) de top model",
                  "param121":"Coeficiente de amortiguación (ver damp_out)",
                  "param122":"Constante de difusión horizontal (m2 / s)",
                  "param123":"Constante de difusión vertical (m2 / s)",
                  "param124":"Si es .false. ejecuta el modelo en modo hidrostática. Si es .true. (Por defecto) se ejecuta el modelo en el modelo no hidrostático",
                  
                  "param125":"Opciones de advección de humedad. Si es 0 es sencillo. Si es 1 (Por defecto) definida positiva. Si es 2 es monótona. Si es 3 es 5°orden WENO (Weighted esencialmente no oscilatorios). Si es 4 es 5°orden WENO con definida positiva",
                  
                  "param126":"Opciones de advección para escalares. Si es 0 es sencillo. Si es 1 (Por defecto) definida positiva. Si es 2 es monótona. Si es 3 es 5°orden WENO. Si es 4 es 5°orden WENOcon definida positiva",
                 
                  //-----------&bdy_control--------------COMPLETO
                  
                  "param127":"Número total de filas de valores en la frontera específica de empuje (solo lectura)",
                  "param128":"Número de puntos en la zona especificada (opción b.c especificado; solo lectura)",
                  "param129":"Número de puntos en la zona de relajación (opción b.c especificación; solo lectura)",
                  "param130":"Condición límite especificado; sólo se puede utilizar para el dominio 1 (por defecto es .false.; solo lectura)",
                  
                  "param131":"Multiplicador exponencial para la relajación rampa zona de especificación = .true.; por defecto es 0. = rampa lineal; 0.33 = ~ 3 * DX exp factor de decaimiento (solo lectura)",
                  
                  "param132":"Condiciones de contorno periódicas en la dirección x (por defecto es .false.)",
                  "param133":"Condiciones de contorno simétrico en el arranque x (oeste; por defecto es .false.)",
                  "param134":"Condiciones de contorno simétrico en el extremo x (este; por defecto es .false.)",
                  "param135":"Abrir las condiciones de contorno en el arranque x (oeste; por defecto es .false.)",
                  "param136":"Abrir las condiciones de contorno en el extremo x (este; por defecto es .false.)",
                  "param137":"Condiciones de contorno periódicas en dirección y (por defecto es .false.)",
                  "param138":"Condiciones de contorno simétrico y en el inicio (al sur; por defecto es .false.)",
                  "param139":"Condiciones de contorno simétrico en mi final (al norte; por defecto es .false.)",
                  "param140":"Abrir las condiciones de contorno en y de inicio (al sur; por defecto es .false.)",
                  "param141":"Abrir las condiciones de contorno en mi extremo (al norte; por defecto es .false.)",
                  "param142":"Condiciones límite anidados (debe estar establecido en .true. de nidos)",      
                  "param143":"Condición de contorno polar (v = 0 en polarward-V más puntos) para la aplicación global (por defecto es .false.)",
                  "param144":"Condición de contorno constante usada con DFI (por defecto es .false.)",
                  "param145":"Llamar spec_bdy_final de mu (por defecto es 0 = apagado)",
                  
                  "param146":"Si es .false. no utiliza las variables de microfísica de archivo de límites en el modelo de ejecución después hacia abajo (por defecto. Si es .true. utiliza variables de microfísica en archivo de límites)",
                  
                  "param147":"Si es .false. no utiliza variables escalares en archivo de límites en el modelo de ejecución después hacia abajo (por defecto). Si es .true. utiliza variables escalares en archivo de límites",
                 
                  //------------------&grib2----------------------COMPLETO
                  
                  "param148":"(defecto); Fondo Identificador del proceso de, por lo general definido por el centro de origen para identificar los datos de fondo que se utilizó en la creación de los datos; este es el octeto 13 de la sección 4 en el mensaje GRIB2",
                  
                  "param149":"(Por defecto) El análisis de generación de identificador de proceso de pronóstico, por lo general definidas por el centro de origen para identificar el proceso de pronóstico que se utilizó para generar los datos; este es el octeto 14 de la Sección 4 en el mensaje GRIB2",
                  
                  "param150":"(Por defecto) Estado de la producción de los datos tratados en el mensaje GRIB2; véase la Tabla de cifrado 1.3 del manual GRIB2; este es el octeto 20 de la sección 1 en el registro GRIB2",
                  
                  "param151":"El método de compresión para codificar el mensaje GRIB2 de salida; Sólo JPEG 2000 y JPEG son compatibles. Si es 40 (Por defecto) para jpeg2000. Si es 41 el formato es PNG",
                  
                  //------------&namelist_quilt----------------COMPLETO
                  
                  "param152":"Si es 0 (Por defecto) sin acolchar. Si es >0 el número de procesadores que se utilizan para IO acolchar por grupo IO",
                  "param153":"Defecto; puede ser fijado a un valor más alto para la anidación de IO o historia y reiniciar IO",
                  
                  //---------------&diags------------------------------COMPLETO
                  
                  "param154":"0/1: Emitir diagnósticos de nivel de presión",      
                  "param155":"Número de niveles de presión",
                  "param156":"Los niveles de presión en Pa",
                  "param157":"1: utilizar presión total y 2: utilizar la presión hidrostática",
                  "param158":"Cambiar a interpolar verticalmente diagnóstico a niveles Z; (Por defecto está desactivada)",
                  "param159":"Número de niveles de altura para interpolar",
                  
                  "param160":"Lista de valores de altura (m) para interpolar los datos de esta; números positivos son de altura sobre el nivel medio del mar (I. S., un nivel de vuelo), los números negativos son para el nivel por encima del suelo",
                  
                  "param161":"Falta un valor por debajo del suelo",
                  
                  //--------------&afwa--------------------COMPLETO
                  
                  "param162":"(Por defecto) AFWA opción de diagnóstico (1 = activado)",
                  "param163":"(Por defecto) opción de tipo de precipitación (1 = activado)",
                  "param164":"(Por defecto) opción líquido int vertical (1 = activado)",
                  "param165":"(Por defecto) la opción de radar (1 = activado)",
                  "param166":"(Por defecto) la opción de mal tiempo (1 = activado)",
                  "param167":"(Por defecto) la opción de la formación de hielo (1 = activado)",
                  "param168":"(Por defecto) opción de visibilidad (1 = activado)",
                  "param169":"(Por defecto) la opción de nube (1 = activado)",
                  "param170":"Opción índices térmica (por defecto es 0 = apagado)",
                  "param171":"Opción de turbulencias (por defecto es 0 = apagado)",
                  "param172":"Opción de flotabilidad (por defecto es 0 = apagado)",
                  "param173":"Opcion hailcast (por defecto es 0 = apagado)",               
                  "param174":"(Por defecto) Temperatura de CCN para el cálculo del tipo de precipitación",
                  "param175":"(Por defecto) de la energía de fusión total para el cálculo del tipo de precipitación. Si es 1 (por defecto) hail. Si es 0 graupel",
                  "param176":"(Por defecto) cambiar a usar esquema de mezcla desactivar (sólo para Morrison, WDM6, WDM5, y NSSL_2MOM CCN / NSSL_2MOM",
                 
                  //----------------&tc-----------------------------COMPLETO
                  
                  "param177":"T / F para la inserción de una tormenta tropical falsa",               
                  "param178":"T / F por sólo la eliminación de la TC originales",
                  "param179":"Número de falsos TC",
                  "param180":"Latitud centro de la falsa TC",
                  "param181":"Longitud centro de la falsa TC",                
                  "param182":"Viento máximo de tormenta falsa (m s-1)",
                  "param183":"Radio máximo hacia afuera desde el centro de la tormenta de falsa TC",
                  "param184":"Relación de vientos máximos representativos, 0,75 para 45 kilometros cuadrícula y 0,9 para 15 la red de kim",
                  "param185":"Límite de presión superior para el esquema de falsa TC",                
                  
                  //---------------&scm-----------------------------------COMPLETO
                  
                  "param186":"Si es 0 (Por defecto) sola columna forzamiento apagados. Si es 1 la imposición de una sola columna",
                  "param187":"DX para forzar SMC (m)",
                  "param188":"Número de capas de entrada forzando SCM",
                  "param189":"SMC categoría de uso de la tierra (2 = tierras secas, tierras de cultivo y pastos, mientras que otros se pueden encontrar en el LANDUSE.TBL)",        
                  "param190":"Categoría de suelo SMC (4 = franco limoso, mientras que otros se pueden encontrar en el suelo FARM.TABLE)",
                  "param191":"Fracción de vegetación SMC",
                  "param192":"Agua dosel SMC (kg m-2)",
                  "param193":"Latitud SMC",               
                  "param194":"Longitud SMC",
                  "param195":"Encender la advección theta en SCM",
                  "param196":"Encender la advección de viento en SMC",
                  "param197":"Encender la advección de humedad en SCM",                  
                  "param198":"Encender la advección vertical en SMC",
                  "param199":"Encender la advección líquido en SMC (por defecto es .false. = apagado)",
                  "param200":"Número de capas de suelo obligando SCM",
                  "param201":"Encienda la temperatura del suelo forzando en SMC (por defecto es .false. = apagado)",
                  "param202":"encienda la humedad del suelo forzando en SMC (por defecto es .FALSE. = apagado)",
                  "param203":"encienda theta a gran escala forzando en SMC (por defecto es .FALSE. = apagado)",
                  "param204":"encienda QV-forzamiento de gran escala en SMC (por defecto es .FALSE. = apagado)",
                  "param205":"activar el sql a gran escala forzando en SMC (por defecto es .FALSE. = apagado)",                  
                  "param206":"encienda eólica a gran escala forzando en SMC (por defecto es .FALSE. = apagado)",
                
                  //--------------&dfi_control------------------------------COMPLETO
                  
                  "param207":"Si es 0 (Por defecto) sin inicialización filtro digital. Si es 1 lanzamiento filtro digital (DFL). Si es 2 diabetes DFI (DDFI). Si es 3 (Recomendado) dos veces DFI (TDFI)",
                  
                  "param208":"Si es 0 de filtrado uniforme. Si es 1 filtro Lanczos. Si es 2 filtro de Hamming. Si es 3 filtro Blackman. Si es 4 filtro Kaiser. Si es 5 filtro Potter. Si es 6 filtro de ventana Dolph. Si es 7 (Por defecto; recomendado) filtro de Dolph. Si es 8 filtro de alto orden recursivo",
                  
                  "param209":"Si se debe escribir el archivo wrfinput con el estado modelo filtrado antes de comenzar el pronóstico",
                  "param210":"Ya sea para escribir wrfout archivos durante la integración de filtrado",
                  "param211":"Cortar períodos para el filtro; no debe ser más largo que la ventana de filtro",
                  "param212":"Número máximo de pasos de tiempo de periodo de filtrado; este valor puede ser más grande de lo necesario",
                  "param213":"Año de 4 dígitos de la hora de finalización de la integración hacia atrás D'FI",
                  "param214":"Mes de 2 dígitos de la hora de finalización de la integración hacia atrás D'FI",
                  "param215":"Dia  de 2 dígitos de la hora de finalización de la integración hacia atrás D'FI",
                  "param216":"Hora de 2 dígitos de la hora de finalización de la integración hacia atrás D'FI",
                  "param217":"Minutos de 2 dígitos de la hora de finalización de la integración hacia atrás D'FI",
                  "param218":"Segundos de 2 dígitos de la hora de finalización de la integración hacia atrás D'FI",
                  "param219":"Año de 4 dígitos de la hora de finalización para la integración hacia adelante DFI",
                  "param220":"Mes de 2 dígitos de la hora de finalización para la integración hacia adelante DFI",
                  "param221":"Día de 2 dígitos de la hora de finalización para la integración hacia adelante DFI",
                  "param222":"Hora de 2 dígitos de la hora de finalización para la integración hacia adelante DFI",
                  "param223":"Minutos de 2 dígitos de la hora de finalización para la integración hacia adelante DFI",
                  "param224":"Segundos de 2 dígitos de la hora de finalización para la integración hacia adelante DFI",
                  "param225":"Interruptor de la asimilación de datos de radar DFI",
                  
                  //----------------------&fdda------------------------------------COMPLETO
                  
                  "param226":"Si es 0 (Por defecto) fuera. Si es 1 análisis de rejilla empujando el. Si es 2 opción nudging análisis espectral",
                  "param227":"Nombre del archivo de entrada FDDA que se produce cuando se ejecuta reales",
                  "param228":"Intervalo de tiempo (en minutos) entre los tiempos de análisis",
                  "param229":"Tiempo (hr) para detener de empuje después del inicio de la previsión",                 
                  "param230":"Formato de datos de análisis. Si es 2 es formato netCDF. Si es 4 es formato PhD5. Si es 5 es formato GRIB1. Si es 10 es formato GRIB2. Si es 11 es formato netCDF",
                  
                  "param231":"Frecuencia de cálculo (en minutos) para nudging análisis; 0 = cada paso de tiempo (que se recomienda)",
                  "param232":"Si es 0 (Por defecto) empujando en el PBL. Si es 1 sin empujones de u y v en el PBL",
                  "param233":"Si es 0 (Por defecto) empujando en el PBL. Si es 1 sin empujones de temperatura en el PBL",
                  "param234":"Si es 0 (Por defecto) empujando en el PBL. Si es 1 sin empujones de vapor en el PBL",
                  "param235":"Si es 0 (Por defecto) empujar u y v en todas las capas. Si es 1 límite de empuje a niveles por encima de  k_zfac_uv",
                  "param236":"Nivel por debajo del cual el modelo de empuje se desconecta para u y v",
                  "param237":"Si es 0 (Por defecto) Temp empujón en todas las capas. Si es 1 el límite de empuje a niveles por encima de k_zfac_t",
                  "param238":"Nivel por debajo del cual el modelo de empuje se desconecta para temp",
                  "param239":"Si es 0 (Por defecto) empujar qvapor en todas las capas. Si es 1 el límite de empuje a niveles por encima de k_zfac_q",
                  "param240":"Nivel por debajo del cual el modelo de empuje se desconecta para qvapor",
                  "param241":"Coeficiente de empuje de u y v (s-1)",
                  "param242":"Empujando coeficiente de temperatura (s-1)",
                  "param243":"Empujando coeficiente de vapor (s-1)",
                  "param244":"Si es 0 (Por defecto) de empuje termina como una función escalonada. Si es 1 el aumento gradual empujando hacia abajo al final del período",
                  "param245":"Tiempo (min) para la función de rampa; 60.0 = rampa comienza en último tiempo de análisis, -60.0 = rampa termina en el último tiempo de análisis",
                  "param246":"Interruptor de superficie FDDA. Si es 0 (Por defecto) apagado.Si es 1 empujando campos de superficie seleccionados. Si es 2 FASDAS (sistema de flujo ajustada por superficie asimilación de datos)",
                  "param247":"Nombre definido para el archivo de entrada Nuding superficie (de obsgrid programa)",
                  "param248":"Intervalo de tiempo (en minutos) entre los tiempos de análisis de superficies",
                  "param249":"Tiempo (en horas) para detener nudging superficie después del inicio de la previsión",
                  "param250":"Formato de análisis de superficie (2 = netCDF)",
                  "param251":"Coeficiente de empuje de u y v (s-1)",
                  
                  "param252":"Empujando coeficiente de temperatura (s-1)",
                  "param253":"Empujando coeficiente de vapor (s-1)",
                  "param254":"Radio de influencia utiliza para determinar la confianza (o pesos) para el análisis, que se basa en la distancia entre el punto de la cuadrícula a la obs más cercano. El análisis sin observación cercana se utiliza en un peso reducido",
                  
                  "param255":"Si es 1 el desplazamiento de tendencias se ponen a cero en las llamadas entre la FDA. Si es 0(Por defecto) no está activo",
                  "param256":"Si es 1 sin empujones de pH en el PBL. Si es 0 (Por defecto) de empuje del pH en el PBL",
                  "param257":"Si es 0 (Por defecto) ph empujón en todas las capas. Si es 1 el límite de empuje a niveles por encima de k_zfac_ph",
                  "param258":"Nivel por debajo del cual el modelo de empuje se apaga durante el pH del agua",
                  "param259":"Empujando coeficiente de ph (s-1)",
                  "param260":"Profundidad en k entre k_zfac_uv a dk_zfac_uv donde los aumentos Nuding linealmente a plena capacidad",
                  "param261":"Profundidad en k entre k_zfac_t a dk_zfac_t donde los aumentos Nuding linealmente a plena capacidad",
                  "param262":"Profundidad en k entre k_zfac_ph a dk_zfac_ph donde los aumentos Nuding linealmente a plena capacidad",
                  "param263":"Número de onda superior a empujar en la dirección x (0 es por defecto)",
                  "param264":"Número de onda superior a empujar en la dirección y (0 es por defecto)",
                                    
                  "param265":"obs-empujando FDDA sucesivamente para cada dominio (por defecto es 0 = apagado); También debe establecer auxinput11 intervalo y auxinput11_end_h bajo y control de tiempo",
                  
                  "param266":"Número máximo de observaciones utilizadas en un dominio durante todas las ventanas de tiempo dados (por defecto es 0)",
                  "param267":"obs tiempo de inicio de empuje (min)",
                  "param268":"Hora de finalización de empuje obs (min)",
                  "param269":"Si es 1 empujar el viento. Si es 0 (Por defecto) apagado",
                  "param270":"Empujando coeficiente de viento (s-1)",
                  "param271":"Si es 1 empuja la temperatura en encendido. Si es 0 (Por defecto) apagado",
                  "param272":"Empujando coeficiente de temperatura (s-1)",
                  "param273":"Si es 1 empujar el vapor de agua de proporción de mezcla. Si es 0 (Por defecto) apagado",
                  "param274":"Empujando coeficiente para el vapor de agua proporción de mezcla (s-1)",
                  "param275":"Empujando coeficiente de presión en la superficie (s-1) (no se utiliza)",
                  "param276":"Radio horizontal de influencia (km; 200 es un valor razonable, pero debe ajustarse, en base a la densidad de datos)",
                  "param277":"Radio vertical de influencia en eta (0,1 es un valor razonable, pero debe ajustarse, en base a la densidad de datos)",
                                   
                  "param278":"Radio vertical de influencia en eta (0,1 es un valor razonable, pero debe ajustarse, en base a la densidad de datos)",
                  "param279":"La frecuencia de malla gruesa timesteps para impresiones de diagnóstico",
                  "param280":"La frecuencia de malla gruesa timesteps para la salida y obs err calc",
                  "param281":"Para la inicialización dinámica utilizando una función de rampa descendente para convertir gradualmente el FDDA antes de la previsión pura (por defecto es 0 = apagado)",
                  
                  "param282":"Período de tiempo (minutos) durante el cual el nudging se reduce hasta de uno a cero",
                  "param283":"obs entradas máximas permitidas en la impresión de diagnóstico",
                  "param284":"Frecuencia en el índice de obs para la impresión de diagnóstico",
                  "param285":"Imprimir los diagnósticos de entrada obs (por defecto es .false. = apagado)",
                  "param286":"Imprimir el diagnóstico de errores obs (por defecto es .false. = apagado)",
                  "param287":"Imprimir diagnóstico de toque ligero obs (por defecto es .false. = apagado)",
                  "param288":"(Por defecto) activar los mensajes de advertencia obs impresa",
                  "param289":"Si es 1 sin viento-de empuje dentro de la PBL. Si es 0 (Por defecto) de empuje del viento dentro de la PBL",
                  "param290":"Si es 1 sin temperatura de empuje dentro de la PBL. Si es 0 (Por defecto) a la temperatura de empuje dentro de la PBL",
                  
                  
                  "param291":"Si es 1 sin humedad de empuje dentro de la PBL. Si es 0 (Por defecto) sin la humedad de empuje dentro de la PBL",
                  
                  "param292":"La influencia de la altura vertical de peso completo para LML OBS, régimen de 1, vientos",
                  "param293":"Influencia vertical de altura de la rampa a cero para LML OBS, régimen de 1, vientos",
                  "param294":"La influencia de la altura vertical de peso completo para LML obs, el régimen 2, vientos",
                  "param295":"Influencia vertical de altura de la rampa a cero para LML obs, el régimen 2, vientos",
                  "param296":"La influencia de la altura vertical de peso completo para LML obs, el régimen 4, vientos",
                  "param297":"Influencia vertical de altura de la rampa a cero para LML obs, el régimen 4, vientos",
                  "param298":"La influencia de la altura vertical de peso completo para LML OBS, régimen de 1, temperatura",
                  "param299":"Influencia vertical de altura de la rampa a cero para LML OBS, régimen de 1, temperatura",
                  "param300":"La influencia de la altura vertical de peso completo para LML obs, el régimen 2, temperatura",
                  "param301":"Influencia vertical de altura de la rampa a cero para LML obs, el régimen 2, temperatura",
                  "param302":"La influencia de la altura vertical de peso completo para LML obs, el régimen 4, temperatura",
                  "param303":"Influencia vertical de altura de la rampa a cero para LML obs, el régimen 4, temperatura",
                  "param304":"La influencia de la altura vertical de peso completo para LML OBS, régimen de 1, temperatura",
                  
                  
                  "param305":"Influencia vertical de altura de la rampa a cero para LML OBS, régimen de 1, temperatura",
                  "param306":"La influencia de la altura vertical de peso completo para LML obs, el régimen 2, temperatura",
                  "param307":"La influencia de la altura vertical, de peso completo para LML obs, el régimen de 2, Temperatura",
                  "param308":"La influencia de la altura vertical de peso completo para LML obs, el régimen 4, temperatura",
                  "param309":"Influencia vertical de altura de la rampa a cero para LML obs, el régimen 4, temperatura",
                  "param310":"Profundidad mínima (m) a través del cual la función de influencia vertical, sigue siendo 1.0",
                   "param311":"Profundidad mínima (m) a través del cual muy NFL FCN disminuye 1-0",
                   "param312":"Profundidad máxima (m) en el que la función vert infl es distinto de cero",
                   "param313":"Factor de escala aplicado a la ventana de tiempo para la superficie obs",
                   "param314":"Factor de escala aplicado a un radio de influencia de horiz obs superficie",
                   "param315":"Max cambio de presión (CB) permite dentro de un radio de influencia horiz",
                   "param316":"Esquema de propagación horizontal para obs superficie. Si es 0 esquema de WRF (por defecto). Si es 1 esquema original MM5",
                   
                  
                  "param317":"Esquema de propagación vertical para la superficie obs. Si es 0 esquema de régimen vif (por defecto). Si es 1 esquema original (esquema simple)",
                   "param318":"Máximo permitido brecha de presión entre sondeos para la interpolación (CB)",
                   "param319":"0: comportamiento por defecto. 1: evitar empujando hacia Qv negativo",
                   
                  //-------------------&stoch-----------------------COMPLETO
                  "param320":"esquema de dispersión de retorno de la energía cinética estocástica activada (0 = desactivado)",
            
                 
                 
                 
                 
                 }


function describir(llave){
	document.getElementById("descripcion").innerHTML=diccionario[llave];

}






