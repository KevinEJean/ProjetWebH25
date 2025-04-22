# Page de progrès pour le coté Backend de l'application

## Fonction de notre API Interne
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
- updateStatus/{username}

### Connection
    http://localhost:{port}/connection/...
- loginHandler/{username}
- logout/{username}
- login/{username}/{password}
- signin

## Autre fonction a implémenter
- Détaillée les gestions d'erreurs
- Les controleurs gère pas les epsaces dans les variables
