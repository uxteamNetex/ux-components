# Creación de un módulo

Los módulos nos permitirán organizar los componentes y que la aplicación a desarrollar indique que módulos quiere importar (similar a material)

    ng g module --project @netex/ux-components NtxMatDummy

Se añade al fichero `public_api.ts` el exports a la ruta del módulo (`export * from './lib/ntx-mat-dummy/ntx-mat-dummy.module';`) para que pueda ser usado por la aplicación

# Creación de un componente

* Se genera el componente
```
    ng g component --project @netex/ux-components ntx-mat-dummy/Dummy
```
_En este caso, el selector será `ntx-dummy`, se puede especificar otro en la creación, o cambiarlo después_
* Se añade a la sección exports del módulo NtxMatDummy (crearla en caso necesario)

# Desarrollo

Para poder usar la librería, hay que construirla cada vez que cambiemos algo

    ng build @netex/ux-components

Para evitar esto, hay un nuevo flag que la construirá con cada cambio (hacerlo en una ventana nueva, ya que se quedará en primer plano)

    ng build @netex/ux-components --watch

Ahora ya podemos arrancar el servidor de desarrollo

    ng serve --watch --open
