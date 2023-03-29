import React,{useState} from 'react';
import { View, Text,TextInput ,TouchableOpacity,ScrollView} from 'react-native';

const Texti = () => {
    const [state, setstate] = useState<any>([]);
    const [text, settext] = useState('');
    const [k, setk] = useState(1);
    const change:any=()=>{
      settext('')
      setk(k+1)
      return(
        <TextInput key={k} style={{width:'90%',borderWidth:1,borderColor:'white',marginTop:'5%',alignSelf:'center',paddingLeft:10}} onChangeText={(e)=>settext(e)} placeholder={k.toString()} placeholderTextColor='red'/>
      )
    }
  return (
    <View>
      
      <View style={{height:'90%'}}>
      <ScrollView>
        {state} 
        </ScrollView>        
      </View>
      
      <TouchableOpacity onPress={()=>{
        console.log(text)
        setstate([...state,change()])}}>
        <View style={{height:50,width:'70%',backgroundColor:'red',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:20}}>
            <Text style={{color:'white',fontSize:20}}>
              Add
            </Text>
        </View>
        </TouchableOpacity>
        
    </View>
  );
}

export default Texti;
