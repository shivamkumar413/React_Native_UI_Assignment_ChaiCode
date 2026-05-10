import Input from "@/component/Input";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from '@react-native-vector-icons/ionicons'
import Logo from "@/component/Logo";

export default function Index() {
  return (
    <View>
      <Logo />
      <Text
        style={{
          fontSize : 30,
          textAlign : "center"
        }}
      >
        Sign In
      </Text>
      <Text
        style={{
          textAlign : "center",
          marginTop : 10,
          marginBottom : 20,
          color : "gray"
        }}
      >
        Let's experience the joy of telecare AI
      </Text>

      <Input 
        label="Email Address"
        placeholder="Enter your email address"
        keyboardType="email-address"
        secureTextEntry={false}
      />

      <Input 
        label="Password"
        placeholder="Enter your password"
        keyboardType="default"
        secureTextEntry={true}
      />

      <Pressable
        style={{
          backgroundColor : "#84CC16",
          padding : 20,
          borderRadius : 10,
          marginHorizontal : 12,
        }}
      >
        <Text
          style={{
            textAlign : "center",
            color : "white",
            fontWeight : "semi-bold"
          }}
        >
          Sign In 
        </Text>
      </Pressable>

      <View
        style={{
          flexDirection : "row",
          gap : 20,
          justifyContent : "center",
          marginTop : 20
        }}
      >
        <Ionicons 
          style={{borderWidth : 1, borderColor : "gray", padding : 10, borderRadius : 10,}}
          name="logo-facebook"
          size={30}
        />
         <Ionicons 
          style={{borderWidth : 1, borderColor : "gray", padding : 10, borderRadius : 10,}}
          name="logo-google"
          size={30}
        />
        <Ionicons 
          style={{borderWidth : 1, borderColor : "gray", padding : 10, borderRadius : 10,}}
          name="logo-instagram"
          size={30}
        />
      </View>
      <Text
        style={{textAlign : "center", marginTop : 20 }}
      >
        Don't have an account? <Text style={{color : "#7ED321"}}>Sign Up</Text>
      </Text>
    </View>
  );
}


