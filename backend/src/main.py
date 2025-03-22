from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BOOKS = pd.read_csv('/data/Books_Data_Clean.csv')

@app.get('/search')
def search_books(query: str = Query(..., min_length=1)):
    matches = BOOKS['Book Name'].str.contains(query, case=False, na=False)
    to_return = max(5, len(matches))
    results = BOOKS[matches][['Book Name', 'Author']].head(to_return)
    return results.to_dict(orient='records')


@app.get("/")
def root():
    return {"message": "Hello from FastAPI!"}
