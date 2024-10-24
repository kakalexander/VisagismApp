import { Image, StyleSheet, Platform, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink'; // Para link para mais informações ou app

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/adaptive-icon.png')} // Uma imagem mais relevante ao tema
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>
          Transforme Sua Aparência!
        </ThemedText>
        <HelloWave />
      </ThemedView>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Como Funciona?</ThemedText>
          <ThemedText>
            Nossa IA avançada analisa suas características e sugere as melhores mudanças estéticas.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Passo 1: Carregue Sua Imagem</ThemedText>
          <ThemedText>
            Selecione uma foto sua para começar a transformação.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Passo 2: Escolha Seu Estilo</ThemedText>
          <ThemedText>
            Explore diferentes estilos e opções de modificação.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Passo 3: Veja o Resultado</ThemedText>
          <ThemedText>
            Visualize a transformação e salve a sua nova aparência!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.linkContainer}>
          <ExternalLink href="https://example.com" style={styles.link}>
            Saiba mais sobre como usar o app
          </ExternalLink>
        </ThemedView>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo branco translúcido
    borderRadius: 10,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F4858', // Cor que remete ao tema de visagismo
    textAlign: 'center',
  },
  contentContainer: {
    padding: 16,
    backgroundColor: '#F0F4F8', // Cor de fundo clara
  },
  stepContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Fundo branco para cada passo
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  linkContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  link: {
    color: '#007AFF', // Azul para links
    fontWeight: 'bold',
  },
  headerImage: {
    height: 250, // Altura da imagem de cabeçalho
    width: '100%',
    resizeMode: 'cover',
  },
});
