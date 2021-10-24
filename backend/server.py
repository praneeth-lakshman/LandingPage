from fastapi import FastAPI
from Logic.algo import assign_all
from Logic.timetable import export_week
from Logic.emails import get_all_emails as gae

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return "Working"

@app.get("/algo")
async def algo(imp: str = "Maths", hobby: str = "Reading"):
    return assign_all(imp=imp, hob=hobby)

@app.get("/timetable")
async def timetable():
    return export_week


@app.get("/emails")
async def emails():
    return gae()