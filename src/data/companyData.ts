import { ServiceItem, IndustrySector, DemoTour, MethodologyStep, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Duplica Digital',
  tagline: 'Tours Virtuales 360° & Captura Espacial de Alta Precisión',
  slogan: 'Transformamos espacios físicos en experiencias digitales inmersivas y medibles.',
  phone: '+52 (811) 618-7697',
  phoneClean: '528116187697',
  whatsapp: '+52 (811) 618-7697',
  email: 'contacto@duplicadigital.mx',
  address: 'Venustiano Carranza Nte. #500, Plaza Comercial Carranza , Monterrey Nuevo Leon',
  coverage: 'Cobertura en la República Mexicana',
  stats: [
    { value: '+80,000 m²', label: 'Espacios Capturados' },
    { value: '100%', label: 'Satisfacción del Cliente' },
    { value: '+125', label: 'Proyectos Entregados' },
    { value: '72 horas', label: 'Tiempo de Entrega' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'tours-360',
    title: 'Tours Virtuales 360° Inmersivos',
    shortDesc: 'Recorridos virtuales fotorrealistas con navegación fluida, puntos de interés interactivos y compatibilidad multidispositivo.',
    fullDesc: 'Capturamos inmuebles y espacios comerciales utilizando sensores ópticos de alta resolución. Creamos un recorrido virtual navegable 24/7 donde sus clientes pueden explorar libremente, interactuar con fichas técnicas y tomar medidas en tiempo real.',
    iconName: 'Compass',
    features: [
      'Navegación tipo "Dollhouse" (Vista 3D 360°)',
      'Etiquetas multimedia e información interactiva (Hotspots)',
      'Modo VR compatible con gafas de Realidad Virtual',
      'Integración directa en sitio web sin plugins'
    ],
    deliverables: ['Enlace web autohospedado', 'Código para embeber iFrame', 'Galería de fotos 4K extraídas del tour']
  },
  {
    id: 'drone-360',
    title: 'Fotografía & Video Aéreo 360° con Dron',
    shortDesc: 'Captura aérea panorámica en alta resolución para contextualizar la ubicación y entorno de desarrollo de proyectos.',
    fullDesc: 'Integramos panorámicas aéreas 360° tomadas con drones certificados para conectar el entorno urbano o natural con los interiores de sus propiedades o instalaciones industriales.',
    iconName: 'Camera',
    features: [
      'Resolución fotográfica aérea hasta 8K',
      'Puntos de interés geolocalizados (Vías de acceso, servicios cercanos)',
      'Transición sin costuras entre toma aérea y recorrido interior',
      'Pilotos con certificación ante la AFAC'
    ],
    deliverables: ['Panorámicas aéreas 360° navegables', 'Fotografías ortomosaico', 'Video aéreo publicitario']
  },
  {
    id: 'google-streetview',
    title: 'Publicación en Google Street View',
    shortDesc: 'Posicionamiento y recorrido virtual publicado en Google Maps y Google My Business para atraer clientes locales.',
    fullDesc: 'Certificación oficial de Google Street View Trusted. Vinculamos la fachada e interiores de su negocio directamente en su ficha de Google Maps, incrementando la visibilidad orgánica y la confianza del consumidor.',
    iconName: 'MapPin',
    features: [
      'Publicación oficial certificada en Google Maps',
      'Aumento directo en el perfil de Google My Business',
      'Orientación y navegación vinculada a calles principales',
      'Optimización SEO local para búsquedas en mapas'
    ],
    deliverables: ['Integración directa en Google Maps', 'Reporte de visualizaciones mensuales']
  }
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    number: '01',
    title: 'Planeación & Diagnóstico Espacial',
    subtitle: 'Análisis de necesidades y preparación del inmueble',
    description: 'Definimos los objetivos del recorrido, los puntos de interés clave (hotspots) y coordinamos la logística de captura en sitio con un plan de ruta óptimo.',
    details: [
      'Revisión previa de condiciones de iluminación y ordenamiento',
      'Identificación de zonas prioritarias y áreas restringidas',
      'Definición de elementos interactivos (fichas, videos, enlaces)'
    ]
  },
  {
    number: '02',
    title: 'Captura Láser y Fotogramétrica en Sitio',
    subtitle: 'Levantamiento de datos sin interrumpir operaciones',
    description: 'Nuestro equipo técnico especializado realiza el escaneo 360° e infrarrojo de alta densidad con equipos de tecnología óptica avanzada.',
    details: [
      'Tiempos de captura rápidos (aprox. 100m² por hora)',
      'Escaneo silencioso sin afectar las actividades del cliente',
      'Verificación in-situ de calidad y alineación espacial'
    ]
  },
  {
    number: '03',
    title: 'Procesamiento, Cosido & Enriquecimiento',
    subtitle: 'Edición técnica y diseño de la experiencia inmersiva',
    description: 'Ensamblamos las imágenes HDR, corregimos colorimetría y programamos los elementos interactivos, marcas de agua y menús de navegación.',
    details: [
      'Alineación y calibración tridimensional de la escena',
      'Integración de menús, logotipos institucionales y planos 2D',
      'Inserción de tags inteligentes con información comercial'
    ]
  },
  {
    number: '04',
    title: 'Entrega, Hospedaje & Soporte Continuo',
    subtitle: 'Integración multidispositivo lista para compartir',
    description: 'Entregamos el tour virtual listo para ser publicado en sitios web, portales inmobiliarios, redes sociales o presentaciones privadas.',
    details: [
      'Hospedaje seguro y de alta velocidad con respaldo continuo',
      'Códigos de integración para web y redes sociales',
      'Métricas periódicas de visitantes y tiempo de interacción'
    ]
  }
];

