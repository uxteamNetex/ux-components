# Requisitos

* node versión LTS y npm. Descargándo el zip de la página web y estableciéndolo en el PATH del usuario es suficiente (no se necesitan permisos de root)
* angular-cli:
```
    npm i -g @angular/cli
```

# Preparación del proyecto

## Nuevo proyecto

    ng new ux-components --routing --style sass --skip-tests

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

Eliminamos de `angular.json` la inclusión del fichero css indigo-pink.css y lo añadimos como import al fichero styles.sass, para que esté mas visible y se cambie posteriormente por los estilos incluidos en la librería que generemos

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
    ng generate library ntx-lib --prefix ntx
```
* Limpiamos los ficheros de test
* Se añade sección schematics similar a la del padre para cambiar estilo a sass y evitar creación de specs
* Se borran el servicio, modulo y componente creados por defecto

## Creación de un módulo

Los módulos nos permitirán organizar los componentes y que la aplicación a desarrollar indique que módulos quiere importar (similar a material)

    ng g module --project ntx-lib NtxMatDummy

Se añade al fichero `public_api.ts` el exports a la ruta del módulo (`export * from './lib/ntx-mat-dummy/ntx-mat-dummy.module';`) para que pueda ser usado por la aplicación

## Creación de un componente

* Se genera el componente
```
    ng g component --project ntx-lib ntx-mat-dummy/Dummy
```
_En este caso, el selector será `ntx-dummy`, se puede especificar otro en la creación, o cambiarlo después_
* Se añade a la sección exports del módulo NtxMatDummy (crearla en caso necesario)
* Se añade al fichero `public_api.ts` el exports a la ruta del componente (`export * from './lib/ntx-mat-dummy/dummy/dummy.component';`)

