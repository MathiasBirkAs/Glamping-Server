# 🧪 Postman-kollektion – Gittes Glamping: User CRUD

Denne Postman-kollektion tester CRUD-operationer for User-modellen i Gittes Glamping-projektet.

## 🧠 Hvad kollektionen tester

| Metode | Endpoint              | Beskrivelse               |
|--------|-----------------------|---------------------------|
| GET    | /users                | Hent alle brugere         |
| GET    | /users/:id            | Hent én bruger via ID     |
| POST   | /users                | Opret ny bruger           |
| PUT    | /users/:id            | Opdater bruger            |
| DELETE | /users/:id            | Slet bruger               |

Alle endpoints er testet lokalt via:  
`http://localhost:5000`

---

## 📥 Sådan importerer du kollektionen i Postman

1. Åbn Postman
2. Klik på **"Import"** (øverst til venstre)
3. Vælg **"Upload Files"** og vælg `user-crud.postman_collection.json`
4. Kollektionen vises i din sidebar klar til brug
5. Husk at starte din backend før test:
   ```bash
   node server.js
