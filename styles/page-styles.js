import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 25,
    marginBottom: 5,
 
  },

  input: {
    width: '80%',
    flex: .08,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 15,
    margin: 15,
    },

    button: {
        marginTop:10,
        backgroundColor: 'lightblue',
        borderRadius: 30,
        padding: 20,
    },

    
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        padding: 10, 
},

signatureBox: {
    borderColor: "#000033",
    borderWidth: 1,
    width: 350,
    height: -50,
    marginBottom: 30,
    marginTop: 15,
    maxHeight: 250,
    maxWidth: 350,
},

signatureText: {
  fontSize: 14,
  fontWeight: 'bold',
  marginLeft: -160,
},

date:{
  fontSize: 20,
  marginTop: 100,
  marginBottom: 20,
},

verticalText: {
  fontSize: 50,
  fontWeight: 'bold',
  position: 'absolute',
  left: -88,
  top: '35%',
  transform: [{ translateY: -20 }, { rotate: '270deg' }],
}, 

secondTitle:{
  alignItems: 'center', 
  justifyContent: 'center', 
  marginTop:-10,
  marginBottom: 5,
  fontSize: 64,
  fontWeight: "bold",
},

signatureBox: {
  borderColor: "#000033",
  borderWidth: 1,
  width: 300,
  height: -80,
  marginBottom: 30,
  marginTop: 15,
  maxHeight: 250,
  maxWidth: 350,
},

sign:{
  alignItems: 'center', 
  justifyContent: 'center', 
  marginTop:-90,
  marginBottom: 5,
  fontSize: 100,
  fontWeight: "bold",
},

});
export default styles;
