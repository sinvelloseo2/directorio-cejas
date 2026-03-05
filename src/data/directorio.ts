import data from './negocios.json';

export interface Negocio {
	cid: string;
	nombre: string;
	descripcion: string;
	categoria: string;
	categorias: string[];
	direccion: string;
	ciudad: string;
	region: string;
	codigo_postal: string;
	barrio: string | null;
	telefono: string;
	web: string;
	dominio: string;
	rating: number | null;
	num_resenas: number;
	rating_distribucion: Record<string, number>;
	latitud: number | null;
	longitud: number | null;
	verificado: boolean;
	imagen: string;
	total_fotos: number;
	horarios: Record<string, any>;
	estado: string;
	atributos: Record<string, string[]>;
	google_maps_url: string;
	ultima_actualizacion: string;
}

export interface SubCity {
	nombre: string;
	negocios: Negocio[];
}

export interface ProvinciaData {
	nombre: string;
	capital: string;
	capital_slug: string;
	total: number;
	capital_negocios: Negocio[];
	subcities: Record<string, SubCity>;
}

export interface DatosDirectorio {
	total: number;
	provincias_count: number;
	fecha_scraping: string;
	provincias: Record<string, ProvinciaData>;
}

const directorio = data as unknown as DatosDirectorio;

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export function getProvincias(): [string, ProvinciaData][] {
	return Object.entries(directorio.provincias)
		.sort((a, b) => b[1].total - a[1].total);
}

export function getProvincia(slug: string): ProvinciaData | undefined {
	return directorio.provincias[slug];
}

export function getCapitalNegocios(provSlug: string): Negocio[] {
	return directorio.provincias[provSlug]?.capital_negocios || [];
}

export function getSubcities(provSlug: string): [string, SubCity][] {
	const prov = directorio.provincias[provSlug];
	if (!prov) return [];
	return Object.entries(prov.subcities)
		.sort((a, b) => b[1].negocios.length - a[1].negocios.length);
}

export function getSubcityNegocios(provSlug: string, citySlug: string): Negocio[] {
	return directorio.provincias[provSlug]?.subcities[citySlug]?.negocios || [];
}

export function getNegocio(provSlug: string, negocioSlug: string): Negocio | undefined {
	const prov = directorio.provincias[provSlug];
	if (!prov) return undefined;

	// Search in capital
	const fromCapital = prov.capital_negocios.find((n) => slugify(n.nombre) === negocioSlug);
	if (fromCapital) return fromCapital;

	// Search in subcities
	for (const [, sc] of Object.entries(prov.subcities)) {
		const found = sc.negocios.find((n) => slugify(n.nombre) === negocioSlug);
		if (found) return found;
	}
	return undefined;
}

export function renderEstrellas(rating: number | null): string {
	if (!rating) return '';
	const full = Math.floor(rating);
	const half = rating - full >= 0.25 && rating - full < 0.75;
	const empty = 5 - full - (half ? 1 : 0);
	return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

export function getTotalNegocios(): number {
	return directorio.total;
}

export function getProvinciasCount(): number {
	return directorio.provincias_count;
}

export function getFechaScraping(): string {
	return directorio.fecha_scraping;
}
