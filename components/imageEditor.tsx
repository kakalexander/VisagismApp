// components/ImageEditor.tsx
import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

interface ImageEditorProps {
  imageUri: string;
  onApplyEffect: (uri: string) => void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ imageUri, onApplyEffect }) => {
  const handleApplyEffect = () => {
    // Aqui você pode chamar sua IA ou filtros
    onApplyEffect(imageUri);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Button title="Aplicar Efeito" onPress={handleApplyEffect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ImageEditor;
