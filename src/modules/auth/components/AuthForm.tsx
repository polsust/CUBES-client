import { required } from "@cubes/common/helpers/form";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { style } from "../styles/AuthForm.style";
import { ROUTES } from "@cubes/common/constants";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import LocalStorageService from "@cubes/common/services/LocalStorageService";

interface LoginFormValues {
  email: string;
  password: string;
}

interface SignupFormValues extends LoginFormValues {
  fName: string;
  lName: string;
  login: string;
}

interface AuthFormProps {
  isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const router = useRouter();

  const onFinish = async (values: SignupFormValues) => {
    if (!isLogin) {
      await cubesApiService().user.apiUserPost(values);
    }

    const res = await cubesApiService().auth.apiAuthLoginPost(values);

    const jwt = res.data.data;
    LocalStorageService.setItem("token", jwt.trim());
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

      <div className="flex justify-center mt-10 space-x-10">
        <Button htmlType="submit" type="primary" size="large">
          {submitBtnTxt}
        </Button>
        <Button
          size="large"
          color="secondary"
          type="link"
          className="bg-white"
          onClick={() => {
            router.push(isLogin ? ROUTES.signup : ROUTES.login);
          }}
        >
          {switchBtnTxt}
        </Button>
      </div>
    </Form>
  );
}
