# Creación de un módulo

Los módulos nos permitirán organizar los componentes y que la aplicación a desarrollar indique que módulos quiere importar (similar a material)

    ng g module --project ntx-lib NtxMatDummy

Se añade al fichero `public_api.ts` el exports a la ruta del módulo (`export * from './lib/ntx-mat-dummy/ntx-mat-dummy.module';`) para que pueda ser usado por la aplicación

# Creación de un componente

* Se genera el componente
```
    ng g component --project ntx-lib ntx-mat-dummy/Dummy
```
_En este caso, el selector será `ntx-dummy`, se puede especificar otro en la creación, o cambiarlo después_
* Se añade a la sección exports del módulo NtxMatDummy (crearla en caso necesario)
* Se añade al fichero `public_api.ts` el exports a la ruta del componente (`export * from './lib/ntx-mat-dummy/dummy/dummy.component';`)

