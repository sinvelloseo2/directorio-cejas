import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const RESULTS_DIR = 'C:/Users/sinve/.claude/projects/C--Users-sinve-Desktop-Repos/175b2d3d-d38b-4390-ba5c-6b9f5405941a/tool-results';

// Map API region names to Spanish province names
const REGION_MAP = {
  'Madrid': 'Madrid',
  'Barcelona': 'Barcelona',
  'Valencia': 'Valencia',
  'Seville': 'Sevilla',
  'Málaga': 'Málaga',
  'Malaga': 'Málaga',
  'Zaragoza': 'Zaragoza',
  'Alicante': 'Alicante',
  'Murcia': 'Murcia',
  'Biscay': 'Bizkaia',
  'Bizkaia': 'Bizkaia',
  'Gipuzkoa': 'Gipuzkoa',
  'Asturias': 'Asturias',
  'A Coruña': 'A Coruña',
  'Granada': 'Granada',
  'Cádiz': 'Cádiz',
  'Cadiz': 'Cádiz',
  'Balearic Islands': 'Illes Balears',
  'Illes Balears': 'Illes Balears',
  'Las Palmas': 'Las Palmas',
  'Santa Cruz de Tenerife': 'Santa Cruz de Tenerife',
  'Huesca': 'Huesca',
  'Navarre': 'Navarra',
  'Navarra': 'Navarra',
  'Pontevedra': 'Pontevedra',
  'Lugo': 'Lugo',
  'Cantabria': 'Cantabria',
  'Almería': 'Almería',
  'Jaén': 'Jaén',
  'Córdoba': 'Córdoba',
  'Huelva': 'Huelva',
  'Toledo': 'Toledo',
  'Castellón': 'Castellón',
  'Girona': 'Girona',
  'Tarragona': 'Tarragona',
  'Lleida': 'Lleida',
  'Álava': 'Álava',
  'La Rioja': 'La Rioja',
  'Valladolid': 'Valladolid',
  'Badajoz': 'Badajoz',
  'Cáceres': 'Cáceres',
  'Salamanca': 'Salamanca',
  'León': 'León',
  'Burgos': 'Burgos',
  'Guadalajara': 'Guadalajara',
  'Ciudad Real': 'Ciudad Real',
  'Cuenca': 'Cuenca',
  'Segovia': 'Segovia',
  'Ávila': 'Ávila',
  'Soria': 'Soria',
  'Teruel': 'Teruel',
  'Zamora': 'Zamora',
  'Palencia': 'Palencia',
  'Ourense': 'Ourense',
};

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatCategoria(cat) {
  const map = {
    'beauty_salon': 'Salón de belleza',
    'eyebrow_bar': 'Bar de cejas',
    'permanent_make_up_clinic': 'Clínica de maquillaje permanente',
    'beautician': 'Esteticista',
    'eyelash_salon': 'Salón de pestañas',
    'facial_spa': 'Spa facial',
    'makeup_artist': 'Maquillador/a',
    'nail_salon': 'Salón de uñas',
    'hair_salon': 'Peluquería',
    'unisex_hairdresser': 'Peluquería unisex',
    'laser_hair_removal_service': 'Depilación láser',
    'hair_removal_service': 'Depilación',
    'tattoo_artist': 'Tatuador/a',
    'tattoo_removal_service': 'Eliminación de tatuajes',
    'wellness_center': 'Centro de bienestar',
    'health_and_beauty_shop': 'Tienda de belleza',
    'massage_therapist': 'Masajista',
    'beauty_supply_store': 'Tienda de productos de belleza',
    'image_consultant': 'Asesor/a de imagen',
    'stylist': 'Estilista',
    'hair_extension_technician': 'Extensiones de cabello',
    'barber_supply_store': 'Barbería',
    'waxing_hair_removal_service': 'Depilación con cera',
  };
  return map[cat] || cat.replace(/_/g, ' ');
}

// Read all JSON files
const files = readdirSync(RESULTS_DIR).filter(f => f.endsWith('.json'));
const allBusinesses = new Map(); // cid -> business

