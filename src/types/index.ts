export type PhosphorMode = "green" | "amber";

export interface ThemeContextValue {
    mode: PhosphorMode;
    toggleMode: () => void;
    isAmberMode: boolean;
}; 