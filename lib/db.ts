const data = {
    general: {
        NUMBER_SYNTAX_ERROR:
            "```Ingrese un número de contacto válido según la siguiente sintaxis:\n    1. XXXXXXXXXX\n    2. Etiqueta a la persona\n    3. YYXXXXXXXXXX (YY- Código de país, sin ceros)```",
        MESSAGE_NOT_TAGGED: "```Etiqueta un mensaje o ingresa un número.```",
        NOT_A_GROUP: "```Comando solo aplicable en un chat grupal.```",
        BOT_NOT_ADMIN:
            "```Lo siento, no tengo permiso para hacerlo ya que no soy administrador.```",
        ADMIN_PERMISSION: "```Debe ser administrador para ejecutar este comando.```",
        SUDO_PERMISSION:
            "```Hola, soy 💠BotsApp💠. Supongo que estabas tratando de usar mis comandos en``` *{BotsApp.groupName}*```. Sin embargo, el bot se encuentra actualmente en modo {worktype}. Esto permite que solo el propietario y los usuarios de sudo usen el comando``` *{commandName}* ```.\n\nSi desea utilizar mis funciones, puede implementar BotsApp en su propia cuenta sin mucho esfuerzo, ¡en menos de 5 minutos! Echa un vistazo a los enlaces que figuran a continuación.```\n\n🔗https://mybotsapp.com\n🔗https://github.com/BotsAppOfficial/BotsApp",
        ERROR_TEMPLATE:
            "```Parece que algo salió mal. No necesitas preocuparte. Aquí hay algunos registros desde cuando el bot no respondía como se esperaba.```\n```---------```\n```🧐 Comando:``` *{commandName}*\n```😎 ¿De mi parte?:``` *{fromMe}*\n```🗣️ ¿Fue una respuesta?:``` *{isReply}*\n```👥 ¿En un grupo?``` *{isGroup}*\n```📥 En la bandeja de entrada?``` *{isPm}*\n```📸 Comando con imagen?``` *{isImage}*\n```🕺🏻 ¿Es el administrador del grupo Bot?``` *{isBotGroupAdmin}*\n```📈 ¿Era el administrador del grupo Sender?``` *{isSenderGroupAdmin}*\n```🫂 ¿El remitente fue sudo?``` *{isSenderSudo}*\n```⚠️ Error:``` \n*{err}*\n```---------```\n_Para averiguar qué salió mal exactamente, informe/plantee el problema en nuestro chat de soporte en_ https://chat.whatsapp.com/GRPWL8TBVq91lQig9JoqME",
        SUCCESSFUL_CONNECTION:
            "*BotsApp integrado con éxito.*\n```Bot está trabajando actualmente en modo ``` *{worktype}* ```.```\n```Para obtener más información sobre el funcionamiento y los permisos de Bot, consulte:``` \n🔗https://github.com/BotsAppOfficial/BotsApp.\n\n⚠️ El bot no funcionará en este chat.",
    },
    abl: {
        DESCRIPTION: " Módulo para poner en lista negra a una persona o un chat por usar el bot.",
        EXTENDED_DESCRIPTION:
            "```Agregar personas a la lista negra y``` * Restringirlas * ```de usar el bot. Puede incluir en la lista negra``` *grupos* o *personas en grupos* o *personas en conjunto* ```de usar el bot. Estas son las configuraciones -\n\n1. Si envía el comando en un grupo``` *sin responder* ```a cualquiera, el bot será``` *deshabilitado para ese grupo.*\n```2. Si envía el comando en un grupo y``` *responder a alguien*, ```Ellos no podrán usar el bot en ese``` *grupo especifico.*\n```3. Si etiquetas a alguien en un grupo como``` *.abl @<persona>*, ```no podrán usar el bot en ese grupo específico.\n4. Si envía el comando en``` *una chat* ```de una persona, serán incluidos en la lista negra para no usar el bot en``` *cualquier grupo*",
        PM_ACKNOWLEDGEMENT: "```{} prohibido usar el bot en todos los chats.```",
        CAN_NOT_BLACKLIST_BOT:
            "```El bot no puede incluirse en la lista negra. Etiquetar o responder a un usuario diferente.```",
        GRP_ACKNOWLEDGEMENT:
            "```{} ha sido incluido en la lista negra por usar el bot en este grupo.```",
        GRP_BAN:
            "```El bot ha sido deshabilitado para el grupo.``` *{}*. ```Para más configuraciones utilice el comando: ``` *.help abl* ```.```",
    },
    add: {
        DESCRIPTION: "Módulo para agregar una persona a un grupo.",
        EXTENDED_DESCRIPTION:
            "```Agregue nuevas personas a un grupo ingresando su número de teléfono móvil según el formato mencionado a continuación.\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nPor ejemplo -\n``` *.add 9861212121*",
        NUMBER_SYNTAX_ERROR:
            "```Formatos válidos -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX\n\nFor example-```\n*.add 9861212121*\n*.add 919861212121*",
        NO_ARG_ERROR:
            "```Ingrese el número que desea agregar.\n\nPor ejemplo,```  *.add <NUMBER>* .",
        NO_24HR_BAN:
            "```El número ingresado no se puede volver a agregar antes de 24 horas.```",
        ALREADY_MEMBER:
            "```El número ingresado no se puede volver a agregar antes de 24 horas```",
        NOT_ON_WHATSAPP:
            "```El número que estás intentando sumar, {}, no está disponible en WhatsApp.\nVerifique el número nuevamente.```",
        SUCCESS: " added successfully!",
        PRIVACY:
            "```El número que intenta agregar no se puede agregar directamente al grupo. Se les ha enviado un enlace de invitación.```",
    },
    admins: {
        DESCRIPTION: "Administradores de etiquetas",
        EXTENDED_DESCRIPTION:
            "```Etiquetar a los administradores de un grupo (ya sea como respuesta a otro mensaje o como etiqueta directa).```",
        NOT_GROUP_CHAT:
            "*.admins*  ```El comando solo es aplicable para chats grupales.```",
    },
    alive: {
        DESCRIPTION: "Comprobar si el bot está en línea.",
        EXTENDED_DESCRIPTION:
            "```Este módulo se puede usar para verificar si el bot está actualmente en línea o no.\n\nEjemplo de uso,```\n*.alive*",
        ALIVE_MSG:
            "```💠 BotsApp se ha integrado con éxito. 💠\n\nUse el comando ```  *.help*  ``` para obtener una lista de complementos que harán que su experiencia con WhatsApp sea mucho más fácil.\n\nSi está impresionado con mi servicio, considere apoyar el Bot en GitHub-\n```https://github.com/BotsAppOfficial/BotsApp\n\n```Consulte nuestro sitio web oficial para conocer las nuevas actualizaciones.```",
    },
    block: {
        DESCRIPTION: "Bloquear contacto",
        EXTENDED_DESCRIPTION:
            "```Agregue el número a la lista de bloqueo. Puede responder a la persona en grupo / pm o usar .block <numero>.```",
        NUMBER_SYNTAX_ERROR:
            "```Ingrese un número de contacto válido según la siguiente sintaxis:\n    1. XXXXXXXXXX\n    2. Etiqueta a la persona\n    3. +YYXXXXXXXXXX (YY-Código de país, sin ceros)```",
        MESSAGE_NOT_TAGGED: "```Etiqueta un mensaje o ingresa un número para continuar.```",
        NOT_BLOCK_BOT: "```El bot no puede bloquearse a sí mismo```",
    },
    carbon: {
        DESCRIPTION: "Convierta texto/código en una imagen de carbono.",
        EXTENDED_DESCRIPTION:
            "```Este módulo se puede utilizar para convertir texto/código en imágenes de carbono.\n\nEjemplo de uso,```\n    *.carbon <exto>* \n    *.carbon*  ```y responder a un mensaje de texto.\n\nUsa el indicador -t después```  *.carbon*  ```para obtener la lista de temas disponibles.\nPara especificar el tema, utilice```  *.carbon <text> -t <tema>* .",
        NO_INPUT:
            "```No se proporcionó ninguna entrada.\nUtilice el comando```  *.carbon <texto>*  ```o responder a un mensaje de texto con```  *.carbon*  ```carbonizar el texto.```",
        CARBONIZING:
            "```Convertir su texto en un fragmento de código. Espere por favor...```",
        OUTPUT:
            "*<< ¡Aquí está su imagen de carbon! >>*\n```Carbonizado por BotsApp\nEsquema de color: {}```",
        INVALID_REPLY: "```The replied message should be text.```",
        INVALID_THEME:
            "```Ingrese un tema válido.\nTenga en cuenta que los nombres de los temas son```  *distingue mayúsculas y minúsculas*.",
    },
    create: {
        DESCRIPTION: "Crear un nuevo grupo con la persona a la que se respondió",
        EXTENDED_DESCRIPTION:
            "```Este módulo creará un nuevo grupo de WhatsApp y agregará a la persona respondida en el grupo",
        NO_TEXT: "```Introduce el nombre del grupo```",
        TAG_PERSON: "```Responder a la persona que debe ser incluida en el grupo```",
        GROUP_CREATED: "```El grupo ha sido creado con éxito.```",
    },
    cpp: {
        DESCRIPTION: "Ejecute el código C++ y obtenga la salida directamente en WhatsApp.",
        EXTENDED_DESCRIPTION:
            "```Utilice este módulo para ejecutar código C++ y obtener el resultado directamente en WhatsApp. Para evitar errores, trate de no usar la entrada.\nEn caso de que desee proporcionar información, utilice el``` *-i flag* ```para proporcionar entrada. Mira el ejemplo para una idea.```",
        NO_INPUT:
            "```Proporcione algo de código C++ para ejecutar. Utilizar el``` *.help cpp* ```comando para obtener más información sobre este módulo.```",
        BOILERPLATE:
            "#include <bits/stdc++.h>\nusing namespace std;\n\nint main(){\n    {code}\n}",
        OUTPUT_TEMPLATE:
            "⭐ *Producción:*```\n{stdout}```\n\n⚠️ *Error:*```\n{stderr}```\n\n👨🏻‍💻 *Commando:*```\n{code}```",
        PROCESSING: "```Executing, please wait...```",
    },
    decodeqr: {
        DESCRIPTION: "Decodificar código QR",
        EXTENDED_DESCRIPTION:
            "```Use este complemento para decodificar un código QR simplemente respondiendo a una imagen QR existente en el chat usando```  *.decodeqr*  ```o cargando una imagen QR con título como```  *.decodeqr*",
        INVALID_REPLY:
            "```Asegúrate de responder a una imagen/pegatina QR.```",
        INVALID_INPUT:
            "```Entrada inválida. Usar``` *.help decodeqr*  ```para más información.```",
        PROCESSING: "```Descodificación. Espere por favor...```",
    },
    demote: {
        DESCRIPTION: "Degradar a una persona de administrador",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para degradar a una persona de administrador ingresando el número de teléfono móvil de la persona. Sintaxis válidas -\n 1. XXXXXXXXXX\n 2. YYXXXXXXXXXX ()\n\nPor ejemplo``` -\n*.demote 9861212121*",
        NOT_A_GROUP: "```Este comando solo es aplicable para chats grupales.```",
        BOT_NOT_ADMIN:
            "```Lo siento, no tengo permiso para hacerlo ya que no soy administrador..```",
        PERSON_NOT_IN_GROUP: "```Persona no encontrada.```",
        MESSAGE_NOT_TAGGED:
            "```Responder/etiquetar/ingresar el número de contacto de la persona a ser degradada.```",
    },
    disappear: {
        DESCRIPTION: "Alternar mensajes que desaparecen",
        EXTENDED_DESCRIPTION:
            "```Alternar mensajes que desaparecen usando el comando``` *.dissapear* .",
    },
    getdp: {
        DESCRIPTION: "Obtener imagen de visualización",
        EXTENDED_DESCRIPTION:
            "```Obtenga la imagen de perfil del grupo en una conversación grupal o la imagen de perfil de BotsApp en el chat personal. Etiqueta a una persona en un grupo para obtener su foto de perfil.```",
        IMAGE_CAPTION: "```Aquí está la imagen de la pantalla. Adquirido por BotsApp.```",
        PROCESSING: "```Obteniendo imagen de visualización...```",
        TRY_AGAIN:
            "```Mostrar imagen no encontrada. Sube una imagen e inténtalo de nuevo.```",
    },
    github: {
        DESCRIPTION: "Perfil de Github",
        EXTENDED_DESCRIPTION:
            "```Obtenga el perfil de github por comando```  *.github <user>*  ```o respondiendo```  *.github* .",
        NO_ARG_ERROR:
            "```Por favor ingrese el nombre de usuario. Utilizar el``` *.help github* ```Comando para más información.```",
        ERROR_MSG: "```Introduzca un nombre de usuario válido.```",
        FETCHING: "```Obtención de detalles de usuario de GitHub. Espere por favor...```",
    },
    help: {
        DESCRIPTION: "Obtenga la lista de comandos e información sobre los módulos",
        EXTENDED_DESCRIPTION:
            "Este módulo se utiliza para obtener información sobre otros módulos y sus disparadores.",
        HEAD: "🌀 *Menú de BotsApp* 🌀\n```Use el comando .help para obtener información detallada sobre un módulo.```",
        TEMPLATE: "\n\n🤖 *Comando* - ```{}```\n💡 *Información* - ```{}```",
        COMMAND_INTERFACE: "🌀 *BotsApp Command Interface* 🌀\n\n",
        COMMAND_INTERFACE_TEMPLATE: "💠 *Disparadores - * ```{}```\n📚 *Información - * {}",
        FOOTER:
            "```\n\nHaga clic en el botón de abajo para obtener una vista previa del complemento.```",
    },
    invite: {
        DESCRIPTION: "Módulo para crear enlace de invitación de grupo",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para enviar un enlace de invitación grupal en el grupo o personalmente a alguien.```",
        LINK_SENT: "```Enlace de invitación enviado por DM, verifique.```",
    },
    lyrics: {
        DESCRIPTION: "Módulo para encontrar letras de canciones.",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para encontrar la letra de una canción usando el comando ``` *.lyrics* ```",
        NO_ARG: "```Por favor, introduzca el nombre de la canción.```",
        NOT_FOUND: "```Canción no encontrada 🙁!```",
        PROCESSING: "```Buscando. Espere por favor....```",
    },
    meaning: {
        DESCRIPTION: "Encuentra el significado de una palabra en el diccionario.",
        EXTENDED_DESCRIPTION:
            "Encuentre el significado de una palabra en el diccionario usando .meaning <palabra>.",
        NO_ARG: "```Introduzca una palabra.```",
        NOT_FOUND: "```¡Palabra no encontrada en el diccionario!```",
    },
    mute: {
        DESCRIPTION: "Silenciar el chat grupal durante un tiempo específico.",
        EXTENDED_DESCRIPTION:
            "Silenciar a los miembros que no sean administradores de un grupo. Incluso puedes especificar la duración usando s, m o h.\n\nPor ejemplo:\n .mute 15 m cambiará los permisos de chat a solo administrador durante 15 minutos.",
        NOT_GROUP_CHAT:
            "*.mute*  ```el comando solo es aplicable en un chat grupal.```",
        NOT_ADMIN:
            "```Lo siento, no tengo permiso para hacerlo ya que no soy administrador.```",
        CHAT_ADMIN_ONLY: "```Los permisos de chat cambiaron a``` *solo administrador*.",
        MENTION_DURATION:
            "```Mencione cuánto tiempo desea silenciar el chat. Por ejemplo, ```\n*.mute 10 s* ```para silenciar durante 10 segundos.```",
        CHAT_ALL_MEMBERS: "```Los permisos de chat cambiaron a ``` *todos los miembros del grupo*.",
    },
    neko: {
        DESCRIPTION: "Copia tu texto a nekobin",
        EXTENDED_DESCRIPTION:
            "```Utilice este módulo para pegar su texto en un pastebin (NEKOBIN). Ingrese texto con el comando```  *.neko* .",
        ENTER_TEXT: "```Ingrese un mensaje de texto junto con el comando.```",
        TRY_LATER: "```Demasiados intentos. Por favor, inténtelo de nuevo más tarde.```",
        PROCESSING: "```Pegando el texto en nekobin. Espere por favor...```",
    },
    news: {
        DESCRIPTION: "Obtenga noticias en un formato legible para dispositivos móviles",
        EXTENDED_DESCRIPTION:
        "```Utilice este módulo para obtener noticias de una publicación en formato legible para dispositivos móviles de alrededor de 1500 publicaciones. Ingrese texto con el comando```  *.news* .\n\nPara buscar publicaciones, utilice: -\n```.news search ``` _publication name_\n\nPara obtener noticias, utilice:-\n```.news fetch ``` _publication name_\n\nLas noticias se obtienen en formato epub, ya que es más cómodo para leer en dispositivos móviles. Para leerlos en dispositivos Android, puedes utilizar esta aplicación: https://play.google.com/store/apps/details?id=org.readera",
        NO_COMMMAND: "```No se proporcionan argumentos. Use ``` *.help news* ```para obtener información sobre cómo usar el comando.```",
        NO_PUB_NAME: "```No se proporcionó el nombre de la publicación. Use ``` *.help news* ```para obtener información sobre cómo usar el comando.```"
    },
    ocr: {
        DESCRIPTION: "Reconocimiento óptico de caracteres",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para obtener texto de una imagen mediante el comando ``` *.ocr* ```.```",
        PROCESSING: "```Procesando. Espere por favor...```",
        ERROR_MSG:
            "```OCR significa reconocimiento óptico de caracteres. Responda a una imagen con texto para obtener ese texto. Utilice el comando ``` *.help ocr* ```para obtener más información.```",
        NO_TEXT: "No se pudo encontrar texto en la imagen.",
    },
    promote: {
        DESCRIPTION: "Promocionar a un miembro a administrador",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para promover a un miembro a administrador. Puede ingresar el número de teléfono móvil de la persona según el formato a continuación. Sintaxis válidas -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nPor ejemplo -\n``` *.promote 9861212121*",
        NOT_A_GROUP: "```Este comando solo es aplicable en un chat grupal.```",
        BOT_NOT_ADMIN:
            "```Lo siento, no tengo permiso para hacerlo ya que no soy administrador.```",
        PERSON_NOT_IN_GROUP: "```La persona no está en el grupo..```",
        MESSAGE_NOT_TAGGED:
            "```Responder/etiquetar/ingresar el número de contacto de la persona a promocionar.```",
    },
    quote: {
        DESCRIPTION: "Cita el texto de alguien y conviértelo en una pegatina.",
        EXTENDED_DESCRIPTION: "```Responda al texto de cualquier persona para convertirlo en texto.```",
        NO_REPLY: "```Por favor, responda a un mensaje de texto.```",
        PROCESSING: "```Citando texto, por favor espere!```"
    },
    qr: {
        DESCRIPTION: "Convierte un texto/imagen en un código QR",
        EXTENDED_DESCRIPTION:
            "```Utilice este módulo para convertir un texto en un código qr. Puede especificar el texto después del comando .qr o responder a un mensaje usando .qr.```",
        INVALID_INPUT:
            "```No se proporcionó ninguna entrada. Especifique el texto que se convertirá en código QR después del comando ``` *.qr* ``` o responda a un texto/imagen usando el comando ``` *.qr* ```.```",
        PROCESSING: "```Generación de código QR. Espere por favor...```",
        IMAGE_CAPTION: "```Aquí está su imagen QR.```",
    },
    rbl: {
        DESCRIPTION: "Module to enable a blacklist person or group to use the bot.",
        EXTENDED_DESCRIPTION:
            "```Remove people or group from blacklist. Works in a similar manner to abl. Use``` *.help abl* ```for more info.```",
        PM_ACKNOWLEDGEMENT: "```{} removed from Blacklist for all the chats.```",
        GRP_ACKNOWLEDGEMENT:
            "```{} has been removed from the Blacklist for this group.```",
        GRP_BAN: "```Bot has been enabled for the group``` *{}*",
        NOT_IN_BLACKLIST: "```Entry for {} not found in the Blacklist.```",
    },
    remove: {
        DESCRIPTION: "Module to remove a person from a group.",
        EXTENDED_DESCRIPTION:
            "```Use this module to remove people from a group by tagging them```  *.remove @<person-to-remove>*  ```or replying to them```  *.remove*.",
        INPUT_ERROR:
            "```Reply to the person you want to remove or tag them.\n\nFor instance,```  *.remove @<person-to-remove>*  ```or reply using```  *.remove*.",
    },
    rename: {
        DESCRIPTION: "Module to rename a pdf or text document.",
        EXTENDED_DESCRIPTION:
            "```Use this module to rename documents by ```replying to them```  *.rename <new-name>*.",
        DOWNLOADING: "```Your document is being processed...```",
        PROVIDE_NEW_NAME: "```Provide a new name for your document.```",
        REPLY_TO_DOCUMENT:
            "```Reply to a valid document message to change it's file name.```",
        ERROR:
            "```Woops, something went wrong. Try again later, or proabaly not with this again...```",
        VALID_REPLY:
            "```Please tag a valid image / sticker / audio / document / pdf / GIF.```",
    },
    setdp: {
        DESCRIPTION: "Change the group icon",
        EXTENDED_DESCRIPTION:
            "```Use this module to change the group's icon. Tag image with the command or send the desired image with caption as the command```",
        NOT_AN_IMAGE:
            "```Please reply or caption the image you want to make the group icon.```",
        NOT_A_GROUP: "```This command is only applicable in a group chat.```",
        ICON_CHANGED: "```Changing icon/group image...```",
    },
    song: {
        DESCRIPTION: "Download songs",
        EXTENDED_DESCRIPTION:
            "Use this module to download audio of your choice either by specifying a YouTube link or the name of the song.",
        ENTER_SONG: "```Enter song with the command```",
        SONG_NOT_FOUND:
            "```Could not find the song you entered. Check whether the link or keyword entered is correct.```",
        DOWNLOADING: "```Descargando música...```",
        UPLOADING: "```Estoy subiendo la música...```",
        INTRO: "",
    },
    sticker: {
        DESCRIPTION: "Module to convert image to sticker",
        EXTENDED_DESCRIPTION:
            "```Use this module to convert any image from your chat to a sticker. Reply to an image message with the command```  *.sticker*  ```to convert and send that image as a sticker.```",
        TAG_A_VALID_MEDIA_MESSAGE:
            "```Please tag a valid image/video/gif message to convert to sticker.```",
        DOWNLOADING: "```Your sticker is downloading. Please wait...```",
    },
    stoi: {
        DESCRIPTION: "Module to convert sticker to image",
        EXTENDED_DESCRIPTION:
            "```Use this module to convert any sticker from your chat to an image. Reply to a sticker message with the command```  *.stoi*  ```to convert and send that sticker as an image.```",
        ANIMATED_STICKER_ERROR:
            "```Tagged sticker message is animated, ``` *Can not convert animated sticker to image*, ```Try again with a static sticker.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Please tag a valid sticker message to convert to an image.```",
        DOWNLOADING: "```Your image is downloading. Please wait...```",
        ERROR:
            "```Woops, something went wrong. Try again later, or proabaly not with this again...```",
    },
    stov: {
        DESCRIPTION: "Module to convert animated sticker to video",
        EXTENDED_DESCRIPTION:
            "```Use this module to convert any animated sticker from your chat to a video. Reply to an animated sticker message with the command```  *.stov*  ```to convert and send that sticker as a video.```",
        ANIMATED_STICKER_ERROR:
            "```Tagged sticker message is animated, ``` *Can not convert animated sticker to image*, ```Try again with a static sticker.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Please tag a valid animated sticker message to convert to a video.```",
        DOWNLOADING: "```Your sticker is downloading. Please wait...```",
        ERROR:
            "```Woops, something went wrong. Try again later, or proabaly not with this again...```",
    },
    tr: {
        DESCRIPTION: "Language Translator",
        EXTENDED_DESCRIPTION:
            "```Use```  *.tr <text> | <language>*  ```to translate text to the specified language. You can also reply to a text message with syntax```  *.tr <language>*  ```to translate text.\nIf you do not specify a language, it defaults to <English class=''></English>```",
        PROCESSING: "```Translating. Please wait...```",
        TOO_LONG:
            "*Total characters should be less than 4000.*\n```Total characters for current input were``` ```{}.```",
        LANGUAGE_NOT_SUPPORTED: "```Language is invalid.```",
        INVALID_REPLY: "```Please reply to a text message.```",
        SUCCESS: "*TR:* Translate [*{}* -> *{}*]\n\n{}",
        NO_INPUT:
            "```No input was detected. Please use``` *.help tts* ```for info on how to use this module.```",
    },
    tts: {
        DESCRIPTION: "Text To Speech.",
        EXTENDED_DESCRIPTION:
            "```Use```  *.tts <text>*  ```or```  *.tts <text> | <language_code>*  ```to convert text to speech.\nYou can also reply to a text message with syntax```  *.tr <language>*  ```to translate text.```",
        PROCESSING: "```Converting text to speech. Please wait...```",
        TOO_LONG:
            "*Total characters should be less than 200.*\n```Total characters for current input were``` ```{}.```",
        INVALID_LANG_CODE:
            "*The Language Code was incorrect.*\n```The Language Code is generally the first two letters of the language you're trying to convert to.```",
        NO_INPUT:
            "```No input was detected. Please use``` *.help tts* ```for info on how to use this module.```",
        INCORRECT_REPLY: "```Please reply to a valid text message only.```",
    },
    tagall: {
        DESCRIPTION: "Module to tag evryone in a group.",
        EXTENDED_DESCRIPTION:
            "```Use this module to tag everyone in the group by either replying to a message or simply using```  *.tagall*  ```command.```",
        TAG_MESSAGE: "*Everyone!*",
    },
    ud: {
        DESCRIPTION: "Urban Dictionary",
        EXTENDED_DESCRIPTION:
            "```Use this module to find the meaning of a word in Urban Dictionary. Enter```  *.ud*  ```command.```",
        NO_ARG: "```Please enter the word to be search.```",
        NOT_FOUND: "```Term``` *{}* ```Not Found!```",
        PROCESSING: "```Searching. Please wait....```",
    },
    unblock: {
        DESCRIPTION: "Unblock contact",
        EXTENDED_DESCRIPTION: "```Remove number from the blocklist.```",
        NUMBER_SYNTAX_ERROR:
            "```Enter a valid contact number. Valid syntax,\n    1. XXXXXXXXXX\n    2. Tag the person\n    3. +YYXXXXXXXXXX (YY- Country Code, without zeros)```",
        MESSAGE_NOT_TAGGED: "```Tag a message or enter a number.```",
        NOT_UNBLOCK_BOT: "```Bot can not unblock itself```",
    },
    unmute: {
        DESCRIPTION: "Unmute group chat",
        EXTENDED_DESCRIPTION: "Unmute non-admin members of a group",
        NOT_GROUP_CHAT:
            "*.unmute*  ```command is only applicable for a group chat.```",
        NOT_ADMIN:
            "```Sorry, dont have the permissions to do so since I am not an admin.```",
        CHAT_ALL_MEMBERS: "```Chat permissions changed to```  *all group members*.",
    },
    weather: {
        DESCRIPTION: "Get weather data of a city",
        EXTENDED_DESCRIPTION:
            "```Obtain weather info by entering the city name.```",
        WEATHER_DATA:
            "*Temperature:* {tempInC} °C | {tempInF} °F\n*Min Temp:* {minTempInC} °C | {minTempInF} °F\n*Max Temp:* {maxTempInC} °C | {maxTempInF} °F\n*Humidity:* {humidity}%\n*Wind:* {windSpeedInkmph} kmph | {windSpeedInmph} mph , {degree}°\n*Sunrise:* {sunriseTime}\n*Sunset:* {sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{dateAndTime}",
        CITY_NAME_REQUIRED:
            "```Please mention the city name to search weather data.```",
        ERROR_OCCURED: "```Woops, cannot process this request. Try again later.```",
        DOWNLOADING: "```Processing data. Please wait...```",
        NOT_FOUND:
            "```City not found. Please recheck the spelling and adhere to syntax.```",
    },
    welcome: {
        DESCRIPTION: "Welcome new members to the group with a custom message.",
        EXTENDED_DESCRIPTION:
            "```New members of a group chat will be welcomed with a message. It can be an image, video, gif with caption or just a text message.\n\nUse this module to either set, update or delete the existing message.\n\nThe welcome option can be disabled but saved using the ```  *.welcome  off*  ```command. In order to delete the existing message, use```  *.welcome  delete*.  ```Do note, the welcome option is still enabled after you use the delete option.```",
        NOT_A_GROUP: "```This command is only applicable in a group chat.```",
        SET_WELCOME_FIRST: "```Set a welcome message first.```",
        GREETINGS_ENABLED: "```Welcome message has been enabled.```",
        GREETINGS_UNENABLED: "```Welcome message has been disabled.```",
        CURRENTLY_ENABLED:
            "```Greetings are enabled: True \nCurrently greeting new members with:```",
        CURRENTLY_DISABLED:
            "```Greetings are enabled: False \nCurrently greeting new members with:```",
        WELCOME_DELETED: "```Welcome message deleted.```",
        WELCOME_UPDATED: "```Welcome message updated and enabled.```",
    },
    goodbye: {
        DESCRIPTION: "A goodbye message for group chat whenever someone leaves.",
        EXTENDED_DESCRIPTION:
            "```A goodbye message will be sent when any member leaves the group. It can be an image, video, gif with caption or just a text message.\n\nUse this module to either set, update or delete the existing message.\n\nThe goodbye option can be disabled but saved using the```  *.goodbye  off*  ```command. In order to delete the existing message, use```  *.goodbye  delete*.  ```Do note, the goodbye option is still enabled after you use the delete option.```",
        NOT_A_GROUP: "```This is not a group```",
        SET_GOODBYE_FIRST: "```Set a goodbye message first.```",
        GREETINGS_ENABLED: "```Goodbye message has been enabled.```",
        GREETINGS_UNENABLED: "```Goodbye message has been disabled.```",
        CURRENTLY_ENABLED:
            "```Greetings are enabled: True \nCurrently greeting new members with:```",
        CURRENTLY_DISABLED:
            "```Greetings are enabled: True \nCurrently greeting new members with:```",
        GOODBYE_DELETED: "```Goodbye message deleted.```",
        GOODBYE_UPDATED: "```Goodbye message updated and enabled.```",
    },
    yt: {
        DESCRIPTION: "Get recommendations and links from Youtube",
        EXTENDED_DESCRIPTION:
            "```Get the first 10 recommendations from YouTube with their authorname, timestamp and link. Mention the keywords that are required to be searched along with the command.```",
        REPLY: "```Obtaining the recommendations...```",
        NO_VIDEOS: "```No videos could be found.```",
        ENTER_INPUT:
            "```Please enter the query you want to search for. Use the``` *.help yt* ```command for more info.```",
    },
};

export default data;
