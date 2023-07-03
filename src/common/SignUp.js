import { ActionIcon, Alert, Anchor, Box, Button, Center, Grid, Text, TextInput, } from '@mantine/core'
import { FaGoogle } from 'react-icons/fa';
import { Image } from '@mantine/core';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signUp(email, password)
            navigate("/")
        } catch (error) {
            toast.error("invalid email or password", {
                position: "top-center",
                theme: "colored",
            })
            setError(error.message)
        }



    }
    return (
        <>
            <Box sx={(theme) => ({ overflow: "hidden", height: "100vh", width: "100vw" })}>
                <Box
                    sx={(theme) => ({ height: "100vh", width: "100vw", position: "relative", })}>
                    <Box sx={(theme) => ({ borderRadius: "10px", background: 'radial-gradient(circle, rgba(36,19,145,1) 0%, rgba(14,175,52,1) 85%)', height: "80vh", width: "30vw", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", "@media(max-width : 768px)": { width: "100vw", height: "100vh", background: "#09a2e5" } })} >
                        <Center mt="80px">
                            <Box>
                                <Center mb={25}>
                                    <Text sx={(theme) => ({ fontSize: "80px", fontWeight: "bolder" })}> <span>ｓｉｇｎｕｐ</span></Text>
                                </Center>

                                <Center mt="xs" sx={(theme) => ({ color: "#f2ff1c", fontSize: "20px" })} ><Text>Log In With Password </Text>
                                </Center>
                            </Box>
                        </Center>
                        <Box mt="lg" mx="auto" component="form" sx={(theme) => ({ width: "90%", height: "100%", })} method='POST'>
                            <Center>

                                {error && <Text mb="lg" style={{ color: "red" }}>{error} </Text>}
                            </Center>
                            <Grid>
                                <Grid.Col>
                                    <TextInput onChange={(e) => setEmail(e.target.value)} name='email' color='black' placeholder="Email" size="lg" />

                                </Grid.Col>
                                <Grid.Col pt="xl">
                                    <TextInput onChange={(e) => setPassword(e.target.value)} name='password' size="lg" placeholder="Password" type={showPassword ? 'text' : 'password'} styles={{ error: { color: 'pink', } }} rightSection={<ActionIcon style={{ fontSize: '24px' }} onClick={toggleShowPassword}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</ActionIcon>} />

                                </Grid.Col>
                            </Grid>
                            <Center mt="xl">
                                <Box>
                                    <Link to="/forgetpassword" style={{ color: "#f2ff1c", fontSize: "20px" }} >
                                        Forget Password
                                    </Link>
                                </Box>
                            </Center>
                            <Center mt="xl">
                                <Box>
                                    <Link to="/signup" style={{ color: "#fff", fontSize: "20px", textDecoration: "none" }}>
                                        Alredy have an account ? <span ><Link style={{ color: "#f2ff1c" }} to="/"> Signin</Link></span>
                                    </Link>
                                </Box>
                            </Center>
                            <Center mt="xl">
                                <Box>
                                    <Button radius="md" size='lg' type='submit' color="dark" px={50} onClick={handleSubmit}>Submit</Button>
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                </Box>
                <ToastContainer />
            </Box>
        </>
    )
}