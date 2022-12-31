## Passo a passo, bibliotecas utilizadas, informações importantes, etc

# 1. Setups iniciais

# 1.1 Startar um projeto novo

npx create-expo-app --template (uso esse --template para escolher ts ao criar o app)

# 1.2 Instalar a lib babel plugin module resolver

repositório: https://github.com/tleunen/babel-plugin-module-resolver#readme
Informação: Plugin que simplifica import/require. Ex: "import { Hi } from '../../../utils/index.ts' ficaria -> import { Hi } from 'utils/index.ts'"
comando: npm install --save-dev babel-plugin-module-resolver

Após instalar, adicionar as configs dentro do arquivo babel.config.js. As configs estão no arquivo, logo abaixo de "presets". Vide comentário do arquivo
Também substituir todo o conteúdo padrão do arquivo tsconfig.json pelo conteúdo atual

Para mais infos, consultar repositório

# 1.3 Instalação de fontes do Google

Documentação com exemplos de uso: https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font
comando: npx expo install expo-font @expo-google-fonts/xxxxxx
substituit xxxxxx pelo nome da fonte desejada - exemplo, roboto

# 1.4 Instalação do NativeBase

Por ser projeto em Expo, usar o link https://docs.nativebase.io/install-expo para acessar a documentação
Fazer as instalações conforme a documentação (são uns 3 comandos)
comando 1: npm install native-base
comando 2: expo install react-native-svg@12.1.1
comando 3: expo install react-native-safe-area-context@3.3.2

Envolver todo o app em um <NativeBaseProvider> para ter acesso a ele em toda a aplicação
