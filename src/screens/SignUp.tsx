import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BgImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignUp() {
  // poderia ser feito como na tela de signin, mas pra ficar como exemplo, será feito de outro método
  // const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const navigation = useNavigation();

  function handleSignIn() {
    // navigation.navigate("signIn");
    navigation.goBack();
  }

  return (
    // ScrollView faz com que seja ativado a rolagem da tela quando o teclado for aberto
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BgImg}
          defaultSource={BgImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={16}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Input placeholder="Confirmar senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          mt={24}
          variant="outline"
          title="Voltar para o login"
          onPress={handleSignIn}
        />
      </VStack>
    </ScrollView>
  );
}
