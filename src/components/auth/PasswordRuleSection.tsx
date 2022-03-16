import React from "react"
import { View, Image } from "react-native"
import { authIcons } from "../../../assets/icons"
import signupStyles from "../../styles/screens/auth/signup.style"
import { P1, P2 } from "../common/AppText"


const {
 passRulesTitle,
 passRulesRow,
 checkIcon,
 inactiveRule } = signupStyles

const PasswordRuleSection = () => {

 return <>
  <P1 style={passRulesTitle}>Your Password must contain:</P1>
  <PasswordRule title='Atleast 6 characters' satisfied />
  <PasswordRule title='Contains a number' satisfied={false} />
 </>
}

const PasswordRule = (props: { title: string, satisfied: boolean }) => {
 return <View style={passRulesRow}>
  <Image
   source={props.satisfied ?
    authIcons.checkCircle :
    authIcons.inactiveCheckCircle}
   style={checkIcon} />
  <P2 style={!props.satisfied && inactiveRule}>{props.title}</P2>
 </View>
}

export default PasswordRuleSection