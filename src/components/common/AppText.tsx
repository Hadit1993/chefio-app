
import React, { FC } from 'react'
import { Text, TextProps } from 'react-native'
import AppTheme from '../../../assets/theme'

const H1: FC<TextProps> = (props) => (<Text  {...props} style={[AppTheme.textStyles.H1, props.style]}>{props.children}</Text>)

const H2: FC<TextProps> = (props) => (<Text  {...props} style={[AppTheme.textStyles.H2, props.style]}>{props.children}</Text>)

const H3: FC<TextProps> = (props) => (<Text  {...props} style={[AppTheme.textStyles.H3, props.style]}>{props.children}</Text>)

const P1: FC<TextProps> = (props) => (<Text  {...props} style={[AppTheme.textStyles.P1, props.style]}>{props.children}</Text>)

const P2: FC<TextProps> = (props) => (<Text  {...props} style={[AppTheme.textStyles.P2, props.style]}>{props.children}</Text>)

const Small: FC<TextProps> = (props) => (<Text {...props} style={[AppTheme.textStyles.S, props.style]}>{props.children}</Text>)


export { H1, H2, H3, P1, P2, Small }

