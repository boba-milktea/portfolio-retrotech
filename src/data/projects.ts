import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "project-01",
        title: "GEO scorer",
        description: "GEO Scorer analyzes readability, structure, factual depth, and authority signals from the user's content to determine its quality and relevance.",
        tags: ["react", "typescript", "Vite", "tailwindCSS"],
        featured: true,
        live: "",
        repo: "https://github.com/boab-milktea/geo-scorer",
    },
    {
        id: "project-02",
        title: "Invoice Dashboard",
        description: "A dashboard for managing invoices and tracking payments.",
        tags: ["react", "typescript", "tailwindCSS", "node.js", "express", "prisma", "sqlite3"],
        featured: true,
        live: "",
        repo: "https://github.com/boab-milktea/invoice-dashboard",
    },
];