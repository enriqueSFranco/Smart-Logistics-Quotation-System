# 📦 Smart Logistics Quotation System

**Sistema Inteligente de Cotización Logística**

> Rol: *Full Stack Software Engineer*
> Stack: *React, TypeScript, Python, FastAPI*
> Tipo: *Proyecto de simulación profesional (Consultoría)*

---

## 🧠 Contexto

Las empresas de logística realizan cotizaciones complejas considerando múltiples variables como distancia, peso, volumen, tipo de mercancía, seguros y tiempos de entrega.
En muchas PYMEs este proceso sigue siendo **manual**, propenso a errores y lento, lo que impacta directamente en ventas y operaciones.

Este proyecto simula un **encargo real de consultoría técnica** para diseñar y desarrollar un sistema de cotización logística escalable y automatizado.

---

## 🎯 Problema

Antes del sistema:

* Cotizaciones hechas en Excel o manualmente
* Cálculos inconsistentes entre vendedores
* Difícil comparación de escenarios
* Sin trazabilidad ni historial
* Alta dependencia del conocimiento humano

---

## 💡 Solución Propuesta

Diseñé un **sistema web de cotización logística** que:

* Automatiza cálculos complejos
* Centraliza reglas de negocio
* Permite simulación de escenarios
* Guarda historial y métricas
* Está preparado para escalar

---

## 🧩 Alcance del Sistema

### Usuarios

* Ejecutivos de ventas
* Operadores logísticos
* Administradores

### Funcionalidades clave

* Formulario avanzado de cotización
* Motor de reglas de negocio
* Simulación de escenarios
* Historial y versionado de cotizaciones
* Panel administrativo
* Exportación (PDF / CSV)

---

## ⚙️ Funcionalidades Detalladas

### 1️⃣ Cotización Inteligente

* Origen / destino
* Peso y volumen
* Tipo de carga
* Prioridad de entrega
* Servicios extra (seguro, manejo especial)

### 2️⃣ Motor de Reglas

* Tarifas por zona
* Costos variables
* Márgenes configurables
* Penalizaciones y descuentos
* Reglas versionadas

> *Separé la lógica de negocio del frontend para mantener consistencia y escalabilidad.*

---

### 3️⃣ Simulación de Escenarios

* Comparar rutas
* Cambiar proveedor
* Ajustar tiempos
* Ver impacto en costos en tiempo real

---

### 4️⃣ Historial y Trazabilidad

* Todas las cotizaciones quedan almacenadas
* Versionado por cambios
* Auditoría básica

---

## 🧱 Arquitectura del Sistema

### Arquitectura General

* Cliente Web (React)
* API REST (FastAPI)
* Motor de reglas desacoplado
* Base de datos relacional

### Frontend

* React + TypeScript
* Formularios complejos
* Manejo avanzado de estado
* Validaciones
* UX orientada a eficiencia

### Backend

* FastAPI
* Endpoints REST
* Capa de servicios
* Motor de cálculo aislado
* Validación de datos

---

## 🗂️ Estructura de Carpetas (Backend)

```txt
app/
├── api/
│   ├── routes/
│   │   ├── quotes.py
│   │   └── rules.py
├── core/
│   ├── config.py
│   └── security.py
├── domain/
│   ├── models.py
│   ├── pricing_engine.py
│   └── rules.py
├── services/
│   └── quotation_service.py
├── db/
│   ├── models.py
│   └── session.py
└── main.py
```

---

## 🧠 Decisiones Técnicas Clave

### 🔹 Motor de Reglas Desacoplado

* Permite cambiar reglas sin tocar UI
* Facilita pruebas unitarias
* Escalable a futuros clientes

### 🔹 Separación de Capas

* UI → API → Dominio → Infraestructura
* Código mantenible y testeable

### 🔹 Enfoque Consultivo

* Modelé el problema antes de escribir código
* Priorizando reglas claras sobre complejidad técnica

---

## 📊 Métricas y Resultados (Simulados)

* ⏱️ Tiempo de cotización: de ~15 min → **< 1 min**
* ❌ Errores humanos reducidos significativamente
* 📈 Mejor comparación de escenarios
* 🧠 Menor dependencia del conocimiento individual

---

## 🚀 Roadmap Futuro

* App móvil (React Native)
* Integración con APIs de carriers
* Machine Learning para predicción de costos
* Autenticación avanzada
* Multi-empresa

---

## 🧑‍💻 Aprendizajes Clave

* Modelar reglas de negocio es más importante que el framework
* La arquitectura importa incluso en proyectos pequeños
* Pensar como consultor mejora las soluciones técnicas
* La separación de dominio facilita la escalabilidad

---

> “Este proyecto simula una consultoría real. Mi enfoque fue entender el negocio antes de escribir código. Diseñé un motor de reglas desacoplado y una arquitectura clara para resolver un problema común en logística: cotizaciones lentas y propensas a errores.”

---

## 🏁 Conclusión

**Smart Logistics Quotation System** demuestra:

* Pensamiento de ingeniería
* Diseño de sistemas
* Lógica de negocio compleja
* Capacidad full stack
* Mentalidad profesional
