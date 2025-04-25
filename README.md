# Page de progrès pour le coté Backend de l'application

<h3 align='center'>Fonctionnalité de notre API Interne</h3>

### Client
    http://localhost:{port}/client/...
- PUT remove/{username}
- PUT update/{username}
- PUT updatePassword/{username}/{password}

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
- Les controleurs gère pas les epsaces dans les variables
- GET Login doit retourner id
