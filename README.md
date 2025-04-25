# Page de progrès pour le coté Backend de l'application

<h3 align='center'>Fonctionnalité de notre API Interne</h3>

### Client
    http://localhost:{port}/client/...
- PUT remove/{id}
- PUT update/{id}
- PUT updatePassword/{id}/{password}

### Subcription
    http://localhost:{port}/subscription/...
- GET geStatus/{id}
- PUT updateStatus/{id}

### Connection
    http://localhost:{port}/connection/...
- PUT logout/{id}
- GET login
- POST signUp

## Autre fonction a implémenter
- Détaillée les gestions d'erreurs
- Les controleurs gère pas les epsaces dans les variables
- GET Login doit retourner id
