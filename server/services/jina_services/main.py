from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from scipy.spatial.distance import cosine

app = FastAPI()
model = SentenceTransformer("jinaai/jina-embeddings-v2-base-en")

class Texts(BaseModel):
    texts: list[str]

@app.post("/embed")
async def embed_texts(payload: Texts):
    embeddings = model.encode(payload.texts)
    return {"embeddings": embeddings.tolist()}
