 # Page de progrès pour le coté Backend de l'application

<h3 align='center'>Fonctionnalité de notre API Interne</h3>

### Client
    http://localhost:{port}/client/...
- PUT remove/{username}
- PUT update/{username}/{newEmail}/{neWFname}/{newLname}
- PUT updatePassword/{username}/{newPassword}
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
- POST login/{username}/{password}
- POST signUp

## Autre fonction a implémenter
- Détaillée les gestions d'erreurs
