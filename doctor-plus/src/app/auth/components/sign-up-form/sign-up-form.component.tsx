"use client";

import { ReactElement, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import signUpImage from "@/assets/images/sign-up.webp"
import CardComponent from "@/components/card/card.component";
import NormalInputComponent from "@/components/normal-input/normal-input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";

// import { SignUpDto } from "@/dto/auth.dto";


// import { fetchWithToast } from "@/utils/fetch-utils";

import styles from "@/app/auth/styles/auth-form.module.css";
import MingcuteIncognitoModeLine from "@/components/icons/MingcuteIncognitoModeLine";
import MingcuteUser3Line from "@/components/icons/MingcuteUser3Line";
import MingcuteMailLine from "@/components/icons/MingcuteMailLine";
import { ButtonComponent } from "@/components/Button/Button";

export default function SignUpFormComponent(): ReactElement {

  const formRef = useRef<HTMLFormElement>(null);

  // const formSubmitHandler = async (
  //   e: FormEvent<HTMLFormElement>,
  // ): Promise<void> => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);

  //   const dto: SignUpDto = {
  //     name: formData.get("name") as string,
  //     username: formData.get("username") as string,
  //     email: formData.get("email") as string,
  //     password: formData.get("password") as string,
  //   };

  //   const result = await fetchWithToast<null>(
  //     "/api/auth/sign-up",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(dto),
  //     },
  //     "ثبت‌نام با موفقیت انجام شد.",
  //   );

  //   if (result.error) {
  //     return;
  //   }

  //   formRef.current?.reset();
  //   router.push("/dashboard");
  // };

  return (
    <div className={styles["auth-form"]}>
      <CardComponent>
        <div className={styles["card-content"]}>
          <div className={styles.writings}>
            <h1>ثبت‌نام!</h1>
            <form ref={formRef}>
              <NormalInputComponent
                label="نام و نام خانوادگی"
                type="text"
                name="name"
                prefixIcon={<MingcuteIncognitoModeLine />}
              />
              <NormalInputComponent
                label="نام کاربری"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <NormalInputComponent
                label="ایمیل"
                type="email"
                name="email"
                prefixIcon={<MingcuteMailLine />}
              />
              <PasswordInputComponent
                label="رمز عبور"
                name="password"
                autoComplete="new-password"
              />
              <ButtonComponent variant="primary">ثبت‌نام</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              قبلاً ثبت‌نام کردید؟
              {` `}
              <Link href="/auth/sign-in">وارد شوید</Link>.
            </div>
          </div>
          <div className={styles.visuals}>
            <Image src={signUpImage} alt="" />
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
