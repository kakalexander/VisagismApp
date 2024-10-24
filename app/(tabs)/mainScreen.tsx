// app/tabs/MainScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageUpload from '../../components/imageUpload';
import ImageEditor from '../../components/imageEditor';

const MainScreen = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [editedImageUri, setEditedImageUri] = useState<string | null>(null);

  const handleImageSelected = (uri: string) => {
    setImageUri(uri);
  };

  const handleApplyEffect = (uri: string) => {
    // Aqui você pode integrar sua IA para modificar a imagem
    setEditedImageUri(uri); // Temporariamente apenas para visualização
  };

  return (
    <View style={styles.container}>
      {!imageUri ? (
        <ImageUpload onImageSelected={handleImageSelected} />
      ) : (
        <ImageEditor imageUri={imageUri} onApplyEffect={handleApplyEffect} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
