import logging

from fastapi import FastAPI
import uvicorn

from core.config import config

from routes.user import users_router

logging.basicConfig(level=logging.INFO)

app = FastAPI(
    title=config.PROJECT_NAME,
)


@app.get("/")
def health_check():
    return "Hello world"


app.include_router(users_router, prefix="/users")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=config.PORT, reload=True)
