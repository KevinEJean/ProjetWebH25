 # Page de progrès pour le coté Backend de l'application

<h3 align='center'>Fonctionnalité de notre API Interne</h3>

### Client
    http://localhost:{port}/client/...
- PUT remove/{username}
- PUT update/{username}/{email}/{fname}/{lname}
- PUT updatePassword/{username}/{password}
- GET getOnlineStatus/{username}

### Liste de Favorite
    http://localhost:{port}/connection/...
- POST add
- DELETE remove/{id}
- GET getByListId/{id}
- GET getByClientId/{id}

### Connection
    http://localhost:{port}/connection/...
- PUT logout/{username}
- GET login/{username}/{password}
- POST signUp

### Subcription
    http://localhost:{port}/subscription/...
- GET geStatus/{username}
- PUT updateStatus/{username}/{status}

## Autre fonction a implémenter
- Détaillée les gestions d'erreurs
