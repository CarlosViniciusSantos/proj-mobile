import React , { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NavbarAdm from '../../components/admComponents/NavbarAdm';
import CardUser from '../../components/admComponents/CardUser';

export default function Vendedores() {
    const [usuarios, setUsuarios] = useState([]);

    useFocusEffect(
        React.useCallback(() =>{
            const getUsers = async () => {
                const response = await fetch('https://pi3-backend-i9l3.onrender.com/usuarios')
                // console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    setUsuarios(data);
                    return;
                }
                console.log("Erro ao carregar contas dos usuários");
            }
            getUsers();
        },[])
    )

    // Filtrar apenas os administradores
    const administradores = usuarios.filter(usuario => usuario.isAdmin === false);

    return (
        <View style={styles.container}>
            {/* <NavbarAdm user={true} vend={false} /> */}
            <ScrollView style={styles.scr}>
                {administradores.length === 0 && <Text>Carregando ou nenhum administrador encontrado...</Text>}
                {
                    administradores.map((usuario) =>
                        <CardUser
                            key={usuario.id}
                            id={usuario.id}
                            foto={usuario.foto_perfil}
                            nome={usuario.nome}
                            email={usuario.email}
                            cpf={usuario.cpf}
                            telefone={usuario.telefone}
                            nascimento={usuario.nascimento}
                            cidade={usuario.cidade}
                            estado={usuario.estado}
                            senha={usuario.senha}
                            isAdmin={usuario.isAdmin}
                        />
                    )
                }

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scr: {  
        paddingHorizontal: 10,
        flex: 1
    }
});
