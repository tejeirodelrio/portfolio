// 1. Importar las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Definir un `type` y `schema` para cada colección
const work = defineCollection({
    type: 'content', // v2.5.0 y posteriores
    schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string().optional(),
    img_alt: z.string().optional(),
  }),
});

// 3. Exportar un único objeto `collections` para registrar tu(s) colección(es)
export const collections = {
  'work': work,
};