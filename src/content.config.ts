import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const sportowcy = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/sportowcy'}),
    schema: z.object({
        imie: z.string(),
        nazwisko: z.string(),
        dataUrodzenia: z.coerce.date(),
        krotkiOpis: z.string().max(200),
    }),
});

const osiagniecia = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/osiagniecia' }),
    schema: z.object({
        sportowiec: reference('sportowcy'),
        rok: z.number().int(),
        zawody: z.string(),
        miejsce: z.string(),
        konkurencja: z.string(),
        wynik: z.enum(['zloto', 'srebro', 'braz', 'top5', 'top10', 'zwyciestwo', 'inne' ]),
        zrodlo: z.url(),    
    }),
})

export const collections = { sportowcy, osiagniecia };
