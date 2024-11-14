import { Image, Pressable, Text, View } from "react-native";

const  zx9 = require("../../../assets/Home/zx9.png")

export default function Mobilezx9() {
  
  
  return (
    <View className="w-full px-5 bg-white pt-[120px]">
      <View className="w-full h-full  flex-1  gap-y-4 circles items-center  bg-amber-700 py-8  rounded-xl">
      <Image source={zx9} alt="" className="w-44 h-52" />
      <View className="flex flex-col space-y-0  tracking-widest">
        <Text className="font-extrabold text-white  text-3xl text-center">ZX9</Text>
        <Text className="font-extrabold text-white  text-3xl text-center">SPEAKER</Text>
      </View>
      <Text className="font-light tracking-wide text-center text-zinc-200">
        Upgrade to premium speakers that are phoenomenally built to deliver
        truly remarkable sound
      </Text>
      <Pressable
       
        className="bg-black   py-4 px-10 "
      >
       <Text className='text-white font-normal'> SEE PRODUCT</Text> 
      </Pressable>
    </View>
    </View>
  );
}