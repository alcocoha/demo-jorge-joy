# Joy landing page

Landing page para la promoción Joy

## Instalación de programas requeridos

* Node JS versión v14.x.x:
* [nodejs.org]https://nodejs.org/es/)

## Levantamiento del proyecto en modo development

* Clonar el repositorio:

```
git clone https://alcocoha@bitbucket.org/pepsicomx/joy_site_front_2021.git
```

* Ir a la carpeta raíz del proyecto e instalar las dependencias de npm:

```
npm install
```

* Levantar el proyecto de manera local

```
npm start
```

## Correr las pruebas unitarias

```
npm test
```
## Poner en producción el proyecto

* Para poner el proyecto en producción se deben seguir los siguientes pasos

* Crear el .env con las configuraciones necesarias para prod.
### Crear archivo .env en la raiz del proyecto con las siguientes variable
En este ejemplo se muestran las variables que se utilizan para el entorno de dev

```
REACT_APP_API_URL = "URL_BACKEND"
REACT_APP_IMAGES_URL = "URL_BACKEND"

REACT_APP_RECAPTCHA_KEY = "${L2A_RECAPTCHA_KEY}"

REACT_APP_CLIENT_ID = "Copiar varibales ENV del backend => { CLIENT_ID }"
REACT_APP_CLIENT_SECRET = "Copiar varibales ENV del backend => { CLIENT_SECRET }"
```

```diff
- IMPORTANTE revisar que las url de REACT_APP_API_URL y REACT_APP_IMAGES_URL no tengan / al final
```

* Eliminar la carpeta build previamente construida (si existe)
* Jenkins cada que haga pull deberá correr el comando **npm run build**

```
npm run build
```

* npm run build genera folder **build** en raíz

* Apuntar producción a la carpeta **build**

## JENKINS

**Cada que se haga push** se deben aplicar los siguientes pasos

1. Se deberá borrar la carpeta build
2. Ejecutar el comando:
```
npm run build
```
3. Apuntar ambiete de pruebas a build
