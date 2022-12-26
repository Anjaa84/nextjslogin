import { BaseAuthLayout } from "../../components/Auth/Base/index";
import { LoginForm } from "../../components/Auth/Login/index"
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};
export default function Login() {
  return (
    <BaseAuthLayout>
      <LoginForm />

      <div style={styles}>
        <Link href="/auth/register">Signup now!</Link>
      </div>
    </BaseAuthLayout>
  );
}
