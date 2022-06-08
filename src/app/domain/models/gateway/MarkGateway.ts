import { Observable } from "rxjs";
import { IMark } from "../mark/IMark";


export abstract class MarkGateway{
  abstract getMarks():IMark[];
}
