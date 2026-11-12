export const slugi = [
    'skoki-narciarskie',
    'biegi-narciarskie',
    'kombinacja-norweska',
    'biathlon',
    'lyzwiarsto-szybkie',
    'short-track',
    'narciarstwo-alpejskie',
    'snowboard',
    'lyzwiarstwo-figurowe',
    'saneczkarstwo',
] as const;

export type Dyscyplina = (typeof slugi)[number];

export const nazwy: Record<Dyscyplina, string> = {
    'skoki-narciarskie': 'Skoki narciarskie',
    'biegi-narciarskie': 'Biegi narciarskie',
    'kombinacja-norweska': 'Kombinacja norweska',
    'biathlon': 'Biathlon',
    'lyzwiarstwo-szybkie': 'Łyżwiarstwo szybkie',
    'short-track': 'Short track',
    'narciarstwo-alpejskie': 'Narciarstwo alpejskie',
    'snowboard': 'Snowboard',
    'lyzwiarstwo-figurowe': 'Łyżwiarstwo figurowe',
    'saneczkarstwo': 'Saneczkarstwo',
};