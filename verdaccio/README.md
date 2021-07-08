# Verdaccio playground

Created to locally test volume mounting and security for [Verdaccio](https://verdaccio.org/) NPM registry.


## Commands

#### Start container
```
docker-compose up
```

#### SSH
```
docker-compose exec verdaccio sh
```

#### Remove container
Use to verify that storage volume persists across containers.
```
docker-compose rm verdaccio
```
