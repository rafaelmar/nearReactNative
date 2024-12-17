import { Text, View } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native';

import { s } from "./styles";
import { Step } from "@/components/step";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estable"
        description="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
      icon={IconQrcode}
        title="Ative o cupom com QR code"
        description="Escaneie o codigo no estabelecimento para usar o beneficio"
      />
      <Step
      icon={IconTicket}
        title="Garanta vantagens perto de voce"
        description="Ative cupons onde stiver, em diferentes tipos de estabelecimentos"
      />
    </View>
  );
}
