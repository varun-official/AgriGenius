import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/loginPage/login";
import Signup from "./Component/signUp/signup";
import CropInfo from "./Container/CropInfo/CropInfo";
import Cropdec from "./Component/Cropdec/Cropdec";
import UploadShortTerm from "./Component/UploadCropDetails/uploadShortTerm";
import UploadLongTerm from "./Component/UploadCropDetails/uploadLongTerm";
import UploadScheme from "./Component/UploadCropDetails/uploadScheme";
import UploadArticle from "./Component/UploadCropDetails/uploadArticle";
import UploadNews from "./Component/UploadCropDetails/uploadNews";
import News_sg from "./Component/News/News_sg";
import Scheme from "./Component/Scheme/Scheme";
import Community from "./community/Community/Community";
import { useUserAuth } from "./context/UserAuthContext";
import { Provider } from "react-redux";
import store from "./community/app/store";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Image from "./LeafDisease";
function App() {
  const { user } = useUserAuth();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/image" exact element={<Image />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/forgotpassword" exact element={<ForgotPassword />} />
          <Route path="/cropdec/:id" exact element={<Cropdec />} />
          
          {user && (
            <Route
              path="/uploadshortterm"
              exact
              element={<UploadShortTerm />}
            />
          )}
          {user && (
            <Route path="/uploadlongterm" exact element={<UploadLongTerm />} />
          )}
          {user && (
            <Route path="/uploadscheme" exact element={<UploadScheme />} />
          )}
          {user && (
            <Route path="/uploadarticle" exact element={<UploadArticle />} />
          )}
          {user && <Route path="/uploadnews" exact element={<UploadNews />} />}
          {user && <Route path="/news" exact element={<News_sg />} />}
          {/* {user && <Route path="/news" exact element={<Admindashboard />} />} */}
          {user && <Route path="/scheme" exact element={<Scheme />} />}
          {user && (
            <Route
              path="/CropInfo"
              element={
                <CropInfo />
              }
            ></Route>
          )}
          {user && (
            <Route
              path="/community"
              element={
                <Provider store={store}>
                  <Community />
                </Provider>
              }
            />
          )}
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
