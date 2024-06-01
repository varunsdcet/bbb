/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Alert } from './node_modules/react-native/types/index';
import LinearGradient from 'react-native-linear-gradient';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function Ram(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [da,setDa] = useState('')


  interface Item {
    title: string;
    description: string;
    result: string; // Adjust the type according to your requirement
  }
  const items: Item[] = [
    {
      title: "सुनु सिय सत्य असीस हमारी। पूजिहि मन कामना तुम्हारी।",
      description: "यह चौपाई बालकाण्ड में श्रीसीताजी के गौरीपूजन के प्रसंग में है। गौरीजी ने श्रीसीताजी को आशीर्वाद दिया है।",
      result: "फलः- प्रश्नकर्त्ता का प्रश्न उत्तम है, कार्य सिद्ध होगा।"
  },
  {
      title: "प्रबिसि नगर कीजै सब काजा। हृदय राखि कोसलपुर राजा।",
      description: "यह चौपाई सुन्दरकाण्ड में हनुमानजी के लंका में प्रवेश करने के समय की है।",
      result: "फलः-भगवान् का स्मरण करके कार्यारम्भ करो, सफलता मिलेगी।"
  },
  {
      title: "उघरें अंत न होइ निबाहू। कालनेमि जिमि रावन राहू।।",
      description: "यह चौपाई बालकाण्ड के आरम्भ में सत्संग-वर्णन के प्रसंग में है।",
      result: "फलः-इस कार्य में भलाई नहीं है। कार्य की सफलता में सन्देह है।"
  },
  {
      title: "बिधि बस सुजन कुसंगत परहीं। फनि मनि सम निज गुन अनुसरहीं।।",
      description: "यह चौपाई बालकाण्ड के आरम्भ में सत्संग-वर्णन के प्रसंग में है।",
      result: "फलः-खोटे मनुष्यों का संग छोड़ दो। कार्य की सफलता में सन्देह है।"
  },
  {
      title: "होइ है सोई जो राम रचि राखा। को करि तरक बढ़ावहिं साषा।।",
      description: "यह चौपाई बालकाण्डान्तर्गत शिव और पार्वती के संवाद में है।",
      result: "फलः-कार्य होने में सन्देह है, अतः उसे भगवान् पर छोड़ देना श्रेयष्कर है।"
  },
  {
      title: "मुद मंगलमय संत समाजू। जिमि जग जंगम तीरथ राजू।।",
      description: "यह चौपाई बालकाण्ड में संत-समाजरुपी तीर्थ के वर्णन में है।",
      result: "फलः-प्रश्न उत्तम है। कार्य सिद्ध होगा।"
  },
  {
      title: "गरल सुधा रिपु करय मिताई। गोपद सिंधु अनल सितलाई।।",
      description: "यह चौपाई श्रीहनुमान् जी के लंका प्रवेश करने के समय की है।",
      result: "फलः-प्रश्न बहुत श्रेष्ठ है। कार्य सफल होगा।"
  },
  {
    title: "बरुन कुबेर सुरेस समीरा। रन सनमुख धरि काह न धीरा।।",
    description: "यह चौपाई लंकाकाण्ड में रावन की मृत्यु के पश्चात् मन्दोदरी के विलाप के प्रसंग में है।",
    result: "फलः-कार्य पूर्ण होने में सन्देह है।"
},
{
    title: "सुफल मनोरथ होहुँ तुम्हारे। राम लखनु सुनि भए सुखारे।।",
    description: "यह चौपाई बालकाण्ड पुष्पवाटिका से पुष्प लाने पर विश्वामित्रजी का आशीर्वाद है।",
    result: "फलः-प्रश्न बहुत उत्तम है। कार्य सिद्ध होगा"
}
    // Add more items as needed
  ];
  

  const array : string[] = [
  "सु",
  "प्र",
  "उ",
"बि",
"हो",
"मु",
"ग", // pronounced as "ga"
"ब", // pronounced as "ba"
"सु", // pronounced as "su"
"नु", // pronounced as "nu"
"बि", // pronounced as "bi"
"घ", // pronounced as "gha"
"धि", // pronounced as "dhi"
"इ", // pronounced as "i"
"द", // pronounced as "da",
"र" ,   // pronounced as "ra"
        "रु",   // pronounced as "ru"
        "फ",    // pronounced as "pha"
        "सि",   // pronounced as "si"
        "सि",   // pronounced as "si"
        "रहिं", // pronounced as "rahin"
        "बस",   // pronounced as "bas"
        "हि",   // pronounced as "hi"
        "मं",   // pronounced as "ma"
        "ल",    // pronounced as "la"
        "न",    // pronounced as "na"
        "ल",    // pronounced as "la"
        "य",    // pronounced as "ya"
        "न",    // pronounced as "na"
        "अं" ,   // pronounced as "am"
        "सुज",  // pronounced as "suj"
        "सो",   // pronounced as "so"
        "ग",    // pronounced as "ga"
        "सु",   // pronounced as "su"
        "कु",   // pronounced as "ku"
        "म",    // pronounced as "ma"
        "स",    // pronounced as "sa"
        "ग",    // pronounced as "ga"
        "त",    // pronounced as "ta"
        "न",    // pronounced as "na"
        "ई",    // pronounced as "ee"
        "ल",    // pronounced as "la"
        "धा",   // pronounced as "dha"
        "बे",   // pronounced as "be"
        "नो",    // pronounced as "no",
        "त्य",  // pronounced as "tya"
        "र",    // pronounced as "ra"
        "न",    // pronounced as "na"
        "कु",   // pronounced as "ku"
        "जो",   // pronounced as "jo"
        "म",    // pronounced as "ma"
        "रि",   // pronounced as "ri"
        "र",    // pronounced as "ra"
        "र",    // pronounced as "ra"
        "अ",    // pronounced as "a"
        "की",   // pronounced as "ki"
        "हो",   // pronounced as "ho"
        "सं",   // pronounced as "san"
        "रा",   // pronounced as "ra"
        "य",    // pronounced as "ya"
        "पु",   // pronounced as "pu"
        "सु",   // pronounced as "su"
        "थ",    // pronounced as "tha"
        "सी",   // pronounced as "si"
        "जे",   // pronounced as "je"
        "इ",    // pronounced as "i"
        "ग",    // pronounced as "ga"
        "म",    // pronounced as "ma"
        "सं",   // pronounced as "san"
        "क",    // pronounced as "ka"
        "रे",   // pronounced as "re"
        "हो",   // pronounced as "ho"
        "स",    // pronounced as "sa"
        "स",    // pronounced as "sa"
        "नि" ,   // pronounced as "ni"
        "त",    // pronounced as "ta"
        "र",    // pronounced as "ra"
        "त",    // pronounced as "ta"
        "र",    // pronounced as "ra"
        "स",    // pronounced as "sa"
        "हूँ",  // pronounced as "hoon"
        "ह",    // pronounced as "ha"
        "ब",    // pronounced as "ba"
        "ब",    // pronounced as "ba"
        "प",    // pronounced as "pa"
        "चि",   // pronounced as "chi"
        "स",    // pronounced as "sa"
        "हिं",  // pronounced as "hin"
        "स",    // pronounced as "sa"
        "तु",   // pronounced as "tu"
        "म",    // pronounced as "ma"
        "का",   // pronounced as "kaa"
        "ा",    // pronounced as "aa"
        "र",    // pronounced as "ra"
        "र",    // pronounced as "ra"
        "म",    // pronounced as "ma"
        "मि",   // pronounced as "mi"
        "मी",   // pronounced as "mee"
        "म्हा", // pronounced as "mha"
        "ा",    // pronounced as "aa"
        "जा",   // pronounced as "ja"
        "हू",   // pronounced as "hu"
        "हीं",  // pronounced as "heen"
        "ा",    // pronounced as "aa"
        "ा"  ,   // pronounced as "aa"
        "ता",    // pronounced as "taa"
        "रा",    // pronounced as "raa"
        "रे",    // pronounced as "re"
        "री",    // pronounced as "ree"
        "हृ",    // pronounced as "hri"
        "का",    // pronounced as "kaa"
        "फ",     // pronounced as "pha"
        "खा",    // pronounced as "khaa"
        "जू",    // pronounced as "joo"
        "ई",     // pronounced as "ee"
        "र",     // pronounced as "ra"
        "रा",    // pronounced as "raa"
        "पू",    // pronounced as "poo"
        "द",     // pronounced as "da"
        "ल",     // pronounced as "la"
        "नि",    // pronounced as "ni"
        "को",    // pronounced as "ko"
        "जो",    // pronounced as "jo"
        "गो",    // pronounced as "go"
        "न",     // pronounced as "na"
        "मु",    // pronounced as "mu"
        "जि",    // pronounced as "jee"
        "यँ",    // pronounced as "yan"
        "ने",    // pronounced as "ne"
        "मनि",   // pronounced as "mani"
        "क",     // pronounced as "ka"
        "ज",     // pronounced as "ja"
        "प",     // pronounced as "pa"
        "स",     // pronounced as "sa"
        "ल",     // pronounced as "la"
        "हि", "रा", "मि", " स", "रि", "ग", "द", "न्मु", "ख", "म", "खि", "जि", "म", "त", "जं",
        "सिं", "ख", "नु", "न", "कौ", "मि", "निज", "र्क", "ग", "धु", "ध", "सु", "का", "स", "र",
        "गु", "ब", "म", "अ", "रि", "नि", "म", "ल", "ा", "न", "ढँ", "ती", "न", "क", "भ",
        "ना", "पु", "व", "अ", "ा", "र", "ल", "ा", "ए", "तु", "र", "न", "नु", "वै", "थ",
        "सि", "हूँ", "सु", "म्ह", "रा", "र", "स", "स", "र", "त", "न", "ख", "ा", "ज", "ा",
        "र",   "ा", "ा", "ला", "धी", "ा", "री", "ा", "हू", "हीं", "खा", "जू", "ई", "रा", "रे"

]


  const renderItem = ({ item ,index}: { item: string,index:number }) => (
    <TouchableOpacity onPress={() => handleItemClick(index)}>
    <View style={styles.item}>
    <Text style = {{fontSize:11,fontWeight:'bold',color:'#6A7FC1'}}>{item}</Text>
    </View>
    </TouchableOpacity>
  );

  const handleItemClick = (index:number ) => {
let calculate :number = index %9;

alert(items[calculate].result)

  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
          <LinearGradient colors={['white', 'white']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>Nitnem Paat</Text>
      </LinearGradient>
<ScrollView>
      <Text style = {{color:'black',fontFamily:'AvenirLTStd-Black',fontSize:15,textAlign:'center',marginTop:22,lineHeight:22}}>
      How to ask a Prashnavali question?


      </Text>

      <Text style = {{color:'black',fontFamily:'AvenirLTStd-Roman',fontSize:15,textAlign:'center',marginTop:22,lineHeight:22}}>
  
Step 1 Close your eyes with a calm mind and meditate on Lord for a few moments. Make your question in your mind.

      </Text>
      <Text style = {{color:'black',fontFamily:'AvenirLTStd-Roman',fontSize:15,textAlign:'center',marginTop:22,lineHeight:22}}>
  

  Step 2 Say name your Lord and click anywhere on prashnavali chart with closed eyes.

        </Text>
        <Text style = {{color:'black',fontFamily:'AvenirLTStd-Roman',fontSize:15,textAlign:'center',marginTop:22,lineHeight:22}}>
  

  Step 3 Your answer page will load immediately.(May take upto 5 seconds for answer to load)
  With the result, Ramcharitmanas from where your answer is taken.
        </Text>
      <View style = {{    borderWidth: 1, borderColor: '#6A7FC1',width:Dimensions.get('window').width - 8,height:450,alignSelf:'center',    backgroundColor: '#fcdbd4', }}>
     <FlatList
     numColumns={15} 
     contentContainerStyle={styles.container}
      data={array}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />

   
    </View>
    <Text style = {{color:'black',fontFamily:'AvenirLTStd-Black',fontSize:15,textAlign:'center',marginTop:22}}>
      {da}
    </Text>
    
    </ScrollView>
    </SafeAreaView>
  );
}



export default Ram;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',

  },
  item: {
    width: Dimensions.get('window').width/15.4, // Each item will take up around 11% of the container's width (including margin)
    justifyContent: 'center',
    alignItems: 'center',
    height:30,

    borderWidth: 1,
    borderColor: '#6A7FC1',
    backgroundColor: 'white', // Background color for each item
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 50,
    elevation: 5,
  },
  opt_touch: {
    flex: 0.5,
    height: 100,
  },
  opt_linear: {
    padding: 10,
    borderRadius: 12,
    borderTopRightRadius: 12,
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1,

    elevation: 5,
  },
  opt_icon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 20,
  },
  opt_title: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 16,
    color: 'black',
    margin:10,
    marginTop: 14,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'AvenirLTStd-Black',
    textAlign: 'center',
    margin: 14,
    color: 'black',
    backgroundColor: 'transparent',
  },
});
