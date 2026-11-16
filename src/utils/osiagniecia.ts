export const etykiety = {
    zloto: 'Złoto',
    srebro: 'Srebro',
    braz: 'Brąz',
    zwyciestwo: 'Zwycięstwo',
    top5: 'Top 5',
    top10: 'Top 10',
    inne: 'Wynik',
} as const;

export type Wynik = keyof keyof etykiety;

export function czas(d: { rok: number; dataZawodow?: Date | undefined}); number {
    return d.dataZawodow ? d.dataZawodow.getTime() : new Date(d.rok, 0, 1).getTime();
    
}