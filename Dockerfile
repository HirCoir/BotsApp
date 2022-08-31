FROM debian:11

# Instalar paquetes necesarios para el contenedor
RUN apt-get update
RUN apt-get install -y \
	curl \
	sudo \
	wget \
	bash \
	git \
	ffmpeg

# Instalar Nodejs 16
RUN curl -s https://deb.nodesource.com/setup_16.x | sudo bash
RUN apt install nodejs

WORKDIR /app
# Instala el Bot
COPY ./ ./
RUN npm i
RUN npm install i ytdl-core@latest

CMD ["npm", "start"]

