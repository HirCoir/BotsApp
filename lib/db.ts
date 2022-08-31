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
        DESCRIPTION: "Módulo para permitir que una persona o grupo de la lista negra use el bot.",
        EXTENDED_DESCRIPTION:
            "```Eliminar personas o grupos de la lista negra. Funciona de manera similar a abl. Utilice ``` *.help abl* ```para obtener más información.```",
        PM_ACKNOWLEDGEMENT: "```{} eliminado de la lista negra para todos los chats.```",
        GRP_ACKNOWLEDGEMENT:
            "```{} ha sido eliminado de la lista negra de este grupo.```",
        GRP_BAN: "```El bot ha sido habilitado para el grupo.``` *{}*",
        NOT_IN_BLACKLIST: "```Entrada para {} no encontrada en la lista negra.```",
    },
    remove: {
        DESCRIPTION: "Módulo para eliminar a una persona de un grupo.",
        EXTENDED_DESCRIPTION:
            "```Utilice este módulo para eliminar personas de un grupo etiquetándolas ``` *.remove @<persona-para-eliminar>* ```o respondiéndoles``` *.remove*.",
        INPUT_ERROR:
            "```Responda a la persona que desea eliminar o etiquétela.\n\nPor ejemplo, ``` *.remove @<persona-a-remover>* ```o responda usando ``` *.remove*.",
    },
    rename: {
        DESCRIPTION: "Módulo para renombrar un documento pdf o de texto.",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para cambiar el nombre de los documentos ```respondiéndoles``` *.rename <nuevo-nombre>*.",
        DOWNLOADING: "```Su documento está siendo procesado...```",
        PROVIDE_NEW_NAME: "```Provide a new name for your document.```",
        REPLY_TO_DOCUMENT:
            "```Responda a un mensaje de documento válido para cambiar su nombre de archivo.```",
        ERROR:
            "```Vaya, algo salió mal. Vuelve a intentarlo más tarde, o probablemente no vuelvas a intentarlo...```",
        VALID_REPLY:
            "```Etiquete una imagen/pegatina/audio/documento/pdf/GIF válidos.```",
    },
    setdp: {
        DESCRIPTION: "Cambiar el icono del grupo",
        EXTENDED_DESCRIPTION:
            "```Utilice este módulo para cambiar el icono del grupo. Etiquete la imagen con el comando o envíe la imagen deseada con el título como comando```",
        NOT_AN_IMAGE:
            "```Responda o titule la imagen que desea convertir en el ícono del grupo.```",
        NOT_A_GROUP: "```Este comando solo es aplicable en un chat grupal.```",
        ICON_CHANGED: "```Cambiando icono/imagen de grupo...```",
    },
    song: {
        DESCRIPTION: "Descargar canciones",
        EXTENDED_DESCRIPTION:
            "Use este módulo para descargar audio de su elección especificando un enlace de YouTube o el nombre de la canción.",
        ENTER_SONG: "```Introduce la canción con el comando```",
        SONG_NOT_FOUND:
            "```No se pudo encontrar la canción que ingresó. Compruebe si el enlace o la palabra clave ingresada es correcta.```",
        DOWNLOADING: "```Descargando canción 🙌😊...```",
        UPLOADING: "```Estoy subiendo la canción 😁...```",
        INTRO: "",
    },
    sticker: {
        DESCRIPTION: "Módulo para convertir imagen en sticker",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para convertir cualquier imagen de su chat en una etiqueta. Responda a un mensaje de imagen con el comando``` *.sticker* ```para convertir y enviar esa imagen como una etiqueta.```",
        TAG_A_VALID_MEDIA_MESSAGE:
            "```Etiquete un mensaje de imagen/video/gif válido para convertirlo en una pegatina.```",
        DOWNLOADING: "```Tu pegatina se está descargando. Espere por favor...```",
    },
    stoi: {
        DESCRIPTION: "Módulo para convertir sticker a imagen",
        EXTENDED_DESCRIPTION:
            "```Utilice este módulo para convertir cualquier pegatina de su chat en una imagen. Responda a un mensaje adhesivo con el comando```  *.stoi*  ```to convert and send that sticker as an image.```",
        ANIMATED_STICKER_ERROR:
            "```El mensaje de la etiqueta etiquetada está animado, ``` *No se puede convertir la etiqueta animada en imagen*, ```Inténtalo de nuevo con una etiqueta estática.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Etiqueta un mensaje adhesivo válido para convertirlo en una imagen.```",
        DOWNLOADING: "```Tu imagen se está descargando. Espere por favor...```",
        ERROR:
            "```Vaya, algo salió mal. Vuelva a intentarlo más tarde, o probablemente no vuelva a intentarlo..```",
    },
    stov: {
        DESCRIPTION: "Modulo para convertir sticker animado a video",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para convertir cualquier pegatina animada de su chat en un video. Responde a un mensaje de etiqueta animada con el comando``` *.stov* ```para convertir y enviar esa etiqueta como un video.```",
        ANIMATED_STICKER_ERROR:
            "```El mensaje de la etiqueta etiquetada está animado, ``` *No se puede convertir la etiqueta animada en imagen*, ```Inténtalo de nuevo con una etiqueta estática.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Etiquete un mensaje adhesivo animado válido para convertirlo en un video.```",
        DOWNLOADING: "```Tu pegatina se está descargando. Espere por favor...```",
        ERROR:
            "```Vaya, algo salió mal. Vuelve a intentarlo más tarde, o probablemente no vuelvas a intentarlo...```",
    },
    tr: {
        DESCRIPTION: "Traductor de idiomas",
        EXTENDED_DESCRIPTION:
            "```Use```  *.tr <texto> | <lenguaje>*  ```para traducir texto al idioma especificado. También puede responder a un mensaje de texto con la sintaxis ``` *.tr <idioma>* ```para traducir el texto.\nSi no especifica un idioma, el valor predeterminado es <English class=''></Spanish>```",
        PROCESSING: "```Traduciendo. Espere por favor 😌...```",
        TOO_LONG:
            "*El total de caracteres debe ser inferior a 4000.*\n```El total de caracteres para la entrada actual fue``` ```{}.```",
        LANGUAGE_NOT_SUPPORTED: "```El idioma no es válido.```",
        INVALID_REPLY: "```Por favor, responda a un mensaje de texto.```",
        SUCCESS: "*TR:* Traducido [*{}* -> *{}*]\n\n{}",
        NO_INPUT:
            "```No se detectó ninguna entrada. Utilice ``` *.help tts* ```para obtener información sobre cómo usar este módulo.```",
    },
    tts: {
        DESCRIPTION: "Texto a voz.",
        EXTENDED_DESCRIPTION:
            "```Use```  *.tts <texto>*  ```o```  *.tts <text> | <código de lenguaje>*  ```para convertir texto a voz.\nTambién puede responder a un mensaje de texto con la sintaxis ``` *.tr <idioma>* ```para traducir texto.```",
        PROCESSING: "```Conversión de texto a voz. Espere por favor...```",
        TOO_LONG:
            "*El total de caracteres debe ser inferior a 200.*\n```El total de caracteres para la entrada actual fue``` ```{}.```",
        INVALID_LANG_CODE:
            "*El código de idioma era incorrecto.*\n```El código de idioma generalmente son las dos primeras letras del idioma al que está tratando de convertir.```",
        NO_INPUT:
            "```No se detectó ninguna entrada. Utilice ``` *.help tts* ```para obtener información sobre cómo usar este módulo.```",
        INCORRECT_REPLY: "```Responda solo a un mensaje de texto válido.```",
    },
    tagall: {
        DESCRIPTION: "Módulo para etiquetar a todos en un grupo.",
        EXTENDED_DESCRIPTION:
            "```Use este módulo para etiquetar a todos en el grupo respondiendo a un mensaje o simplemente usando el comando ``` *.tagall* ```.```",
        TAG_MESSAGE: "* Todos! *",
    },
    ud: {
        DESCRIPTION: "Diccionario urbano",
        EXTENDED_DESCRIPTION:
            "```UUse este módulo para encontrar el significado de una palabra en Urban Dictionary. Introduzca``` *.ud* ```comando.```",
        NO_ARG: "```Por favor ingrese la palabra a buscar.```",
        NOT_FOUND: "```Término``` *{}* ```¡No encontrado!```",
        PROCESSING: "```Buscando. Espere por favor....```",
    },
    unblock: {
        DESCRIPTION: "Desbloquear contacto",
        EXTENDED_DESCRIPTION: "```Eliminar número de la lista de bloqueo.```",
        NUMBER_SYNTAX_ERROR:
            "```Introduce un número de contacto válido. Sintaxis válida,\n    1. XXXXXXXXXX\n    2. Etiqueta a la persona\n    3. +YYXXXXXXXXXX (YY- Código de país, sin ceros)```",
        MESSAGE_NOT_TAGGED: "```Etiqueta un mensaje o ingresa un número.```",
        NOT_UNBLOCK_BOT: "```El bot no puede desbloquearse a sí mismo```",
    },
    unmute: {
        DESCRIPTION: "Dejar de silenciar el chat grupal",
        EXTENDED_DESCRIPTION: "Dejar de silenciar a los miembros que no son administradores de un grupo",
        NOT_GROUP_CHAT:
            "*.unmute*  ```el comando solo es aplicable para un chat grupal.```",
        NOT_ADMIN:
            "```Lo siento, no tengo los permisos para hacerlo ya que no soy administrador.```",
        CHAT_ALL_MEMBERS: "```Los permisos de chat cambiaron a ``` *todos los miembros del grupo*.",
    },
    weather: {
        DESCRIPTION: "Obtener datos meteorológicos de una ciudad",
        EXTENDED_DESCRIPTION:
            "```Obtenga información meteorológica ingresando el nombre de la ciudad.```",
        WEATHER_DATA:
            "*La temperatura:* {tempInC} °C | {tempInF} °F\n*Temperatura mínima:* {minTempInC} °C | {minTempInF} °F\n*Temperatura máxima:* {maxTempInC} °C | {maxTempInF} °F\n*Humedad:* {humidity}%\n*Viento:* {windSpeedInkmph} kmph | {windSpeedInmph} mph , {degree}°\n*Amanecer:* {sunriseTime}\n*Puesta de sol:* {sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{dateAndTime}",
        CITY_NAME_REQUIRED:
            "```Mencione el nombre de la ciudad para buscar datos meteorológicos.```",
        ERROR_OCCURED: "```Vaya, no se puede procesar esta solicitud. Vuelva a intentarlo más tarde.```",
        DOWNLOADING: "```Procesando datos. Espere por favor...```",
        NOT_FOUND:
            "```Ciudad no encontrada. Vuelva a revisar la ortografía y respete la sintaxis.```",
    },
    welcome: {
        DESCRIPTION: "Dé la bienvenida a los nuevos miembros al grupo con un mensaje personalizado.",
        EXTENDED_DESCRIPTION:
            "```Los nuevos miembros de un chat grupal serán bienvenidos con un mensaje. Puede ser una imagen, un video, un gif con subtítulo o simplemente un mensaje de texto.\n\nUse este módulo para configurar, actualizar o eliminar el mensaje existente.\n\nLa opción de bienvenida se puede deshabilitar pero se puede guardar usando el ``` *.welcome  off* ```comando. Para borrar el mensaje existente, use ``` *.welcome delete*. ```Tenga en cuenta que la opción de bienvenida aún está habilitada después de usar la opción de eliminación.```",
        NOT_A_GROUP: "```Este comando solo es aplicable en un chat grupal.```",
        SET_WELCOME_FIRST: "```Establece un mensaje de bienvenida primero.```",
        GREETINGS_ENABLED: "```Se ha habilitado el mensaje de bienvenida.```",
        GREETINGS_UNENABLED: "```El mensaje de bienvenida ha sido deshabilitado.```",
        CURRENTLY_ENABLED:
            "```Los saludos están habilitados: Verdadero \nActualmente saludando a los nuevos miembros con:```",
        CURRENTLY_DISABLED:
            "```Los saludos están habilitados: Falso \nActualmente saludando a los nuevos miembros con:```",
        WELCOME_DELETED: "```Mensaje de bienvenida eliminado.```",
        WELCOME_UPDATED: "```Mensaje de bienvenida actualizado y habilitado.```",
    },
    goodbye: {
        DESCRIPTION: "Un mensaje de despedida para el chat grupal cada vez que alguien se va.",
        EXTENDED_DESCRIPTION:
            "```Se enviará un mensaje de despedida cuando algún miembro abandone el grupo. Puede ser una imagen, un video, un gif con subtítulo o simplemente un mensaje de texto.\n\nUse este módulo para configurar, actualizar o eliminar el mensaje existente.\n\nLa opción de despedida se puede deshabilitar pero se puede guardar usando el ```*.goodbye  off*```comando. Para eliminar el mensaje existente, utilice ``` *.goodbye delete*. ```Tenga en cuenta que la opción de despedida aún está habilitada después de usar la opción de eliminación.```",
        NOT_A_GROUP: "```esto no es un grupo```",
        SET_GOODBYE_FIRST: "```esto no es un grupo.```",
        GREETINGS_ENABLED: "```Se ha habilitado el mensaje de despedida.```",
        GREETINGS_UNENABLED: "```El mensaje de despedida ha sido deshabilitado.```",
        CURRENTLY_ENABLED:
            "```Los saludos están habilitados: Verdadero \nActualmente saludando a los nuevos miembros con:```",
        CURRENTLY_DISABLED:
            "```Los saludos están habilitados: Verdadero \nActualmente saludando a los nuevos miembros con:```",
        GOODBYE_DELETED: "```Mensaje de despedida eliminado.```",
        GOODBYE_UPDATED: "```Mensaje de despedida actualizado y habilitado.```",
    },
    yt: {
        DESCRIPTION: "Obtener recomendaciones y enlaces de Youtube",
        EXTENDED_DESCRIPTION:
            "```Obtenga las primeras 10 recomendaciones de YouTube con su nombre de autor, marca de tiempo y enlace. Mencione las palabras clave que deben buscarse junto con el comando.```",
        REPLY: "```Obteniendo las recomendaciones...```",
        NO_VIDEOS: "```No se encontraron videos.```",
        ENTER_INPUT:
            "```Por favor ingrese la consulta que desea buscar. Utilice el comando ``` *.help yt* ``` para obtener más información.```",
    },
};

export default data;
