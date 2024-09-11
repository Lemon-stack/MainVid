import { lazy } from 'react'
const Signup = lazy(()=> import('../auth/Signup'))
const Home =  lazy(()=> import('../components/Home'))
const Container = lazy (()=> import('../components/Container'))
const Hero = lazy(()=> import('../components/Hero'))
const Login = lazy(()=> import('../auth/Login'))
const PasswordReset = lazy(()=> import('../auth/PasswordReset'))
export {Signup, Login, Home, Container, Hero, PasswordReset}
