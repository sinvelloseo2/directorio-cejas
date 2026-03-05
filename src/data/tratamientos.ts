export interface FAQItem {
	pregunta: string;
	respuesta: string;
}

export interface Tratamiento {
	nombre: string;
	slug: string;
	descripcion: string;
	descripcionCorta: string;
	duracion: string;
	tiempoSesion: string;
	nivelDolor: string;
	precioMedioMin: number;
	precioMedioMax: number;
	faq: FAQItem[];
}

export const tratamientos: Tratamiento[] = [
	{
		nombre: 'Microblading',
		slug: 'microblading',
		descripcion: 'Técnica semipermanente de micropigmentación que dibuja cejas pelo a pelo con una cuchilla manual de microagujas. Ideal para rellenar cejas poco pobladas, corregir asimetrías o rediseñar la forma completa. El pigmento se deposita en la capa superficial de la piel, creando trazos ultrafinos que imitan el vello natural.',
		descripcionCorta: 'Cejas pelo a pelo con pigmentación semipermanente',
		duracion: '12-18 meses',
		tiempoSesion: '2-3 horas',
		nivelDolor: 'Bajo-medio (se usa anestesia tópica)',
		precioMedioMin: 200,
		precioMedioMax: 500,
		faq: [
			{
				pregunta: '¿Cuánto dura el microblading?',
				respuesta: 'El microblading dura entre 12 y 18 meses dependiendo del tipo de piel, la exposición solar y los cuidados posteriores. Las pieles grasas tienden a retener menos el pigmento. Se recomienda un retoque a las 4-6 semanas de la primera sesión.',
			},
			{
				pregunta: '¿Duele el microblading?',
				respuesta: 'El dolor es bajo-medio gracias a la anestesia tópica que se aplica antes del procedimiento. La mayoría de personas lo describen como una molestia leve, similar a pequeños arañazos en la piel.',
			},
			{
				pregunta: '¿Cuánto cuesta el microblading en España?',
				respuesta: 'El precio del microblading en España oscila entre 200€ y 500€ dependiendo de la ciudad, la experiencia del profesional y si incluye retoque. Madrid y Barcelona suelen tener los precios más altos.',
			},
		],
	},
	{
		nombre: 'Laminado de cejas',
		slug: 'laminado-cejas',
		descripcion: 'Tratamiento químico que alisa, fija y redirige el vello de las cejas para crear un efecto peinado y voluminoso. Perfecto para cejas rebeldes o con crecimiento irregular. Incluye tinte para intensificar el color y dar mayor definición sin necesidad de maquillaje diario.',
		descripcionCorta: 'Alisado y fijación para cejas definidas y voluminosas',
		duracion: '6-8 semanas',
		tiempoSesion: '45-60 minutos',
		nivelDolor: 'Nulo',
		precioMedioMin: 28,
		precioMedioMax: 65,
		faq: [
			{
				pregunta: '¿Cuánto dura el laminado de cejas?',
				respuesta: 'El laminado de cejas dura entre 6 y 8 semanas. El resultado va desapareciendo gradualmente a medida que crece el vello nuevo. Para mantener el efecto se recomienda repetir el tratamiento cada 6 semanas.',
			},
			{
				pregunta: '¿Es seguro el laminado de cejas?',
				respuesta: 'Sí, es un tratamiento seguro cuando lo realiza un profesional cualificado. Se utilizan productos específicos para la zona de cejas. No se recomienda en pieles muy sensibles o con heridas abiertas en la zona.',
			},
			{
				pregunta: '¿Se puede hacer laminado y tinte a la vez?',
				respuesta: 'Sí, de hecho es lo más habitual. La mayoría de profesionales incluyen el tinte en el servicio de laminado para conseguir un resultado más completo y definido.',
			},
		],
	},
	{
		nombre: 'Extensiones de pestañas',
		slug: 'extensiones-pestanas',
		descripcion: 'Aplicación de pestañas sintéticas o de seda una a una sobre las pestañas naturales con adhesivo profesional. Existen técnicas clásicas (1:1), híbridas y de volumen (abanico). Añaden longitud, curvatura y densidad para una mirada más expresiva sin necesidad de máscara.',
		descripcionCorta: 'Pestañas pelo a pelo para volumen y longitud',
		duracion: '3-6 semanas',
		tiempoSesion: '1.5-2.5 horas',
		nivelDolor: 'Nulo',
		precioMedioMin: 45,
		precioMedioMax: 150,
		faq: [
			{
				pregunta: '¿Cuánto duran las extensiones de pestañas?',
				respuesta: 'Las extensiones duran entre 3 y 6 semanas dependiendo del ciclo natural de caída de las pestañas y los cuidados. Se recomiendan retoques cada 2-3 semanas para mantener un aspecto completo.',
			},
			{
				pregunta: '¿Dañan las pestañas naturales?',
				respuesta: 'No, si se aplican correctamente por un profesional cualificado. El adhesivo es especial para uso ocular y las extensiones se adaptan al grosor de cada pestaña natural. Es importante no tirar ni frotar las extensiones.',
			},
			{
				pregunta: '¿Qué diferencia hay entre clásicas, híbridas y volumen?',
				respuesta: 'Las clásicas aplican 1 extensión por pestaña natural (efecto natural). Las híbridas mezclan clásicas con abanicos (efecto intermedio). Las de volumen aplican abanicos de 2-6 extensiones finas por pestaña (efecto dramático).',
			},
		],
	},
	{
		nombre: 'Lifting de pestañas',
		slug: 'lifting-pestanas',
		descripcion: 'Tratamiento de rizado semipermanente que curva y eleva las pestañas naturales desde la raíz usando moldes de silicona y soluciones fijadoras. El resultado es una mirada más abierta y expresiva sin añadir material artificial. Se suele combinar con tinte para mayor impacto.',
		descripcionCorta: 'Rizado permanente que eleva tus pestañas naturales',
		duracion: '6-8 semanas',
		tiempoSesion: '45-60 minutos',
		nivelDolor: 'Nulo',
		precioMedioMin: 30,
		precioMedioMax: 70,
		faq: [
			{
				pregunta: '¿Cuánto dura el lifting de pestañas?',
				respuesta: 'El lifting dura entre 6 y 8 semanas, coincidiendo con el ciclo de renovación natural de las pestañas. El efecto va desapareciendo gradualmente sin necesidad de retirada.',
			},
			{
				pregunta: '¿Se puede hacer lifting con extensiones?',
				respuesta: 'No se recomienda combinar ambos tratamientos. El lifting trabaja sobre las pestañas naturales y los productos químicos podrían debilitar el adhesivo de las extensiones.',
			},
			{
				pregunta: '¿Qué diferencia hay entre lifting y extensiones?',
				respuesta: 'El lifting curva tus pestañas naturales sin añadir nada extra. Las extensiones añaden pestañas sintéticas para más longitud y volumen. El lifting requiere menos mantenimiento pero el resultado es más sutil.',
			},
		],
	},
	{
		nombre: 'Micropigmentación',
		slug: 'micropigmentacion',
		descripcion: 'Técnica de maquillaje permanente que implanta pigmento en la dermis mediante una máquina de agujas. A diferencia del microblading (manual), la micropigmentación usa un dermógrafo eléctrico que permite técnicas como powder brows (efecto sombreado), ombré brows o combinado con pelo a pelo.',
		descripcionCorta: 'Maquillaje permanente con dermógrafo para cejas definidas',
		duracion: '1-3 años',
		tiempoSesion: '2-3 horas',
		nivelDolor: 'Bajo (se usa anestesia tópica)',
		precioMedioMin: 230,
		precioMedioMax: 600,
		faq: [
			{
				pregunta: '¿Cuánto dura la micropigmentación de cejas?',
				respuesta: 'La micropigmentación dura entre 1 y 3 años dependiendo de la técnica utilizada, el tipo de piel y los cuidados. Al depositar el pigmento más profundamente que el microblading, el resultado es más duradero.',
			},
			{
				pregunta: '¿Qué diferencia hay entre microblading y micropigmentación?',
				respuesta: 'El microblading usa una cuchilla manual para hacer trazos pelo a pelo. La micropigmentación usa un dermógrafo eléctrico que permite técnicas variadas como sombreado o efecto ombré. La micropigmentación suele durar más y es mejor para pieles grasas.',
			},
			{
				pregunta: '¿Se puede corregir una micropigmentación mal hecha?',
				respuesta: 'Sí, mediante sesiones de láser o con técnicas de camuflaje con pigmento corrector. Es importante acudir a un profesional experimentado para las correcciones. El proceso puede requerir varias sesiones.',
			},
		],
	},
	{
		nombre: 'Tinte de cejas',
		slug: 'tinte-cejas',
		descripcion: 'Coloración semipermanente del vello de las cejas con tinte vegetal o sintético. Tratamiento rápido que intensifica el color, define la forma y da aspecto de cejas más pobladas al teñir también los vellos más finos y claros que normalmente pasan desapercibidos.',
		descripcionCorta: 'Coloración rápida para cejas más definidas e intensas',
		duracion: '3-4 semanas',
		tiempoSesion: '15-20 minutos',
		nivelDolor: 'Nulo',
		precioMedioMin: 10,
		precioMedioMax: 25,
		faq: [
			{
				pregunta: '¿Cuánto dura el tinte de cejas?',
				respuesta: 'El tinte de cejas dura entre 3 y 4 semanas en el vello y alrededor de 1 semana en la piel. La duración depende del tipo de tinte (henna dura más) y de la frecuencia de limpieza facial.',
			},
			{
				pregunta: '¿Es seguro teñirse las cejas?',
				respuesta: 'Sí, siempre que se utilicen productos específicos para la zona de cejas y se realice un test de alergia previo. Los tintes para cabello NO deben usarse en cejas. Es recomendable acudir a un profesional.',
			},
			{
				pregunta: '¿Henna o tinte sintético para cejas?',
				respuesta: 'La henna es natural, tiñe también la piel (efecto sombreado) y dura más. El tinte sintético es más rápido, tiñe solo el vello y ofrece colores más variados. La henna es mejor para cejas poco pobladas.',
			},
		],
	},
];

export function getTratamientoBySlug(slug: string): Tratamiento | undefined {
	return tratamientos.find((t) => t.slug === slug);
}
