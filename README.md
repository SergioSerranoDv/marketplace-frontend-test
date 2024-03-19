# MagicLog technical test 
The application is build with react, leveraging its component-based architecture. Additionally, it adheres to SOLID principles, ensuring robutness, maintainability, and scalability. 

## Directories structure ASCII
Cloning the repository will result in the following files:
```
Redux aSyncStorage/
├── auth
│   ├── loggedIn
│   └── userData
│       ├── sub
│       ├── nickname
│       ├── name
│       ├── picture
│       ├── updatedAt
│       ├── email
│       ├── emailVerified
│       └── drEnvioToken
├── status
│   └── loading
└── user
    ├── profile/
    │   ├── created_at
    │   ├── _id
    │   ├── user
    │   ├── email
    │   ├── phone
    │   ├── company
    │   ├── name
    │   ├── country
    │   ├── enterado
    │   └── reg_method
    └── info/
        ├── balance
        ├── app_version
        ├── _id
        ├── user
        ├── app_country
        ├── created_at
        ├── sub_users
        ├── roles/
        │   ├── COMMON
        │   ...
        └── security/
            ├── international_senders
            ├── isBlocked
            ├── vip
            ├── _id
            ├── identity_verified
            ├── senders_verified
            └── senders/
                ├── ...
                ...

```

## Scripts to run de application
In the project directory, you can run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Deployment 
The application is deployed on vps with the use of nginx as reverse proxy and pm2 as services manager.


