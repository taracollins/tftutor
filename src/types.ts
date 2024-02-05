export interface TftComponent {
    name: string
    iconPath: string
    metadata: ElementMetadata
}

export interface TftCompletedItem extends TftComponent {
    parts: [TftComponent, TftComponent]
}

export interface ElementMetadata {
    description: string
    stats: Stats
} 

export interface Stats {
    attackDamage?: number
    attackSpeed?: number
    armor?: number
    abilityPower?: number
    magicResist?: number
    mana?: number
    health?: number
    critChance?: number
}

export type Screen = "Home" | "GuessComponents" | "GuessItemByComponent" | "GuessItemByDescription" | "TFTItems"

export enum Difficulty {
    Bronze = "Bronze",
    Gold = "Gold",
    Diamond = "Diamond",
    Challenger = "Challenger"
}