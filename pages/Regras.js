import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao'

export default function Regras() {
  return (
    <View style={styles.container}>
      <NavbarPadrao texto="Regras"/>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Regras</Text>

          <Text style={styles.ruleTitle}>1. Fornecimento de Informações Verídicas:</Text>
          <Text style={styles.ruleText}>
          Todos os usuários do aplicativo devem garantir que as informações fornecidas ao criar anúncios e perfis sejam totalmente verídicas e precisas. Isso inclui, mas não se limita a, detalhes do veículo como marca, modelo, ano de fabricação, quilometragem, estado de conservação, e preço. Informações de contato, como número de telefone e endereço de e-mail, também devem ser precisas. Anúncios ou perfis que contenham informações falsas, enganosas ou incompletas serão removidos pela administração do aplicativo. Reincidências podem resultar na suspensão temporária ou permanente da conta do usuário.
          </Text>

          <Text style={styles.ruleTitle}>2. Proibição de Atividades Fraudulentas:</Text>
          <Text style={styles.ruleText}>
          O aplicativo adota uma política de tolerância zero em relação a qualquer atividade fraudulenta. Isso inclui, entre outras práticas, a criação de anúncios falsos, manipulação de preços para enganar potenciais compradores, ou o uso de informações de terceiros sem o devido consentimento. Além disso, a tentativa de vender veículos inexistentes ou não pertencentes ao usuário também é estritamente proibida. Se qualquer atividade fraudulenta for detectada, o usuário será banido permanentemente do aplicativo, e as autoridades competentes poderão ser notificadas, dependendo da gravidade da infração.
          </Text>

          <Text style={styles.ruleTitle}>3. Respeito nas Interações:</Text>
          <Text style={styles.ruleText}>
          Todos os usuários devem manter um nível elevado de respeito e cortesia ao interagir com outros membros da comunidade, seja em mensagens privadas, comentários ou avaliações. Linguagem ofensiva, discriminação, assédio ou qualquer tipo de comportamento inadequado ou abusivo não será tolerado. Qualquer usuário que violar essa regra estará sujeito a ações disciplinares, que podem variar desde uma advertência até a suspensão ou exclusão permanente da conta, dependendo da gravidade da infração e da reincidência.
          </Text>

          <Text style={styles.ruleTitle}>4. Cumprimento das Obrigações de Venda/Compra:</Text>
          <Text style={styles.ruleText}>
          Quando um acordo de venda ou compra é estabelecido entre usuários, ambas as partes devem cumprir suas obrigações conforme os termos combinados. Isso inclui a entrega do veículo conforme descrito no anúncio e o pagamento na quantia acordada. Desistências de última hora sem uma justificativa válida, ou o não cumprimento dos termos acordados, podem resultar em penalidades para o usuário infrator. Estas penalidades podem incluir desde a suspensão temporária da conta até a exclusão permanente, dependendo da gravidade da situação e do histórico do usuário.
          </Text>

          <Text style={styles.ruleTitle}>5. Uso Apropriado da Plataforma:</Text>
          <Text style={styles.ruleText}>
          A plataforma foi desenvolvida com o propósito exclusivo de facilitar a compra e venda de veículos. Qualquer uso que não esteja alinhado com esse objetivo é proibido. Isso inclui, mas não se limita a, a prática de enviar spam, promover produtos ou serviços não relacionados a veículos, ou utilizar a plataforma para atividades ilegais. Usuários que fizerem uso inadequado da plataforma poderão ter suas contas suspensas ou banidas, dependendo da gravidade da violação. O uso contínuo da plataforma implica a aceitação e cumprimento desta regra.
          </Text>

          <Text style={styles.ruleTitle}>6. Proteção de Dados Pessoais:</Text>
          <Text style={styles.ruleText}>
          É responsabilidade de cada usuário proteger as informações de login e quaisquer dados pessoais fornecidos à plataforma. Compartilhar a conta com terceiros ou divulgar informações confidenciais, como senhas ou detalhes financeiros, é estritamente proibido. Caso o usuário suspeite que sua conta foi comprometida, ele deve notificar imediatamente o suporte do aplicativo. A violação desta regra pode resultar em ações disciplinares, incluindo a suspensão temporária da conta para garantir a segurança dos dados pessoais e a integridade da plataforma como um todo.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flex: 1
  },
  content: {
    padding: 25,
  },
  subtitle: {
    color: '#ed2626',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  ruleTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 18,
  },
  ruleText: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 5,
    textAlign: 'justify'
  }
});
