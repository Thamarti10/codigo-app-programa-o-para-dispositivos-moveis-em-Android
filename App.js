import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const produtos = [
    { id: 1, nome: 'Ovos Trufados', imagem: require('./assets/produtos/ovos_trufados.png') },
    { id: 2, nome: 'Ovos Infantis', imagem: require('./assets/produtos/ovos_infantis.png') },
    // Adicione mais produtos conforme necessário
  ];

  const agendar = async () => {
    // Lógica para agendar (pode ser um modal ou uma nova tela)
    console.log('Agendamento realizado!');
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bianca Doces Confeitaria</Text>
        <Text style={{ fontSize: 18 }}>Nossos Produtos</Text>
      </View>
      {produtos.map(produto => (
        <View key={produto.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={produto.imagem} style={{ width: 100, height: 100 }} />
          <Text>{produto.nome}</Text>
        </View>
      ))}
      <Button title="Agendar" onPress={agendar} />
    </ScrollView>
  );
};

export default App;