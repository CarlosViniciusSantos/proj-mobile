import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import CatalogoCarros from './pages/CatalogoCarros';
import Home from './pages/Home';
import Footer from './components/Footer';
import SideBarUser from './pages/SideBarUser';
import MeusVeiculos from './pages/MeusVeiculos';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Regras from './pages/Regras';
import DetalhesAnuncio from './pages/DetalhesAnuncio';
import EnviarProposta from './pages/EnviarProposta';
import AtualizarDadosUser from './pages/AtualizarDadosUser';
import AtualizarAnuncio from './pages/AtualizarAnuncio';
import SobreNos from './pages/SobreNos';
import CompraCarro from './pages/CompraCarro';
import Sidebar from './pages/Sidebar';
import MinhasCompras from './pages/MinhasCompras';
import RegistroAdm from './pages/admPages/RegistroAdm';
import CadastrarVeiculo from './pages/CadastrarVeiculo';
import Usuarios from './pages/admPages/Usuarios';
import Teste from './pages/TestImage'
import TesteV from './pages/TesteCadVeic'
import Vendedores from './pages/admPages/Vendedores';
import DetalhesUser from './pages/admPages/DetalhesUser';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState();

  const noFooterRoutes = ['Login', 'Registro', 'Enviar', 'AtualizarAnuncio', 'AtualizarDados', 'SobreNos', 'Anuncio', 'Comprar', 'AdmRegistro', 'CadastrarVeiculo', 'UsuarioAdm', 'DetalhesUser', 'VendedorAdm'];

  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', () => {
      const route = navigationRef.getCurrentRoute();
      setCurrentRoute(route?.name);
    });

    return unsubscribe;
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef} onReady={() => {
      const route = navigationRef.getCurrentRoute();
      setCurrentRoute(route?.name);
    }}>
      <Stack.Navigator initialRouteName="UsuarioAdm" screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Catalogo" component={CatalogoCarros} />
        <Stack.Screen name="SideBarUser" component={SideBarUser} />
        <Stack.Screen name="MeusVeiculos" component={MeusVeiculos} />
        <Stack.Screen name="Regras" component={Regras} />
        <Stack.Screen name="Anuncio" component={DetalhesAnuncio} />
        <Stack.Screen name="Enviar" component={EnviarProposta} />
        <Stack.Screen name="AtualizarAnuncio" component={AtualizarAnuncio} />
        <Stack.Screen name="AtualizarDados" component={AtualizarDadosUser} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        <Stack.Screen name="Comprar" component={CompraCarro} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="Compras" component={MinhasCompras} />
        <Stack.Screen name="AdmRegistro" component={RegistroAdm} />
        <Stack.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} />
        <Stack.Screen name="UsuarioAdm" component={Usuarios} />
        <Stack.Screen name="VendedorAdm" component={Vendedores} />
        <Stack.Screen name="DetalhesUser" component={DetalhesUser} />
        <Stack.Screen name="Teste" component={Teste} />
        <Stack.Screen name="TesteV" component={TesteV} />
      </Stack.Navigator>

      {!noFooterRoutes.includes(currentRoute) && <Footer />}

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
