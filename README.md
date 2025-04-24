# Page de progrès pour le coté Backend de l'application

<h3 align='center'>Fonctionnalité de notre API Interne</h3>

### Client
    http://localhost:{port}/client/...
- add
- remove/{username}
- getOnlineStatus/{username}
- getAll
- getByUsername/{username}
- getByEmail/{email}
- getById/{id}
- updateFname/{username}/{fname}
- updateLname/{username}/{lname}
- updateEmail/{username}/{email}
- updatePassword/{username}/{password}

### Subcription
    http://localhost:{port}/subscription/...
- geStatus/{username}
- updateStatus/{username} ***in progress

### Connection
    http://localhost:{port}/connection/...
- logout/{username}
- login/{username}/{password}
- signin

## Autre fonction a implémenter
- Détaillée les gestions d'erreurs
- Les controleurs gère pas les epsaces dans les variables
