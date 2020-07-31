My Trello Task List: https://trello.com/b/yyPEDXhE/no-db-project

# Alejandro's No-DB To Do List

### MVP

Description: A Movie App that lists my favorite movies!

Features: 

- User can view my favorite movies, one at a time

- User can add their favorite movies, one at a time

- User can delete my favorite movies

- User can edit my movie info or poster (replace the poster with a different poster of the same movies please)

### SERVER
Dependencies: Express

Endpoints:

- app.get("/api/movies")
- app.post("/api/movies")
- app.delete("/api/movies/:id")

Structure:

- server/
    - index.js
    - controller.js
    - movies.json

### CLIENT

Dependencies: Axios

Structure:

- src/
    - App.js
    - App.css
    - reset.css
    - components/
        - Header.js
        - Posters.js
            - Poster.js (child) 
        - Info.js


