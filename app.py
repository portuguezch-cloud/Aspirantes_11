import os
import streamlit as st
from google import genai
from google.genai import types

# 1. Configuración de página
st.set_page_config(
    page_title="Tutor de Cuadrilla - HSM",
    page_icon="🟣",
    layout="centered"
)

# 2. Base de conocimientos e instrucciones para Gemini
SYSTEM_PROMPT = """
Eres un hermano instructor de la Hermandad del Señor de los Milagros de Nazarenas.
Tu misión es ayudar a los hermanos a repasar y aprender la historia, doctrina y tradiciones de su cuadrilla.

HISTORIA Y DATOS CLAVE DE LA CUADRILLA:
- [AQUÍ PEGAS EL TEXTO CON LA HISTORIA, AÑO DE FUNDACIÓN, FUNDADORES, ANÉCDOTAS, MARCHAS, ETC.]

PAUTAS DE COMPORTAMIENTO:
1. Trata a los usuarios con respeto y fraternidad (usa términos como 'Hermano').
2. Si te piden un repaso general, resume los 3 o 4 hitos más importantes.
3. Si piden una trivia o evaluación, haz 1 pregunta a la vez con opciones (A, B, C) y espera su respuesta antes de corregir y pasar a la siguiente.
4. Si el hermano responde mal, explícale con amabilidad cuál era el dato correcto y por qué.
"""

# 3. Inicializar el cliente de Gemini usando el Secreto de Streamlit
api_key = os.environ.get("GEMINI_API_KEY")

if not api_key:
    st.error("Error: No se encontró la GEMINI_API_KEY en la configuración.")
    st.stop()

client = genai.Client(api_key=api_key)

# 4. Interfaz Visual
st.title("🟣 Repaso de Historia de Cuadrilla")
st.caption("Hermandad del Señor de los Milagros de Nazarenas")

# Botones rápidos para hermanos que no quieren escribir mucho
col1, col2 = st.columns(2)
with col1:
    if st.button("🎯 Iniciar Trivia / Test"):
        st.session_state.messages.append({"role": "user", "content": "Hermano, hazme una pregunta tipo test sobre la historia de nuestra cuadrilla."})
with col2:
    if st.button("📜 Resumen de Hitos"):
        st.session_state.messages.append({"role": "user", "content": "Hermano, dame un resumen de los 4 datos históricos más importantes que todo miembro debe saber."})

# 5. Manejo del historial de chat en pantalla
if "messages" not in st.session_state:
    st.session_state.messages = [
        {"role": "assistant", "content": "¡Paz y Bien, Hermano! ¿Qué tema de nuestra cuadrilla deseas repasar hoy o prefieres iniciar una trivia de práctica?"}
    ]

for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        st.markdown(msg["content"])

# 6. Entrada de texto y respuesta de la IA
if prompt := st.chat_input("Escribe tu duda o respuesta aquí..."):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # Preparar el contexto de la conversación para Gemini
    contents = []
    for m in st.session_state.messages:
        role = "model" if m["role"] == "assistant" else "user"
        contents.append(types.Content(role=role, parts=[types.Part.from_text(text=m["content"])]))

    with st.chat_message("assistant"):
        with st.spinner("Consultando anales..."):
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=contents,
                config=types.GenerateContentConfig(
                    system_instruction=SYSTEM_PROMPT,
                    temperature=0.7
                )
            )
            st.markdown(response.text)
            st.session_state.messages.append({"role": "assistant", "content": response.text})