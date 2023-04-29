import { required } from "@cubes/common/helpers/form";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { style } from "../styles/AuthForm.style";
import { ROUTES } from "@cubes/common/constants";

interface AuthFormProps {
  isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const router = useRouter();

  const onFinish = (data: any) => {
    console.log(data);
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
            <Form.Item name="first_name" label="Prénom" rules={[required]}>
              <Input type="name" />
            </Form.Item>
            <Form.Item name="last_name" label="Nom" rules={[required]}>
              <Input type="lastname" />
            </Form.Item>
          </div>
        </>
      );
    }
    return (
      <Form.Item name="identifier" label="Pseudo ou mail" rules={[required]}>
        <Input />
      </Form.Item>
    );
  };

  const title = isLogin ? "Connexion" : "S’inscrire";
  const submitBtnTxt = isLogin ? "Se connecter" : "S'inscrire";
  const switchBtnTxt = isLogin ? "S'inscrire" : "Se connecter";

  return (
    <Form onFinish={onFinish} css={style} layout="vertical">
      <div className="flex flex-col space-y-5 bg-secondary text-white rounded-xl p-8 h-auto">
        <h1 className="text-center text-4xl">{title}</h1>
        {renderConditionalFields()}

        <Form.Item name="password" label="Mot de passe" rules={[required]}>
          <Input type="password" />
        </Form.Item>
      </div>

      <div className="flex space-x-10 justify-center mt-10">
        <Button htmlType="submit" type="primary" size="large">
          {submitBtnTxt}
        </Button>
        <Button
          size="large"
          color="secondary"
          type="dashed"
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
