# Page de progrès pour le coté Backend de l'application

<h3 align='center'>Fonctionnalité de notre API Interne</h3>

### Client
    http://localhost:{port}/client/...
- PUT remove/{username}
- PUT updateFname/{username}/{fname}
- PUT updateLname/{username}/{lname}
- PUT updateEmail/{username}/{email}
- PUT updatePassword/{username}/{password}

### Subcription
    http://localhost:{port}/subscription/...
- GET geStatus/{username}
- PUT updateStatus/{username}

### Connection
    http://localhost:{port}/connection/...
- PUT logout/{username}
- PUT login
- POST signUp

## Autre fonction a implémenter
- Détaillée les gestions d'erreurs
- Les controleurs gère pas les epsaces dans les variables
