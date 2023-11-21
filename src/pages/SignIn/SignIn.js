import signPhoto from "../../../public/assets/signPhoto.png";
import signLogo from "../../../public/assets/Logo.png";
import googleLogo from "../../../public/assets/googleFrame.svg";
import appleLogo from "../../../public/assets/appleFrame.svg";
import facebookLogo from "../../../public/assets/facebookFrame.svg";
import eye from "../../../public/assets/01 align center.svg";
import { Link } from "react-router-dom";
import style from "./SignIn.module.css";
import { Controller, FormProvider, useFormContext, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
export default function SignIn() {
  // const methods = useFormContext();
  const formMethod = useForm({
    mode: "all",
    defaultValues: {
      mail: "",
      password: "",
    },
  });
  const submitFunc = (value) => {
      console.log(value)
  }
  
  return (
    <div className={style.signMain}>
      <div className={style.signPage}>
        <img src={signPhoto} alt="" className={style.leftSignPhoto} />
        <div className={style.rightSignSection}>
          <div className={style.signLogo}>
            <Link to="/">
              <img src={signLogo} alt="" />
            </Link>
          </div>
          {/* <FormProvider {...formMethod}> */}
          <div className={style.signFormSection}>
            <h2>Sign in for your exciting journey</h2>
            <form action="#" className={style.signFormContainer} onSubmit={formMethod.handleSubmit(submitFunc)}>
              <label htmlFor="mail">Email</label>

              <Controller
              name = "mail"
              control={formMethod.control}
              rules={{
                required:"This field must be written!",
                validate: (value)=>{
                  return(
                    !value.includes("@" && ".com") && "You must write gmail!"
                  )
                }
              }}
              render={({field})=>(
                <input
                {...field}
                type="text"
                id="mail"
                placeholder="someone@example.com"
                className={style.mail}
              />
              )}
              />
              {formMethod.formState.errors?.mail && (
                <div className={style.form_error}>{formMethod.formState.errors?.mail?.message}</div>
              )}

              <label htmlFor="password">Password</label>
              <Controller
              name="password"
              control={formMethod.control}
              rules={{
                required: "This field must be written!",
              }}
              render={({field})=>(
                <div className={style.passwordDiv}>
                <input
                {...field}
                  type="password"
                  name=""
                  id="password"
                  placeholder="password"
                />
                <img src={eye} alt="" />
              </div>
              )}
              />
              {formMethod.formState.errors?.password && (
                <div className={style.form_error}>{formMethod.formState.errors?.password?.message}</div>
              )}
              <Link className={style.forgotPassword} to="/ForgotPassword">
                Forgot password?
              </Link>
              <button>Sign in</button>
            </form>
          </div>
          <DevTool control={formMethod.control}/>
          {/* </FormProvider> */}
          <div className={`${style.goLoginSection} ${style.topLoginSection}`}>
            <p>
              Don`t have an account?{" "}
              <Link to="/TripPlanning">Create one for new adventure!</Link>
            </p>
          </div>
          <div className={style.socialSection}>
            <span>or use one of this</span>
            <div className={style.logoContainer}>
              <button className={style.logoDiv}>
                <img src={googleLogo} alt="" />
              </button>
              <button className={style.logoDiv}>
                <img src={appleLogo} alt="" />
              </button>
              <button className={style.logoDiv}>
                <img src={facebookLogo} alt="" />
              </button>
            </div>
          </div>
          <div
            className={`${style.goLoginSection} ${style.bottomLoginSection}`}
          >
            <p>
              Don`t have an account?{" "}
              <Link to="/TripPlanning">Create one for new adventure!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
