# Como publicar la librería en nexus3 y luego usarla en otros proyectos

# Publicar librería

_**Nota**: esto se hace directamente desde el Jenkins, no hay que hacerlo localmente_

* Login en el registro que queremos publicar
```
    npm login --registry=https://nexus.netexlearning.com/repository/npm-netex-snapshots/ --scope=@netex
    ó
    npm login --registry=https://nexus.netexlearning.com/repository/npm-netex-releases/ --scope=@netex
```
* Construcción de la librería (construye librería angular y crea css de estilos globales)
``` 
    npm run build-ux-components
```
* Nos colocamos en la carpeta de la distribución de la librería
```
    cd dist/netex/ux-components
```
* Publicamos la librería indicando el registro
```
    npm publish --registry=https://nexus.netexlearning.com/repository/npm-netex-snapshots/
    ó
    npm publish --registry=https://nexus.netexlearning.com/repository/npm-netex-releases/
```

# Uso de la librería

Debemos añadir en el fichero .npmrc (ya sea en el proyecto o en el global) donde está el registro de las librerías "netex", para ellos añadimos:

```
    @netex:registry=https://nexus.netexlearning.com/repository/npm-internal/
```

Debemos logarnos en nexus para poder descargar la librería, con nuestro usuario de netex:
```
    npm login --registry=https://nexus.netexlearning.com/repository/npm-internal/ --scope=@netex
```

A partir de este momento ya podemos hacer un install normal de la librería:
```
    npm install @netex/ux-components@0.0.1 --save
```
e incluimos el tema css "node_modules/@netex/ux-components/themes/default.theme.css" dentro del array styles en el fichero angular.json (también podemos importarlo en el fichero styles.scss)

_**Nota**: el arquetipo ya tendrá incluida esta dependencia_

