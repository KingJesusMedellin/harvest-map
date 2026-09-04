export type Lang = "en" | "es";

export const translations = {
  en: {
    "app.loadError":
      "Could not load user data right now. Please try again later.",
    "app.serviceUnavailable":
      "The user service is unavailable right now. Please try again later.",
    "app.international": "Outside Colombia 🌐",
    "drawer.activeUsers": "{count} Active Users",
    "drawer.id": "ID: {id}",
    "drawer.noUsers": "No users found inside this region.",
    "drawer.userFallback": "User #{id}",
    "drawer.noContact": "No contact email provided",
    "summary.viewLeaderboard": "View Distribution Leaderboard",
    "summary.title": "Regional Distribution",
    "summary.subtitle": "Live metrics by department",
    "summary.loading": "Loading user data...",
    "summary.totalUsers": "Total users: {count}",
    "errorToast.title": "Service Error",
    "lang.switchTo": "Switch to Spanish",
  },
  es: {
    "app.loadError":
      "No se pudo cargar la información de los usuarios en este momento. Intenta de nuevo más tarde.",
    "app.serviceUnavailable":
      "El servicio de usuarios no está disponible en este momento. Por favor intenta de nuevo más tarde.",
    "app.international": "Fuera de Colombia 🌐",
    "drawer.activeUsers": "{count} Usuarios Activos",
    "drawer.id": "ID: {id}",
    "drawer.noUsers": "No se encontraron usuarios en esta región.",
    "drawer.userFallback": "Usuario #{id}",
    "drawer.noContact": "Sin información de contacto",
    "summary.viewLeaderboard": "Ver tabla de distribución",
    "summary.title": "Distribución Regional",
    "summary.subtitle": "Métricas en vivo por departamento",
    "summary.loading": "Cargando información de usuarios...",
    "summary.totalUsers": "Total de usuarios: {count}",
    "errorToast.title": "Error del Servicio",
    "lang.switchTo": "Cambiar a inglés",
  },
} satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["en"];