export const SECTORS: IndustrySector[] = [
  {
    id: 'inmobiliario',
    name: 'Sector Inmobiliario & Desarrollos',
    description: 'Filtre clientes potenciales calificados, reduzca visitas físicas innecesarias y acelere el cierre de rentas y ventas de inmuebles residenciales y corporativos.',
    benefits: ['+300% más tiempo de permanencia en anuncios', '-60% visitas físicas no calificadas', 'Comercialización activa 24 horas al día'],
    imageSeed: 'realestate',
    iconName: 'Building'
  },
  {
    id: 'arquitectura',
    name: 'Arquitectura, Ingeniería & Construcción',
    description: 'Documente avances de obra con precisión milimétrica, obtenga levantamientos as-built y evite retrabajos en campo.',
    benefits: ['Documentación dimensional precisa', 'Coordinación fluida entre contratistas', 'Generación de nubes de puntos para Revit'],
    imageSeed: 'architecture',
    iconName: 'Ruler'
  },
  {
    id: 'hoteleria',
    name: 'Hotelería, Resorts & Salones de Eventos',
    description: 'Transmita la atmósfera y dimensiones reales de sus suites, spas y centros de convenciones a viajeros y organizadores de eventos.',
    benefits: ['Mayor conversión en reservas directas', 'Visualización inmersiva de áreas comunes', 'Presentaciones comerciales para bodas y congresos'],
    imageSeed: 'hotel',
    iconName: 'Bed'
  },
  {
    id: 'eventos',
    name: 'Salones de Fiesta & Eventos',
    description: 'Muestre a sus clientes la distribución y capacidad de sus salones, permitiéndoles visualizar la magia de su evento antes de reservar.',
    benefits: ['Mayor conversión en reservaciones', 'Recorridos virtuales para planeadores de eventos', 'Visualización de montajes y decoración'],
    imageSeed: 'party',
    iconName: 'Users'
  },
  {
    id: 'cultura',
    name: 'Museos, Galerías & Educación',
    description: 'Preserve el patrimonio cultural y amplíe el alcance de sus exposiciones a una audiencia global sin barreras geográficas.',
    benefits: ['Acceso universal para instituciones educativas', 'Archivado digital de colecciones históricas', 'Experiencias de aprendizaje interactivo'],
    imageSeed: 'museum',
    iconName: 'Landmark'
  }
];

