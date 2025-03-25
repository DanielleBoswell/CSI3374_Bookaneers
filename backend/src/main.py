import psycopg2
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import pandas as pd
import logging
import sys

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/search')
def search_books(query: str = Query(..., min_length=1)):
    # Connect to an existing database
    conn = psycopg2.connect("dbname=default_database user=username password=password host=db port=5432")
    cur = conn.cursor()
    cur.execute('SELECT book_name AS "Book Name", author AS "Author" FROM books WHERE book_name LIKE %s', ("%{}%".format(query),))
    columns = list(cur.description)
    result = cur.fetchmany(size=5)
    # transform result

    # make dict
    results = []
    for row in result:
        row_dict = {}
        for i, col in enumerate(columns):
            row_dict[col.name] = row[i]
        results.append(row_dict)

    # matches = matches.to_dict(orient='records')
    # results = matches[['book_name', 'author']].head(to_return)

    return results

@app.get("/view_book")
def view_book(query: str = Query(..., min_length=1)):
    # Connect to an existing database
    conn = psycopg2.connect("dbname=default_database user=username password=password host=db port=5432")
    cur = conn.cursor()
    cur.execute('SELECT book_name AS "Book Name", author AS "Author" FROM books WHERE book_name = %s', (query,))
    columns = list(cur.description)
    result = cur.fetchone()
    # transform result
    # make dict
    print(result)

    results = [{'Book Name': result[0], 'Author': result[1]}]

    return results

@app.get("/")
def root():
    return {"message": " from FastAPI!"}
