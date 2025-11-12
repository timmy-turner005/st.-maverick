import classes from "./page.module.css";
import { Fragment } from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2 className={classes.title}>
          Welcome to <span>st. maverick schools</span>
        </h2>
      </header>
      <div className={classes.subtitles}>
        <p className={classes.subtitle}>Maverick Schools Portal</p>
      </div>
      <section className={classes.container}>
        <div className={classes.image}>
          <Image
            src="/logo.png"
            alt="mavrerick schools logo"
            width={227}
            height={279}
            className={classes.logo}
          />
          <figcaption className={classes.logos}>
            ST. MAVERICK SCHOOLS
          </figcaption>
        </div>

        <div className={classes["form-container"]}>
          <span>LOG IN</span>
          <form className={classes.form}>
            <div className={classes["input-group"]}>
              <label htmlFor="name"></label>
              <input type="name" id="name" placeholder="Name" required />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <label htmlFor="remember">Remember Me</label>
              <input type="checkbox" id="checkbox" required />
              <a href="#" className={classes.forgotPassword}>
                Forgot Password?
              </a>
            </div>
            <button type="submit" className={classes.button}>
              Log In
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
