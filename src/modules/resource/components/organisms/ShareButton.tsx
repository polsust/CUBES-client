import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Tooltip, message } from "antd";
import { useMutation } from "react-query";
import { IResource } from "../../types/Resource";
import useUser from "@cubes/modules/auth/hooks/useUser";

interface ShareButtonProps {
  resource: IResource;
}

export default function ShareButton({ resource }: ShareButtonProps) {
  const [form] = Form.useForm();
  const shareMutation = useMutation({
    mutationFn: (email: string) => {
      return cubesApiService().ressource.apiRessourceRessourceRessDestinataireDestinataireEmailShareRessourcePost(
        resource._id,
        email
      );
    },
    // @ts-ignore
    onSettled: ({ data }) => {
      form.resetFields();
      message.success(data.message);
    },
  });

  const user = useUser();

  return (
    <Form
      className="flex space-x-3"
      onFinish={({ email }) => shareMutation.mutate(email)}
      validateTrigger="onSubmit"
      form={form}
    >
      <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
        <Input type="email" placeholder="email@mail.com" />
      </Form.Item>

      <Tooltip title={!user ? "Vous devez être connecté pour partager" : ""}>
        <Button
          htmlType="submit"
          icon={<FontAwesomeIcon icon={faShareAlt} />}
          type="primary"
          disabled={!user}
          loading={shareMutation.isLoading}
        >
          Partager
        </Button>
      </Tooltip>
    </Form>
  );
}
