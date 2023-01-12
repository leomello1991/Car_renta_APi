# passo a passo do que precisa para rodar a app dentro do docker
#qual imagem que vai rodar dentro do container etc

#qual a imagem que vai rodar a aplicação neste caso sera em node
FROM node

#diretorio que as informaçoes ficaram contidas ao criar o container
WORKDIR /usr/app

#vai copiar o arquivo para o diretorio
COPY package.json ./

#apos copiado o arquivo para WORKDIR executa o npm parar instalar as dependencias
RUN npm install

#apos baixar as dependencias copia tudo para a pasta raiz
COPY . .


EXPOSE 3333

#roda os comando necessarios para aplicação executar
CMD [ "npm", "run", "dev" ]
