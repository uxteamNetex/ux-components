# Requisitos

* node versión LTS y npm. Descargándo el zip de la página web y estableciéndolo en el PATH del usuario es suficiente (no se necesitan permisos de root)
* angular-cli:
```
    npm i -g @angular/cli@v6-lts
```

# Preparación del proyecto

## Nuevo proyecto

    ng new ux-components --routing --style scss --skip-tests

## Angular material

Añadimos angular material con:

    ng add @angular/material

Añadimos hammerjs:

    npm install --save hammerjs

y añadimos el siguiente import a `main.ts`

    import 'hammerjs';

Creamos un CoreModule que importamos en AppModule, y un SharedModule que importamos en CoreModule

    ng g module core -m app.module
    ng g module shared -m core/core.module

En el SharedModule importamos los componentes de material que queramos

## Borramos todo lo relacionado con tests

Ya que no se van a usar nada de test, para hacer el proyecto mas limpio:

* borramos los ficheros de test y e2e
* eliminamos las dependencias karma y protractor relacionadas con test
* eliminamos de la sección `architect` en angular.json, el modulo `test`
* eliminamos el proyecto `ux-components-e2e` del angular.json
* eliminamos de las sección `lint` el archivo `src/tsconfig.spec.json`

## Creamos componente core para el layout

    ng g component -m core/core.module core/components/layout --export

## Creamos modulo con enrutado y componente para la página home de demo

    ng g module home --routing
    ng g component home --routing -m home

Añadimos los enrutados base a `app-routing.module.ts` y el enrutado al HomeComponent en `home-routing.module.ts`



//////////////////// REVISAR: necesario el sidebar y el service? No debería ir el sidebar como componente de la librería ?


# Creación de la librería

## Proyecto librería

* Creamos la librería
```
    ng generate library @netex/ux-components --prefix ntx
```
  * _Necesitamos una organización "@netex" para luego indicar en el fichero .npmrc de las aplicaciones, de donde obtener las librerías de la organización_
* Limpiamos los ficheros de test
* Se añade sección schematics similar a la del padre para cambiar estilo a scss y evitar creación de specs
* Se borran el servicio, modulo y componente creados por defecto

(Para la creación de módulos y componentes ver el fichero COMO_CREAR_COMPONENTES_EN_LA_LIBRERIA.md)

## Inclusión de estilos globales

Eliminamos de `angular.json` la inclusión del fichero css indigo-pink.css y delegamos en el styles.scss de la librería

La construcción de la librería no añade los estilos globales, así que para pasar los ficheros sass globales a css instalamos la dependencia `sass-pack` y creamos nuevos scripts de utilidad en el fichero `package.json`
