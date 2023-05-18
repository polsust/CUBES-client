import { required } from "@cubes/common/helpers/form";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { style } from "../styles/AuthForm.style";
import { ROUTES } from "@cubes/common/constants";
import AuthService from "../services/AuthService";
import { SignupFormValues } from "../types/Form";
import { queryClient } from "@cubes/common/providers/ReactQueryProvider";

interface AuthFormProps {
  isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const router = useRouter();

  const onFinish = async (values: SignupFormValues) => {
    if (!isLogin) await AuthService.signup(values);
    const success = await AuthService.login(values);
    if (success) router.push(ROUTES.catalog.path);
    queryClient.invalidateQueries("user");
  };

  const renderConditionalFields = () => {
    if (!isLogin) {
      return (
        <>
          <Form.Item name="email" label="Mail" rules={[required]}>
            <Input type="email" />
          </Form.Item>

          <Form.Item name="login" label="Pseudo" rules={[required]}>
            <Input type="username" />
          </Form.Item>

          <div className="flex space-x-5 [&>*]:mb-0">
            <Form.Item name="fName" label="Prénom" rules={[required]}>
              <Input type="name" />
            </Form.Item>
            <Form.Item name="lName" label="Nom" rules={[required]}>
              <Input type="lastname" />
            </Form.Item>
          </div>
        </>
      );
    }
    return (
      <Form.Item name="email" label="Mail" rules={[required]}>
        <Input />
      </Form.Item>
    );
  };

  const title = isLogin ? "Connexion" : "S’inscrire";
  const submitBtnTxt = isLogin ? "Se connecter" : "S'inscrire";
  const switchBtnTxt = isLogin ? "S'inscrire" : "Se connecter";

  return (
    <Form
      onFinish={onFinish}
      css={style}
      layout="vertical"
      className={`${isLogin ? "md:w-1/4" : "md:w-1/3"} min-w-min w-full`}
    >
      <div className="flex flex-col p-8 space-y-5 h-auto text-white md:rounded-xl bg-secondary">
        <h1 className="text-4xl text-center">{title}</h1>
        {renderConditionalFields()}

        <Form.Item name="password" label="Mot de passe" rules={[required]}>
          <Input type="password" />
        </Form.Item>
      </div>

      <div className="flex flex-col justify-center mt-10 space-y-5">
        <Button htmlType="submit" type="primary" size="large">
          {submitBtnTxt}
        </Button>
        <Button
          size="large"
          color="secondary"
          type="link"
          className="bg-white"
          onClick={() => {
            router.push(isLogin ? ROUTES.signup.path : ROUTES.login.path);
          }}
        >
          {switchBtnTxt}
        </Button>
      </div>
    </Form>
  );
}
