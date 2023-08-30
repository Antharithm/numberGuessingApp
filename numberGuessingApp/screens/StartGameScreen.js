import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../component/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#7c063c",
    borderRadius: 8,
    elevation: 4, // andriod shadow component
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
