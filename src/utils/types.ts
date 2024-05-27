export interface dishT {
    name: string | null,
    imageUrl: string | null,
    description: string | null,
    date: Date | null,
    caption: string | null
}

export interface NutrientT {
    calories: number,
    protein: number,
    carbs: number,
    fat: number,
    fiber: number,
    water: number,
    serving_size: number
}

export interface DailyIntakeT {
    date: string,
    macronutrients: NutrientT
}