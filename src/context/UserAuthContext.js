import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import {collection,addDoc, getDocs,doc,deleteDoc,updateDoc, getDoc, query, orderBy} from 'firebase/firestore'
import {auth,db} from "../config/firebase"

const API="http://localhost:8000/api"

const userAuthContext=createContext();


export function UserAuthContextProvider({children}){
    const[user,setUser]= useState(false);
    const[cropdata,setCrop]=useState([])
    const cropsCollectionRef = collection(db,"crops")
    const schemeCollectionRef= collection(db,"schemes")

    // Load user from localStorage if available
    useEffect(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }, []);
    
    async function signUp(inputData){
        try {
            const data = {
                name:inputData.user_name,
                email:inputData.email,
                password:inputData.password,
                phoneno:inputData.phoneNo,
                pincode:inputData.pincode,
                district:inputData.district,
                region:inputData.region,
                state:inputData.state
            }
            const res = await axios.post(`${API}/signup`,data);
            const userData = res.data;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
            } catch (error) {
                return error;
            }
    }
    async function logIn(email,password){
        try {
        const res = await axios.post(`${API}/signin`,{email,password});
        const userData = res.data.user;
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
        } catch (error) {
            return error;
        }
    }
    const logout =async()=>{
        try {
            const res = await axios.get(`${API}/signout`);
            setUser(null);
            localStorage.removeItem('user');
            return res.data;    
            } catch (error) {
                return error;
            }          
    }
    
    const addCrop = async(crop) =>{
        await addDoc(cropsCollectionRef,crop)
    }

    const getCrop=async()=>{
        try {
        const res = await axios.get(`${API}/getAllCrop`);
        setCrop(res.data);
        return res.data;
        } catch (error) {
         console.log("Error while getting crops::",error.data.message)
        setCrop([]);
        }
    }

    const getCropByname = async(cropname)=>{
        try {
            const res = await axios.get(`${API}/getCrop/${cropname}`);
            return res.data;
        } catch (error) {
            console.log("Error while getting data for cropByname::",error.data.message);
            return null;
        }
    }


    const addScheme = async(scheme) =>{
        await addDoc(schemeCollectionRef,scheme)
    }
    const getScheme = async() =>{
        const data=await getDocs(schemeCollectionRef)
        console.log(data.docs);
        return data
    }

    const getNews= async() =>{
        try {
            const res = await axios.get(`${API}/get/news`);
            return res.data;
        } catch (error) {
            console.log("Error while getting data for getNews::",error.data.message);
            return [];
        }
    }

    const getArticle= async() =>{
        try {
            const res = await axios.get(`${API}/get/articel`);
            return res.data;
        } catch (error) {
            console.log("Error while getting data for getArticle::",error.data.message);
            return [];
        }
    }
   
   return <userAuthContext.Provider value={{user,setUser,signUp,logIn,addCrop,getCrop,cropdata,addScheme,getScheme,getArticle,getNews,logout,getCropByname}}>{children}</userAuthContext.Provider>
}


export function useUserAuth(){
    return useContext(userAuthContext)
}