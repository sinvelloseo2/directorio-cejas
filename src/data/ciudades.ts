export interface TratamientoCiudad {
	slug: string;
	nombre: string;
	precioMin: number;
	precioMax: number;
	profesionales: number;
}

export interface Ciudad {
	nombre: string;
	slug: string;
	comunidad: string;
	descripcion: string;
	poblacion: number;
	tratamientos: TratamientoCiudad[];
}

export const ciudades: Ciudad[] = [
	{
		nombre: 'Madrid',
		slug: 'madrid',
		comunidad: 'Comunidad de Madrid',
		descripcion: 'Capital de España y mayor mercado de tratamientos estéticos de cejas y pestañas. Gran variedad de profesionales y estudios especializados en todas las zonas.',
		poblacion: 3_300_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 250, precioMax: 500, profesionales: 185 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 35, precioMax: 65, profesionales: 210 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 60, precioMax: 150, profesionales: 195 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 40, precioMax: 70, profesionales: 175 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 300, precioMax: 600, profesionales: 95 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 12, precioMax: 25, profesionales: 230 },
		],
	},
	{
		nombre: 'Barcelona',
		slug: 'barcelona',
		comunidad: 'Cataluña',
		descripcion: 'Referente en tendencias de belleza y estética en España. Alta concentración de estudios especializados en el Eixample y Gràcia.',
		poblacion: 1_660_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 230, precioMax: 480, profesionales: 160 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 35, precioMax: 60, profesionales: 180 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 55, precioMax: 140, profesionales: 170 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 38, precioMax: 65, profesionales: 155 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 280, precioMax: 550, profesionales: 80 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 12, precioMax: 22, profesionales: 200 },
		],
	},
	{
		nombre: 'Valencia',
		slug: 'valencia',
		comunidad: 'Comunidad Valenciana',
		descripcion: 'Tercera ciudad de España con un sector de estética en pleno crecimiento. Precios competitivos y profesionales de alta calidad.',
		poblacion: 800_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 200, precioMax: 400, profesionales: 85 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 30, precioMax: 55, profesionales: 95 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 45, precioMax: 120, profesionales: 90 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 35, precioMax: 60, profesionales: 80 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 250, precioMax: 480, profesionales: 45 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 10, precioMax: 20, profesionales: 110 },
		],
	},
	{
		nombre: 'Sevilla',
		slug: 'sevilla',
		comunidad: 'Andalucía',
		descripcion: 'Capital andaluza con fuerte demanda de tratamientos de cejas y pestañas. Destacan los estudios del centro histórico y Nervión.',
		poblacion: 685_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 180, precioMax: 380, profesionales: 65 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 28, precioMax: 50, profesionales: 75 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 40, precioMax: 110, profesionales: 70 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 30, precioMax: 55, profesionales: 60 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 230, precioMax: 450, profesionales: 35 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 10, precioMax: 18, profesionales: 85 },
		],
	},
	{
		nombre: 'Málaga',
		slug: 'malaga',
		comunidad: 'Andalucía',
		descripcion: 'Ciudad costera con alta demanda turística que impulsa el sector de estética. Zona centro y Costa del Sol concentran la oferta.',
		poblacion: 580_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 190, precioMax: 400, profesionales: 55 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 30, precioMax: 52, profesionales: 65 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 45, precioMax: 115, profesionales: 60 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 32, precioMax: 58, profesionales: 50 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 240, precioMax: 460, profesionales: 30 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 10, precioMax: 20, profesionales: 70 },
		],
	},
	{
		nombre: 'Bilbao',
		slug: 'bilbao',
		comunidad: 'País Vasco',
		descripcion: 'Referente del norte de España en estética avanzada. Alta calidad de servicio y profesionales muy formados en las últimas técnicas.',
		poblacion: 347_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 220, precioMax: 450, profesionales: 40 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 35, precioMax: 60, profesionales: 48 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 50, precioMax: 130, profesionales: 45 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 38, precioMax: 65, profesionales: 38 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 270, precioMax: 520, profesionales: 22 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 12, precioMax: 22, profesionales: 55 },
		],
	},
	{
		nombre: 'Zaragoza',
		slug: 'zaragoza',
		comunidad: 'Aragón',
		descripcion: 'Quinta ciudad de España con un mercado de estética en expansión. Buenos precios y profesionales cualificados en el centro y alrededores.',
		poblacion: 675_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 180, precioMax: 370, profesionales: 45 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 28, precioMax: 50, profesionales: 55 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 40, precioMax: 110, profesionales: 50 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 30, precioMax: 55, profesionales: 42 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 230, precioMax: 440, profesionales: 25 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 10, precioMax: 18, profesionales: 60 },
		],
	},
	{
		nombre: 'Alicante',
		slug: 'alicante',
		comunidad: 'Comunidad Valenciana',
		descripcion: 'Ciudad mediterránea con fuerte influencia turística en el sector estético. Precios accesibles y buena oferta en la zona de playas y centro.',
		poblacion: 338_000,
		tratamientos: [
			{ slug: 'microblading', nombre: 'Microblading', precioMin: 180, precioMax: 360, profesionales: 35 },
			{ slug: 'laminado-cejas', nombre: 'Laminado de cejas', precioMin: 25, precioMax: 48, profesionales: 42 },
			{ slug: 'extensiones-pestanas', nombre: 'Extensiones de pestañas', precioMin: 40, precioMax: 105, profesionales: 38 },
			{ slug: 'lifting-pestanas', nombre: 'Lifting de pestañas', precioMin: 28, precioMax: 52, profesionales: 32 },
			{ slug: 'micropigmentacion', nombre: 'Micropigmentación', precioMin: 220, precioMax: 420, profesionales: 18 },
			{ slug: 'tinte-cejas', nombre: 'Tinte de cejas', precioMin: 10, precioMax: 18, profesionales: 48 },
		],
	},
];

export function getCiudadBySlug(slug: string): Ciudad | undefined {
	return ciudades.find((c) => c.slug === slug);
}