export const DEMO_TOURS: DemoTour[] = [
  {
    id: 'mikeno',
    title: 'Mikeno',
    category: 'Inmobiliario Residencial',
    location: 'Monterrey, Nuevo León',
    area: '650 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Modo Dollhouse 3D', 'Herramienta de Medición', 'Hotspots de Acabados Premium'],
    features: ['Captura HDR 8K', 'Plano 2D Interactivo', 'Staging de Iluminación'],
    hotspotsCount: 18,
    link: 'https://storage.net-fs.com/hosting/8404654/4/'
  },
  {
    id: 'terrenos-cumbres',
    title: 'Terrenos Cumbres',
    category: 'Industria & Manufactura',
    location: 'Monterrey, Nuevo León',
    area: '4,200 m²',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Nube de Puntos BIM', 'Etiquetado de Seguridad', 'Zonas de Descarga'],
    features: ['Escaneo LiDAR de alta velocidad', 'Acceso seguro restringido', 'Capas de inventario'],
    hotspotsCount: 32,
    link: 'https://storage.net-fs.com/hosting/8404654/13/'
  },
  {
    id: 'el-palmar',
    title: 'El Palmar',
    category: 'Comercial & Oficinas',
    location: 'Monterrey, Nuevo León',
    area: '380 m²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Vínculo con Ficha de Compra', 'Recorrido Guiado Automático', 'Google Street View Integration'],
    features: ['Etiquetas e-commerce integradas', 'Audio ambiental inmersivo', 'Optimización móvil'],
    hotspotsCount: 24,
    link: 'https://storage.net-fs.com/hosting/8404654/15/'
  },
  {
    id: 'edificio',
    title: 'Pixels',
    category: 'Hotelería & Turismo',
    location: 'Monterrey, Nuevo León',
    area: '1,200 m²',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Vistas Panorámicas 360° Aéreas', 'Reservación Directa de Habitaciones', 'Galería Fotográfica HD'],
    features: ['Captura con Dron 360°', 'Transición Día/Noche', 'Soporte Multilingüe'],
    hotspotsCount: 28,
    link: 'https://storage.net-fs.com/hosting/8404654/14/'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Cuánto tiempo toma realizar el escaneo de un espacio?',
    answer: 'El tiempo promedio de captura es de aproximadamente 1 a 2 horas por cada 100 m² de superficie. Para inmuebles residenciales u oficinas estándar (150 m² - 300 m²), el trabajo de campo suele completarse en una sola mañana.',
    category: 'tiempos'
  },
  {
    question: '¿Qué se necesita para preparar el espacio antes de la captura?',
    answer: 'Se recomienda que el inmueble esté perfectamente limpio, despejado de objetos personales o confidenciales y con la iluminación principal encendida. Nuestro equipo brindará una guía rápida de preparación previa.',
    category: 'general'
  },
  {
    question: '¿Cómo se integran los tours virtuales en mi propio sitio web?',
    answer: 'Entregamos un código iFrame estándar de fácil inserción, compatible con WordPress, Wix, Webflow, Shopify o portales inmobiliarios (como Inmuebles24, Lamudi, Metros Cúbicos). Funciona igual de sencillo que embeber un video.',
    category: 'tecnico'
  },
  {
    question: '¿Los recorridos son compatibles con teléfonos móviles y visores VR?',
    answer: 'Sí. Todos nuestros recorridos son 100% adaptables (responsive) para celulares, tabletas y computadoras. Además, cuentan con un botón directo para navegación inmersiva en visores de Realidad Virtual como Meta Quest.',
    category: 'tecnico'
  },
  {
    question: '¿Puedo obtener planos 2D y archivos 3D CAD/Revit a partir del escaneo?',
    answer: 'Por supuesto. Al utilizar sensores LiDAR y cámaras ópticas de alta definición, podemos procesar planos arquitectónicos 2D esquemáticos, modelos 3D y nubes de puntos compatibles con software como AutoCAD y Revit.',
    category: 'tecnico'
  },
  {
    question: '¿Dónde se hospedan los recorridos virtuales?',
    answer: 'Ofrecemos hospedaje seguro en servidores en la nube de alta disponibilidad y rápido tiempo de carga, garantizando disponibilidad 24/7 con soporte técnico de mantenimiento.',
    category: 'general'
  }
];
