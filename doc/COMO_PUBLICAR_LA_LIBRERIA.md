# Como publicar la librería en nexus3 y luego usarla en otros proyectos

# Publicar librería

_**Nota**: esto se hace directamente desde el Jenkins, no hay que hacerlo localmente_

* Login en el registro que queremos publicar
```
    npm login --registry=http://192.168.134.9:8081/repository/npm-snapshots/
```
* Construcción de la librería
``` 
    ng build @netex/ux-components
```
* Nos colocamos en la carpeta de la distribución de la librería
```
    cd dist/netex/ux-components
```
* Publicamos la librería indicando el registro
```
    npm publish --registry=http://192.168.134.9:8081/repository/npm-snapshots/
    ó
    npm publish --registry=http://192.168.134.9:8081/repository/npm-releases/
```

# Uso de la librería

Debemos añadir en el fichero .npmrc (ya sea en el proyecto o en el global) donde está el registro de las librerías "netex", para ellos añadimos:

```
    @netex:registry=http://192.168.134.9:8081/repository/npm-group/
```

A partir de este momento ya podemos hacer un install normal de la librería:
```
    npm install @netex/ux-components
```

_**Nota**: el arquetipo ya tendrá incluida esta dependencia_

