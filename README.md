<p align="center">
  <img src="images/BotsApp_Logo.png" height="400px"/>
</p>


# 💠[BotsApp](https://mybotsapp.com/)💠
> ¡Tu asistente personal, en WhatsApp!
---
![GitHub top language](https://img.shields.io/github/languages/top/BotsAppOfficial/BotsApp) [![GitHub release](https://img.shields.io/github/release/BotsAppOfficial/BotsApp.svg)](https://github.com/bkimminich/juice-shop/releases/latest)
 ![GitHub contributors](https://img.shields.io/github/contributors/BotsAppOfficial/BotsApp) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/BotsAppOfficial/BotsApp) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/BotsAppOfficial/BotsApp) ![GitHub Repo stars](https://img.shields.io/github/stars/BotsAppOfficial/BotsApp?style=social) ![GitHub repo size](https://img.shields.io/github/repo-size/BotsAppOfficial/BotsApp)
 

![Docker Pulls](https://img.shields.io/docker/pulls/princemendiratta/botsapp?style=flat-square&label=Docker+Pulls) ![Docker Image Size](https://img.shields.io/docker/image-size/princemendiratta/botsapp?style=flat-square&label=Docker+Image+Size)

BotsApp es un WhatsApp de userbot de WhatsApp optimizado y fácil de usar escrito en Node.js. 

 Utilice su asistente de chat personal/gerente de grupo para aprovechar al máximo WhatsApp. 



 ## Documentación
[Documentation Link](https://mybotsapp.com/documentation)


## Tutorial 

Aquí hay un tutorial para configurar BotsApp en su propia cuenta en * Menos de 3 minutos. * Por ahora, el bot del dispositivo múltiple solo se puede usar localmente, cuyo tutorial se adjunta a continuación.

[![How to deploy](https://img.shields.io/badge/How%20To-Deploy-red.svg?logo=Youtube)](https://www.youtube.com/watch?v=tGrjEZ3roY0&ab_channel=BotsApp)

[![Multi Device](https://img.shields.io/badge/Host%20Multi%20Device%20bot%20on-Windows-red.svg?logo=Youtube)](https://youtu.be/NZy4sZqncjg&ab_channel=BotsApp)


## Deployment

<b>¡Solo la implementación local está funcionando por ahora!</b>

### La manera más fácil

Puede implementar BotsApp en un tiempo mínimo sin ningún conocimiento previo utilizando este método.

1. Dirígete al [sitio web oficial] de BotsApp (https://mybotsapp.com/) y crea una cuenta en Heroku usando tu ID de correo electrónico.
2. Una vez que se registre, haga clic en el botón "Implementar BotsApp" en la barra lateral.
3. Escanee el código QR que se muestra usando su cuenta de WhatsApp (3 puntos en la esquina superior derecha -> dispositivos vinculados -> enlace un dispositivo). Haga clic en el botón 'Continuar' una vez hecho.
4. Una vez que el bot esté vinculado a su cuenta, se encontrará con un formulario que se puede utilizar para administrar la configuración/permisos de BotsApp. Si es necesario, cambie los campos de formulario. Luego, haga clic en el botón Enviar.
5. Espere 1-3 minutos para que comience el bot. Este es un proceso único. Intente usar el comando '.alive' en cualquiera de sus chats para verificar si su bot se ha implementado con éxito.

¡Voila! Ha implementado su bot en 5 sencillos pasos. Una vez que el BOT haya comenzado con éxito, verá un mensaje de integración en su cuenta de WhatsApp.

### manualmente en Heroku (Pueden suspender tu cuenta)

<b>¡El despliegue en Heroku usando el botón no funciona por ahora!</b>

¡Puede implementar el bot el heroku usted mismo usando el botón a continuación!

[![Desplegar en Heroku](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?button-url=https%3A%2F%2Fgithub.com%2FBotsAppOfficial%2FBotsApp%2Ftree%2Fmain&template=https%3A%2F%2Fgithub.com%2FBotsAppOfficial%2FBotsApp%2Ftree%2Fmainhttps://dashboard.heroku.com/new?button-url=https%3A%2F%2Fgithub.com%2FBotsAppOfficial%2FBotsApp%2Ftree%2Fmain&template=https%3A%2F%2Fgithub.com%2FBotsAppOfficial%2FBotsApp%2Ftree%2Fmain)

### usando Docker localmente 

 Para seguir este método, deberá tener Docker instalado en su máquina y tener algo de experiencia usando Docker. 

 Para alojar el bot en su propio dispositivo usando Docker, siga los siguientes pasos en su símbolo de terminal / sistema -

```bash
wget -O BotsApp.tar.gz https://github.com/BotsAppOfficial/BotsApp/archive/refs/tags/v2.0.0-beta.tar.gz
tar -xvzf BotsApp.tar.gz
cd BotsApp-2.0.0-beta
docker build -t botsapp .
docker run --rm --name botsapp botsapp
```

Esto creará un contenedor que ejecuta BotsApp. Tendrá que escanear el QR al menos una vez. 

 ### The Gnu/Linux Legacy Way 

 Para usar este método, necesitará FFMPEG, NodeJS, NPM instalado en su dispositivo. 

 Para ejecutar el bot en su dispositivo manualmente, puede usar los siguientes comandos -

```bash
git clone https://github.com/BotsAppOfficial/BotsApp.git
cd BotsApp
yarn
npm start
```

## Escane el código QR nuevamente 
 Si tiene problemas cuando se ejecuta localmente, se recomienda escanear el código nuevamente. Para volver a obtener el código QR, siga estos comandos -
```
rm -rf BotsApp.db session.data.json
npm start
```

## Grupos de apoyo y discusión 

 Siéntase libre de publicar sus consultas o inquietudes en cualquiera de los foros de discusión mencionados a continuación:

[![Únete al grupo WhatsApp (Comunidad en inglés)](https://img.shields.io/badge/Join-WhatsApp%20Group-bl.svg?logo=WhatsApp)](https://chat.whatsapp.com/GPEHkFlspzOKpSBTsYx7Wt)

[![Únete al grupo Telegram (Comunidad en inglés)](https://img.shields.io/badge/Join-Telegram%20Group-blue.svg?logo=Telegram)](https://t.me/BotsAppChat)

[![Unirse al canal Telegram (Comunidad en inglés)](https://img.shields.io/badge/Join-Telegram%20Channel-red.svg?logo=Telegram)](https://t.me/BotsAppOfficial)



## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Prince-Mendiratta"><img src="https://avatars.githubusercontent.com/u/54077356?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Prince Mendiratta</b></sub></a><br /><sub><i>Project Lead Developer</i></sub></td>
    <td align="center"><a href="https://github.com/Prashant-singla"><img src="https://avatars.githubusercontent.com/u/83973641?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Prashant Singla</b></sub></a><br /><sub><i>Core Developer</i></sub></td>
    <td align="center"><a href="https://github.com/Keshav-Pahwa"><img src="https://avatars.githubusercontent.com/u/83963387?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Keshav Pahwa</b></sub></a><br /><sub><i>Core Developer</i></sub></td>
    <td align="center"><a href="https://github.com/j0h4nn1410"><img src="https://avatars.githubusercontent.com/u/72455289?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Johann Jose</b></sub></a><br /><sub><i>Core Developer</i></sub></td>
    <td align="center"><a href="https://github.com/Mohit161220"><img src="https://avatars.githubusercontent.com/u/83974093?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohit Singh Rana</b></sub></a><br /><sub><i>Core Developer</i></sub></td>
    <td align="center"><a href="https://github.com/thegeek-dev"><img src="https://avatars.githubusercontent.com/u/70193222?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Neeraj Patel</b></sub></a><br /><sub><i>Moderator</i></sub></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->



## Inspiration

- Baileys Library

- Yusuf Usta 

- [X-tra-Telegram](https://github.com/Prince-Mendiratta/X-tra-Telegram)

## Copyright & License
- Copyright (C) 2021 - 2022 by [BotsAppOfficial](https://github.com/BotsAppOfficial)

- Licensed under the terms by [GNU GENERAL PUBLIC LICENSE](https://github.com/BotsAppOfficial/BotsApp/blob/main/LICENSE)

## Legal
This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by WhatsApp or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk.
