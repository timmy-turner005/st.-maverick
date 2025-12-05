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
      <p>LOG IN</p>
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
          <form className={classes.form}>
            <div className={classes["input-group"]}>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="text"
                placeholder="Name:"
                required
                className={classes.input}
              />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                placeholder="Password:"
                required
                className={classes.input}
              />
            </div>
            <div className={classes.options}>
              <label htmlFor="remember">
                <input type="checkbox" id="checkbox" />
                Remember Me
              </label>
              <a href="#" className={classes["forgot-password"]}>
                Forgot Password?
              </a>
            </div>
            <button type="submit" className={classes.button}>
              LOG IN
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