for (const file of files) {
  const raw = readFileSync(join(RESULTS_DIR, file), 'utf-8');
  let data;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed[0]?.text) {
      data = JSON.parse(parsed[0].text);
    } else if (parsed.items) {
      data = parsed;
    } else {
      console.error(`Unknown format in ${file}`);
      continue;
    }
  } catch (e) {
    console.error(`Failed to parse ${file}: ${e.message}`);
    continue;
  }

  if (!data.items) {
    console.error(`No items in ${file}`);
    continue;
  }

  for (const item of data.items) {
    if (!item.cid || allBusinesses.has(item.cid)) continue;
    if (!item.address_info?.region) continue;

    // Skip non-Spanish businesses (e.g. Portugal results from border searches)
    if (item.address_info?.country_code && item.address_info.country_code !== 'ES') continue;

    // Skip businesses with status "closed_forever"
    if (item.work_time?.work_hours?.current_status === 'closed_forever') continue;

    const region = REGION_MAP[item.address_info.region] || item.address_info.region;

    allBusinesses.set(item.cid, {
      cid: item.cid,
      nombre: item.title?.replace(/[^\w\sáéíóúñüÁÉÍÓÚÑÜ.,\-()&|/!¿?¡'"@#:;]+/g, '').trim() || '',
      descripcion: item.description || '',
      categoria: formatCategoria(item.category_ids?.[0] || 'beauty_salon'),
      categorias: (item.category_ids || []).map(formatCategoria),
      direccion: item.address_info?.address || '',
      ciudad: item.address_info?.city || '',
      region: region,
      codigo_postal: item.address_info?.zip || '',
      barrio: item.address_info?.borough || null,
      telefono: item.phone || '',
      web: item.url || '',
      dominio: item.domain || '',
      rating: item.rating?.value || null,
      num_resenas: item.rating?.votes_count || 0,
      rating_distribucion: item.rating_distribution || {},
      latitud: item.latitude || null,
      longitud: item.longitude || null,
      verificado: item.is_claimed || false,
      imagen: item.main_image || '',
      total_fotos: item.total_photos || 0,
      horarios: item.work_time?.work_hours?.timetable || {},
      estado: item.work_time?.work_hours?.current_status || 'unknown',
      atributos: item.attributes?.available_attributes || {},
      google_maps_url: item.check_url || '',
      ultima_actualizacion: item.last_updated_time || '',
    });
  }
}

// Group by province
const provincias = {};
for (const [, biz] of allBusinesses) {
  const provSlug = slugify(biz.region);
  if (!provincias[provSlug]) {
    provincias[provSlug] = {
      nombre: biz.region,
      capital: '',
      capital_slug: '',
      total: 0,
      capital_negocios: [],
      subcities: {},
    };
  }

  const prov = provincias[provSlug];
  const citySlug = slugify(biz.ciudad);

  if (!prov.subcities[citySlug]) {
    prov.subcities[citySlug] = {
      nombre: biz.ciudad,
      negocios: [],
    };
  }

  prov.subcities[citySlug].negocios.push(biz);
  prov.total++;
}

// Determine capitals (city with most businesses in each province)
const KNOWN_CAPITALS = {
  'madrid': 'Madrid', 'barcelona': 'Barcelona', 'valencia': 'València',
  'sevilla': 'Sevilla', 'malaga': 'Málaga', 'zaragoza': 'Zaragoza',
  'alicante': 'Alicante', 'murcia': 'Murcia', 'bizkaia': 'Bilbao',
  'asturias': 'Oviedo', 'a-coruna': 'A Coruña', 'granada': 'Granada',
  'cadiz': 'Cádiz', 'illes-balears': 'Palma', 'las-palmas': 'Las Palmas de Gran Canaria',
  'santa-cruz-de-tenerife': 'Santa Cruz de Tenerife', 'huesca': 'Huesca',
  'navarra': 'Pamplona',
};

for (const [provSlug, prov] of Object.entries(provincias)) {
  const capitalName = KNOWN_CAPITALS[provSlug];
  if (capitalName) {
    const capitalSlug = slugify(capitalName);
    // Find matching subcity
    const match = Object.entries(prov.subcities).find(([slug, sc]) =>
      slug === capitalSlug || sc.nombre.toLowerCase().includes(capitalName.toLowerCase())
    );
    if (match) {
      prov.capital = match[1].nombre;
      prov.capital_slug = match[0];
      prov.capital_negocios = match[1].negocios;
      delete prov.subcities[match[0]];
    } else {
      // Fallback: largest city
      const sorted = Object.entries(prov.subcities).sort((a, b) => b[1].negocios.length - a[1].negocios.length);
      if (sorted.length > 0) {
        prov.capital = sorted[0][1].nombre;
        prov.capital_slug = sorted[0][0];
        prov.capital_negocios = sorted[0][1].negocios;
        delete prov.subcities[sorted[0][0]];
      }
    }
  } else {
    // No known capital: use largest city
    const sorted = Object.entries(prov.subcities).sort((a, b) => b[1].negocios.length - a[1].negocios.length);
    if (sorted.length > 0) {
      prov.capital = sorted[0][1].nombre;
      prov.capital_slug = sorted[0][0];
      prov.capital_negocios = sorted[0][1].negocios;
      delete prov.subcities[sorted[0][0]];
    }
  }
}

const output = {
  total: allBusinesses.size,
  provincias_count: Object.keys(provincias).length,
  fecha_scraping: new Date().toISOString().split('T')[0],
  provincias,
};

const outPath = join('C:/Users/sinve/Desktop/Repos/Astro/directorio-cejas/src/data', 'negocios.json');
writeFileSync(outPath, JSON.stringify(output, null, 0));

console.log(`Total businesses: ${output.total}`);
console.log(`Provinces: ${output.provincias_count}`);
for (const [slug, prov] of Object.entries(provincias).sort((a, b) => b[1].total - a[1].total)) {
  const subcityCount = Object.keys(prov.subcities).length;
  console.log(`  ${prov.nombre} (${slug}): ${prov.total} businesses, capital: ${prov.capital} (${prov.capital_negocios.length}), ${subcityCount} subcities`);
}
