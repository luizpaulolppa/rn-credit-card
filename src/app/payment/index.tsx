import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";

import { CARD_SIDE, CreditCard } from "@/app/components/credit-card";
import { useSharedValue } from "react-native-reanimated";

import { styles } from "./styles"
import { Input } from "../components/input";
import { useState } from "react";

export function Payment() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState("")
  const [code, setCode] = useState("")
  const cardSide = useSharedValue(CARD_SIDE.front)

  function showFontCard() {
    cardSide.value = CARD_SIDE.front
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back
  }

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard()
    } else {
      showFontCard()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <CreditCard cardSide={cardSide} data={{ code, date, name, number }} />
      <TouchableOpacity
        style={styles.button}
        onPress={handleFlipCard}
      >
        <Text>Inverter</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Input
          placeholder="Nome do titular"
          value={name}
          onChangeText={setName}
          onFocus={showFontCard}
        />
        <Input
          placeholder="Número do cartão"
          keyboardType="numeric"
          maxLength={19}
          value={number}
          onChangeText={setNumber}
          onFocus={showBackCard}
        />
        <View style={styles.inputInline}>
          <Input
            placeholder="01/02"
            style={styles.smallInput}
            value={date}
            onChangeText={setDate}
            onFocus={showBackCard}
          />
          <Input
            placeholder="123"
            style={styles.smallInput}
            keyboardType="numeric"
            value={code}
            onChangeText={setCode}
            onFocus={showBackCard}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
