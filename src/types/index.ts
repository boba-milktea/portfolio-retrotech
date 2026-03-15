export type PhosphorMode = "green" | "amber";

export interface ThemeContextValue {
    mode: PhosphorMode;
    toggleMode: () => void;
    isAmberMode: boolean;
}; 


export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    live?: string;
    repo?: string;
    featured: boolean; 
}

export interface SkillGroup {
    label: string; 
    skills: string[]; 
}

export interface ContactLink {
    prefix: string; 
    label: string; 
    href: string; 
}