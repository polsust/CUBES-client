import LocalStorageService from "@cubes/common/services/LocalStorageService";
import { JwtContent } from "../types/Jwt";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { SignupFormValues } from "../types/Form";
import * as jose from "jose";

export default class AuthService {
  public static async signup(values: SignupFormValues) {
    await cubesApiService().user.apiUserPost(values);
  }

  public static async login(values: SignupFormValues): Promise<boolean> {
    const res = await cubesApiService().auth.apiAuthLoginPost(values);
    // @ts-ignore
    if (!res) return false;

    // @ts-ignore
    const jwt = res.data.data;

    this.logout();
    LocalStorageService.setItem<string>("token", jwt.trim());

    return Boolean(jwt);
  }

  public static getUser(): JwtContent | null {
    const jwt = LocalStorageService.getItem<string>("token");
    if (!jwt) return null;

    const decoded = jose.decodeJwt(jwt);

    const jwtContent: JwtContent = {
      login: decoded.Login as string,
      // @ts-ignore
      email: decoded.email[0] as string,
      fName: decoded.unique_name as string,
      lName: decoded.family_name as string,
      IdRole: decoded.Idrole as string,
      exp: decoded.exp as number,
      iat: decoded.iat as number,
      nbf: decoded.nbf as number,
    };
    this.checkToken(jwtContent.exp as number);

    return jwtContent;
  }

  public static checkToken(exp: number) {
    const expirationDate = new Date(exp * 1000); // Convert to milliseconds
    const isExpired = expirationDate <= new Date();

    if (isExpired) this.logout();
  }

  public static logout() {
    LocalStorageService.removeItem("token");
  }
}
