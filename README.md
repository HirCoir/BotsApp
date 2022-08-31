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


## Despliegue en Ubuntu/Debian (Requiere node 16 en adelante)

```bash
apt install git nodejs ffmpeg -y
git clone https://github.com/HirCoir/BotsApp
cd BotsApp
npm install
npm install ytdl-core@latest
npm start
```

# Despliegue en cualquier distro usando Docker

 Para seguir este método, deberá tener Docker instalado en su máquina. 

 Para alojar el bot en su propio dispositivo usando Docker, siga los siguientes pasos.

```bash
git clone https://github.com/HirCoir/BotsApp
cd BotsApp
docker build -t botsapp .
docker run -it -d --restart always --name botsapp  botsapp
```

Esto creará un contenedor que ejecuta BotsApp. Tendrá que escanear el QR al menos una vez.
```bash
docker logs botsapp
```

En caso que desee borrar la sesión manualmente, dentro del contenedor solo borre el archivo BotsApp.db y session.data.json
```
rm -rf BotsApp.db session.data.json
npm start
```

## Grupos de apoyo y discusión (Inglés)

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
        <td align="center"><a href="https://github.com/HirCoir"><img src="https://avatars.githubusercontent.com/u/97632765?v=4s=100" width="100px;" alt=""/><br /><sub><b>HirCoir</b></sub></a><br /><sub><i>Traductor no oficial</i></sub></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->



## Inspiración 

 - Biblioteca de Baileys 

 - Yusuf Usta

- [X-tra-Telegram](https://github.com/Prince-Mendiratta/X-tra-Telegram)

## Copyright y licencia 
 - Copyright (c) 2021 - 2022 por [Botsappofficial](https://github.com/BotsAppOfficial)

-Con licencia bajo los términos por [Licencia pública general de GNU](https://github.com/BotsAppOfficial/BotsApp/blob/main/LICENSE)

## Legal 
 Este código de ninguna manera está afiliado, autorizado, mantenido, patrocinado o respaldado por WhatsApp o cualquiera de sus afiliadas o subsidiarias. Este es un software independiente y no oficial. Úselo bajo su propio riesgo.
