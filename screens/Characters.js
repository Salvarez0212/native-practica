import { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import Character from "../components/cards/Character";

const Characters = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(" https://rickandmortyapi.com/api").then((res) => {
      setCharacters(res);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Characters</Text>
      <FlatList>
        {characters.map((char) => {
          <Character char={char} />;
        })}
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    flex: 1,
  },
  list: {
    flex: 3,
  },
  text: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Characters;
