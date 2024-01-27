// page2.js
import { Text, View, TouchableOpacity } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Styles from "../styles/page-styles";
import Signature from 'react-native-signature-canvas';



export default function Page() {
  const params = useLocalSearchParams();
  
  const { Name, Event, Noun } = params;
 
  const person = params.person || "_________";
  const noun = params.noun || "_________";
  const event = params.event || "_________";

const today = new Date().toLocaleDateString();

  return (
    <View style={Styles.page}>
        <Link href="/" asChild>
        <TouchableOpacity style={Styles.backButton}>
          <Text>←</Text>
        </TouchableOpacity>
      </Link>
     
      <Text style={Styles.secondTitle}>MADLIBS</Text>

      <Text style={Styles.verticalText}>HALL PASS</Text>

      <Text style ={Styles.date}>Date: {today}</Text>
<View>
      <Text style={Styles.subtitle}>{Name} is too cool.</Text>
      <Text style={Styles.subtitle}>for {Noun} class.</Text>
      <Text style={Styles.subtitle}>Instead,she/he will</Text>
      <Text style={Styles.subtitle}>attending the {Event}.</Text>
</View>
  <Text style={Styles.sign}>
        Sign Here
      </Text>
      <Signature
        style={Styles.signatureBox}
        descriptionText=""
        webStyle={`.m-signature-pad {border: 1px solid black;}`}
      />
    </View>
  );
  
}
