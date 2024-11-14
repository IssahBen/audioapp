import { SafeAreaView,View,Text ,StatusBar, ScrollView, ImageBackground, Pressable} from "react-native" 
import MobileHero from "./MobileHero"
import MobileCategory from "./MobileCategory"
import Mobilezx9 from "./Mobilezx9"

 export default function Home(){
    return(  <SafeAreaView className="flex-1 bg-red-700">
     <ScrollView className="flex-1 h-full bg-blue-400">
        
       <MobileHero/>
       <MobileCategory/>
    
    
   </ScrollView>
  </SafeAreaView>)
 }