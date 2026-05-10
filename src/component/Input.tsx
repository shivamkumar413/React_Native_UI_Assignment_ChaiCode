import { KeyboardType, Text, TextInput } from "react-native";
import { Mail } from "lucide-react-native";

export default function Input(
    {placeholder,label,keyboardType,secureTextEntry} : {placeholder : string, label : string, keyboardType : KeyboardType, secureTextEntry : boolean}
) {
    return(
        <>
            <Text
                style={{
                    fontSize : 12,
                    fontWeight : "bold",
                    marginLeft : 15,
                    marginBottom : 5
                }}
            >
                {label}
            </Text>
            
            <TextInput 
                style={{
                    borderWidth : 1,
                    borderColor : "gray",
                    marginHorizontal : 12,
                    borderRadius : 10,
                    padding : 20,
                    marginBottom : 20
                }}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </>
    )
}