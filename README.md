# 🐾 PawsCloud - Gestión Veterinaria Inteligente

PawsCloud es una solución de software diseñada para modernizar la gestión de clínicas veterinarias. Este MVP se centra en centralizar la información médica de los perritos y automatizar tareas administrativas críticas como la emisión de recetas y el control de vacunación.

## 🚀 Características (MVP)
- **Expediente Digital 360°:** Registro detallado de mascotas, incluyendo peso, raza, edad y alertas médicas.
- **Módulo de Consultas:** Registro cronológico de visitas, síntomas y tratamientos.
- **Recetario Automático:** Generación de PDFs profesionales con el plan de tratamiento.
- **Control de Inmunización:** Semáforo de vacunas (Vencidas/Próximas/Al día).

## 🛠️ Stack Tecnológico
- **Frontend:** React.js, Tailwind CSS (Interfaz limpia y amigable).
- **Backend:** Python 3.10+, FastAPI (Alto rendimiento y validación de tipos).
- **Base de Datos:** SQLite / PostgreSQL (Vía SQLModel o SQLAlchemy).
- **Documentación API:** Swagger UI (Integrado en `/docs`).

## 📂 Estructura del Proyecto
```text
pawscloud/
├── backend/            # FastAPI app
│   ├── app/
│   │   ├── models/     # Esquemas de BD
│   │   ├── routes/     # Endpoints de API
│   │   └── utils/      # Generador de PDF y lógica de fechas
├── frontend/           # React app
│   ├── src/
│   │   ├── components/ # UI reusable (Tablas, Cards)
│   │   ├── pages/      # Dashboard, Perfil Mascota
│   │   └── hooks/      # Fetching de datos
└── docs/               # Manuales o capturas de pantalla
