 # Page de progrès pour le coté Backend de l'application

<h3 align='center'>Fonctionnalité de notre API Interne</h3>

### Client
    http://localhost:{port}/client/...
- PUT remove/{username}/{password}
- PUT updatePassword/{username}/{newPassword}
- GET getOnlineStatus/{username}
- GET getById/{id}

### Liste de Favorite
    http://localhost:{port}/connection/...
- POST add/{clientId}, body: { favorite: [] }
- DELETE remove/{clientId}/{movieApiId}
- GET getByListId/{clientId}/{movieApiId}
- GET getByClientId/{clientId}

### Connection
    http://localhost:{port}/connection/...
- PUT logout/{id}
- POST login, body : { username: string, password: string }
- POST signUp, body : { username: string, email: string, password: string }
